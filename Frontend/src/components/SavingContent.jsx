import React from 'react';

const SavingContent = ({ mlSeries }) => {

  if (!mlSeries) {
    return (
      <main className="ml-[280px] p-8 mt-16">
        <p className="text-slate-500">Loading savings insights...</p>
      </main>
    );
  }

  const lastIdx = mlSeries.labels.length - 1;
  const prevIdx = Math.max(0, lastIdx - 1);
  const currentBalance = mlSeries.balance[lastIdx];
  const prevBalance = mlSeries.balance[prevIdx];
  const growthPct = prevBalance > 0 ? ((currentBalance - prevBalance) / prevBalance) * 100 : 0;
  const weekDelta = currentBalance - mlSeries.balance[0];
  const latestRisk = mlSeries.riskLevel[lastIdx];
  
  return (
    <main className="ml-[280px] p-8 max-w-[1440px] mx-auto mt-16">
      {/* Primary Metric Card */}
      <section className="mb-6">
        <div className="bg-white rounded-[16px] p-6 shadow-[0px_4px_20px_rgba(93,95,239,0.04)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-[12px]  text-slate-500 uppercase tracking-wider font-semibold">Total Savings</span>
            <div className="flex items-baseline gap-3 mt-1">
              <h2 className=" text-[42px] font-bold text-slate-900">₹{currentBalance.toLocaleString()}</h2>
              <div className={`flex items-center gap-1 font-medium text-sm ${growthPct >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                <span className="material-symbols-outlined text-[18px]">{growthPct >= 0 ? 'trending_up' : 'trending_down'}</span>
                <span>{growthPct >= 0 ? '+' : ''}{growthPct.toFixed(1)}%</span>
              </div>
            </div>
            <p className="text-[14px] text-slate-500 mt-2 font-medium italic">
              {weekDelta >= 0
                ? `You added ₹${weekDelta.toLocaleString()} this week`
                : `Your balance dropped by ₹${Math.abs(weekDelta).toLocaleString()} this week`}
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <div className="grid grid-cols-12 gap-6">
        {/* Savings Goals (Grid of Cards) - Column Span 8 */}
        <section className="col-span-12 lg:col-span-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className=" text-[18px] font-bold text-slate-900">Savings Goals</h3>
            <button className="text-[#7b2cbf] text-sm font-semibold hover:underline">View All</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Goal Card 1 */}
            <div className="bg-white p-6 rounded-[16px] shadow-[0px_4px_20px_rgba(93,95,239,0.04)] border border-slate-50">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-indigo-50 rounded-xl">
                  <span className="material-symbols-outlined text-[#7b2cbf]">emergency_home</span>
                </div>
                <span className="text-[12px] text-white font-semibold bg-[#7b2cbf] px-2 py-1 rounded">On Track</span>
              </div>
              <h4 className=" text-[18px] font-bold mb-1 text-slate-900">Emergency Fund</h4>
              <div className="flex justify-between text-[14px] text-slate-500 mb-2 font-medium">
                <span>₹1,50,000 / ₹2,00,000</span>
                <span className="font-bold text-slate-700">75%</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#7b2cbf] h-full rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* Goal Card 2 */}
            <div className="bg-white p-6 rounded-[16px] shadow-[0px_4px_20px_rgba(93,95,239,0.04)] border border-slate-50">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-emerald-50 rounded-xl">
                  <span className="material-symbols-outlined text-emerald-600">laptop_mac</span>
                </div>
                <span className="text-[12px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded">Fast Growth</span>
              </div>
              <h4 className=" text-[18px] font-bold mb-1 text-slate-900">New Work Rig</h4>
              <div className="flex justify-between text-[14px] text-slate-500 mb-2 font-medium">
                <span>₹65,000 / ₹1,20,000</span>
                <span className="font-bold text-slate-700">54%</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: '54%' }}></div>
              </div>
            </div>

            {/* Goal Card 3 */}
            <div className="bg-white p-6 rounded-[16px] shadow-[0px_4px_20px_rgba(93,95,239,0.04)] border border-slate-50 md:col-span-2">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <span className="material-symbols-outlined text-[#7b2cbf]">beach_access</span>
                </div>
                <span className="text-[12px] text-slate-500 font-semibold bg-slate-100 px-2 py-1 rounded">Steady</span>
              </div>
              <h4 className=" text-[18px] font-bold mb-1 text-slate-900">Dream Vacation</h4>
              <div className="flex justify-between text-[14px] text-slate-500 mb-2 font-medium">
                <span>₹30,000 / ₹1,50,000</span>
                <span className="font-bold text-slate-700">20%</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#7b2cbf] h-full rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar Content - Column Span 4 */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          {/* Smart Tip */}
          <div className="bg-[#7b2cbf] rounded-[16px] p-6 text-white shadow-[0px_4px_20px_rgba(93,95,239,0.04)] relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
                <span className="text-[12px] font-bold uppercase tracking-widest text-white">Smart Tip</span>
              </div>
              <p className=" text-lg font-bold leading-snug">
                {latestRisk === 'HIGH'
                  ? 'Your income has been unstable. Keep savings conservative this week.'
                  : latestRisk === 'MEDIUM'
                  ? "You're maintaining steady progress. Keep contributing consistently."
                  : 'Great stability! You can accelerate your savings safely.'}
              </p>
              <button className="mt-4 text-sm font-bold bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-lg">Adjust Timeline</button>
            </div>
            {/* Decorative Background Element */}
            <div className="absolute -right-4 -bottom-4 opacity-20 transform rotate-12">
              <span className="material-symbols-outlined text-[120px]">auto_awesome</span>
            </div>
          </div>

          {/* Monthly Performance Chart Card */}
          <section className="bg-white rounded-[16px] p-6 shadow-[0px_4px_20px_rgba(93,95,239,0.04)] border border-slate-50 h-full">
            <h3 className=" text-[18px] font-bold mb-4 text-slate-900">Growth History</h3>
            <div className="relative h-48 flex items-end justify-between gap-1 mt-6">
              {mlSeries.balance.map((val, i) => {
                const max = Math.max(...mlSeries.balance);
                const height = Math.max(8, (val / max) * 100);
                const isLast = i === mlSeries.balance.length - 1;
                return (
                  <div key={i} className="w-full bg-slate-50 h-24 rounded-t-lg relative group">
                    <div
                      className={`absolute bottom-0 w-full rounded-t-lg transition-all ${isLast ? 'bg-[#7b2cbf]' : 'bg-[#7b2cbf]'}`}
                      style={{ height: `${height}%` }}
                      title={mlSeries.labels[i]}
                    ></div>
                    <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase ${isLast ? 'text-[#7b2cbf]' : 'text-slate-400'}`}>
                      {mlSeries.labels[i].replace('Day ', 'D')}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Recent Contributions - Full Width Below */}
        <section className="col-span-12">
          <div className="bg-white rounded-[16px] shadow-[0px_4px_20px_rgba(93,95,239,0.04)] border border-slate-50 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className=" text-[18px] font-bold text-slate-900">Recent Contributions</h3>
              <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
                <span className="material-symbols-outlined text-slate-400">filter_list</span>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[12px] font-bold text-slate-500 uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Goal Category</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="text-[14px] divide-y divide-slate-100 text-slate-700 font-medium">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">Oct 24, 2023</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#7b2cbf]"></div>
                        Emergency Fund
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-900">₹15,000.00</td>
                    <td className="px-6 py-4">
                      <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold">Completed</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                        <span className="material-symbols-                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">Oct 18, 2023</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        New Work Rig
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-900">₹8,400.00</td>
                    <td className="px-6 py-4">
                      <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold">Completed</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">Oct 12, 2023</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#7b2cbf]"></div>
                        Dream Vacation
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-900">₹4,000.00</td>
                    <td className="px-6 py-4">
                      <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold">Completed</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50/50 text-center border-t border-slate-100">
              <button className="text-sm font-semibold text-[#7b2cbf] hover:text-indigo-800">Download History Statement</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SavingContent;
