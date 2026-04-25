import React from 'react';

const TransactionsContent = () => {
  return (
    <main className="ml-[280px] min-h-screen pt-24 px-8 pb-12 max-w-[1440px] mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="font-['Manrope'] text-[24px] font-bold text-slate-900">Transactions</h1>
          <p className="text-[14px] text-slate-500">Review and manage your financial activity across all connected accounts.</p>
        </div>
        <button className="text-indigo-600 font-bold hover:underline flex items-center gap-1">
          View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
      
      {/* Summary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(79,70,229,0.06)] border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <span className="material-symbols-outlined text-indigo-600">list_alt</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+12%</span>
          </div>
          <p className="text-[12px] font-bold uppercase tracking-widest text-slate-500 mb-1">TOTAL TRANSACTIONS</p>
          <h3 className="text-[40px] font-bold text-slate-900 leading-none">1,284</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(79,70,229,0.06)] border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <span className="material-symbols-outlined text-purple-600">trending_up</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+8.4%</span>
          </div>
          <p className="text-[12px] font-bold uppercase tracking-widest text-slate-500 mb-1">MONTHLY VOLUME</p>
          <h3 className="text-[40px] font-bold text-slate-900 leading-none">₹4,12,000</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(79,70,229,0.06)] border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-amber-50 rounded-lg">
              <span className="material-symbols-outlined text-amber-600">analytics</span>
            </div>
            <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-full">Stable</span>
          </div>
          <p className="text-[12px] font-bold uppercase tracking-widest text-slate-500 mb-1">AVERAGE TRANSACTION</p>
          <h3 className="text-[40px] font-bold text-slate-900 leading-none">₹3,210</h3>
        </div>
      </div>

      {/* Table Controls */}
      <div className="bg-white rounded-t-xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <select className="appearance-none bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-slate-600 focus:ring-2 focus:ring-indigo-500/20 outline-none cursor-pointer">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Current Year</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
          </div>
          <div className="relative">
            <select className="appearance-none bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-slate-600 focus:ring-2 focus:ring-indigo-500/20 outline-none cursor-pointer">
              <option>All Categories</option>
              <option>Income</option>
              <option>Expenses</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">filter_list</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
            <span className="material-symbols-outlined">download</span>
          </button>
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
            <span className="material-symbols-outlined">print</span>
          </button>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-b-xl border-x border-b border-slate-200 overflow-hidden shadow-[0_4px_20px_rgba(79,70,229,0.06)]">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-y border-slate-200">
            <tr>
              <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-slate-500">TRANSACTION NAME</th>
              <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-slate-500">TYPE</th>
              <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-slate-500">DATE</th>
              <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-slate-500">AMOUNT</th>
              <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-slate-500 text-center">STATUS</th>
              <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-slate-500"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {/* Row 1 */}
            <tr className="hover:bg-indigo-50/50 transition-colors group">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-indigo-600">shopping_bag</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Adobe Creative Cloud</p>
                    <p className="text-xs text-slate-500">Software Subscription</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-[14px] font-medium text-slate-600">Expense</td>
              <td className="px-6 py-4 text-[14px] text-slate-500">Oct 24, 2023</td>
              <td className="px-6 py-4 font-bold text-slate-900">₹4,230.00</td>
              <td className="px-6 py-4 text-center">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">Success</span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-indigo-600 transition-all">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </tr>
            {/* Row 2 */}
            <tr className="hover:bg-indigo-50/50 transition-colors group">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-emerald-600">account_balance_wallet</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Freelance Project Payment</p>
                    <p className="text-xs text-slate-500">UI/UX Design Delivery</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-[14px] font-medium text-slate-600">Income</td>
              <td className="px-6 py-4 text-[14px] text-slate-500">Oct 22, 2023</td>
              <td className="px-6 py-4 font-bold text-emerald-600">₹85,000.00</td>
              <td className="px-6 py-4 text-center">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">Success</span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-indigo-600 transition-all">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </tr>
            {/* Row 3 */}
            <tr className="hover:bg-indigo-50/50 transition-colors group">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-amber-600">restaurant</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Bistro 24 Dinner</p>
                    <p className="text-xs text-slate-500">Meals & Entertainment</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-[14px] font-medium text-slate-600">Expense</td>
              <td className="px-6 py-4 text-[14px] text-slate-500">Oct 21, 2023</td>
              <td className="px-6 py-4 font-bold text-slate-900">₹2,450.00</td>
              <td className="px-6 py-4 text-center">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">Pending</span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-indigo-600 transition-all">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </tr>
            {/* Row 4 */}
            <tr className="hover:bg-indigo-50/50 transition-colors group">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-indigo-600">lan</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">AWS Cloud Services</p>
                    <p className="text-xs text-slate-500">Hosting Infrastructure</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-[14px] font-medium text-slate-600">Expense</td>
              <td className="px-6 py-4 text-[14px] text-slate-500">Oct 19, 2023</td>
              <td className="px-6 py-4 font-bold text-slate-900">₹18,000.00</td>
              <td className="px-6 py-4 text-center">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">Success</span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-indigo-600 transition-all">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </tr>
            {/* Row 5 */}
            <tr className="hover:bg-indigo-50/50 transition-colors group">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-red-600">electric_bolt</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Office Utility Bill</p>
                    <p className="text-xs text-slate-500">Recurring Payment</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-[14px] font-medium text-slate-600">Expense</td>
              <td className="px-6 py-4 text-[14px] text-slate-500">Oct 18, 2023</td>
              <td className="px-6 py-4 font-bold text-slate-900">₹5,200.00</td>
              <td className="px-6 py-4 text-center">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-red-100 text-red-700">Failed</span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-indigo-600 transition-all">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default TransactionsContent;
