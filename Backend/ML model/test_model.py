import unittest
import numpy as np
from stability_model import DynamicStabilityScorer

class TestDynamicStabilityScorer(unittest.TestCase):

    def setUp(self):
        # Initialize the model with the mandated 60/40 weights
        self.model = DynamicStabilityScorer(variance_weight=0.6, frequency_weight=0.4)

    # ==========================================
    # SUITE 1: Signal Extraction Verification
    # ==========================================
    def test_extract_signals_basic(self):
        """Verifies gap days, income days, and basic stats are correct."""
        # Paid on day 1 and day 3. Gap from end (day 5) should be 2 days.
        data = [100, 0, 100, 0, 0]
        mean, std, inc_days, gap_days = self.model.extract_signals(data)

        self.assertEqual(inc_days, 2)
        self.assertEqual(gap_days, 2)
        self.assertEqual(mean, 40.0 + 1e-9) # Accounting for the zero-division safeguard

    def test_extract_signals_no_gap(self):
        """Verifies gap is 0 if paid on the final day."""
        data = [0, 0, 0, 0, 500]
        _, _, _, gap_days = self.model.extract_signals(data)
        self.assertEqual(gap_days, 0)

    # ==========================================
    # SUITE 2: Archetype Formula Verification
    # ==========================================
    def test_highly_stable_daily_earner(self):
        """Should return a high multiplier for consistent daily income."""
        data = [500, 520, 510, 495, 505] * 6 # 30 days of ~500
        score = self.model.calculate_stability(data)

        self.assertGreater(score, 1.10)
        self.assertLessEqual(score, 1.50)

    def test_sparse_lumpy_earner(self):
        """Should trigger the 0.5 safety floor due to extreme starvation risk."""
        data = [0]*29 + [5000] # 29 days of nothing, then 5000
        score = self.model.calculate_stability(data)

        self.assertEqual(score, 0.50) # Must clamp to floor

    def test_bipolar_extreme_earner(self):
        """Should trigger the 0.5 floor because variance kills the frequency bonus."""
        data = [10, 5000, 20, 0, 15] * 6
        score = self.model.calculate_stability(data)

        self.assertEqual(score, 0.50)

    # ==========================================
    # SUITE 3: Extreme Edge Cases & Safety
    # ==========================================
    def test_zero_income_month(self):
        """Must safely handle an array of all zeros without math errors."""
        data = [0] * 30
        score = self.model.calculate_stability(data)

        self.assertEqual(score, 0.50) # Safely defaults to floor

    def test_perfect_variance_zero(self):
        """If user makes exactly the same amount every day, variance is 0."""
        data = [500] * 30
        score = self.model.calculate_stability(data)

        # VarianceScore = 1.0. FrequencyScore = 0.5 + (30/31) = 1.467.
        # Raw = (0.6*1.0) + (0.4*1.467) = 0.6 + 0.5868 = 1.1868 -> 1.19
        self.assertAlmostEqual(score, 1.19, places=2)

    def test_safety_bounds_clamp(self):
        """Ensures the math CANNOT exceed 1.5 even under impossible conditions."""
        # Force the model weights to absurd levels to test the clamp
        broken_model = DynamicStabilityScorer(variance_weight=5.0, frequency_weight=5.0)
        data = [500] * 30
        score = broken_model.calculate_stability(data)

        self.assertEqual(score, 1.50) # Must clamp to ceiling

if __name__ == '__main__':
    unittest.main()
