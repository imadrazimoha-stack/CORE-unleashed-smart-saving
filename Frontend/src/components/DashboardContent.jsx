import React from 'react';

const DashboardContent = ({mlData, loading, error}) => {
  const dummyData = {
    labels: ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"],
    income: [5000, 12000, 3000, 8000, 2000, 15000, 7000],
    suggestedSavings: [210, 756, 90, 416, 40, 1200, 446]
  };
  const maxVal = Math.max(...dummyData.income);
  const yMax = maxVal * 1.05; 
  const mapToChart = (val) => 90 - (val / yMax) * 80;
  const incomePoints = dummyData.income.map((v, i) => `${(i / 6) * 100},${mapToChart(v)}`).join(" ");
  const savingPoints = dummyData.suggestedSavings.map((v, i) => `${(i / 6) * 100},${mapToChart(v)}`).join(" ");

  if(loading) {
      return (
        <main className="ml-[280px] pt-24 px-8">
          <p className="text-slate-500">Loading financial insights...</p>
        </main>
      )
    }

    if (error) {
    return (
      <main className="ml-[280px] pt-24 px-8">
        <p className="text-rose-500">Error: {error}</p>
      </main>
    );
  }

  if (!mlData) return null;
  
  return (
    <main className="ml-[280px] pt-24 px-8 pb-12 max-w-[1440px] mx-auto">
      {/* Top Row: Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-[0_8px_32px_rgba(79,70,225,0.08)] border border-slate-50">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              <span className="material-symbols-outlined text-[#7b2cbf]">account_balance</span>
            </div>
            <span className="text-xs font-bold text-green-500 flex items-center bg-green-50 px-2 py-1 rounded-full">+12%</span>
          </div>
          <p className="text-label-sm text-slate-500 mb-1">Total Balance</p>
          <h3 className="text-h3 font-numeral-xl text-slate-900">₹8,42,000</h3>
          <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#7b2cbf] w-3/4 rounded-full"></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-[0_8px_32px_rgba(79,70,225,0.08)] border border-slate-50">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <span className="text-xs font-bold text-green-500 flex items-center bg-green-50 px-2 py-1 rounded-full">+4.2%</span>
          </div>
          <p className="text-label-sm text-slate-500 mb-1">Today's Income</p>
          <h3 className="text-h3 font-numeral-xl text-slate-900">₹12,450</h3>
          <div className="mt-4 flex gap-1 items-end h-6">
            <div className="w-full bg-emerald-100 h-2 rounded-t-sm"></div>
            <div className="w-full bg-emerald-100 h-4 rounded-t-sm"></div>
            <div className="w-full bg-emerald-400 h-5 rounded-t-sm"></div>
            <div className="w-full bg-emerald-100 h-3 rounded-t-sm"></div>
            <div className="w-full bg-emerald-400 h-6 rounded-t-sm"></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-[0_8px_32px_rgba(79,70,225,0.08)] border border-slate-50">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <span className="material-symbols-outlined">savings</span>
            </div>
            <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-full">Suggested</span>
          </div>
          <p className="text-label-sm text-slate-500 mb-1">Suggested Savings</p>
          <h3 className="text-h3 font-numeral-xl text-slate-900">₹{mlData.recommended_savings}</h3>
          <p className="text-[11px] text-slate-400 mt-2 font-medium">{(mlData.savings_percent*100).toFixed(1)}% of today's earnings</p>
        </div>
        <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 relative overflow-hidden">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="p-2 bg-rose-100 text-rose-700 rounded-lg">
              <span className="material-symbols-outlined">warning</span>
            </div>
            <span className="text-[10px] font-bold text-rose-700 flex items-center bg-white px-2 py-1 rounded-full uppercase tracking-wider">Action Needed</span>
          </div>
          <p className="text-label-sm text-rose-800 mb-1 font-bold relative z-10">Risk Warning</p>
          <h3 className="text-lg font-h3 text-rose-900 leading-tight relative z-10">{mlData.risk_level === "HIGH"
    ? "High Risk Detected"
    : mlData.risk_level === "MEDIUM"
    ? "Moderate Risk"
    : "Stable Income"}</h3>
          <p className="text-xs text-rose-700 mt-2 font-medium relative z-10">{mlData.risk_level === "HIGH"
    ? "Your income is unstable. Saving conservatively is recommended."
    : mlData.risk_level === "MEDIUM"
    ? "Your income shows moderate variation. Balanced saving is suggested."
    : "Your income is stable. You can save more confidently."}</p>
        </div>
      </div>

      {/* Middle Row: Chart & Smart Savings */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-[0_8px_32px_rgba(79,70,225,0.08)] border border-slate-50">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-h3 font-h3 text-slate-900">Saving vs Income</h3>
              <p className="text-label-sm text-slate-500">Track your daily income and recommended savings</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex items-center gap-1.5 mr-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#7b2cbf]"></div><span className="text-[11px] font-bold text-slate-600">Income</span>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 ml-2"></div><span className="text-[11px] font-bold text-slate-600">Saving</span>
              </div>
              <button className="px-4 py-2 text-xs font-bold bg-slate-100 text-slate-600 rounded-lg shadow-sm">Weekly</button>
            </div>
          </div>
          <div className="relative h-[300px] w-full bg-slate-50 rounded-xl overflow-hidden shadow-inner">
            <svg className="absolute inset-0 w-full h-full p-4 pl-8 pb-8 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
              {/* Grid lines */}
              <line x1="0" y1="10" x2="100" y2="10" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="2" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="2" />
              <line x1="0" y1="90" x2="100" y2="90" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="2" />

              <polyline points={incomePoints} fill="none" stroke="#7b2cbf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points={savingPoints} fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              
              <linearGradient id="income-grad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#7b2cbf" stopOpacity="0.15"></stop>
                <stop offset="100%" stopColor="#7b2cbf" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient id="saving-grad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.2"></stop>
                <stop offset="100%" stopColor="#10b981" stopOpacity="0"></stop>
              </linearGradient>
              
              <polygon points={`0,100 ${incomePoints} 100,100`} fill="url(#income-grad)" />
              <polygon points={`0,100 ${savingPoints} 100,100`} fill="url(#saving-grad)" />
            </svg>

            {/* Labels overlay */}
            <div className="absolute inset-0 w-full h-full p-4 pl-8 pb-8 pointer-events-none">
                <div className="relative w-full h-full">
                    {/* Y-axis labels */}
                    <div className="absolute left-[-24px] top-0 h-full flex flex-col justify-between py-[10%] text-[9px] font-bold text-slate-400">
                        <span>₹15k</span>
                        <span>₹7.5k</span>
                        <span>₹0</span>
                    </div>

                    {/* X-axis labels */}
                    {dummyData.labels.map((label, idx) => (
                        <div key={idx} className="absolute bottom-[-20px] text-[10px] text-slate-400 font-bold -translate-x-1/2" style={{left: `${(idx / 6) * 100}%`}}>{label}</div>
                    ))}
                    
                    {/* Floating Alert */}
                    <div className="absolute left-[83.33%] top-[15%] -translate-x-1/2 p-2.5 glass-card rounded-xl border border-indigo-100/50 bg-white/70 backdrop-blur-md text-center shadow-xl z-20 w-max pointer-events-auto">
                        <p className="text-[10px] font-black text-emerald-600 uppercase tracking-wider mb-0.5">High Potential</p>
                        <p className="text-xs font-bold text-slate-800">₹{dummyData.suggestedSavings[5]} saving on highest income</p>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div className="relative group h-full overflow-hidden rounded-2xl bg-[#7b2cbf] p-8 shadow-2xl flex flex-col justify-between">
          <div className="absolute inset-0 opacity-10 bg-[#7b2cbf] bg-repeat"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 glass-card rounded-lg text-white">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </div>
              <h3 className="font-h3 text-xl text-white">Smart Savings</h3>
            </div>
            <div className="p-6 glass-card rounded-2xl mb-8">
              <p className="text-black text-xs font-medium mb-1">Recommended Saving Today</p>
              <div className="flex items-baseline gap-2">
                <span className="text-black text-3xl font-numeral-xl">₹{mlData.recommended_savings}</span>
                <span className="text-black text-sm font-bold">{(mlData.savings_percent * 100).toFixed(1)}%</span>
              </div>
            </div>
            <p className="text-indigo-100 text-sm leading-relaxed mb-8">Based on your recent income spurt, we recommend putting aside this amount for tax and future safety net.</p>
          </div>
          <button className="relative z-10 w-full py-4 bg-white text-[#7b2cbf] rounded-xl font-bold tracking-tight hover:shadow-2xl transition-all active:scale-[0.98]">
            Save Now
          </button>
        </div>
      </div>

      {/* Bottom Row: Table & Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl shadow-[0_8px_32px_rgba(79,70,225,0.08)] border border-slate-50">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-h3 font-h3 text-slate-900">Recent Transactions</h3>
            <button className="text-sm font-bold text-[#7b2cbf] hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-slate-50">
                  <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Name</th>
                  <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Type</th>
                  <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Date</th>
                  <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Amount</th>
                  <th className="pb-4 text-xs font-bold text-slate-400 up++++++++percase tracking-wider text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <tr>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm text-slate-600">work</span>
                      </div>
                      <span className="text-sm font-bold text-slate-900">UI Design Project</span>
                    </div>
                  </td>
                  <td className="py-4 text-xs font-medium text-slate-500">Income</td>
                  <td className="py-4 text-xs font-medium text-slate-500">Oct 24, 2023</td>
                  <td className="py-4 text-sm font-bold text-emerald-600 text-right">+₹18,000</td>
                  <td className="py-4 text-right">
                    <span className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm text-slate-600">coffee</span>
                      </div>
                      <span className="text-sm font-bold text-slate-900">Starbucks</span>
                    </div>
                  </td>
                  <td className="py-4 text-xs font-medium text-slate-500">Expense</td>
                  <td className="py-4 text-xs font-medium text-slate-500">Oct 23, 2023</td>
                  <td className="py-4 text-sm font-bold text-slate-900 text-right">-₹350</td>
                  <td className="py-4 text-right">
                    <span className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm text-slate-600">subscriptions</span>
                      </div>
                      <span className="text-sm font-bold text-slate-900">Adobe Creative Cloud</span>
                    </div>
                  </td>
                  <td className="py-4 text-xs font-medium text-slate-500">Expense</td>
                  <td className="py-4 text-xs font-medium text-slate-500">Oct 22, 2023</td>
                  <td className="py-4 text-sm font-bold text-slate-900 text-right">-₹4,200</td>
                  <td className="py-4 text-right">
                    <span className="px-2 py-1 bg-slate-50 text-slate-400 text-[10px] font-bold rounded-full">Pending</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="lg:col-span-5 grid grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-[0_8px_32px_rgba(79,70,225,0.08)] border border-slate-50 flex flex-col">
            <h3 className="text-h3 font-h3 text-slate-900 mb-6">Expense Breakdown</h3>
            <div className="flex-1 flex items-center justify-between gap-8">
              <div className="relative w-32 h-32 flex-shrink-0">
                <div className="w-full h-full rounded-full border-[12px] border-slate-100 border-t-indigo-500 border-r-purple-500 border-b-emerald-400"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Total</span>
                  <span className="text-sm font-bold text-slate-900">₹42.3k</span>
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span className="text-xs font-medium text-slate-600">Software</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-xs font-medium text-slate-600">Food</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span className="text-xs font-medium text-slate-600">Transport</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">25%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Adaptive Insights & Feedback Floating Panel */}
      <div className="mt-8">
        <div className="bg-gradient-to-r from-indigo-50 via-white to-emerald-50 p-6 rounded-2xl shadow-[0_8px_32px_rgba(79,70,225,0.08)] border border-indigo-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 flex-1">
            <div className="relative shrink-0">
              <div className="w-14 h-14 rounded-full border-4 border-indigo-100 flex items-center justify-center bg-white shadow-sm">
                <span className="material-symbols-outlined text-indigo-600 text-2xl animate-pulse cursor-pointer">psychology</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-400 flex items-center justify-center border-2 border-white">
                <span className="material-symbols-outlined text-white text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-base font-bold text-slate-900">Adaptive Insights</h4>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded text-[10px] font-bold uppercase tracking-wide">Feedback Loop Active</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                "You saved <strong>80%</strong> of your suggested amount last week. Exceptional consistency! Keep it up for 3 more days to earn the <span className="text-[#7b2cbf] font-semibold">'Streak'</span> badge and reach your emergency fund goal 2 months early."
              </p>
            </div>
          </div>
          <div className="shrink-0 flex gap-3">
            <button className="px-5 py-2.5 bg-[#7b2cbf] hover:bg-indigo-700 transition-colors text-white text-sm font-bold rounded-xl shadow-lg shadow-indigo-200">
              View Trajectory
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardContent;
