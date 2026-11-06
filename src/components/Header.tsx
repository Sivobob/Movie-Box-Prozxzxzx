import { useAuth, isAuthorizedAdminEmail } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export default function Header() {
  const { 
    user, 
    isAdmin, 
    loading, 
    signInWithEmail,
    handleLogout 
  } = useAuth();
  
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthorizedAdmin = isAuthorizedAdminEmail(user?.email);
  const canAccessAdmin = isAuthorizedAdmin && isAdmin;
  const isOnAdmin = location.pathname.startsWith('/admin');

  const handleAdminClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/admin');
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <>
      <header className="sticky top-0 left-0 w-full p-4 flex justify-between items-center z-40 bg-black/90 backdrop-blur-md border-b border-neutral-900">
        <div 
          onClick={handleHomeClick}
          className="cursor-pointer flex flex-col items-start select-none"
        >
          <h1 className="text-yellow-400 font-extrabold text-sm sm:text-base tracking-widest uppercase flex items-center gap-1.5">
            <span>MOVIE PORTAL</span>
            <span className="text-[9px] bg-yellow-400/20 text-yellow-400 font-mono font-bold px-1.5 py-0.2 rounded border border-yellow-400/30">PRO</span>
          </h1>
          <span className="text-[9px] text-gray-500 tracking-wider">THE ULTIMATE MOVIE HUB</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {loading ? (
            <span className="text-xs text-gray-500 animate-pulse">Loading...</span>
          ) : user ? (
            <div className="flex gap-2 items-center">
              {/* User Identity Pill */}
              <div className="hidden sm:flex items-center gap-1.5 bg-neutral-900/90 border border-neutral-800 rounded-full py-1 px-2.5 text-[11px] text-gray-300">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="max-w-[160px] truncate font-medium text-gray-200">
                  {user.email || user.displayName || 'User'}
                </span>
                {canAccessAdmin && (
                  <span className="bg-yellow-400/20 text-yellow-400 text-[9px] font-black px-1.5 py-0.2 rounded border border-yellow-400/30 uppercase">
                    Admin
                  </span>
                )}
              </div>

              {canAccessAdmin && (
                <button
                  type="button"
                  onClick={handleAdminClick}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all border flex items-center gap-1.5 cursor-pointer ${
                    isOnAdmin
                      ? 'bg-yellow-400 text-black border-yellow-400 shadow-md shadow-yellow-500/20'
                      : 'text-yellow-400 border-yellow-500/50 hover:bg-yellow-400/10'
                  }`}
                >
                  <ShieldCheck size={14} />
                  <span>Admin Panel</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => handleLogout()}
                className="px-2.5 py-1.5 rounded-lg text-xs text-gray-300 hover:text-white bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : null}
        </div>
      </header>
    </>
  );
}
