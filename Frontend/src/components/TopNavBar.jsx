import React from 'react';

const TopNavBar = ({ setCurrentView }) => {
  return (
    <header className="fixed top-0 right-0 left-[280px] h-16 z-40 bg-white/70 backdrop-blur-md border-b border-slate-100 shadow-sm flex items-center">
      <div className="flex justify-between items-center px-8 w-full max-w-[1440px] mx-auto">
        <div className="flex items-center bg-slate-100/50 px-4 py-2 rounded-full w-96">
          <span className="material-symbols-outlined text-slate-400 text-sm">search</span>
          <input className="bg-transparent border-none focus:ring-0 text-sm w-full font-['Manrope'] outline-none px-2" placeholder="Search transactions, goals..." type="text" />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 border-r border-slate-100 pr-6">
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="flex items-center gap-2 bg-indigo-50 px-3 py-1.5 rounded-full text-indigo-600 font-bold text-xs">
              <span className="material-symbols-outlined text-sm">account_balance_wallet</span>
              ₹1,24,000
            </button>
          </div>
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => setCurrentView('profile')}
          >
            <div className="text-right">
              <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Alex Rivers</p>
              <p className="text-[10px] font-medium text-slate-500 uppercase tracking-tighter">Verified Freelancer</p>
            </div>
            <img alt="Gig worker profile" className="w-10 h-10 rounded-full border-2 border-indigo-100 group-hover:border-indigo-400 transition-colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARUPBRg3Ob7jBbR4yocNAIh3dHU_oHlf_NCVYqy-ZpqKvyFxPTbLjS1gUzz2VyMR8QPY-UKMPJ_JYkWhy5s5mVNTvHsClIWWqLidEtHb9gf60f-dcyXpuPJAqArKVdT923_1wHmhRI7likQebedCpLVF9mGVFDAgN_hHsBSzExsZj9nbx_ZIQpWGp48ONLbgktBYcFSC7RSXSnz7iKKspuiY0rxBS8jdcrKTSpGFG6ysmMuHG-ITkvq_aFmKr451bEQgWMRVrTGwc" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavBar;
