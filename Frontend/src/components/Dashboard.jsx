import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import TopNavBar from './TopNavBar';
import DashboardContent from './DashboardContent';
import SavingContent from './SavingContent';
import SettingsContent from './SettingsContent';
import TransactionsContent from './TransactionsContent';
import ProfileContent from './ProfileContent';
import IntegrationsContent from './IntegrationsContent';

// ───────────────────────────────────────────────
// Google-authenticated user dummy data
// Persona: High-earning UI/UX designer, stable income, healthy balance
// ───────────────────────────────────────────────
const GOOGLE_USER_DATA = {
  apiParams: { userId: "google_user", income: 24500, curr_balance: 1540000 },
  mlSeries: {
    labels: ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"],
    income: [18000, 22000, 25000, 19500, 28000, 32000, 24500],
    stabilityFactor: [0.92, 0.95, 0.97, 0.90, 1.0, 1.05, 0.96],
    safeFactor: [0.85, 0.88, 0.90, 0.84, 0.92, 0.95, 0.89],
    suggestedSavings: [1410, 1848, 2138, 1474, 2576, 2888, 2078],
    balance: [152000, 164000, 178000, 170000, 195000, 218000, 230000],
    riskLevel: ["LOW","LOW","LOW","LOW","LOW","LOW","LOW"],
  },
  transactions: [
    { name: "Figma Enterprise", category: "Design Tools", icon: "design_services", iconColor: "text-purple-600", type: "Expense", date: "Apr 25, 2026", amount: 8500, status: "Success" },
    { name: "Brand Identity Project", category: "Client Payment", icon: "account_balance_wallet", iconColor: "text-emerald-600", type: "Income", date: "Apr 24, 2026", amount: 145000, status: "Success" },
    { name: "WeWork Membership", category: "Co-working Space", icon: "apartment", iconColor: "text-blue-600", type: "Expense", date: "Apr 22, 2026", amount: 12000, status: "Success" },
    { name: "Dribbble Pro", category: "Portfolio Hosting", icon: "palette", iconColor: "text-pink-600", type: "Expense", date: "Apr 20, 2026", amount: 1200, status: "Success" },
    { name: "Motion Design Course", category: "Professional Development", icon: "school", iconColor: "text-amber-600", type: "Expense", date: "Apr 18, 2026", amount: 6500, status: "Pending" },
  ],
  mlInsights: {
    message: "Excellent financial health! Your income is very stable with low variance. You can safely increase your savings rate to accelerate your goals. Consider investing surplus into index funds.",
    riskLevel: "LOW",
    topCategory: "Design Tools",
    savingsTotal: 14412,
    expensesTotal: 28200,
  },
};

// ───────────────────────────────────────────────
// Demo user dummy data
// Persona: Freelance developer, volatile income, moderate balance
// ───────────────────────────────────────────────
const DEMO_USER_DATA = {
  apiParams: { userId: "demo_user", income: 12450, curr_balance: 842000 },
  mlSeries: {
    labels: ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"],
    income: [5000, 12000, 3000, 8000, 2000, 15000, 7000],
    stabilityFactor: [0.7, 0.9, 0.6, 0.8, 0.5, 1.0, 0.85],
    safeFactor: [0.6, 0.7, 0.5, 0.65, 0.4, 0.8, 0.75],
    suggestedSavings: [210, 756, 90, 416, 40, 1200, 446],
    balance: [6000, 7000, 5000, 6500, 4000, 12000, 9000],
    riskLevel: ["HIGH","MEDIUM","HIGH","MEDIUM","HIGH","LOW","MEDIUM"],
  },
  transactions: [
    { name: "Adobe Creative Cloud", category: "Software Subscription", icon: "shopping_bag", iconColor: "text-indigo-600", type: "Expense", date: "Oct 24, 2023", amount: 4230, status: "Success" },
    { name: "Freelance Project Payment", category: "UI/UX Design Delivery", icon: "account_balance_wallet", iconColor: "text-emerald-600", type: "Income", date: "Oct 22, 2023", amount: 85000, status: "Success" },
    { name: "Bistro 24 Dinner", category: "Meals & Entertainment", icon: "restaurant", iconColor: "text-amber-600", type: "Expense", date: "Oct 21, 2023", amount: 2450, status: "Pending" },
    { name: "AWS Cloud Services", category: "Hosting Infrastructure", icon: "lan", iconColor: "text-indigo-600", type: "Expense", date: "Oct 19, 2023", amount: 18000, status: "Success" },
    { name: "Office Utility Bill", category: "Recurring Payment", icon: "electric_bolt", iconColor: "text-red-600", type: "Expense", date: "Oct 18, 2023", amount: 5200, status: "Failed" },
  ],
  mlInsights: {
    message: "Your spending increased by 22% this week, mainly in software subscriptions and food. Consider reviewing recurring payments.",
    riskLevel: "MEDIUM",
    topCategory: "Software",
    savingsTotal: 8000,
    expensesTotal: 29880,
  },
};

const Dashboard = ({ currentUser, onLogout }) => {
  const [currentView, setCurrentView] = useState('dashboard');

  const [mlData, setMlData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pick the right dataset based on auth provider
  const isGoogleUser = currentUser?.provider === 'google';
  const userData = isGoogleUser ? GOOGLE_USER_DATA : DEMO_USER_DATA;

  const { mlSeries, transactions, mlInsights, apiParams } = userData;

  // map API → UI-friendly shape
  const adaptMLData = (apiData) => ({
    today_income: apiData.income,
    recommended_savings: apiData.suggestedSavings,
    stability_score: apiData.stabilityFactor,
    risk_level: apiData.riskLevel,
    risk_flag: apiData.riskLevel !== "LOW",
    savings_percent:
      apiData.baseFactor * apiData.stabilityFactor * apiData.safeFactor
  });

  useEffect(() => {
    const fetchSavings = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/api/savings/suggest", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(apiParams),
        });

        if (!res.ok) throw new Error("Failed to fetch savings");

        const data = await res.json();
        setMlData(adaptMLData(data));
        setError(null);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchSavings();
  }, [currentUser?.provider]);

  return (
    <>
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} onLogout={onLogout} currentUser={currentUser} />
      <TopNavBar setCurrentView={setCurrentView} currentUser={currentUser} onLogout={onLogout} />

      {currentView === 'dashboard' ? <DashboardContent mlData={mlData} loading={loading} error={error} /> : null}
      {currentView === 'savings' ? <SavingContent mlSeries={mlSeries} /> : null}
      {currentView === 'settings' ? <SettingsContent currentUser={currentUser} /> : null}
      {currentView === 'transactions' ? <TransactionsContent transactions={transactions} mlInsights={mlInsights} /> : null}
      {currentView === 'profile' ? <ProfileContent /> : null}
      {currentView === 'integrations' ? <IntegrationsContent /> : null}
    </>
  );
};

export default Dashboard;
