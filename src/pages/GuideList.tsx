import { useState } from 'react'
import { useNavigate } from 'react-router'
import { guides } from '../data'

const cities = ['全部', '成都', '上海', '西安', '北京']

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1,2,3,4,5].map((s) => (
        <svg key={s} className="w-3 h-3" viewBox="0 0 12 12"
          fill={s <= Math.round(rating) ? 'var(--color-amber)' : 'var(--color-border)'}>
          <path d="M6 1l1.39 2.82 3.11.45-2.25 2.19.53 3.09L6 8.25 3.22 9.55l.53-3.09L1.5 4.27l3.11-.45z" />
        </svg>
      ))}
    </span>
  )
}

export default function GuideList() {
  const navigate = useNavigate()
  const [activeCity, setActiveCity] = useState('全部')
  const [search, setSearch] = useState('')

  const filtered = guides.filter((g) => {
    const cityMatch = activeCity === '全部' || g.city === activeCity
    const searchMatch = !search || g.name.includes(search) || g.city.includes(search) || g.tags.some(t => t.includes(search))
    return cityMatch && searchMatch
  })

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <button onClick={() => navigate('/')} className="text-xl" style={{ color: 'var(--color-ink)' }}>←</button>
        <div className="flex-1 flex items-center gap-2 px-4 py-2 rounded-full text-sm"
          style={{ background: 'var(--color-sand)', color: 'var(--color-muted)' }}>
          <span>🔍</span>
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="搜索向导、城市、标签…"
            className="flex-1 outline-none bg-transparent text-sm"
            style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-body)' }} />
        </div>
      </div>

      {/* Section title */}
      <div className="px-4 mb-4">
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-ink)' }}>
          找一个带你<em style={{ color: 'var(--color-terracotta)', fontStyle: 'italic' }}>回家</em>的人
        </h1>
        <p className="text-xs mt-1" style={{ color: 'var(--color-muted)' }}>全部 {guides.length} 位认证向导，均经历背景核验</p>
      </div>

      {/* City filter */}
      <div className="flex gap-2 px-4 pb-3 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
        {cities.map((c) => (
          <button key={c} onClick={() => setActiveCity(c)}
            className="shrink-0 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{
              background: activeCity === c ? 'var(--color-terracotta)' : '#fff',
              color: activeCity === c ? '#fff' : 'var(--color-slate)',
              border: '1.5px solid',
              borderColor: activeCity === c ? 'var(--color-terracotta)' : 'var(--color-border)',
            }}>
            {c}
          </button>
        ))}
      </div>

      {/* Guide cards */}
      <div className="px-4 pb-6 flex flex-col gap-3">
        {filtered.map((guide) => (
          <div key={guide.id} className="rounded-2xl overflow-hidden cursor-pointer"
            style={{ background: '#fff', border: '1px solid var(--color-border)' }}
            onClick={() => navigate(`/guide/${guide.id}`)}>
            <div className="relative h-36 overflow-hidden" style={{ background: 'var(--color-sand)' }}>
              <img src={guide.cover} alt={guide.city} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,24,16,0.6), transparent 50%)' }} />
              <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-semibold"
                style={{ background: guide.available ? 'var(--color-highlight)' : 'rgba(255,255,255,0.7)', color: 'var(--color-ink)' }}>
                {guide.available ? '今日可约' : '暂不可约'}
              </span>
            </div>
            <div className="p-4 flex gap-3">
              <img src={guide.avatar} alt={guide.name}
                className="w-12 h-12 rounded-full object-cover shrink-0"
                style={{ border: '2px solid var(--color-border)', marginTop: -28, position: 'relative', zIndex: 1 }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-semibold text-sm" style={{ color: 'var(--color-ink)' }}>{guide.name}</span>
                  <span className="font-bold" style={{ color: 'var(--color-terracotta)', fontFamily: 'var(--font-display)' }}>¥{guide.price}<span className="text-xs font-normal" style={{ color: 'var(--color-muted)' }}>/天</span></span>
                </div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-xs" style={{ color: 'var(--color-muted)' }}>📍{guide.city}</span>
                  <StarRating rating={guide.rating} />
                  <span className="text-xs" style={{ color: 'var(--color-muted)' }}>{guide.rating} ({guide.reviews})</span>
                </div>
                <p className="text-xs leading-relaxed mb-2" style={{ color: 'var(--color-muted)' }}>{guide.bio.slice(0, 50)}…</p>
                <div className="flex flex-wrap gap-1">
                  {guide.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full text-xs"
                      style={{ background: 'var(--color-sand)', color: 'var(--color-slate)' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-16" style={{ color: 'var(--color-muted)' }}>
            <div className="text-4xl mb-3">🔍</div>
            <div className="text-sm">暂无匹配的向导</div>
            <div className="text-xs mt-1">试试其他城市或关键词</div>
          </div>
        )}
      </div>
    </div>
  )
}
