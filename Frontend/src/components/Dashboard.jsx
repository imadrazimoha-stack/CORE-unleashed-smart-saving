import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import TopNavBar from './TopNavBar';
import DashboardContent from './DashboardContent';
import SavingContent from './SavingContent';
import SettingsContent from './SettingsContent';
import TransactionsContent from './TransactionsContent';
import ProfileContent from './ProfileContent';

const Dashboard = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const [mlData, setMlData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          body: JSON.stringify({
            userId: "user123",
            income: 12450,
            curr_balance: 842000,
            // you’ll replace this with real input later
          })
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
  }, []);

  return (
    <>
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <TopNavBar setCurrentView={setCurrentView} />

      {currentView === 'dashboard' ? <DashboardContent mlData={mlData} loading={loading} error={error} /> : null}
      {currentView === 'savings' ? <SavingContent /> : null}
      {currentView === 'settings' ? <SettingsContent /> : null}
      {currentView === 'transactions' ? <TransactionsContent /> : null}
      {currentView === 'profile' ? <ProfileContent /> : null}

      {/* Contextual FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-50">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 600" }}>
          add
        </span>
      </button>
    </>
  );
};

export default Dashboard;
