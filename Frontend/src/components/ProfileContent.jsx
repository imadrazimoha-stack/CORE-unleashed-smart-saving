import React from 'react';

const ProfileContent = () => {
  return (
    <main className="ml-[280px] pt-24 p-8 max-w-[1440px] mx-auto min-h-screen">
      {/* Header Section */}
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-[0_8px_32px_rgba(79,70,229,0.08)] mb-8 flex items-center justify-between border border-white/20">
        <div className="flex items-center gap-6">
          <div className="relative">
            <img alt="Alex Rivers" className="w-20 h-20 rounded-2xl object-cover shadow-md border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGIGUd2E0X1UM3pzkqGs697pZejw5tCN_NAE02fwWh3l7z9SuGF2PPQIzOM1LPKDhJvqMngIqlEFRIEIpzyhcrDc3DOjD461336-sWL_6SBpQhoXQL5_zvNfV5ioFfrFa1PX4FkecQYTamYj7VvFk1QzpCHruYk-szsPlySmbQpo_GcJoN4dH3J2NiDuBrmUODrXDEiiKSuaZN8mIZj9iUpaPm9EAJzYRIbiJH9QIQ2GEu13k3GzDVIMegVYTsFHgUtI1E3wpent8"/>
            <div className="absolute -bottom-1 -right-1 bg-[#7b2cbf] text-white p-1 rounded-lg shadow-md border border-white">
              <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
          </div>
          <div>
            <h1 className="text-[24px] font-bold text-slate-900 ">Mohammad Bilal</h1>
            <p className="text-[#7b2cbf] font-semibold text-sm ">Freelance Developer</p>
          </div>
        </div>
        <button className="bg-white border border-[#7b2cbf] text-[#7b2cbf] px-6 py-2.5 rounded-xl font-semibold hover:bg-white transition-all flex items-center gap-2 shadow-sm">
          <span className="material-symbols-outlined text-sm">edit</span> Edit Profile
        </button>
      </div>

      {/* Middle Row: Two Cards */}
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
        {/* Personal Info Card */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-[#7b2cbf]">person</span>
            <h3 className="font-bold text-lg  text-slate-900">Personal Info</h3>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Age Range</p>
              <p className="font-semibold text-slate-900">25 - 34 Years</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Income Type</p>
              <p className="font-semibold text-slate-900">Freelance / Variable</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Member Since</p>
              <p className="font-semibold text-slate-900">August 2023</p>
            </div>
          </div>
        </div>

        {/* Financial Preferences Card */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-[#7b2cbf]">tune</span>
            <h3 className="font-bold text-lg  text-slate-900">Financial Prefs</h3>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Saving Preference</p>
              <div className="flex bg-slate-50 p-1 rounded-xl">
                <button className="flex-1 py-1.5 text-xs font-bold rounded-lg text-slate-400 hover:text-slate-600">Safe</button>
                <button className="flex-1 py-1.5 text-xs font-bold rounded-lg bg-[#7b2cbf] text-white shadow-sm">Balanced</button>
                <button className="flex-1 py-1.5 text-xs font-bold rounded-lg text-slate-400 hover:text-slate-600">Aggressive</button>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Min Safe Balance</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-[#7b2cbf] ">₹50,000</span>
                <span className="material-symbols-outlined text-slate-300">info</span>
              </div>
              <div className="mt-2 h-1.5 w-full bg-slate-100 rounded-full">
                <div className="h-full bg-[#7b2cbf] rounded-full w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Two Large Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Account & Security */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-xl mb-6  text-slate-900">Account & Security</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-indigo-200 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-indigo-600">mail</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</p>
                  <p className="font-semibold text-slate-900">bilal.mohammed@freelance.com</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-emerald-500" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-indigo-200 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-indigo-600">smartphone</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mobile Number</p>
                  <p className="font-semibold text-slate-900">+91 98765 43210</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-emerald-500" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
          </div>
        </div>

        {/* Connected Funding Sources */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-xl mb-6  text-slate-900">Connected Funding Sources</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-indigo-50/30 rounded-2xl border border-indigo-100 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-indigo-50">
                  <img alt="HDFC" className="w-8 h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHRl7uHkAEOgK5QsNSbe_hwik6fECjKTi2nEusGasWU49P5ff1fjGIsvC7HokEmuQA1s12fpPC9pucmiPFbF2XjzO9RfFCWKaauocSXsYcgSrdLCgBUtXrWTPjXrAkJy2_1jx6EmTjbHn_ICkHcNE20xLMEV-2jEGavgLG5qwXQGwWO8KvViZMzRs32KjoWMwWsKIG7vY-f6u2xUACRCTmOr21l2luroHoPcOrazeP0ukzfvEKme92BmhKswZ5-jMw3MSzi1ho2So"/>
                </div>
                <div>
                  <p className="font-bold text-slate-900">HDFC Bank Primary</p>
                  <p className="text-xs text-[#7b2cbf] font-medium">Income Tracking Active</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-black bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full uppercase">Linked</span>
                <p className="text-[10px] text-slate-400 mt-1 font-bold tracking-widest">REF: 4492</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100">
                  <span className="material-symbols-outlined text-indigo-600">qr_code</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">bilalmohammad@okaxis</p>
                  <p className="text-xs text-slate-500 font-medium">UPI ID for Savings</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-300">more_vert</span>
            </div>
            
            <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold text-sm hover:border-indigo-400 hover:text-indigo-600 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">add_circle</span>
              Add New Account
            </button>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="flex justify-center mt-12 mb-8">
        <button className="bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white px-10 py-3 rounded-2xl font-bold transition-all flex items-center gap-2 shadow-sm border border-rose-200">
          <span className="material-symbols-outlined">logout</span>
          Logout from RootFund
        </button>
      </div>
    </main>
  );
};

export default ProfileContent;
