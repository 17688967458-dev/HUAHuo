import { useEffect, useRef, useState } from 'react'
import {
  OrnamentFrame, PipeIcon, MaskIcon, CoinIcon,
  FormOneFigure, FormOneEmotions,
  FormTwoKeyArt, TattooPattern,
  FormThreeFigure,
  
} from './CarnivalArt'

const characterProfile = {
  nameZh: '花火',
  nameEn: 'Hanabi',
  identity: '黑帮女大佬',
  forms: '三种 (Form I~III)',
  props: '烟枪 · 面具 · 金币',
}

/* ── shared layout helpers ────────────────────────────── */
function ChapterDivider({ num, zh, en }: { num: string; zh: string; en: string }) {
  return (
    <div style={{ background: '#0D0404', padding: '28px clamp(24px, 8vw, 120px)', borderTop: '1px solid rgba(139,0,0,0.3)', borderBottom: '1px solid rgba(139,0,0,0.3)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#8B0000', letterSpacing: '0.25em', textTransform: 'uppercase' }}>CHAPTER {num}</span>
        <div style={{ flex: 1, minWidth: 40, height: 1, background: 'rgba(139,0,0,0.25)' }} />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'rgba(255,255,255,0.4)' }}>{zh}</span>
        <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.85rem', color: 'rgba(255,255,255,0.2)' }}>· {en} ·</span>
        <div style={{ flex: 1, minWidth: 40, height: 1, background: 'rgba(139,0,0,0.25)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'rgba(255,255,255,0.18)', letterSpacing: '0.2em' }}>◈</span>
      </div>
    </div>
  )
}

function AnnotationLabel({ text }: { text: string }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <div style={{ width: 18, height: 1, background: 'rgba(212,175,55,0.4)' }} />
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.18em', color: 'rgba(212,175,55,0.6)', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

/* ── Hero ─────────────────────────────────────────────── */
function Hero({ onScroll }: { onScroll: () => void }) {
  return (
    <section style={{ minHeight: '100vh', background: '#0B0B0B', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '0 24px' }}>
      {/* Grid texture */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(139,0,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(139,0,0,0.04) 1px,transparent 1px)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />
      {/* Corner marks */}
      {['top-8 left-8','top-8 right-8','bottom-8 left-8','bottom-8 right-8'].map((pos, i) => (
        <div key={i} className={`absolute ${pos}`} style={{ width: 22, height: 22, border: '1px solid rgba(212,175,55,0.22)', borderRadius: 2 }} />
      ))}

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 820, textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.35em', color: '#8B0000', marginBottom: 32, textTransform: 'uppercase' }}>
          Character Design & Visual Concept · Portfolio 2026
        </div>

        <OrnamentFrame width={580} height={28} color="rgba(212,175,55,0.28)" />
        <div style={{ marginTop: 28 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 10vw, 9rem)', lineHeight: 0.88, color: '#fff', letterSpacing: '-0.01em' }}>虚无的</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 10vw, 9rem)', lineHeight: 0.88, color: '#8B0000', letterSpacing: '-0.01em', marginBottom: 20 }}>庆典</div>
        </div>
        <OrnamentFrame width={580} height={28} color="rgba(212,175,55,0.28)" />

        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', color: 'rgba(255,255,255,0.38)', letterSpacing: '0.1em', marginTop: 22, lineHeight: 1.8 }}>
          The Nihilistic Carnival · Visual Concept & Character Design Sheet
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 24, marginTop: 48 }}>
          {[['01','概念哲学'],['02','角色蜕变'],['03','色板细节']].map(([n, label]) => (
            <span key={n} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.18em' }}>
              {n}. {label}
            </span>
          ))}
        </div>

        <button onClick={onScroll} style={{ marginTop: 64, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.2em' }}>
          <span>SCROLL TO BEGIN</span>
          <div style={{ width: 1, height: 44, background: 'linear-gradient(to bottom, rgba(255,255,255,0.2),transparent)' }} />
        </button>
      </div>
    </section>
  )
}

/* ── Chapter 1 ─────────────────────────────────────────── */
function ChapterOne() {
  return (
    <section style={{ background: '#0B0B0B' }}>
      {/* Ch1: Header spread */}
      <div style={{ padding: 'clamp(60px,8vw,100px) clamp(24px,8vw,120px) 0' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#8B0000', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 6 }}>CHAPTER 01</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3.5rem)', color: '#fff', marginBottom: 4, lineHeight: 1.05 }}>概念与哲学底座</h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', marginBottom: 48 }}>Concept & Philosophy</p>
        <OrnamentFrame color="rgba(139,0,0,0.4)" />
      </div>

      {/* Ch1: Moodboard + Concept Statement — two column spread */}
      <div style={{ padding: 'clamp(48px,6vw,80px) clamp(24px,8vw,120px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(32px,5vw,72px)' }}>

        {/* LEFT: Moodboard */}
        <div>
          <AnnotationLabel text="Moodboard · 情绪板" />
          <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
            {/* Large top image */}
            <div style={{ gridColumn: 'span 2', position: 'relative', overflow: 'hidden', height: 200, background: '#1A0808' }}>
              <img src="https://images.unsplash.com/photo-1508557446787-73acf2380f97?w=800&h=400&fit=crop&auto=format" alt="Dark mask theatrical" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%) contrast(1.1)', opacity: 0.7, display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(139,0,0,0.4),rgba(11,11,11,0.5))' }} />
              <div style={{ position: 'absolute', bottom: 12, left: 14, fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'rgba(212,175,55,0.7)', letterSpacing: '0.15em' }}>虚无 · VOID</div>
            </div>
            {/* Bottom two */}
            <div style={{ position: 'relative', overflow: 'hidden', height: 150, background: '#1A0808' }}>
              <img src="https://images.unsplash.com/photo-1774744649827-ca5e52367903?w=400&h=300&fit=crop&auto=format" alt="Puppet theater" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(45%) contrast(1.2)', opacity: 0.65, display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(139,0,0,0.3)' }} />
              <div style={{ position: 'absolute', bottom: 10, left: 10, fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'rgba(212,175,55,0.6)', letterSpacing: '0.12em' }}>PUPPET</div>
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', height: 150, background: '#1A0808' }}>
              <img src="https://images.unsplash.com/photo-1563905810819-351c6649df16?w=400&h=300&fit=crop&auto=format" alt="Carnival mask" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(40%) contrast(1.15)', opacity: 0.65, display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,11,11,0.4)' }} />
              <div style={{ position: 'absolute', bottom: 10, left: 10, fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'rgba(212,175,55,0.6)', letterSpacing: '0.12em' }}>MASQUERADE</div>
            </div>
          </div>

          {/* Palette strip */}
          <div style={{ marginTop: 14 }}>
            <div style={{ display: 'flex', height: 10 }}>
              {['#0B0B0B','#8B0000','#D4AF37','#1C0808','rgba(255,255,255,0.08)'].map((c, i) => (
                <div key={i} style={{ flex: 1, background: c }} />
              ))}
            </div>
            <div style={{ display: 'flex', marginTop: 5 }}>
              {[['#0B0B0B','漆黑'],['#8B0000','暗红'],['#D4AF37','墨金'],['#1C0808','深红黑'],['—','烟雾']].map(([hex, name], i) => (
                <div key={i} style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.04em' }}>{hex}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'rgba(255,255,255,0.4)' }}>{name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Concept statement */}
        <div>
          <AnnotationLabel text="Concept Statement · 核心立意" />
          <blockquote style={{ borderLeft: '2px solid #8B0000', paddingLeft: 20, margin: '20px 0 28px' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1rem,2.5vw,1.3rem)', fontStyle: 'italic', color: '#fff', lineHeight: 1.8, marginBottom: 12 }}>
              "If life is an inescapable farce,<br />I choose to be its most unhinged spectator."
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em' }}>
              如果命运是一场无法逃离的滑稽戏，那我选择做最疯狂的观众。
            </p>
          </blockquote>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', lineHeight: 2, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>
            生命的本质是一场空无一物的「虚无」，而「欢愉」，是对虚无发起的最高形式的反抗。本项目通过黑帮女大佬<strong style={{ color: '#fff' }}>「{characterProfile.nameZh}」</strong>的形象解构，探讨角色在面对荒诞现实时的自我主宰。
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', lineHeight: 2, color: 'rgba(255,255,255,0.75)', marginBottom: 32 }}>
            地盘、金币与生死不过是戏票与油墨，当她戴上面具，她便凌驾于一切预设的剧本之上。
          </p>

          <div style={{ padding: '16px 18px', background: 'rgba(139,0,0,0.08)', border: '1px solid rgba(139,0,0,0.25)', marginBottom: 20 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#8B0000', letterSpacing: '0.15em', marginBottom: 10, textTransform: 'uppercase' }}>Core Theme</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {['欢愉美学 / Elation Aesthetics', '角色解构 / Character Deconstruction', '自我主宰 / Sovereignty of Self'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 3, height: 3, background: '#D4AF37', borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Role meta */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[[ '角色名', `${characterProfile.nameZh} / ${characterProfile.nameEn}`], ['身份', characterProfile.identity], ['形态数', characterProfile.forms], ['核心道具', characterProfile.props]].map(([k, v]) => (
              <div key={k} style={{ padding: '10px 12px', background: '#110505', border: '1px solid rgba(139,0,0,0.2)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'rgba(255,255,255,0.25)', marginBottom: 4, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{k}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ch1: Symbol Glossary */}
      <div style={{ padding: '0 clamp(24px,8vw,120px) clamp(60px,8vw,100px)' }}>
        <div style={{ marginBottom: 32, textAlign: 'center' }}>
          <AnnotationLabel text="Symbolic Glossary · 视觉意象与符号图解" />
        </div>
        <OrnamentFrame color="rgba(212,175,55,0.2)" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 1, background: 'rgba(139,0,0,0.18)', marginTop: 1 }}>
          {[
            { Icon: PipeIcon, zh: '烟枪', en: 'The Pipe', tag: '掌控与游离', desc: '吐出的青烟模糊了现实与戏剧的界限，象征她对周遭杀戮与欲望的冷眼旁观。烟雾既是帷幕，也是她赐予他人的迷雾。' },
            { Icon: MaskIcon, zh: '面具', en: 'The Mask', tag: '虚无的实体化', desc: '戴上面具可以成为任何人，意味着「原本的自我」已不再受任何世俗规则与身份束缚。面具之下，是绝对的自由——或者说，绝对的空。' },
            { Icon: CoinIcon, zh: '沾血金币', en: 'The Bloody Coin', tag: '荒诞的筹码', desc: '别人视若生命的权力与财富，在她眼中不过是进入这场滑稽剧场的「门票」。血迹不是罪的印记，而是入场章。' },
          ].map(({ Icon, zh, en, tag, desc }) => (
            <div key={zh} style={{ background: '#0B0B0B', padding: '36px 28px', display: 'flex', flexDirection: 'column', gap: 0 }}>
              <div style={{ width: '60%', maxWidth: 160, margin: '0 auto 24px' }}>
                <Icon />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.2em', color: '#8B0000', textTransform: 'uppercase', marginBottom: 8 }}>【{tag}】</div>
              <div style={{ marginBottom: 10 }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.15rem', color: '#fff', marginRight: 12 }}>{zh}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}>{en}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.83rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.6)' }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 1 }}>
          <OrnamentFrame color="rgba(212,175,55,0.2)" />
        </div>
      </div>
    </section>
  )
}

/* ── Chapter 2 ─────────────────────────────────────────── */
function ChapterTwo() {
  const [activeForm, setActiveForm] = useState(0)

  const forms = [
    {
      num: 'I', zh: '青涩版', en: 'Fresh / Pigtail Version', sub: '图1 · 双马尾 · 谎言初醒',
      tag: '戴着笑容登场的傀儡', tagColor: '#D4AF37',
      note: `幕布升起时，${characterProfile.nameZh}仍把自己装成一件讨喜的玩偶：双马尾、狐面、无害的笑，都是她亲手布置的第一层陷阱。她看似等待别人为她写好命运，实际上早已记住每一个人的弱点——越是天真的姿态，越能让猎物放下戒心。`,
      keywords: ['双马尾是精心编排的伪装','狐面遮住尚未熄灭的野心','樱花装饰下藏着冷眼旁观','甜美笑意与锋利直觉并存','她在掌声里挑选第一个祭品'],
      borderColor: 'rgba(212,175,55,0.25)', accentBg: 'rgba(212,175,55,0.06)',
    },
    {
      num: 'II', zh: '成熟版', en: 'Mature / Velvet Version', sub: '图3 · 成熟气质 · 黑红加冕',
      tag: '把舞台变成猎场的女王', tagColor: '#8B0000',
      note: `当第一层伪装被撕开，她终于不再等待任何人的许可。${characterProfile.nameZh}披上黑色的夜，把烟枪当作权杖，把每一道目光都变成自己的筹码。她不需要提高声音，沉默本身就足以让整座舞台俯首；所谓成熟，不过是学会优雅地宣布谁将退场。`,
      keywords: ['长发与烟雾宣告权力转场','黑色披肩像一面夜的王旗','低垂眼神比枪口更具威慑','成熟不是收敛而是精准出手','她让优雅与危险同席而坐'],
      borderColor: 'rgba(139,0,0,0.3)', accentBg: 'rgba(139,0,0,0.07)',
    },
    {
      num: 'III', zh: '出世版', en: 'Ascendant / Revelation', sub: '图2 · 出世造型 · 神格降临',
      tag: '在废墟上主持庆典的人', tagColor: '#8B0000',
      note: `到了最后，${characterProfile.nameZh}甚至不再需要“赢”。她戴上面具，越过善恶、胜负与掌声，把所有人的挣扎都改写成一场盛大的谢幕。血色是礼花，金币是雨，面具之后没有一位等待被理解的少女——只有一个亲手为虚无点燃篝火、并邀请众生共舞的神格。`,
      keywords: ['狐面不再遮掩而是宣布神格','红金光芒像失控的祭典礼花','她把毁灭改造成狂欢的舞步','超越权力之后只剩绝对自由','她既是演员也是最后的观众'],
      borderColor: 'rgba(139,0,0,0.4)', accentBg: 'rgba(139,0,0,0.1)',
      isCurrent: true,
    },
  ]

  const form = forms[activeForm]

  return (
    <section style={{ background: '#0B0B0B' }}>
      <div style={{ padding: 'clamp(60px,8vw,100px) clamp(24px,8vw,120px) 0' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#8B0000', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 6 }}>CHAPTER 02</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3.5rem)', color: '#fff', marginBottom: 4, lineHeight: 1.05 }}>角色视觉蜕变</h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', marginBottom: 40 }}>Character Visual Evolution</p>

        {/* Form selector tabs */}
        <div style={{ display: 'flex', gap: 2, marginBottom: 0 }}>
          {forms.map((f, i) => (
            <button key={f.num}
              onClick={() => setActiveForm(i)}
              style={{
                flex: 1, padding: '14px 12px',
                background: activeForm === i ? (i === 0 ? 'rgba(212,175,55,0.12)' : 'rgba(139,0,0,0.18)') : '#0D0404',
                border: 'none', borderTop: `2px solid ${activeForm === i ? (i === 0 ? '#D4AF37' : '#8B0000') : 'transparent'}`,
                cursor: 'pointer', transition: 'all 0.2s',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', lineHeight: 1, color: activeForm === i ? (i === 0 ? '#D4AF37' : '#8B0000') : 'rgba(255,255,255,0.2)' }}>{f.num}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: activeForm === i ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>{f.zh}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active form content */}
      <div style={{ padding: 'clamp(48px,6vw,80px) clamp(24px,8vw,120px)', background: form.accentBg, borderTop: `1px solid ${form.borderColor}` }}>

        {/* Form header */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap', marginBottom: 40 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem,8vw,7rem)', lineHeight: 0.85, color: 'rgba(139,0,0,0.12)' }}>{form.num}</div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em', color: form.tagColor, textTransform: 'uppercase', marginBottom: 6 }}>{form.sub}</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: '#fff', lineHeight: 1.05, marginBottom: 4 }}>{form.zh}</h3>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1rem', color: form.tagColor, opacity: 0.8 }}>{form.en}</p>
            {form.isCurrent && (
              <span style={{ display: 'inline-block', marginTop: 8, padding: '3px 10px', background: 'rgba(139,0,0,0.3)', border: '1px solid rgba(139,0,0,0.5)', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#D4AF37', letterSpacing: '0.15em' }}>
                CURRENT FORM · 现役
              </span>
            )}
          </div>
        </div>

        {/* Form I: Figure + Emotions grid */}
        {activeForm === 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(28px,4vw,60px)' }}>
            <div>
              <AnnotationLabel text="Form I · Front View · 正面三视图" />
              <div style={{ marginTop: 14 }}>
                <FormOneFigure />
              </div>
            </div>
            <div>
              <div style={{ marginBottom: 28 }}>
                <AnnotationLabel text="Design Note · 设计说明" />
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', lineHeight: 2, color: 'rgba(255,255,255,0.72)', marginTop: 16 }}>{form.note}</p>
              </div>

              <div style={{ marginBottom: 28 }}>
                <AnnotationLabel text="Visual Language · 视觉语言" />
                <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {form.keywords.map((kw, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: '#8B0000', minWidth: 18 }}>0{i + 1}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)' }}>{kw}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <AnnotationLabel text="Emotion Sheet · 表情拆解" />
                <div style={{ marginTop: 14 }}>
                  <FormOneEmotions />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Form II: Key Art + Tattoo */}
        {activeForm === 1 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(28px,4vw,60px)' }}>
            <div>
              <AnnotationLabel text="Key Art · 断发一瞬" />
              <div style={{ marginTop: 14 }}>
                <FormTwoKeyArt />
              </div>
            </div>
            <div>
              <div style={{ marginBottom: 32 }}>
                <AnnotationLabel text="Design Note · 设计说明" />
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', lineHeight: 2, color: 'rgba(255,255,255,0.72)', marginTop: 16 }}>{form.note}</p>
              </div>

              <div style={{ marginBottom: 32 }}>
                <AnnotationLabel text="Visual Language · 视觉语言" />
                <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {form.keywords.map((kw, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: '#8B0000', minWidth: 18 }}>0{i + 1}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)' }}>{kw}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <AnnotationLabel text="Tattoo Pattern · 浮世绘木偶戏台" />
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', margin: '8px 0 14px', lineHeight: 1.7 }}>
                  脊背上纹着完整的「浮世绘木偶戏台」图腾——牵线的人是她，木偶也是她。
                </p>
                <TattooPattern />
              </div>
            </div>
          </div>
        )}

        {/* Form III: Mastermind */}
        {activeForm === 2 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(28px,4vw,60px)' }}>
            <div>
              <AnnotationLabel text="Form III · Main Illustration · 立绘" />
              <div style={{ marginTop: 14 }}>
                <FormThreeFigure />
              </div>
            </div>
            <div>
              <div style={{ marginBottom: 28 }}>
                <AnnotationLabel text="Design Note · 设计说明" />
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', lineHeight: 2, color: 'rgba(255,255,255,0.72)', marginTop: 16 }}>{form.note}</p>
              </div>

              <div style={{ marginBottom: 28 }}>
                <AnnotationLabel text="Visual Language · 视觉语言" />
                <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {form.keywords.map((kw, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: '#8B0000', minWidth: 18 }}>0{i + 1}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)' }}>{kw}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Props detail callout */}
              <div style={{ marginBottom: 24 }}>
                <AnnotationLabel text="Props Detail · 道具拆解" />
                <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {['长杆玉嘴烟枪','黑金水钻骷髅面具'].map((item) => (
                    <div key={item} style={{ padding: '16px 14px', background: 'rgba(11,11,11,0.7)', border: '1px dashed rgba(212,175,55,0.25)', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'rgba(212,175,55,0.5)', marginBottom: 6, letterSpacing: '0.12em' }}>[ PROP ]</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)' }}>{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dress brocade swatch */}
              <div>
                <AnnotationLabel text="Textile · 织锦缎面料图案" />
                <div style={{ marginTop: 14, height: 80, position: 'relative', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <div style={{ width: '100%', height: '100%', background: '#1E0808' }}>
                    {/* Brocade pattern drawn inline */}
                    <svg viewBox="0 0 200 80" style={{ width: '100%', height: '100%' }}>
                      <defs>
                        <pattern id="brocadePreview" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                          <path d="M 12 0 Q 18 6 12 12 Q 6 18 12 24" fill="none" stroke="rgba(139,0,0,0.5)" strokeWidth="1" />
                          <path d="M 0 12 Q 6 6 12 12 Q 18 18 24 12" fill="none" stroke="rgba(139,0,0,0.5)" strokeWidth="1" />
                          <circle cx="12" cy="12" r="2" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="0.8" />
                          <circle cx="12" cy="12" r="0.8" fill="rgba(212,175,55,0.4)" />
                        </pattern>
                      </defs>
                      <rect width="200" height="80" fill="url(#brocadePreview)" />
                      <text x="100" y="44" textAnchor="middle" fill="rgba(212,175,55,0.4)" fontSize="9" fontFamily="Space Mono, monospace" letterSpacing="2">BROCADE · 织锦缎</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Form transition breadcrumb */}
        <div style={{ marginTop: 56, display: 'flex', alignItems: 'center', gap: 0, overflowX: 'auto', scrollbarWidth: 'none' }}>
          {['I · 笑着入局', '→', 'II · 加冕为王', '→', 'III · 以神格谢幕'].map((step, i) => (
            <div key={i} style={{
              padding: '6px 14px',
              fontFamily: i % 2 === 1 ? 'var(--font-serif)' : 'var(--font-mono)',
              fontSize: i % 2 === 1 ? '1rem' : '0.58rem',
              color: i === activeForm * 2 ? '#D4AF37' : 'rgba(255,255,255,0.2)',
              letterSpacing: i % 2 === 1 ? '0' : '0.12em',
              flexShrink: 0,
              borderBottom: i === activeForm * 2 ? '1px solid rgba(212,175,55,0.4)' : 'none',
            }}>{step}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

function KeyScenes() {
  const scenes = [
    {
      num: '01',
      phase: '入世 · 困局',
      title: '雨夜、铁笼与被牵动的手指',
      subtitle: 'The Cage Before the Curtain Rises',
      color: '#8A9AAA',
      setting: '废弃码头的冰冷仓库。倾盆大雨穿过破碎玻璃，冷蓝霓虹把铁椅、血迹与悬丝切成黑白的秩序。',
      action: `满身是血的下属跪在她脚边，求她交出两个人头。双马尾的${characterProfile.nameZh}坐在华丽却冰冷的铁椅上，繁复的束腰裙像另一座牢笼；她的手指被看不见的力量牵动，僵硬地颤抖着。`,
      detail: '特写：雨水顺着门缝渗入，映出她眼中的迷茫。她紧握一枚带血的金币——旧秩序许下的承诺，也是扣在她腕上的枷锁。',
      line: '“规矩？他们演禽兽……演得可真够卖力啊。”',
      mapping: '入世：被动体态、狭窄空间、冷灰色调与他人的凝视，共同构成无法逃脱的世俗困局。',
      image: 'https://17688967458-dev.github.io/HUAHuo/scene-1-youth.png',
    },
    {
      num: '02',
      phase: '过渡 · 觉醒',
      title: '青烟、烧毁的旧我与虚无',
      subtitle: 'Smoke That Erases the Old Self',
      color: '#B78C6A',
      setting: '烟雾缭绕的密室。黑白现实与猩红色彩交叠，浓烟像一道幕布，把两个版本的她隔在同一场幻觉里。',
      action: `${characterProfile.nameZh}已换上成熟姿态，斜倚黑色天鹅绒沙发，缓缓抬起长杆玉嘴烟枪。青烟穿过黑白视角下的双马尾少女，旧我身上的蕾丝与牵线开始卷曲、发黄，最后燃成灰烬。`,
      detail: '特写：烟枪前端的猩红微光照亮她失去温度的眼睛。灰烬落下，不是死亡，而是她第一次看见“现实”也不过是一张可烧毁的布景。',
      line: '“这世界本就是个昼夜不停的滑稽马戏团。既然开幕了，就让他们……演个够。”',
      mapping: '觉醒：烟雾解构严肃的现实，色彩从冷灰裂开一道缝，虚无开始取代对规则的恐惧。',
      image: 'https://17688967458-dev.github.io/HUAHuo/scene-2-struggle.png',
    },
    {
      num: '03',
      phase: '决裂 · 破局',
      title: '断发、撕裂的刺青与声音交响',
      subtitle: 'The Snip That Cuts Every String',
      color: '#C04A3A',
      setting: '狂风暴雨的码头高台。闪电把她的影子拉成巨大的幕布，围攻者的叫嚣与金属回声组成荒诞的交响。',
      action: `面对围攻而来的敌人，${characterProfile.nameZh}没有拔枪，而是抽出金柄剪刀，抓住自己的双马尾猛然剪断。咔嚓声落下的瞬间，黑色披肩滑落，背部的浮世绘木偶戏台刺青暴露在雷光中，刺青上的木偶线仿佛同时断裂。`,
      detail: '同位切换：剪刀剪断长发的声音，接续为烟枪敲击金属案台的重响。断发落入泥水，被沾血的金币践踏。',
      line: '“地盘？金币？不过是烂剧本上的油墨……这场戏，老娘不演了！”',
      mapping: '破局：主动摧毁旧有符号，身体从傀儡变成行动者，世俗羁绊在一个剪辑点上被彻底撕裂。',
      image: 'https://17688967458-dev.github.io/HUAHuo/scene-3-struggle.png'
    },
    {
      num: '04',
      phase: '出世 · 掌控',
      title: '水钻面具、聚光灯与狂欢收场',
      subtitle: 'The Director Takes the Stage',
      color: '#D4AF37',
      setting: '码头高台化身戏剧舞台。金色聚光灯刺穿黑夜，火光、烟雾和倒下的敌人共同组成她亲手布置的终幕。',
      action: `${characterProfile.nameZh}拾起漆黑的水钻骷髅半面具，缓缓戴上。她跨过现实与戏剧的边界，优雅地张开双臂，如同指挥家迎向聚光灯；从此她不再逃避杀戮，也不再向权力索要意义。`,
      detail: '结局镜头：面具映出火光与恐惧的脸。画面骤然切黑，只留下戏曲鸣锣与面具碎裂声，血红标题在黑屏中浮现——《虚无的庆典》。',
      line: '“从今晚起，我是庄家，我是导演……欢愉开场，请各位——入局收尸。”',
      mapping: '出世：开阔空间、血红与金黄的强光、面具与烟雾，让她从被凝视者反转为主宰与凝视众生的人。',
      image: 'https://17688967458-dev.github.io/HUAHuo/scene-4-ascendant.png'
      secondaryImage: 'https://17688967458-dev.github.io/HUAHuo/scene-5-ascendant.png',
    },
  ]

  return (
    <section style={{ background: '#0B0B0B' }}>
      <div style={{ padding: 'clamp(60px,8vw,100px) clamp(24px,8vw,120px) 36px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#8B0000', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 6 }}>STORYBOARD · 04 KEY SCENES</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3.5rem)', color: '#fff', marginBottom: 4, lineHeight: 1.05 }}>《虚无剧场的破局者》</h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', marginBottom: 22 }}>From Entering the World to Leaving the Stage</p>
        <p style={{ maxWidth: 760, fontFamily: 'var(--font-body)', fontSize: '0.92rem', lineHeight: 2, color: 'rgba(255,255,255,0.58)' }}>
          一个被帮派与欲望锁死在木偶戏台上的女人，在血腥与背叛的荒诞剧后亲手剪断傀儡线，戴上面具，把整座罪恶都市改造成自己幕后导演的狂欢庆典。
        </p>
      </div>

      <div style={{ padding: '0 clamp(24px,8vw,120px) clamp(70px,8vw,110px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 14 }}>
        {scenes.map((scene) => (
          <article key={scene.num} style={{ background: 'rgba(18,7,7,0.9)', border: `1px solid ${scene.color}45`, borderTop: `3px solid ${scene.color}`, display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '22px 22px 0' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', lineHeight: 0.8, color: `${scene.color}88` }}>{scene.num}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.16em', color: scene.color }}>{scene.phase}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: '#fff', lineHeight: 1.2, margin: '18px 0 5px' }}>{scene.title}</h3>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: `${scene.color}CC`, fontSize: '0.82rem', margin: 0 }}>{scene.subtitle}</p>
            </div>
            <div style={{ margin: '20px 22px 0', minHeight: 190, background: '#100606', overflow: 'hidden', display: 'grid', gridTemplateColumns: scene.secondaryImage ? '1fr 1fr' : '1fr', gap: 3 }}>
              {[scene.image, scene.secondaryImage].filter(Boolean).map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`${scene.phase}视觉画面 ${index + 1}`}
                  style={{ width: '100%', height: '100%', minHeight: 190, objectFit: 'cover', display: 'block', filter: 'saturate(0.9) contrast(1.05)' }}
                />
              ))}
            </div>
            <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                ['ENVIRONMENT · 场景', scene.setting],
                ['ACTION · 动作', scene.action],
                ['DETAIL · 镜头', scene.detail],
              ].map(([label, text]) => (
                <div key={label}>
                  <AnnotationLabel text={label} />
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.64)', margin: '8px 0 0' }}>{text}</p>
                </div>
              ))}
              <div style={{ padding: '14px', borderLeft: `2px solid ${scene.color}`, background: `${scene.color}0D` }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.9rem', lineHeight: 1.7, color: '#fff', margin: 0 }}>{scene.line}</p>
              </div>
              <div>
                <AnnotationLabel text="CONCEPT MAPPING · 哲学对应" />
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.46)', margin: '8px 0 0' }}>{scene.mapping}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ── Colophon ─────────────────────────────────────────── */
function Colophon() {
  return (
    <footer style={{ background: '#0D0404', borderTop: '1px solid rgba(139,0,0,0.3)', padding: 'clamp(40px,5vw,64px) clamp(24px,8vw,120px)' }}>
      <OrnamentFrame color="rgba(212,175,55,0.2)" />
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24, marginTop: 28 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#8B0000', marginBottom: 4 }}>虚无的庆典</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.15em' }}>The Nihilistic Carnival · Character Design Sheet · 2026</div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 36 }}>
          {[[ '作品类型', 'Character Design / Visual Concept' ], [ '角色', `${characterProfile.nameZh} · ${characterProfile.nameEn}` ], [ '形态数', 'Form I · II · III' ]].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', color: 'rgba(255,255,255,0.22)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>{k}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

/* ── App root ─────────────────────────────────────────── */
export default function App() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [musicError, setMusicError] = useState(false)

  useEffect(() => {
    return () => {
      audioRef.current?.pause()
    }
  }, [])

  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isMusicPlaying) {
      audio.pause()
      setIsMusicPlaying(false)
      return
    }

    try {
      await audio.play()
      setMusicError(false)
      setIsMusicPlaying(true)
    } catch {
      setMusicError(true)
      setIsMusicPlaying(false)
    }
  }

  const scrollToChapter = () => {
    document.getElementById('ch1')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{ background: '#0B0B0B', minHeight: '100vh' }}>
      <audio ref={audioRef} src="https://17688967458-dev.github.io/HUAHuo/huahuo.mp3" />
      <Hero onScroll={scrollToChapter} />
      <div id="ch1">
        <ChapterDivider num="01" zh="概念与哲学底座" en="Concept & Philosophy" />
        <ChapterOne />
      </div>
      <ChapterDivider num="02" zh="虚无剧场的破局者" en="The Breaker of the Nihilistic Theater" />
      <KeyScenes />
      <Colophon />
      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isMusicPlaying ? '暂停背景音乐' : '开启背景音乐'}
        title={musicError ? '音频加载失败，请检查音频文件' : undefined}
        style={{
          position: 'fixed',
          right: 24,
          bottom: 24,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 9,
          padding: '12px 16px',
          background: isMusicPlaying ? 'rgba(139,0,0,0.92)' : 'rgba(13,4,4,0.94)',
          border: `1px solid ${musicError ? 'rgba(220,80,80,0.75)' : 'rgba(212,175,55,0.45)'}`,
          borderRadius: 2,
          color: musicError ? '#F0A0A0' : '#D4AF37',
          cursor: 'pointer',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          letterSpacing: '0.12em',
          boxShadow: '0 8px 28px rgba(0,0,0,0.35)',
        }}
      >
        <span aria-hidden="true">{isMusicPlaying ? '♫' : '♪'}</span>
        {musicError ? '音乐加载失败' : isMusicPlaying ? '暂停音乐' : '开启音乐'}
      </button>
    </div>
  )
}
