import React, { useEffect, useState } from 'react';

const ToggleSwitch = ({ checked, onChange }) => (
  <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" className="sr-only peer" checked={checked} onChange={e => onChange(e.target.checked)} readOnly />
    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
  </label>
);

const SettingsContent = ({ currentUser: loggedInUser }) => {
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [user, setUser] = useState(loggedInUser || { name: '', email: '', plan: '', role: '', memberSince: '' });
  const [settings, setSettings] = useState({
    baseRate: 0.10,
    riskTolerance: 'MEDIUM',
    minSafeBalance: 50000,
    aiMode: 'Balanced',
    emailNotifications: true,
    pushNotifications: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/settings');
        if (res.ok) {
          const data = await res.json();
          // logged-in user's real name/email/picture takes priority over backend defaults
          setUser({ ...data.user, ...(loggedInUser || {}) });
          setSettings(data.settings);
        }
      } catch (err) {
        console.error('Settings fetch failed, using defaults.', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const saveSettings = async () => {
    try {
      await fetch('http://localhost:5000/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      console.error('Save failed', err);
    }
  };

  const discardChanges = () => {
    setLoading(true);
    fetch('http://localhost:5000/api/settings')
      .then(r => r.json())
      .then(data => { setSettings(data.settings); setUser(data.user); })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <main className="ml-[280px] min-h-screen pt-24 px-8 flex items-start justify-start">
        <div className="flex items-center gap-3 text-slate-500 mt-4">
          <span className="material-symbols-outlined animate-spin">progress_activity</span>
          <span className="text-sm font-medium">Loading settings...</span>
        </div>
      </main>
    );
  }

  return (
    <main className="ml-[280px] min-h-screen pt-24 px-8 pb-12 max-w-[1440px] mx-auto">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className=" text-[24px] font-bold text-[#7b2cbf]">Settings</h2>
          <div className="h-6 w-[1px] bg-slate-200"></div>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span className="material-symbols-outlined text-sm">home</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span>User Preferences</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">

          {/* ===== LEFT: Profile ===== */}
          <section className="col-span-12 lg:col-span-4 space-y-6">
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(79,70,229,0.06)] p-6 border border-slate-100">
              <div className="flex flex-col items-center text-center">
                <div className="relative group">
                  <img
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-indigo-50 object-cover mb-4"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU1zchY9JV7jLK3de5dQqCq0a0WflbqD84GhfXSaCBhqaCvSiBJBz6RGu1UFCfaLqFEbLzUKJZqJfi1ZypDqC1Gg1mDQS35TwB6LVZdGtjMznVzK72JU8Aza44j0-I-pJ6ti9VrdDYyLhtFSKka2LQqfBAtNv8w0QOFtuKJGW4FuktP5ogLKPU10p6esYghweTvd5VviOpEBDyGgPOKxn5_y_n_So24UHFW4suOyTBOWSYC0ccI9Fy-m_Ln7G_ThXn98m9dOGzdQ"
                  />
                  <button className="absolute bottom-4 right-0 bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-sm">edit</span>
                  </button>
                </div>
                <h3 className=" text-[18px] font-bold text-slate-900">{user.name || 'Mohammed Bilal'}</h3>
                <p className="text-[14px] text-slate-500">{user.email || 'bilal@email.com'}</p>
                <div className="mt-6 w-full pt-6 border-t border-slate-50 space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 font-medium">Role</span>
                    <span className="text-slate-900 font-bold">{user.role || 'Independent Consultant'}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 font-medium">Member Since</span>
                    <span className="text-slate-900 font-bold">{user.memberSince || 'Oct 2022'}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 font-medium">Plan</span>
                    <span className="px-2 py-1 bg-[#7b2cbf] text-white rounded text-[10px] font-bold uppercase tracking-wider">{user.plan || 'Free Tier'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Integrations */}
            <div className="bg-[#7b2cbf] rounded-xl p-6 text-white overflow-hidden relative">
              <div className="relative z-10">
                <h4 className=" text-[18px] font-bold mb-2">Platform Integrations</h4>
                <div className="text-indigo-100 text-sm mb-4 leading-relaxed opacity-80">
                  <div className="flex gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-black text-[10px] tracking-tight">FI</div>
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-black text-[10px] tracking-tight">UP</div>
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">add</span>
                    </div>
                  </div>
                  Connect your professional accounts from Fiverr, Upwork, and others to sync your earnings automatically.
                </div>
                <button className="flex items-center gap-2 bg-white text-indigo-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-indigo-50 transition-colors">
                  <span className="material-symbols-outlined text-sm">settings_input_component</span>
                  Manage Integrations
                </button>
              </div>
              <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-10 pointer-events-none">account_balance</span>
            </div>
          </section>

          {/* ===== RIGHT: Settings Grid ===== */}
          <section className="col-span-12 lg:col-span-8 space-y-6">

            {/* Account Preferences */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(79,70,229,0.06)] border border-slate-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50">
                <h3 className=" text-[18px] font-bold text-slate-900 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#7b2cbf]">tune</span>
                  Account Preferences
                </h3>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[12px] font-bold tracking-wider uppercase text-slate-500">Base Currency</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none appearance-none">
                      <option>INR - Indian Rupee</option>
                      <option>USD - US Dollar</option>
                      <option>EUR - Euro</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2 text-slate-400 pointer-events-none">keyboard_arrow_down</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold tracking-wider uppercase text-slate-500">Language</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none appearance-none">
                      <option>English (US)</option>
                      <option>Hindi</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2 text-slate-400 pointer-events-none">keyboard_arrow_down</span>
                  </div>
                </div>
                <div className="col-span-full space-y-2">
                  <label className="text-[12px] font-bold tracking-wider uppercase text-slate-500">Timezone</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none appearance-none">
                      <option>(GMT+05:30) India Standard Time</option>
                      <option>(GMT+00:00) UTC</option>
                      <option>(GMT-08:00) Pacific Time</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2 text-slate-400 pointer-events-none">keyboard_arrow_down</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== ML / Financial Settings ===== */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(79,70,229,0.06)] border border-slate-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-50 bg-gradient-to-r from-indigo-50/60 to-white">
                <h3 className=" text-[18px] font-bold text-slate-900 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#7b2cbf]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                  AI & Financial Settings
                  <span className="ml-auto text-[10px] font-bold text-[#7b2cbf] bg-indigo-50 px-2 py-0.5 rounded uppercase tracking-wider">Controls ML</span>
                </h3>
              </div>
              <div className="p-6 space-y-6">

                {/* Base Savings Rate */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[12px] font-bold tracking-wider uppercase text-slate-500">Base Savings Rate</label>
                    <span className="text-sm font-bold text-[#7b2cbf]">{(settings.baseRate * 100).toFixed(0)}%</span>
                  </div>
                  <input
                    type="range"
                    min="5" max="40" step="1"
                    value={settings.baseRate * 100}
                    onChange={e => handleChange('baseRate', parseFloat(e.target.value) / 100)}
                    className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-[#7b2cbf]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                    <span>5% Conservative</span>
                    <span>40% Aggressive</span>
                  </div>
                  <p className="text-xs text-slate-400">This directly sets the <code className="bg-slate-50 px-1 rounded text-[#7b2cbf]">BASE_FACTOR</code> used in your ML savings formula.</p>
                </div>

                {/* Risk Tolerance */}
                <div className="space-y-2">
                  <label className="text-[12px] font-bold tracking-wider uppercase text-slate-500">Risk Tolerance</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['LOW', 'MEDIUM', 'HIGH'].map(level => (
                      <button
                        key={level}
                        onClick={() => handleChange('riskTolerance', level)}
                        className={`py-2.5 rounded-lg font-bold text-sm border-2 transition-all ${
                          settings.riskTolerance === level
                            ? level === 'LOW' ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                            : level === 'MEDIUM' ? 'border-amber-500 bg-amber-50 text-amber-700'
                            : 'border-rose-500 bg-rose-50 text-rose-700'
                            : 'border-slate-100 text-slate-400 hover:border-slate-200'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400">Controls how aggressively the ML model penalizes high-variance income patterns.</p>
                </div>

                {/* Min Safe Balance */}
                <div className="space-y-2">
                  <label className="text-[12px] font-bold tracking-wider uppercase text-slate-500">Minimum Safe Balance</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                    <input
                      type="number"
                      value={settings.minSafeBalance}
                      onChange={e => handleChange('minSafeBalance', Number(e.target.value))}
                      className="w-full bg-white border border-slate-200 rounded-lg pl-8 pr-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                  </div>
                  <p className="text-xs text-slate-400">The ML safeFactor is computed as <code className="bg-slate-50 px-1 rounded text-[#7b2cbf]">balance / minSafeBalance</code>. Lower values = more saving freedom.</p>
                </div>

                {/* AI Mode */}
                <div className="space-y-2">
                  <label className="text-[12px] font-bold tracking-wider uppercase text-slate-500">AI Savings Mode</label>
                  <div className="relative">
                    <select
                      value={settings.aiMode}
                      onChange={e => handleChange('aiMode', e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none appearance-none"
                    >
                      <option>Conservative</option>
                      <option>Balanced</option>
                      <option>Aggressive</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2 text-slate-400 pointer-events-none">keyboard_arrow_down</span>
                  </div>
                  <p className="text-xs text-slate-400">Guides how the model weighs stability vs. growth when making savings suggestions.</p>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(79,70,229,0.06)] border border-slate-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50">
                <h3 className=" text-[18px] font-bold text-slate-900 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#7b2cbf]">notifications_active</span>
                  Notification Settings
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <p className="text-[16px] font-bold text-slate-900">Email Notifications</p>
                      <p className="text-[14px] text-slate-500">Receive weekly summaries and tax deadline alerts.</p>
                    </div>
                  </div>
                  <ToggleSwitch checked={settings.emailNotifications} onChange={v => handleChange('emailNotifications', v)} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                      <span className="material-symbols-outlined">smartphone</span>
                    </div>
                    <div>
                      <p className="text-[16px] font-bold text-slate-900">Push Notifications</p>
                      <p className="text-[14px] text-slate-500">Real-time alerts for large expenses and earnings.</p>
                    </div>
                  </div>
                  <ToggleSwitch checked={settings.pushNotifications} onChange={v => handleChange('pushNotifications', v)} />
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(79,70,229,0.06)] border border-slate-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50">
                <h3 className=" text-[18px] font-bold text-slate-900 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#7b2cbf]">security</span>
                  Security
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
                  <div className="flex gap-4 items-center">
                    <span className="material-symbols-outlined text-slate-400">lock</span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Change Password</p>
                      <p className="text-xs text-slate-500">Last changed 3 months ago</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-indigo-600 transition-colors">chevron_right</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-4 pt-4">
              <button onClick={discardChanges} className="px-6 py-2.5 text-sm font-bold text-slate-500 hover:text-[#7b2cbf] transition-colors">
                Discard Changes
              </button>
              <button
                onClick={saveSettings}
                className={`px-8 py-2.5 rounded-lg text-sm font-bold shadow-lg transition-all active:scale-95 flex items-center gap-2 ${
                  saved
                    ? 'bg-emerald-500 shadow-emerald-200 text-white'
                    : 'bg-[#7b2cbf] shadow-indigo-200 text-white hover:bg-[#7b2cbf]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {saved ? 'check_circle' : 'save'}
                </span>
                {saved ? 'Saved!' : 'Save All Settings'}
              </button>
            </div>

          </section>
        </div>
      </div>
    </main>
  );
};

export default SettingsContent;
