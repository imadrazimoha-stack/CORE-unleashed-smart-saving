import React, { useState } from 'react';

/* ─── Data ─────────────────────────────────────────────── */
const PLATFORMS = [
  {
    id: 'fiverr',
    name: 'Fiverr',
    category: 'freelance',
    description: 'Sync your Fiverr orders, earnings, and gig analytics automatically.',
    color: 'bg-[#1DBF73]',
    textColor: 'text-[#1DBF73]',
    borderColor: 'border-[#1DBF73]/30',
    bgLight: 'bg-[#1DBF73]/10',
    logo: 'F',
    logoFont: 'font-black text-white text-xl',
    stats: { earnings: '₹84,200', orders: 23, rating: '4.9★' },
  },
  {
    id: 'upwork',
    name: 'Upwork',
    category: 'freelance',
    description: 'Import contracts, milestones, and hourly earnings from your Upwork profile.',
    color: 'bg-[#6FDA44]',
    textColor: 'text-[#14a800]',
    borderColor: 'border-[#6FDA44]/30',
    bgLight: 'bg-[#6FDA44]/10',
    logo: 'U',
    logoFont: 'font-extrabold text-white text-xl',
    stats: { earnings: '₹1,24,000', orders: 11, rating: '5.0★' },
  },
  {
    id: 'freelancer',
    name: 'Freelancer',
    category: 'freelance',
    description: 'Connect your Freelancer.com account to track bids, projects, and payments.',
    color: 'bg-[#29B2FE]',
    textColor: 'text-[#29B2FE]',
    borderColor: 'border-[#29B2FE]/30',
    bgLight: 'bg-[#29B2FE]/10',
    logo: 'FL',
    logoFont: 'font-extrabold text-white text-sm',
    stats: { earnings: '₹32,000', orders: 5, rating: '4.7★' },
  },
  {
    id: 'toptal',
    name: 'Toptal',
    category: 'freelance',
    description: 'Link your Toptal account to monitor elite client contract income.',
    color: 'bg-[#204ECF]',
    textColor: 'text-[#204ECF]',
    borderColor: 'border-[#204ECF]/30',
    bgLight: 'bg-[#204ECF]/10',
    logo: 'T',
    logoFont: 'font-black text-white text-xl',
    stats: { earnings: '₹2,20,000', orders: 3, rating: '5.0★' },
  },
];

const BANKS = [
  { id: 'sbi',   name: 'State Bank of India', abbr: 'SBI',   color: '#22409A', desc: 'India\'s largest public sector bank' },
  { id: 'hdfc',  name: 'HDFC Bank',           abbr: 'HDFC',  color: '#004C8F', desc: 'Leading private sector bank' },
  { id: 'icici', name: 'ICICI Bank',           abbr: 'ICICI', color: '#F16522', desc: 'Trusted private banking solution' },
  { id: 'axis',  name: 'Axis Bank',            abbr: 'AXIS',  color: '#800000', desc: 'Fast-growing private sector bank' },
  { id: 'kotak', name: 'Kotak Mahindra Bank',  abbr: 'KMB',   color: '#EF3E33', desc: 'Preferred by freelancers and SMEs' },
  { id: 'yes',   name: 'YES Bank',             abbr: 'YES',   color: '#0E3592', desc: 'Digital-first banking experience' },
  { id: 'pnb',   name: 'Punjab National Bank', abbr: 'PNB',   color: '#FF6B00', desc: 'Trusted public sector bank' },
  { id: 'bob',   name: 'Bank of Baroda',       abbr: 'BOB',   color: '#F69220', desc: 'International reach, local trust' },
];

const UPI = [
  { id: 'phonepe', name: 'PhonePe',   abbr: 'Pe',  color: '#5F259F', desc: 'UPI-based instant transfers' },
  { id: 'gpay',    name: 'Google Pay', abbr: 'G',   color: '#4285F4', desc: 'Google\'s UPI payment platform' },
  { id: 'paytm',   name: 'Paytm',     abbr: 'PT',  color: '#00BAF2', desc: 'Wallet + UPI + banking in one' },
  { id: 'cred',    name: 'CRED',      abbr: 'CR',  color: '#1A1A2E', desc: 'Premium credit & finance tracking' },
];

/* ─── Sub-components ────────────────────────────────────── */

const StatusBadge = ({ connected }) =>
  connected ? (
    <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      Connected
    </span>
  ) : (
    <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
      Not connected
    </span>
  );

const PlatformCard = ({ platform, connected, onToggle }) => (
  <div className={`bg-white rounded-2xl border-2 transition-all duration-200 ${connected ? `${platform.borderColor} shadow-lg` : 'border-slate-100 hover:border-slate-200'} p-6`}>
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-xl ${platform.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
          <span className={platform.logoFont}>{platform.logo}</span>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-[15px]">{platform.name}</h4>
          <StatusBadge connected={connected} />
        </div>
      </div>
    </div>

    <p className="text-sm text-slate-500 mb-5 leading-relaxed">{platform.description}</p>

    {connected && (
      <div className={`flex gap-3 mb-5 p-3 ${platform.bgLight} rounded-xl`}>
        <div className="flex-1 text-center">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Earnings</p>
          <p className={`text-sm font-extrabold ${platform.textColor} mt-0.5`}>{platform.stats.earnings}</p>
        </div>
        <div className="w-px bg-white/60" />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Jobs</p>
          <p className={`text-sm font-extrabold ${platform.textColor} mt-0.5`}>{platform.stats.orders}</p>
        </div>
        <div className="w-px bg-white/60" />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Rating</p>
          <p className={`text-sm font-extrabold ${platform.textColor} mt-0.5`}>{platform.stats.rating}</p>
        </div>
      </div>
    )}

    <button
      onClick={() => onToggle(platform.id)}
      className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all active:scale-[0.98] ${
        connected
          ? 'bg-slate-100 text-slate-600 hover:bg-rose-50 hover:text-rose-600'
          : `${platform.color} text-white shadow-md hover:opacity-90`
      }`}
    >
      {connected ? 'Disconnect' : `Connect ${platform.name}`}
    </button>
  </div>
);

const BankCard = ({ bank, connected, onToggle, showModal }) => (
  <div className={`bg-white rounded-xl border-2 p-4 transition-all ${connected ? 'border-indigo-200 shadow-md' : 'border-slate-100 hover:border-slate-200'} flex items-center justify-between gap-4`}>
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-[10px] font-extrabold"
        style={{ backgroundColor: bank.color }}
      >
        {bank.abbr}
      </div>
      <div>
        <p className="text-sm font-bold text-slate-900">{bank.name}</p>
        <p className="text-[11px] text-slate-400">{bank.desc}</p>
        {connected && (
          <p className="text-[11px] font-bold text-emerald-600 mt-0.5">●  XXXX XXXX 4321 — Synced</p>
        )}
      </div>
    </div>
    <button
      onClick={() => connected ? onToggle(bank.id) : showModal(bank)}
      className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
        connected
          ? 'bg-slate-100 text-slate-500 hover:bg-rose-50 hover:text-rose-600'
          : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm'
      }`}
    >
      {connected ? 'Remove' : 'Link'}
    </button>
  </div>
);

/* ─── Add Bank Modal ─────────────────────────────────────── */
const BankModal = ({ bank, onClose, onConfirm }) => {
  const [step, setStep] = useState(1);
  const [accNo, setAccNo] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [otp, setOtp] = useState('');

  if (!bank) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8" onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-[10px] font-extrabold" style={{ backgroundColor: bank.color }}>
            {bank.abbr}
          </div>
          <div>
            <h3 className="font-bold text-slate-900">Link {bank.name}</h3>
            <p className="text-xs text-slate-400">Secure connection via NetBanking / UPI</p>
          </div>
          <button onClick={onClose} className="ml-auto text-slate-400 hover:text-slate-600">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Progress dots */}
        <div className="flex gap-2 mb-6">
          {[1, 2, 3].map(s => (
            <div key={s} className={`flex-1 h-1.5 rounded-full transition-all ${step >= s ? 'bg-indigo-600' : 'bg-slate-100'}`} />
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <p className="text-sm font-bold text-slate-700 mb-2">Step 1 — Enter Account Details</p>
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Account Number</label>
              <input
                type="text" maxLength={18} value={accNo} onChange={e => setAccNo(e.target.value)}
                placeholder="Enter account number"
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">IFSC Code</label>
              <input
                type="text" maxLength={11} value={ifsc} onChange={e => setIfsc(e.target.value.toUpperCase())}
                placeholder="e.g. SBIN0001234"
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 outline-none uppercase"
              />
            </div>
            <button
              onClick={() => accNo.length >= 9 && ifsc.length === 11 && setStep(2)}
              className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all mt-2 disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <p className="text-sm font-bold text-slate-700 mb-2">Step 2 — Verify with OTP</p>
            <p className="text-xs text-slate-400">A 6-digit OTP has been sent to your registered mobile number.</p>
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Enter OTP</label>
              <input
                type="text" maxLength={6} value={otp} onChange={e => setOtp(e.target.value.replace(/\D/g, ''))}
                placeholder="••••••"
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 outline-none tracking-[0.3em] text-center text-lg font-bold"
              />
            </div>
            <button
              onClick={() => otp.length === 6 && setStep(3)}
              className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all"
            >
              Verify OTP
            </button>
            <button onClick={() => setStep(1)} className="w-full text-xs text-slate-400 hover:text-slate-600">← Back</button>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-emerald-600 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <p className="font-bold text-slate-900 text-lg">Account Linked!</p>
            <p className="text-sm text-slate-400">{bank.name} account ending in {accNo.slice(-4)} has been securely connected.</p>
            <button
              onClick={() => { onConfirm(bank.id); onClose(); }}
              className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all"
            >
              Done
            </button>
          </div>
        )}

        <div className="flex items-center gap-2 mt-5 pt-4 border-t border-slate-50">
          <span className="material-symbols-outlined text-slate-300 text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
          <p className="text-[10px] text-slate-300">256-bit encrypted · RBI compliant · Read-only access</p>
        </div>
      </div>
    </div>
  );
};

/* ─── Main Component ─────────────────────────────────────── */
const IntegrationsContent = () => {
  const [connected, setConnected] = useState({ fiverr: true, upwork: true });
  const [modalBank, setModalBank] = useState(null);

  const toggle = (id) =>
    setConnected(prev => ({ ...prev, [id]: !prev[id] }));

  const connectedCount = Object.values(connected).filter(Boolean).length;

  return (
    <main className="ml-[280px] min-h-screen pt-24 px-8 pb-16 max-w-[1440px] mx-auto">

      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className=" text-[24px] font-bold text-slate-900">Integrations</h1>
          <p className="text-sm text-slate-500 mt-1">Connect your freelance platforms and bank accounts to auto-sync earnings and expenses.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-xl border border-indigo-100">
          <span className="material-symbols-outlined text-indigo-600 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>link</span>
          <span className="text-sm font-bold text-indigo-700">{connectedCount} Connected</span>
        </div>
      </div>

      {/* ML Sync Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-5 mb-8 flex items-center gap-5 shadow-lg shadow-indigo-100">
        <div className="p-3 bg-white/15 rounded-xl flex-shrink-0">
          <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
        </div>
        <div>
          <p className="text-white font-bold text-sm">ML-Enhanced Sync</p>
          <p className="text-indigo-100 text-xs mt-0.5 leading-relaxed">
            When you connect platforms, our ML model ingests your payment history to improve savings suggestions, risk detection, and income forecasting — automatically.
          </p>
        </div>
      </div>

      {/* ── Freelance Platforms ── */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="material-symbols-outlined text-indigo-600" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
          <h2 className=" text-[18px] font-bold text-slate-900">Freelance Platforms</h2>
          <span className="ml-auto text-xs font-bold text-slate-400">{PLATFORMS.filter(p => connected[p.id]).length} / {PLATFORMS.length} connected</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {PLATFORMS.map(p => (
            <PlatformCard
              key={p.id}
              platform={p}
              connected={!!connected[p.id]}
              onToggle={toggle}
            />
          ))}
        </div>
      </section>

      {/* ── Indian Banks ── */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="material-symbols-outlined text-indigo-600" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
          <h2 className=" text-[18px] font-bold text-slate-900">Indian Bank Accounts</h2>
          <span className="ml-auto text-xs font-bold text-slate-400">{BANKS.filter(b => connected[b.id]).length} / {BANKS.length} connected</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BANKS.map(b => (
            <BankCard
              key={b.id}
              bank={b}
              connected={!!connected[b.id]}
              onToggle={toggle}
              showModal={setModalBank}
            />
          ))}
        </div>
      </section>

      {/* ── UPI & Wallets ── */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="material-symbols-outlined text-indigo-600" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
          <h2 className=" text-[18px] font-bold text-slate-900">UPI & Digital Wallets</h2>
          <span className="ml-auto text-xs font-bold text-slate-400">{UPI.filter(u => connected[u.id]).length} / {UPI.length} connected</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {UPI.map(u => (
            <div
              key={u.id}
              className={`bg-white rounded-xl border-2 p-4 transition-all ${connected[u.id] ? 'border-indigo-200 shadow-md' : 'border-slate-100 hover:border-slate-200'}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-[11px] font-extrabold flex-shrink-0"
                  style={{ backgroundColor: u.color }}
                >
                  {u.abbr}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{u.name}</p>
                  <StatusBadge connected={!!connected[u.id]} />
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-4">{u.desc}</p>
              <button
                onClick={() => toggle(u.id)}
                className={`w-full py-2 rounded-lg text-xs font-bold transition-all ${
                  connected[u.id]
                    ? 'bg-slate-100 text-slate-500 hover:bg-rose-50 hover:text-rose-600'
                    : 'text-white hover:opacity-90 shadow-sm'
                }`}
                style={!connected[u.id] ? { backgroundColor: u.color } : {}}
              >
                {connected[u.id] ? 'Disconnect' : `Connect ${u.name}`}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Security footer */}
      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex items-center gap-4">
        <div className="p-3 bg-emerald-100 rounded-xl flex-shrink-0">
          <span className="material-symbols-outlined text-emerald-600" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
        </div>
        <div>
          <p className="text-sm font-bold text-slate-800">Bank-grade security</p>
          <p className="text-xs text-slate-400 mt-0.5">
            All connections are read-only. We follow RBI Open Banking guidelines and use 256-bit AES encryption. Your credentials are never stored.
          </p>
        </div>
        <div className="ml-auto flex gap-3 flex-shrink-0">
          {['RBI', 'ISO', 'SSL'].map(badge => (
            <span key={badge} className="text-[10px] font-extrabold text-slate-400 border border-slate-200 px-2 py-1 rounded-lg">{badge}</span>
          ))}
        </div>
      </div>

      {/* Bank link modal */}
      {modalBank && (
        <BankModal
          bank={modalBank}
          onClose={() => setModalBank(null)}
          onConfirm={(id) => setConnected(prev => ({ ...prev, [id]: true }))}
        />
      )}
    </main>
  );
};

export default IntegrationsContent;
