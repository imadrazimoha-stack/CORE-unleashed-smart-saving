import React from 'react';

const statusStyles = {
  Success: 'bg-emerald-100 text-emerald-700',
  Pending: 'bg-amber-100 text-amber-700',
  Failed: 'bg-red-100 text-red-700',
};

const riskStyles = {
  LOW: 'bg-emerald-100 text-emerald-700',
  MEDIUM: 'bg-amber-100 text-amber-700',
  HIGH: 'bg-rose-100 text-rose-700',
};

const TransactionsContent = ({ transactions = [], mlInsights }) => {
  // --- Computed from real transaction data ---
  const totalTransactions = transactions.length;
  const totalVolume = transactions.reduce((sum, t) => sum + t.amount, 0);
  const avgTransaction = totalTransactions > 0 ? totalVolume / totalTransactions : 0;
  const savingsRatio = mlInsights
    ? Math.round((mlInsights.savingsTotal / (mlInsights.savingsTotal + mlInsights.expensesTotal)) * 100)
    : 0;

  return (
    <main className="ml-[280px] min-h-screen pt-24 px-8 pb-12 max-w-[1440px] mx-auto">

      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className=" text-[24px] font-bold text-slate-900">Transactions</h1>
          <p className="text-[14px] text-slate-500">Review and manage your financial activity across all connected accounts.</p>
        </div>
        <div className="flex items-center gap-3">
          {/* ML Risk Badge */}
          {mlInsights && (
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 ${riskStyles[mlInsights.riskLevel] || riskStyles.MEDIUM}`}>
              <span className="material-symbols-outlined text-[14px]">shield</span>
              {mlInsights.riskLevel} Risk
            </span>
          )}
          <button className="text-[#7b2cbf] font-bold hover:underline flex items-center gap-1">
            Export <span className="material-symbols-outlined text-sm text-[#7b2cbf]">download</span>
          </button>
        </div>
      </div>

      {/* Summary Cards — computed from transactions data */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(79,70,229,0.06)] border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <span className="material-symbols-outlined text-[#7b2cbf]">list_alt</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">This week</span>
          </div>
          <p className="text-[12px] font-bold uppercase tracking-widest text-slate-500 mb-1">Total Transactions</p>
          <h3 className="text-[40px] font-bold text-slate-900 leading-none">{totalTransactions}</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(79,70,229,0.06)] border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <span className="material-symbols-outlined text-purple-600">trending_up</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">Volume</span>
          </div>
          <p className="text-[12px] font-bold uppercase tracking-widest text-slate-500 mb-1">Total Volume</p>
          <h3 className="text-[40px] font-bold text-slate-900 leading-none">₹{totalVolume.toLocaleString()}</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(79,70,229,0.06)] border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-amber-50 rounded-lg">
              <span className="material-symbols-outlined text-amber-600">analytics</span>
            </div>
            <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-full">Avg</span>
          </div>
          <p className="text-[12px] font-bold uppercase tracking-widest text-slate-500 mb-1">Avg Transaction</p>
          <h3 className="text-[40px] font-bold text-slate-900 leading-none">₹{Math.round(avgTransaction).toLocaleString()}</h3>
        </div>
      </div>

      {/* ML Smart Insight Banner */}
      {mlInsights && (
        <div className="bg-[#7b2cbf] text-white p-5 rounded-xl mb-6 flex items-start gap-4 shadow-lg shadow-indigo-200">
          <div className="p-2 bg-white/15 rounded-lg shrink-0">
            <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">Smart Insight</h4>
              <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded font-bold">ML Powered</span>
            </div>
            <p className="text-indigo-100 text-sm leading-relaxed">{mlInsights.message}</p>
          </div>
          {/* Save vs Spend Ratio */}
          <div className="shrink-0 text-right hidden md:block">
            <p className="text-[10px] text-indigo-200 font-bold uppercase tracking-wider mb-1">Save/Spend Ratio</p>
            <p className="text-2xl font-bold text-white">{savingsRatio}%</p>
            <p className="text-[10px] text-indigo-300">saved of total flow</p>
          </div>
        </div>
      )}

      {/* Category Intelligence Row */}
      {mlInsights && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white border border-slate-100 rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <span className="material-symbols-outlined text-[#7b2cbf] text-[18px]">category</span>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Top Category</p>
              <p className="text-sm font-bold text-slate-800">{mlInsights.topCategory}</p>
            </div>
          </div>
          <div className="bg-white border border-slate-100 rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <div className="p-2 bg-emerald-50 rounded-lg">
              <span className="material-symbols-outlined text-emerald-600 text-[18px]">savings</span>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Total Saved</p>
              <p className="text-sm font-bold text-emerald-700">₹{mlInsights.savingsTotal.toLocaleString()}</p>
            </div>
          </div>
          <div className="bg-white border border-slate-100 rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <div className="p-2 bg-rose-50 rounded-lg">
              <span className="material-symbols-outlined text-rose-600 text-[18px]">shopping_cart</span>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Total Spent</p>
              <p className="text-sm font-bold text-rose-700">₹{mlInsights.expensesTotal.toLocaleString()}</p>
            </div>
          </div>
        </div>
      )}

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

      {/* Transactions Table — dynamic rows */}
      <div className="bg-white rounded-b-xl border-x border-b border-slate-200 overflow-hidden shadow-[0_4px_20px_rgba(79,70,229,0.06)]">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-y border-slate-200">
            <tr>
              <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-slate-500">Transaction Name</th>
              <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-slate-500">Type</th>
              <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-slate-500">Date</th>
              <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-slate-500">Amount</th>
              <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-slate-500 text-center">Status</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {transactions.map((tx, i) => (
              <tr key={i} className="hover:bg-indigo-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                      <span className={`material-symbols-outlined ${tx.iconColor}`}>{tx.icon}</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{tx.name}</p>
                      <p className="text-xs text-slate-500">{tx.category}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-[14px] font-medium text-slate-600">{tx.type}</td>
                <td className="px-6 py-4 text-[14px] text-slate-500">{tx.date}</td>
                <td className={`px-6 py-4 font-bold ${tx.type === 'Income' ? 'text-emerald-600' : 'text-slate-900'}`}>
                  {tx.type === 'Income' ? '+' : ''}₹{tx.amount.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${statusStyles[tx.status] || statusStyles.Pending}`}>
                    {tx.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-indigo-600 transition-all">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {transactions.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <span className="material-symbols-outlined text-4xl mb-2 block">receipt_long</span>
            <p className="text-sm font-medium">No transactions found</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default TransactionsContent;
