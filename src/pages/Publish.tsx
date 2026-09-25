import { useState } from 'react'
import { useNavigate } from 'react-router'

const types = [
  { id: 'guide', label: '找向导', sub: '发布出行需求，让合适的向导来联系你', icon: '🗺️' },
  { id: 'story', label: '写故事', sub: '记录你的在地体验，分享给有缘的旅人', icon: '✍️' },
  { id: 'apply', label: '申请向导', sub: '分享你对城市的热爱，成为认证地陪', icon: '🧭' },
]

const cities = ['成都', '上海', '北京', '西安', '广州', '重庆', '杭州', '厦门']

export default function Publish() {
  const navigate = useNavigate()
  const [activeType, setActiveType] = useState('guide')
  const [city, setCity] = useState('')
  const [date, setDate] = useState('')
  const [content, setContent] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full px-8 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h2 className="font-bold text-xl mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
          已成功发布
        </h2>
        <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--color-muted)' }}>
          你的需求已经发出去了。<br />合适的向导会主动来联系你。
        </p>
        <button onClick={() => navigate('/')}
          className="px-8 py-3 rounded-full font-semibold text-sm"
          style={{ background: 'var(--color-terracotta)', color: '#fff' }}>
          返回首页
        </button>
        <button onClick={() => navigate('/messages')}
          className="mt-3 px-8 py-3 rounded-full text-sm font-medium"
          style={{ color: 'var(--color-terracotta)', border: '1.5px solid var(--color-terracotta)' }}>
          去消息页等待回复
        </button>
      </div>
    )
  }

  return (
    <div className="pb-8">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-3">
        <button onClick={() => navigate(-1)} className="text-xl" style={{ color: 'var(--color-ink)' }}>✕</button>
        <h1 className="font-bold text-lg" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>发布</h1>
      </div>

      {/* Type picker */}
      <div className="px-5 mb-5">
        <div className="flex flex-col gap-2">
          {types.map((t) => (
            <button key={t.id}
              onClick={() => setActiveType(t.id)}
              className="flex items-center gap-4 p-4 rounded-2xl text-left transition-all"
              style={{
                background: activeType === t.id ? '#fdf0eb' : '#fff',
                border: '1.5px solid',
                borderColor: activeType === t.id ? 'var(--color-terracotta)' : 'var(--color-border)',
              }}>
              <span className="text-2xl w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: activeType === t.id ? 'var(--color-terracotta)' : 'var(--color-sand)' }}>
                {t.icon}
              </span>
              <div>
                <div className="font-semibold text-sm" style={{ color: 'var(--color-ink)' }}>{t.label}</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--color-muted)' }}>{t.sub}</div>
              </div>
              {activeType === t.id && (
                <div className="ml-auto w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--color-terracotta)', color: '#fff', fontSize: '12px' }}>✓</div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="px-5 flex flex-col gap-4">
        {activeType === 'guide' && (
          <>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: 'var(--color-muted)' }}>目的城市</label>
              <div className="flex flex-wrap gap-2">
                {cities.map((c) => (
                  <button key={c} onClick={() => setCity(c)}
                    className="px-3 py-1.5 rounded-full text-sm"
                    style={{
                      background: city === c ? 'var(--color-terracotta)' : '#fff',
                      color: city === c ? '#fff' : 'var(--color-slate)',
                      border: '1.5px solid',
                      borderColor: city === c ? 'var(--color-terracotta)' : 'var(--color-border)',
                    }}>
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: 'var(--color-muted)' }}>出行日期</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl outline-none text-sm"
                style={{ background: '#fff', border: '1.5px solid var(--color-border)', color: 'var(--color-ink)', fontFamily: 'var(--font-body)' }} />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: 'var(--color-muted)' }}>你想体验什么？</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="说说你的期待：美食、历史、市井生活、夜晚的酒吧……越具体越好，向导会更容易找到你。"
                rows={5}
                className="w-full px-4 py-3 rounded-xl outline-none text-sm leading-relaxed resize-none"
                style={{ background: '#fff', border: '1.5px solid var(--color-border)', color: 'var(--color-ink)', fontFamily: 'var(--font-body)' }} />
            </div>
          </>
        )}

        {activeType === 'story' && (
          <>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: 'var(--color-muted)' }}>故事发生在哪里？</label>
              <div className="flex flex-wrap gap-2">
                {cities.map((c) => (
                  <button key={c} onClick={() => setCity(c)}
                    className="px-3 py-1.5 rounded-full text-sm"
                    style={{
                      background: city === c ? 'var(--color-terracotta)' : '#fff',
                      color: city === c ? '#fff' : 'var(--color-slate)',
                      border: '1.5px solid',
                      borderColor: city === c ? 'var(--color-terracotta)' : 'var(--color-border)',
                    }}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: 'var(--color-muted)' }}>写下你的故事</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="那天，我在一条没有名字的巷子里……"
                rows={8}
                className="w-full px-4 py-3 rounded-xl outline-none text-sm leading-relaxed resize-none"
                style={{ background: '#fff', border: '1.5px solid var(--color-border)', color: 'var(--color-ink)', fontFamily: 'var(--font-body)' }} />
            </div>
          </>
        )}

        {activeType === 'apply' && (
          <>
            <div className="p-4 rounded-2xl" style={{ background: 'var(--color-sand)' }}>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-slate)' }}>
                成为地陪向导，你只需要两样东西：<br /><br />
                <strong>1. 对这座城市真正的热爱</strong><br />
                不是景点介绍，而是那些只有住在这里才知道的事。<br /><br />
                <strong>2. 愿意花时间陪伴陌生人</strong><br />
                不是完成一份工作，而是带人回家的那种感觉。
              </p>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: 'var(--color-muted)' }}>你在哪座城市？</label>
              <div className="flex flex-wrap gap-2">
                {cities.map((c) => (
                  <button key={c} onClick={() => setCity(c)}
                    className="px-3 py-1.5 rounded-full text-sm"
                    style={{
                      background: city === c ? 'var(--color-terracotta)' : '#fff',
                      color: city === c ? '#fff' : 'var(--color-slate)',
                      border: '1.5px solid',
                      borderColor: city === c ? 'var(--color-terracotta)' : 'var(--color-border)',
                    }}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: 'var(--color-muted)' }}>用一段话介绍你的城市</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="如果你的朋友只有一天可以待在这座城市，你会带他去哪里？"
                rows={6}
                className="w-full px-4 py-3 rounded-xl outline-none text-sm leading-relaxed resize-none"
                style={{ background: '#fff', border: '1.5px solid var(--color-border)', color: 'var(--color-ink)', fontFamily: 'var(--font-body)' }} />
            </div>
          </>
        )}

        <button
          onClick={() => (city || content) && setSubmitted(true)}
          className="w-full py-4 rounded-2xl font-semibold text-base mt-2"
          style={{
            background: (city || content) ? 'var(--color-terracotta)' : 'var(--color-sand)',
            color: (city || content) ? '#fff' : 'var(--color-muted)',
            transition: 'all 0.2s',
          }}>
          {activeType === 'guide' ? '发布需求' : activeType === 'story' ? '发布故事' : '提交申请'}
        </button>
      </div>
    </div>
  )
}
