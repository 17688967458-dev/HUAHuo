import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { feedItems, guides } from '../data'

export default function StoryDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const story = feedItems.find((f) => f.id === id)
  const guide = guides.find((g) => g.id === story?.guideId)
  const [liked, setLiked] = useState(false)
  const [collected, setCollected] = useState(false)

  if (!story) return (
    <div className="flex flex-col items-center justify-center h-full" style={{ color: 'var(--color-muted)' }}>
      <div className="text-4xl mb-3">📖</div>
      <div>故事不见了</div>
      <button onClick={() => navigate('/')} className="mt-4 text-sm" style={{ color: 'var(--color-terracotta)' }}>← 返回首页</button>
    </div>
  )

  return (
    <div className="pb-24">
      {/* Hero image */}
      <div className="relative" style={{ height: 260, background: 'var(--color-sand)' }}>
        <img src={story.images[0]} alt={story.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,24,16,0.7) 0%, rgba(30,24,16,0.1) 50%, transparent 100%)' }} />
        <button onClick={() => navigate(-1)}
          className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(250,247,242,0.85)', backdropFilter: 'blur(8px)', color: 'var(--color-ink)' }}>
          ←
        </button>
        <div className="absolute bottom-4 left-5 right-5">
          <span className="inline-block px-2.5 py-1 rounded-full text-xs mb-2"
            style={{ background: 'rgba(240,192,112,0.9)', color: 'var(--color-ink)', fontWeight: 600 }}>
            {story.tag}
          </span>
          <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)', lineHeight: 1.3 }}>
            {story.title}
          </h1>
        </div>
      </div>

      {/* Author row */}
      <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => guide && navigate(`/guide/${guide.id}`)}>
          <img src={story.avatar} alt={story.sub} className="w-10 h-10 rounded-full object-cover"
            style={{ border: '2px solid var(--color-border)' }} />
          <div>
            <div className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>{story.sub}</div>
            <div className="text-xs" style={{ color: 'var(--color-muted)' }}>查看向导主页 →</div>
          </div>
        </div>
        <button
          className="px-4 py-1.5 rounded-full text-sm font-semibold"
          style={{ background: 'var(--color-terracotta)', color: '#fff' }}
          onClick={() => guide && navigate(`/guide/${guide.id}`)}>
          预约
        </button>
      </div>

      {/* Story content */}
      <div className="px-5 py-5">
        {story.content.split('\n\n').map((para, i) => (
          <p key={i} className="text-base leading-relaxed mb-5" style={{ color: 'var(--color-slate)' }}>{para}</p>
        ))}

        {/* Extra images */}
        {story.images.length > 1 && (
          <div className="flex flex-col gap-3 mt-2">
            {story.images.slice(1).map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ height: 200, background: 'var(--color-sand)' }}>
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Related guide CTA */}
      {guide && (
        <div className="mx-5 mb-4 p-4 rounded-2xl flex items-center gap-3 cursor-pointer"
          style={{ background: 'var(--color-sand)', border: '1px solid var(--color-border)' }}
          onClick={() => navigate(`/guide/${guide.id}`)}>
          <img src={guide.avatar} alt={guide.name} className="w-12 h-12 rounded-full object-cover"
            style={{ border: '2px solid var(--color-border)' }} />
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>{guide.name} · {guide.city}向导</div>
            <div className="text-xs mt-0.5 truncate" style={{ color: 'var(--color-muted)' }}>{guide.bio.slice(0, 40)}…</div>
          </div>
          <span style={{ color: 'var(--color-terracotta)', fontSize: 18 }}>→</span>
        </div>
      )}

      {/* Fixed bottom action bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px] px-5 py-4 flex items-center gap-4"
        style={{ background: 'rgba(250,247,242,0.96)', borderTop: '1px solid var(--color-border)', backdropFilter: 'blur(12px)' }}>
        <button onClick={() => setLiked(!liked)} className="flex items-center gap-2 px-4 py-2.5 rounded-full"
          style={{ background: liked ? '#fdf0eb' : 'var(--color-sand)', border: '1.5px solid', borderColor: liked ? 'var(--color-terracotta)' : 'var(--color-border)' }}>
          <svg viewBox="0 0 20 18" className="w-4 h-4" fill={liked ? 'var(--color-terracotta)' : 'none'}
            stroke={liked ? 'var(--color-terracotta)' : 'var(--color-muted)'} strokeWidth="1.5">
            <path d="M10 16s-8-5.5-8-10a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 4.5-8 10-8 10z" />
          </svg>
          <span className="text-sm" style={{ color: liked ? 'var(--color-terracotta)' : 'var(--color-muted)' }}>
            {story.likes + (liked ? 1 : 0)}
          </span>
        </button>
        <button onClick={() => setCollected(!collected)} className="flex items-center gap-2 px-4 py-2.5 rounded-full"
          style={{ background: collected ? '#fdf0eb' : 'var(--color-sand)', border: '1.5px solid', borderColor: collected ? 'var(--color-terracotta)' : 'var(--color-border)' }}>
          <span style={{ color: collected ? 'var(--color-terracotta)' : 'var(--color-muted)', fontSize: 16 }}>{collected ? '★' : '☆'}</span>
          <span className="text-sm" style={{ color: collected ? 'var(--color-terracotta)' : 'var(--color-muted)' }}>收藏</span>
        </button>
        <button className="flex-1 py-2.5 rounded-full font-semibold text-sm"
          style={{ background: 'var(--color-terracotta)', color: '#fff' }}
          onClick={() => guide && navigate(`/guide/${guide.id}`)}>
          预约这位向导
        </button>
      </div>
    </div>
  )
}
