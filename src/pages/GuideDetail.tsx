import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { guides } from '../data'

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1,2,3,4,5].map((s) => (
        <svg key={s} className="w-3.5 h-3.5" viewBox="0 0 12 12"
          fill={s <= Math.round(rating) ? 'var(--color-amber)' : 'var(--color-border)'}>
          <path d="M6 1l1.39 2.82 3.11.45-2.25 2.19.53 3.09L6 8.25 3.22 9.55l.53-3.09L1.5 4.27l3.11-.45z" />
        </svg>
      ))}
    </span>
  )
}

export default function GuideDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const guide = guides.find((g) => g.id === id)
  const [showContact, setShowContact] = useState(false)

  if (!guide) {
    return (
      <div className="flex flex-col items-center justify-center h-full" style={{ color: 'var(--color-muted)' }}>
        <div className="text-4xl mb-3">😶</div>
        <div>找不到这位向导</div>
        <button onClick={() => navigate('/guides')} className="mt-4 text-sm" style={{ color: 'var(--color-terracotta)' }}>← 返回列表</button>
      </div>
    )
  }

  return (
    <div className="pb-32">
      {/* Cover */}
      <div className="relative h-56" style={{ background: 'var(--color-sand)' }}>
        <img src={guide.cover} alt={guide.city} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,24,16,0.7) 0%, transparent 50%)' }} />
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(250,247,242,0.85)', backdropFilter: 'blur(8px)', color: 'var(--color-ink)' }}>
          ←
        </button>
        {/* Available badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
          style={{ background: guide.available ? 'var(--color-highlight)' : 'rgba(255,255,255,0.7)', color: 'var(--color-ink)' }}>
          {guide.available ? '今日可约' : '暂不可约'}
        </div>
      </div>

      {/* Profile info */}
      <div className="px-5 pt-4">
        <div className="flex items-end gap-4 mb-4">
          <img src={guide.avatar} alt={guide.name}
            className="w-16 h-16 rounded-full object-cover"
            style={{ border: '3px solid #fff', marginTop: -32, position: 'relative', zIndex: 1, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} />
          <div className="flex-1 pb-1">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-bold text-xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>{guide.name}</h1>
                <div className="text-sm" style={{ color: 'var(--color-muted)' }}>📍 {guide.city}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-terracotta)' }}>¥{guide.price}</div>
                <div className="text-xs" style={{ color: 'var(--color-muted)' }}>/ 天</div>
              </div>
            </div>
          </div>
        </div>

        {/* Rating row */}
        <div className="flex items-center gap-3 mb-5">
          <StarRating rating={guide.rating} />
          <span className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>{guide.rating}</span>
          <span className="text-sm" style={{ color: 'var(--color-muted)' }}>({guide.reviews} 条评价)</span>
          <span style={{ color: 'var(--color-border)' }}>·</span>
          {guide.lang.map((l) => (
            <span key={l} className="text-xs px-2 py-0.5 rounded-full"
              style={{ background: 'var(--color-sand)', color: 'var(--color-slate)' }}>{l}</span>
          ))}
        </div>

        {/* Bio */}
        <div className="mb-5 p-4 rounded-2xl" style={{ background: 'var(--color-sand)' }}>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-slate)' }}>{guide.bio}</p>
        </div>

        {/* Tags */}
        <div className="mb-5">
          <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-muted)' }}>擅长领域</div>
          <div className="flex flex-wrap gap-2">
            {guide.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full text-sm font-medium"
                style={{ background: '#fff', border: '1.5px solid var(--color-border)', color: 'var(--color-slate)' }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Experiences */}
        <div className="mb-5">
          <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-muted)' }}>精选体验路线</div>
          <div className="flex flex-col gap-2">
            {guide.experiences.map((exp, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl"
                style={{ background: '#fff', border: '1px solid var(--color-border)' }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ background: 'var(--color-terracotta)', color: '#fff' }}>{i + 1}</div>
                <span className="text-sm" style={{ color: 'var(--color-ink)' }}>{exp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-muted)' }}>旅行者的话</div>
          <div className="flex flex-col gap-3">
            {guide.reviews_list.map((r, i) => (
              <div key={i} className="p-4 rounded-2xl" style={{ background: '#fff', border: '1px solid var(--color-border)' }}>
                <p className="text-sm leading-relaxed mb-3 italic" style={{ color: 'var(--color-slate)' }}>"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold" style={{ color: 'var(--color-muted)' }}>{r.name}</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} className="w-3 h-3" viewBox="0 0 12 12" fill="var(--color-amber)">
                        <path d="M6 1l1.39 2.82 3.11.45-2.25 2.19.53 3.09L6 8.25 3.22 9.55l.53-3.09L1.5 4.27l3.11-.45z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed bottom CTA */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px] px-5 py-4"
        style={{ background: 'rgba(250,247,242,0.96)', borderTop: '1px solid var(--color-border)', backdropFilter: 'blur(12px)' }}>
        {showContact ? (
          <div className="flex gap-3">
            <button onClick={() => navigate('/messages')}
              className="flex-1 py-3 rounded-2xl font-semibold text-sm"
              style={{ background: 'var(--color-terracotta)', color: '#fff' }}>
              发消息给 {guide.name}
            </button>
            <button onClick={() => setShowContact(false)}
              className="px-4 py-3 rounded-2xl text-sm"
              style={{ background: 'var(--color-sand)', color: 'var(--color-muted)' }}>
              取消
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <div className="flex-1">
              <div className="text-xs mb-0.5" style={{ color: 'var(--color-muted)' }}>起步价</div>
              <div className="font-bold text-lg" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-terracotta)' }}>¥{guide.price} <span className="text-xs font-normal" style={{ color: 'var(--color-muted)' }}>/ 天</span></div>
            </div>
            <button
              onClick={() => guide.available && setShowContact(true)}
              className="px-8 py-3 rounded-2xl font-semibold text-sm"
              style={{
                background: guide.available ? 'var(--color-terracotta)' : 'var(--color-sand)',
                color: guide.available ? '#fff' : 'var(--color-muted)',
              }}>
              {guide.available ? '立即预约' : '加入等候'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
