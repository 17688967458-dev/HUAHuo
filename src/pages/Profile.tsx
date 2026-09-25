import { useNavigate } from 'react-router'

const menuItems = [
  { icon: '📋', label: '我的预约', sub: '查看行程安排', path: '/guides' },
  { icon: '★', label: '收藏的故事', sub: '保存的向导故事', path: '/' },
  { icon: '💬', label: '我的评价', sub: '你写下的旅行感受', path: '/messages' },
  { icon: '🗺️', label: '足迹地图', sub: '去过的城市', path: '/' },
  { icon: '🎒', label: '成为向导', sub: '分享你的城市', path: '/publish' },
  { icon: '⚙️', label: '设置', sub: '隐私与账号管理', path: '/' },
]

export default function Profile() {
  const navigate = useNavigate()

  return (
    <div className="pb-6">
      {/* Header bg */}
      <div className="relative" style={{ height: 160 }}>
        <img src="https://images.unsplash.com/photo-1749410348464-852a98a001b2?w=800&h=320&fit=crop&auto=format"
          alt="background" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,24,16,0.3), rgba(250,247,242,1) 95%)' }} />
      </div>

      {/* User info */}
      <div className="px-5 -mt-10 relative z-10">
        <div className="flex items-end justify-between mb-4">
          <div className="w-20 h-20 rounded-full overflow-hidden"
            style={{ border: '3px solid #fff', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', background: 'var(--color-sand)' }}>
            <img src="https://images.unsplash.com/photo-1752650143544-81a9f60fbe5c?w=160&h=160&fit=crop&auto=format"
              alt="我" className="w-full h-full object-cover" />
          </div>
          <button className="px-4 py-2 rounded-full text-sm font-medium"
            style={{ border: '1.5px solid var(--color-border)', color: 'var(--color-slate)', background: '#fff' }}>
            编辑资料
          </button>
        </div>

        <h2 className="font-bold text-xl mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>旅行中的小李</h2>
        <p className="text-sm mb-4" style={{ color: 'var(--color-muted)' }}>用脚步丈量城市，用记忆留住那些不被书写的时刻。</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[['7', '去过的城市'], ['24', '预约次数'], ['3', '写的故事']].map(([num, label]) => (
            <div key={label} className="rounded-2xl p-3 text-center" style={{ background: 'var(--color-sand)' }}>
              <div className="font-bold text-xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>{num}</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--color-muted)' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-1">
          {menuItems.map((item) => (
            <button key={item.label}
              onClick={() => navigate(item.path)}
              className="flex items-center gap-4 px-4 py-4 rounded-2xl text-left w-full transition-all"
              style={{ background: '#fff', border: '1px solid var(--color-border)' }}>
              <span className="text-2xl w-8 text-center">{item.icon}</span>
              <div className="flex-1">
                <div className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>{item.label}</div>
                <div className="text-xs" style={{ color: 'var(--color-muted)' }}>{item.sub}</div>
              </div>
              <span style={{ color: 'var(--color-muted)', fontSize: 16 }}>→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
