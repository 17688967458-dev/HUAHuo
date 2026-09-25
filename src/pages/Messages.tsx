import { useNavigate } from 'react-router'
import { messages } from '../data'

export default function Messages() {
  const navigate = useNavigate()

  return (
    <div>
      {/* Header */}
      <div className="px-5 pt-3 pb-4">
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-ink)' }}>消息</h1>
        <p className="text-xs mt-1" style={{ color: 'var(--color-muted)' }}>与向导的每一次对话，都从这里开始</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 px-5 pb-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
        {['全部', '未读', '预约中'].map((t, i) => (
          <button key={t} className="text-sm pb-2 font-medium relative"
            style={{ color: i === 0 ? 'var(--color-terracotta)' : 'var(--color-muted)' }}>
            {t}
            {i === 0 && <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded" style={{ background: 'var(--color-terracotta)' }} />}
          </button>
        ))}
      </div>

      {/* Message list */}
      <div className="px-4 pt-3 flex flex-col gap-1">
        {messages.map((msg) => (
          <div key={msg.id}
            className="flex items-center gap-3 px-3 py-4 rounded-2xl cursor-pointer transition-all"
            style={{ background: msg.unread > 0 ? '#fff' : 'transparent' }}
            onClick={() => navigate(`/guide/${msg.guideId}`)}>
            <div className="relative shrink-0">
              <img src={msg.avatar} alt={msg.name} className="w-12 h-12 rounded-full object-cover"
                style={{ border: '1.5px solid var(--color-border)' }} />
              {msg.unread > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-white"
                  style={{ background: 'var(--color-terracotta)', fontSize: '10px', fontWeight: 700 }}>
                  {msg.unread}
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <span className="font-semibold text-sm" style={{ color: 'var(--color-ink)' }}>{msg.name}</span>
                <span className="text-xs" style={{ color: 'var(--color-muted)' }}>{msg.time}</span>
              </div>
              <div className="text-xs" style={{ color: 'var(--color-muted)' }}>📍 {msg.city}</div>
              <p className="text-sm mt-1 truncate"
                style={{ color: msg.unread > 0 ? 'var(--color-ink)' : 'var(--color-muted)', fontWeight: msg.unread > 0 ? 500 : 400 }}>
                {msg.lastMsg}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state hint */}
      <div className="mx-5 mt-6 p-5 rounded-2xl text-center" style={{ background: 'var(--color-sand)' }}>
        <div className="text-2xl mb-2">✉️</div>
        <div className="text-sm font-medium mb-1" style={{ color: 'var(--color-ink)' }}>还没找到心仪的向导？</div>
        <div className="text-xs mb-3" style={{ color: 'var(--color-muted)' }}>浏览向导广场，发出第一条消息</div>
        <button onClick={() => navigate('/guides')}
          className="px-6 py-2 rounded-full text-sm font-semibold"
          style={{ background: 'var(--color-terracotta)', color: '#fff' }}>
          去找向导
        </button>
      </div>
    </div>
  )
}
