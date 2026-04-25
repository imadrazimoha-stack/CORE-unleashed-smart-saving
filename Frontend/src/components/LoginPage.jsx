import React, { useState, useEffect, useRef } from 'react';
import loginVideo from '../assets/Login Video.mp4';

const GOOGLE_CLIENT_ID = '71600975758-veb9aofqh6kd4vl1rilkfglh3v89tot4.apps.googleusercontent.com';

const DUMMY_USER = {
  name: 'Mohammed Bilal',
  email: 'demo@core.app',
  picture: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBU1zchY9JV7jLK3de5dQqCq0a0WflbqD84GhfXSaCBhqaCvSiBJBz6RGu1UFCfaLqFEbLzUKJZqJfi1ZypDqC1Gg1mDQS35TwB6LVZdGtjMznVzK72JU8Aza44j0-I-pJ6ti9VrdDYyLhtFSKka2LQqfBAtNv8w0QOFtuKJGW4FuktP5ogLKPU10p6esYghweTvd5VviOpEBDyGgPOKxn5_y_n_So24UHFW4suOyTBOWSYC0ccI9Fy-m_Ln7G_ThXn98m9dOGzdQ',
  plan: 'Free Tier',
  role: 'Freelance Developer',
  memberSince: 'Oct 2022',
  provider: 'email',
};

const DUMMY_PASSWORD = 'demo1234';



const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleReady, setGoogleReady] = useState(false);
  const googleBtnRef = useRef(null);

  // Load Google Identity Services
  useEffect(() => {
    const scriptId = 'google-gsi-script';
    if (document.getElementById(scriptId)) {
      initGoogle();
      return;
    }
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = initGoogle;
    document.head.appendChild(script);
  }, []);

  const initGoogle = () => {
    if (!window.google) return;
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleCredential,
      auto_select: false,
    });
    if (googleBtnRef.current) {
      window.google.accounts.id.renderButton(googleBtnRef.current, {
        type: 'standard',
        theme: 'outline',
        size: 'large',
        text: 'signin_with',
        shape: 'rectangular',
        width: 360,
      });
    }
    setGoogleReady(true);
  };

  // Decode JWT from Google without external lib
  const decodeJwt = (token) => {
    try {
      const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(atob(base64));
    } catch {
      return {};
    }
  };

  const handleGoogleCredential = (response) => {
    const payload = decodeJwt(response.credential);
    onLogin({
      name: payload.name || 'Google User',
      email: payload.email || '',
      picture: payload.picture || '',
      plan: 'Free Tier',
      role: 'Verified via Google',
      memberSince: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      provider: 'google',
    });
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    await new Promise(r => setTimeout(r, 700)); // simulate network
    if (email === DUMMY_USER.email && password === DUMMY_PASSWORD) {
      onLogin(DUMMY_USER);
    } else {
      setError('Invalid email or password. Try demo@core.app / demo1234');
    }
    setLoading(false);
  };

  const fillDemo = () => {
    setEmail(DUMMY_USER.email);
    setPassword(DUMMY_PASSWORD);
    setError('');
  };

  return (
    <div className="min-h-screen flex" style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}>
      {/* ── Left Panel — Full-bleed Video ── */}
      <div className="hidden lg:block lg:w-[54%] relative overflow-hidden">
        {/* Video fills the entire left panel */}
        <video
          src={loginVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#7b2cbf]/60 via-[#7b2cbf]/30 to-[#7b2cbf]/70" />

        {/* Logo (top-left) */}
        <div className="absolute top-8 left-8 flex items-center gap-3 z-10">
          <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-white tracking-tighter">RootFund</h1>
            <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Salary that goes beyond</p>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="absolute bottom-8 left-8 right-8 z-10">
          <p className="text-white/60 text-xs text-center max-w-sm mx-auto">
            See how RootFund helps freelancers save smarter with ML‑powered insights
          </p>
        </div>
      </div>

      {/* ── Right Panel ── */}
      <div className="flex-1 flex flex-col justify-center items-center px-8 bg-slate-50 relative">
        {/* Mobile logo */}
        <div className="flex items-center gap-2 mb-10 lg:hidden">
          <div className="w-9 h-9 rounded-xl bg-[#7b2cbf] flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
          </div>
          <h1 className="text-xl font-extrabold text-white tracking-tighter" style={{ color: '#7b2cbf' }}>RootFund</h1>
        </div>

        <div className="w-full max-w-[400px]">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-1">Welcome back</h2>
          <p className="text-slate-500 text-sm mb-8">Sign in to your account to continue</p>

          {/* Google Button */}
          <div className="mb-6">
            <div
              ref={googleBtnRef}
              id="google-signin-btn"
              className="w-full flex justify-center"
            />
            {!googleReady && (
              <div className="w-full h-[44px] bg-white border border-slate-200 rounded-lg flex items-center justify-center gap-3 text-sm font-medium text-slate-500 animate-pulse">
                <span className="material-symbols-outlined text-[18px]">progress_activity</span>
                Loading Google Sign-In...
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">or continue with email</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Demo hint */}
          <button
            type="button"
            onClick={fillDemo}
            className="w-full mb-5 py-2.5 rounded-xl border-2 border-dashed text-sm font-bold transition-colors flex items-center justify-center gap-2"
            style={{ borderColor: '#7b2cbf40', backgroundColor: '#7b2cbf08', color: '#7b2cbf' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#7b2cbf15'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#7b2cbf08'}
          >
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_fix_high</span>
            Use Demo Account
          </button>

          {/* Email form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">mail</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError(''); }}
                  placeholder="demo@core.app"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none transition-all"
                  style={{ fontFamily: '"SF Pro Display", sans-serif' }}
                  onFocus={e => { e.target.style.boxShadow = '0 0 0 3px #7b2cbf30'; e.target.style.borderColor = '#7b2cbf'; }}
                  onBlur={e => { e.target.style.boxShadow = 'none'; e.target.style.borderColor = '#e2e8f0'; }}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">lock</span>
                <input
                  type={showPass ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError(''); }}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none transition-all"
                  style={{ fontFamily: '"SF Pro Display", sans-serif' }}
                  onFocus={e => { e.target.style.boxShadow = '0 0 0 3px #7b2cbf30'; e.target.style.borderColor = '#7b2cbf'; }}
                  onBlur={e => { e.target.style.boxShadow = 'none'; e.target.style.borderColor = '#e2e8f0'; }}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(p => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <span className="material-symbols-outlined text-[18px]">{showPass ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-start gap-2 p-3 bg-rose-50 border border-rose-100 rounded-xl">
                <span className="material-symbols-outlined text-rose-500 text-[16px] mt-0.5 flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
                <p className="text-rose-600 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 text-white font-bold rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70"
              style={{ backgroundColor: '#7b2cbf', boxShadow: '0 10px 15px -3px #7b2cbf30' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#6a1fb0'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#7b2cbf'}
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                  Signing in...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>login</span>
                  Sign In
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-slate-400 mt-6">
            Demo credentials: <span className="font-bold text-slate-600">demo@core.app</span> / <span className="font-bold text-slate-600">demo1234</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
