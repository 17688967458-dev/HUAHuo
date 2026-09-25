import { useNavigate, useLocation } from 'react-router'

const navItems = [
  { icon: '⌂', label: '首页', path: '/' },
  { icon: '✦', label: '向导', path: '/guides' },
  { icon: '+', label: '', path: '/publish' },
  { icon: '◎', label: '消息', path: '/messages', badge: 2 },
  { icon: '◯', label: '我的', path: '/profile' },
]

export function PhoneShell({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const location = useLocation()

  const isDetailPage = location.pathname.startsWith('/guide/') || location.pathname.startsWith('/story/')

  return (
    <div className="flex justify-center items-center min-h-screen" style={{ background: '#e8e0d4' }}>
      <div
        className="relative flex flex-col overflow-hidden"
        style={{
          width: '390px',
          height: '844px',
          background: 'var(--color-cream)',
          borderRadius: '40px',
          boxShadow: '0 32px 80px rgba(0,0,0,0.28)',
          fontFamily: 'var(--font-body)',
        }}
      >
        {/* Status bar */}
        <div
          className="flex items-center justify-between px-6 pt-3 pb-1 shrink-0"
          style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-ink)' }}
        >
          <span>9:41</span>
          <div style={{ width: 120, height: 28, background: '#1e1810', borderRadius: 20 }} />
          <div className="flex items-center gap-1">
            <span>5G</span>
            <span>100%</span>
          </div>
        </div>

        {/* Page content */}
        <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
          {children}
        </div>

        {/* Bottom nav — hidden on detail pages */}
        {!isDetailPage && (
          <div
            className="shrink-0 flex items-center justify-around px-2 pt-3 pb-5"
            style={{ background: 'rgba(250,247,242,0.96)', borderTop: '1px solid var(--color-border)', backdropFilter: 'blur(12px)' }}
          >
            {navItems.map((item) => {
              const isCenter = item.icon === '+'
              const isActive = item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path)

              if (isCenter) {
                return (
                  <button
                    key="publish"
                    onClick={() => navigate('/publish')}
                    className="flex items-center justify-center rounded-full text-white text-2xl font-light"
                    style={{
                      width: 52, height: 52,
                      background: 'linear-gradient(135deg, var(--color-terracotta), var(--color-amber))',
                      boxShadow: '0 4px 16px rgba(196,96,58,0.4)',
                      marginTop: -10,
                    }}
                  >
                    +
                  </button>
                )
              }

              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="flex flex-col items-center gap-0.5 px-4 relative"
                >
                  {'badge' in item && item.badge && !isActive && (
                    <span
                      className="absolute top-0 right-2 w-4 h-4 rounded-full flex items-center justify-center text-white"
                      style={{ background: 'var(--color-terracotta)', fontSize: '9px', fontWeight: 700 }}
                    >
                      {item.badge}
                    </span>
                  )}
                  <span style={{ fontSize: 20, color: isActive ? 'var(--color-terracotta)' : 'var(--color-muted)' }}>
                    {item.icon}
                  </span>
                  <span className="text-xs" style={{ color: isActive ? 'var(--color-terracotta)' : 'var(--color-muted)' }}>
                    {item.label}
                  </span>
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
