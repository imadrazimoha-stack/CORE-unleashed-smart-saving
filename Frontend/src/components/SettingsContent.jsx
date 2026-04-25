import React from 'react';

const SettingsContent = () => {
  return (
    <main className="ml-[280px] min-h-screen pt-24 px-8 pb-12 max-w-[1440px] mx-auto">
      <div className="max-w-6xl mx-auto">
        {/* Settings Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-['Manrope'] text-[24px] font-bold text-indigo-600">Settings</h2>
          <div className="h-6 w-[1px] bg-slate-200"></div>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span className="material-symbols-outlined text-sm">home</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span>User Preferences</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Profile Section */}
          <section className="col-span-12 lg:col-span-4 space-y-6">
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(79,70,229,0.06)] p-6 border border-slate-100">
              <div className="flex flex-col items-center text-center">
                <div className="relative group">
                  <img alt="Profile Large" className="w-32 h-32 rounded-full border-4 border-indigo-50 object-cover mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU1zchY9JV7jLK3de5dQqCq0a0WflbqD84GhfXSaCBhqaCvSiBJBz6RGu1UFCfaLqFEbLzUKJZqJfi1ZypDqC1Gg1mDQS35TwB6LVZdGtjMznVzK72JU8Aza44j0-I-pJ6ti9VrdDYyLhtFSKka2LQqfBAtNv8w0QOFtuKJGW4FuktP5ogLKPU10p6esYghweTvd5VviOpEBDyGgPOKxn5_y_n_So24UHFW4suOyTBOWSYC0ccI9Fy-m_Ln7G_ThXn98m9dOGzdQ"/>
                  <button className="absolute bottom-4 right-0 bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-sm">edit</span>
                  </button>
                </div>
                <h3 className="font-['Manrope'] text-[18px] font-bold text-slate-900">Alex Rivera</h3>
                <p className="text-[14px] text-slate-500">alex.rivera@freelance.co</p>
                <div className="mt-6 w-full pt-6 border-t border-slate-50 space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 font-medium">Role</span>
                    <span className="text-slate-900 font-bold">Independent Consultant</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 font-medium">Member Since</span>
                    <span className="text-slate-900 font-bold">Oct 2022</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 font-medium">Plan</span>
                    <span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded text-[10px] font-bold uppercase tracking-wider">Free Tier</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-900 rounded-xl p-6 text-white overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="font-['Manrope'] text-[18px] font-bold mb-2">Platform Integrations</h4>
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
          
          {/* Settings Grid */}
          <section className="col-span-12 lg:col-span-8 space-y-6">
            {/* Account Preferences */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(79,70,229,0.06)] border border-slate-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50">
                <h3 className="font-['Manrope'] text-[18px] font-bold text-slate-900 flex items-center gap-2">
                  <span className="material-symbols-outlined text-indigo-600">tune</span>
                  Account Preferences
                </h3>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[12px] font-bold tracking-wider uppercase text-slate-500">Base Currency</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none appearance-none">
                      <option>USD - US Dollar</option>
                      <option>EUR - Euro</option>
                      <option>GBP - British Pound</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2 text-slate-400 pointer-events-none">keyboard_arrow_down</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold tracking-wider uppercase text-slate-500">Language</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none appearance-none">
                      <option>English (US)</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2 text-slate-400 pointer-events-none">keyboard_arrow_down</span>
                  </div>
                </div>
                <div className="col-span-full space-y-2">
                  <label className="text-[12px] font-bold tracking-wider uppercase text-slate-500">Timezone</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none appearance-none">
                      <option>(GMT-08:00) Pacific Time (US & Canada)</option>
                      <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                      <option>(GMT+00:00) UTC</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2 text-slate-400 pointer-events-none">keyboard_arrow_down</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(79,70,229,0.06)] border border-slate-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50">
                <h3 className="font-['Manrope'] text-[18px] font-bold text-slate-900 flex items-center gap-2">
                  <span className="material-symbols-outlined text-indigo-600">notifications_active</span>
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
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox"/>
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
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
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox"/>
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(79,70,229,0.06)] border border-slate-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50">
                <h3 className="font-['Manrope'] text-[18px] font-bold text-slate-900 flex items-center gap-2">
                  <span className="material-symbols-outlined text-indigo-600">security</span>
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
              <button className="px-6 py-2.5 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors">Discard Changes</button>
              <button className="px-8 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95">Save All Settings</button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default SettingsContent;
