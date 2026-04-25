import React from 'react';

const Sidebar = ({ currentView, setCurrentView, currentUser, onLogout }) => {
  const navItems = [
    { key: 'dashboard',    icon: 'dashboard',     label: 'Dashboard' },
    { key: 'savings',      icon: 'savings',        label: 'Savings' },
    { key: 'transactions', icon: 'receipt_long',   label: 'Transactions' },
    { key: 'integrations', icon: 'cable',          label: 'Integrations' },
    { key: 'settings',     icon: 'settings',       label: 'Settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-[280px] border-r-2 border-white/20 bg-white/70 backdrop-blur-md shadow-[32px_0_32px_rgba(79,70,225,0.08)] flex flex-col py-8 z-50">
      {/* Logo */}
      <div className="px-8 mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#7b2cbf] flex items-center justify-center text-white">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              account_balance_wallet
            </span>
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-[#7b2cbf] tracking-tighter">RootFund</h1>
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Salary that goes beyond</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1">
        {navItems.map(({ key, icon, label }) => (
          <button
            key={key}
            onClick={() => setCurrentView(key)}
            className={`w-full flex items-center gap-3 px-6 py-3 transition-all  text-sm font-semibold tracking-tight ${
              currentView === key
                ? 'text-[#7b2cbf] border-l-4 border-indigo-600 bg-indigo-50/50'
                : 'text-slate-500 hover:bg-slate-50 hover:text-[#7b2cbf] border-l-4 border-transparent'
            }`}
          >
            <span className="material-symbols-outlined">{icon}</span>
            {label}
          </button>
        ))}
      </nav>

      {/* Bottom: user info + logout */}
      <div className="px-6 mt-auto">
        {/* User mini card */}
        {currentUser && (
          <div className="flex items-center gap-3 px-3 py-3 mb-2 rounded-xl bg-slate-50 border border-slate-100">
            <img
              src={currentUser.picture}
              alt={currentUser.name}
              className="w-9 h-9 rounded-full border-2 border-indigo-100 object-cover flex-shrink-0"
              onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=4f46e5&color=fff`; }}
            />
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-slate-900 truncate">{currentUser.name}</p>
              <p className="text-[10px] text-slate-400 truncate">{currentUser.email}</p>
            </div>
          </div>
        )}

        <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-indigo-500 transition-all  text-sm font-semibold">
          <span className="material-symbols-outlined">help</span>
          Support
        </button>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-2 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-all  text-sm font-semibold"
        >
          <span className="material-symbols-outlined">logout</span>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
