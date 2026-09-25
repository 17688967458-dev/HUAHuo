import { useState } from 'react'
import { useNavigate } from 'react-router'
import { feedItems } from '../data'

const tabs = ['同城发现', '向导广场', '城市故事', '好物推荐', '精选商家']

const notices = [
  { icon: '📢', text: '文明出行提醒', sub: '这些行为可能影响你的向导评分' },
  { icon: '🔒', text: '谨防私下交易', sub: '平台严打绕单，保护双方权益' },
]

const features = [
  { label: '向导集市', sub: '发布需求 · 等向导来找你', cta: '去逛逛', icon: '🗺️', bg: '#fdf4ec', path: '/guides' },
  { label: '故事圈', sub: '同好者 · 共享在地热爱', cta: '去看看', icon: '✦', bg: '#fef9f0', path: '/guides' },
  { label: '万人同行', sub: '加入社群 · 解锁新视角', cta: '立即参与', icon: '◉', bg: '#fdf6ee', badge: '限时', path: '/publish' },
]

function HeartIcon({ filled }: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 20 18" className="w-4 h-4" fill={filled ? 'var(--color-terracotta)' : 'none'} stroke={filled ? 'var(--color-terracotta)' : 'var(--color-muted)'} strokeWidth="1.5">
      <path d="M10 16s-8-5.5-8-10a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 4.5-8 10-8 10z" />
    </svg>
  )
}

export default function Home() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(0)
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set())

  const toggleLike = (id: string) => {
    setLikedItems((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div>
      {/* Location + Search */}
      <div className="flex items-center justify-between px-4 py-2">
        <button className="flex items-center gap-1 text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>
          <span>📍</span><span>全国</span><span style={{ fontSize: 10, color: 'var(--color-muted)' }}>▾</span>
        </button>
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
          style={{ background: 'var(--color-sand)', color: 'var(--color-muted)', flex: 1, margin: '0 12px' }}
          onClick={() => navigate('/guides')}
        >
          <span>🔍</span>
          <span>搜索城市、向导、故事…</span>
        </div>
        <button style={{ fontSize: 20 }}>🔔</button>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto px-4 pb-1" style={{ scrollbarWidth: 'none' }}>
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActiveTab(i)}
            className="shrink-0 px-4 py-2 text-sm font-medium relative"
            style={{ color: activeTab === i ? 'var(--color-terracotta)' : 'var(--color-muted)' }}
          >
            {t}
            {activeTab === i && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
                style={{ width: 20, height: 3, background: 'var(--color-terracotta)' }} />
            )}
          </button>
        ))}
      </div>

      {/* Banner */}
      <div className="px-4 mb-3">
        <div
          className="relative rounded-2xl overflow-hidden cursor-pointer"
          style={{ height: 140, background: 'linear-gradient(135deg, #3d2414 0%, #c4603a 60%, #d4893a 100%)' }}
          onClick={() => navigate('/guides')}
        >
          <img src="https://images.unsplash.com/photo-1772764058009-e6cb2203d773?w=800&h=280&fit=crop&auto=format"
            alt="城市" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="relative z-10 p-5 flex flex-col justify-between h-full">
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>诚邀同路人</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
                成为城市的讲述者<br />
                <span style={{ color: 'var(--color-highlight)', fontStyle: 'italic' }}>向导合伙人招募中</span>
              </div>
            </div>
            <button className="self-start px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>
              了解详情 →
            </button>
          </div>
        </div>
      </div>

      {/* Notice row */}
      <div className="px-4 mb-3 grid grid-cols-2 gap-2">
        <div className="rounded-2xl p-4 relative overflow-hidden" style={{ background: '#fff', border: '1px solid var(--color-border)' }}>
          <div className="font-semibold text-sm mb-1" style={{ color: 'var(--color-ink)' }}>平台公告</div>
          <div className="text-xs leading-relaxed mb-3" style={{ color: 'var(--color-muted)' }}>共建真诚社区 · 守护每一次相遇</div>
          <button className="text-xs font-semibold" style={{ color: 'var(--color-terracotta)' }}>查看详情 →</button>
          <div className="absolute right-2 bottom-2 text-4xl opacity-10">🛡️</div>
        </div>
        <div className="flex flex-col gap-2">
          {notices.map((n) => (
            <div key={n.text} className="rounded-xl p-3 flex items-start gap-2" style={{ background: '#fff', border: '1px solid var(--color-border)' }}>
              <span className="text-base mt-0.5">{n.icon}</span>
              <div>
                <div className="text-xs font-semibold" style={{ color: 'var(--color-ink)' }}>{n.text}</div>
                <div className="text-xs mt-0.5 leading-tight" style={{ color: 'var(--color-muted)' }}>{n.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature entries */}
      <div className="px-4 mb-4 grid grid-cols-3 gap-2">
        {features.map((f) => (
          <div key={f.label} className="rounded-2xl p-3 flex flex-col relative overflow-hidden cursor-pointer"
            style={{ background: f.bg, border: '1px solid var(--color-border)' }}
            onClick={() => navigate(f.path)}>
            {f.badge && (
              <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full"
                style={{ background: 'var(--color-terracotta)', color: '#fff', fontSize: '9px', fontWeight: 700 }}>
                {f.badge}
              </div>
            )}
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-xs mb-1" style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-display)' }}>{f.label}</div>
            <div className="text-xs mb-2 leading-tight" style={{ color: 'var(--color-muted)', fontSize: '10px' }}>{f.sub}</div>
            <button className="self-start text-xs font-semibold" style={{ color: 'var(--color-terracotta)', fontSize: '11px' }}>{f.cta} →</button>
          </div>
        ))}
      </div>

      {/* Feed */}
      <div className="flex items-center justify-between px-4 mb-3">
        <div className="font-semibold text-base" style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-display)' }}>为你发现</div>
        <button className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-muted)' }}>最新 ▾</button>
      </div>

      <div className="px-4 pb-4 grid grid-cols-2 gap-2">
        {feedItems.map((item, i) => (
          <div key={item.id} className="rounded-2xl overflow-hidden cursor-pointer"
            style={{ background: '#fff', border: '1px solid var(--color-border)' }}
            onClick={() => navigate(`/story/${item.id}`)}>
            <div className="relative overflow-hidden" style={{ height: i % 3 === 0 ? 180 : 140, background: 'var(--color-sand)' }}>
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,24,16,0.5), transparent 60%)' }} />
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs"
                style={{ background: 'rgba(250,247,242,0.85)', color: 'var(--color-slate)', fontSize: '10px', backdropFilter: 'blur(4px)' }}>
                {item.tag}
              </span>
            </div>
            <div className="p-2.5">
              <div className="text-xs font-semibold mb-1 leading-snug" style={{ color: 'var(--color-ink)' }}>{item.title}</div>
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: 'var(--color-muted)', fontSize: '10px' }}>{item.sub}</span>
                <button className="flex items-center gap-1" onClick={(e) => { e.stopPropagation(); toggleLike(item.id) }}>
                  <HeartIcon filled={likedItems.has(item.id)} />
                  <span className="text-xs" style={{ color: 'var(--color-muted)', fontSize: '10px' }}>
                    {item.likes + (likedItems.has(item.id) ? 1 : 0)}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
