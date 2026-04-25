import { useEffect } from 'react';
import LiquidEther from './LiquidEther';
import '../landing.css';

function LandingPage({ onNavigateToLogin }) {
  // Scroll reveal
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    reveals.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page">
      {/* ── Interactive fluid background ── */}
      <LiquidEther
        colors={['#6c3bde', '#b07eff', '#2d1060', '#d19cff', '#871c85']}
        mouseForce={25}
        cursorSize={120}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
      />

      <div className="page">
        {/* ── NAV ── */}
        <nav>
          <div className="nav-brand">
            <div className="nav-logo-mark">
              <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
                <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 9.5c-2.33 0-4.4-1.19-5.6-3 .03-1.86 3.73-2.88 5.6-2.88s5.57 1.02 5.6 2.88c-1.2 1.81-3.27 3-5.6 3z" fill="white"/>
              </svg>
            </div>
            <span className="nav-brand-name">RootFund</span>
          </div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#features">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="nav-actions">
            <button className="btn-try" onClick={onNavigateToLogin}>Try out</button>
          </div>
        </nav>

        {/* ── HERO ── */}
        <div className="hero">
          <h1>Financing,<br /><span>Simplified.</span></h1>
          <p>
            Take the guesswork out of gig. Track your income, automate your taxes,
            and hit your savings goals with the only financial tool designed for
            the independent worker.
          </p>
          <div className="hero-ctas">
            <button className="cta-primary" onClick={onNavigateToLogin}>Try out — it's free</button>
            <button className="cta-secondary" onClick={scrollToFeatures}>See how it works</button>
          </div>

          <div className="hero-preview">
            <div className="preview-header">
              <span className="preview-title">Your financial snapshot</span>
              <span className="preview-badge">Live</span>
            </div>
            <div className="stats-row">
              <div className="stat-box">
                <div className="stat-label">This Month</div>
                <div className="stat-val">₹84,320</div>
                <div className="stat-sub">↑ 12% vs last month</div>
              </div>
              <div className="stat-box">
                <div className="stat-label">Saved So Far</div>
                <div className="stat-val">₹21,080</div>
                <div className="stat-sub">↑ On track</div>
              </div>
              <div className="stat-box">
                <div className="stat-label">Tax Reserve</div>
                <div className="stat-val">₹8,432</div>
                <div className="stat-sub">Auto-calculated</div>
              </div>
            </div>
            <div className="bar-row">
              <span className="bar-label">Savings goal</span>
              <div className="bar-wrap"><div className="bar-fill" style={{ width: '68%' }} /></div>
              <span className="bar-label">68%</span>
            </div>
          </div>
        </div>

        {/* ── FEATURES ── */}
        <section id="features">
          <div className="reveal">
            <div className="section-eyebrow">What we offer</div>
            <div className="section-title">Everything a gig worker actually needs</div>
          </div>
          <div className="features-grid reveal">
            <div className="feat-card">
              <h3>Personalized Saving</h3>
              <p>Smart savings tailored to your income pattern. We dynamically adjust how much you should save based on your earning behavior, ensuring consistency without financial stress.</p>
            </div>
            <div className="feat-card">
              <h3>Income Tracking</h3>
              <p>Understand your income like never before. Track daily earnings, identify patterns, and gain clarity on how your income flows—so you can make better financial decisions.</p>
            </div>
            <div className="feat-card">
              <h3>Adaptive Insights</h3>
              <p>Insights that evolve with you. Our system analyzes your income trends and stability to provide intelligent suggestions, even with irregular earnings.</p>
            </div>
          </div>
        </section>

        {/* ── WHY ── */}
        <section className="why-section">
          <div className="reveal">
            <div className="section-eyebrow">Why RootFund?</div>
            <div className="section-title">Built different, on purpose</div>
          </div>
          <div className="why-grid reveal">
            <div className="why-list">
              {[
                { n: '1', title: 'Built for Irregular Income', body: "Unlike traditional finance apps, our system is designed specifically for freelancers, gig workers, and daily earners—adapting to unpredictable income instead of forcing fixed plans." },
                { n: '2', title: 'Smart, Adaptive Decisions', body: "We don't just track your income—we understand it. Our system analyzes your patterns, stability, and trends to give personalized savings suggestions that actually make sense." },
                { n: '3', title: 'Safe & Stress-Free Saving', body: "No more over-saving or financial pressure. With built-in safety checks, we ensure you save only what you can afford—helping you stay consistent without risking your daily needs." },
              ].map(item => (
                <div key={item.n} className="why-item">
                  <div className="why-num">{item.n}</div>
                  <div className="why-content">
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="why-visual">
              <div className="visual-title">Your Income Health</div>
              {[
                { label: 'Stability Score', val: '8.4/10', trend: '↑ Good' },
                { label: 'Avg. Monthly Income', val: '₹78,400' },
                { label: 'Recommended Savings', val: '₹18,200' },
                { label: 'Tax Auto-reserve', val: '₹9,400' },
                { label: 'Safe to Spend', val: '₹50,800' },
              ].map(row => (
                <div key={row.label} className="metric-row">
                  <span className="metric-name">{row.label}</span>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span className="metric-val">{row.val}</span>
                    {row.trend && <span className="metric-trend">{row.trend}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <div className="cta-banner reveal">
          <h2>Join 10,000+ Freelancers</h2>
          <p>Ready to take control of your professional future? Sign up today and get your first 30 days of premium features entirely free.</p>
          <div className="email-row">
            <input className="email-input" type="email" placeholder="Enter your email" />
            <button className="btn-signup" onClick={onNavigateToLogin}>Sign Up</button>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer>
          <div className="footer-brand">RootFund</div>
          <div className="footer-note">© 2025 RootFund. Designed for the independent worker.</div>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
