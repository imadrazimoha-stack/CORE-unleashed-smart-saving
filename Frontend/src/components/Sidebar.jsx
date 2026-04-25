import React from 'react';

const Sidebar = ({ currentView, setCurrentView }) => {
  return (
    <aside className="fixed left-0 top-0 h-full w-[280px] border-r-2 border-white/20 bg-white/70 backdrop-blur-md shadow-[32px_0_32px_rgba(79,70,225,0.08)] flex flex-col py-8 z-50">
      <div className="px-8 mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              account_balance_wallet
            </span>
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-indigo-600 tracking-tighter">GigSaver</h1>
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Wealth builder</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-1">
        <button 
          onClick={() => setCurrentView('dashboard')}
          className={`w-full flex items-center gap-3 px-6 py-3 transition-all font-['Manrope'] text-sm font-semibold tracking-tight ${currentView === 'dashboard' ? "text-indigo-600 border-l-4 border-indigo-600 bg-indigo-50/50" : "text-slate-500 hover:bg-slate-50 hover:text-indigo-500 border-l-4 border-transparent"}`}
        >
          <span className="material-symbols-outlined">dashboard</span>
          Dashboard
        </button>
        
        <button 
          onClick={() => setCurrentView('savings')}
          className={`w-full flex items-center gap-3 px-6 py-3 transition-all font-['Manrope'] text-sm font-semibold tracking-tight ${currentView === 'savings' ? "text-indigo-600 border-l-4 border-indigo-600 bg-indigo-50/50" : "text-slate-500 hover:bg-slate-50 hover:text-indigo-500 border-l-4 border-transparent"}`}
        >
          <span className="material-symbols-outlined">savings</span>
          Savings
        </button>

        <button 
          onClick={() => setCurrentView('transactions')}
          className={`w-full flex items-center gap-3 px-6 py-3 transition-all font-['Manrope'] text-sm font-semibold tracking-tight ${currentView === 'transactions' ? "text-indigo-600 border-l-4 border-indigo-600 bg-indigo-50/50" : "text-slate-500 hover:bg-slate-50 hover:text-indigo-500 border-l-4 border-transparent"}`}
        >
          <span className="material-symbols-outlined">receipt_long</span>
          Transactions
        </button>

        <button 
          onClick={() => setCurrentView('settings')}
          className={`w-full flex items-center gap-3 px-6 py-3 transition-all font-['Manrope'] text-sm font-semibold tracking-tight ${currentView === 'settings' ? "text-indigo-600 border-l-4 border-indigo-600 bg-indigo-50/50" : "text-slate-500 hover:bg-slate-50 hover:text-indigo-500 border-l-4 border-transparent"}`}
        >
          <span className="material-symbols-outlined">settings</span>
          Settings
        </button>
      </nav>

      <div className="px-6 mt-auto space-y-1">
        <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-indigo-500 transition-all font-['Manrope'] text-sm font-semibold">
          <span className="material-symbols-outlined">help</span>
          Support
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-indigo-500 transition-all font-['Manrope'] text-sm font-semibold">
          <span className="material-symbols-outlined">logout</span>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
