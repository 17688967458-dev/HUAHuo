/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CARNIVAL ART — SVG illustration components
   虚无的庆典 · Character Design Sheet Artwork
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* ── Ornamental border / frame ───────────────────────── */
export function OrnamentFrame({ width = 400, height = 40, color = 'rgba(212,175,55,0.35)' }: { width?: number; height?: number; color?: string }) {
  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', display: 'block' }}>
      <line x1="0" y1={height / 2} x2={width * 0.35} y2={height / 2} stroke={color} strokeWidth="0.7" />
      <polygon points={`${width * 0.36},${height / 2} ${width * 0.38},${height * 0.25} ${width * 0.40},${height / 2} ${width * 0.38},${height * 0.75}`} fill={color} />
      <polygon points={`${width * 0.41},${height / 2} ${width * 0.43},${height * 0.3} ${width * 0.45},${height / 2} ${width * 0.43},${height * 0.7}`} fill={color} opacity="0.5" />
      <polygon points={`${width * 0.455},${height / 2} ${width * 0.475},${height * 0.3} ${width * 0.495},${height / 2} ${width * 0.475},${height * 0.7}`} fill={color} opacity="0.3" />
      <circle cx={width / 2} cy={height / 2} r={height * 0.28} fill="none" stroke={color} strokeWidth="0.8" />
      <circle cx={width / 2} cy={height / 2} r={height * 0.14} fill={color} opacity="0.6" />
      <polygon points={`${width * 0.505},${height / 2} ${width * 0.525},${height * 0.3} ${width * 0.545},${height / 2} ${width * 0.525},${height * 0.7}`} fill={color} opacity="0.3" />
      <polygon points={`${width * 0.555},${height / 2} ${width * 0.575},${height * 0.3} ${width * 0.595},${height / 2} ${width * 0.575},${height * 0.7}`} fill={color} opacity="0.5" />
      <polygon points={`${width * 0.60},${height / 2} ${width * 0.62},${height * 0.25} ${width * 0.64},${height / 2} ${width * 0.62},${height * 0.75}`} fill={color} />
      <line x1={width * 0.65} y1={height / 2} x2={width} y2={height / 2} stroke={color} strokeWidth="0.7" />
    </svg>
  )
}

/* ── Symbol 1: The Pipe · 烟枪 ───────────────────────── */
export function PipeIcon() {
  return (
    <svg viewBox="0 0 200 320" style={{ width: '100%', maxWidth: 200 }}>
      <defs>
        <radialGradient id="bowlGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#3D1A00" />
          <stop offset="100%" stopColor="#0B0B0B" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Smoke wisps */}
      <path d="M 92 30 Q 98 18 90 8 Q 83 0 90 -8" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeLinecap="round" />
      <path d="M 102 38 Q 112 24 104 12 Q 97 2 106 -6" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 82 42 Q 74 28 82 16 Q 88 6 80 -2" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Pipe bowl */}
      <ellipse cx="100" cy="85" rx="34" ry="18" fill="url(#bowlGrad)" stroke="#D4AF37" strokeWidth="1.2" />
      <path d="M 66 85 Q 64 120 68 140 Q 72 155 100 158 Q 128 155 132 140 Q 136 120 134 85" fill="url(#bowlGrad)" stroke="#D4AF37" strokeWidth="1.2" />
      <ellipse cx="100" cy="155" rx="32" ry="10" fill="#1A0D00" stroke="#D4AF37" strokeWidth="1" />
      {/* Bowl inner opening */}
      <ellipse cx="100" cy="85" rx="24" ry="12" fill="#0B0B0B" />
      <ellipse cx="100" cy="85" rx="18" ry="9" fill="#1A0500" />
      {/* Ember glow */}
      <ellipse cx="100" cy="87" rx="10" ry="5" fill="rgba(139,0,0,0.5)" filter="url(#glow)" />

      {/* Gold band rings on bowl */}
      <ellipse cx="100" cy="130" rx="33" ry="9" fill="none" stroke="#D4AF37" strokeWidth="1.8" />
      <ellipse cx="100" cy="118" rx="33.5" ry="9" fill="none" stroke="rgba(212,175,55,0.3)" strokeWidth="0.7" />

      {/* Pipe stem — long, elegant diagonal */}
      <path d="M 132 148 Q 148 162 158 185 L 172 265 Q 175 280 168 288" fill="none" stroke="#C8941A" strokeWidth="7" strokeLinecap="round" />
      <path d="M 132 148 Q 148 162 158 185 L 172 265 Q 175 280 168 288" fill="none" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" />

      {/* Stem decorative ring */}
      <ellipse cx="157" cy="208" rx="9" ry="4" fill="none" stroke="#D4AF37" strokeWidth="2" transform="rotate(-68,157,208)" />
      <ellipse cx="157" cy="208" rx="6" ry="3" fill="rgba(212,175,55,0.2)" transform="rotate(-68,157,208)" />

      {/* Mouthpiece */}
      <ellipse cx="166" cy="289" rx="10" ry="5" fill="#1A1200" stroke="#D4AF37" strokeWidth="1" transform="rotate(-20,166,289)" />
      <ellipse cx="164" cy="291" rx="6" ry="3" fill="rgba(212,175,55,0.15)" transform="rotate(-20,164,291)" />

      {/* Label */}
      <text x="100" y="312" textAnchor="middle" fill="rgba(212,175,55,0.5)" fontSize="8" fontFamily="Space Mono, monospace" letterSpacing="2">PIPE · 烟枪</text>
    </svg>
  )
}

/* ── Symbol 2: The Mask · 面具 ───────────────────────── */
export function MaskIcon() {
  return (
    <svg viewBox="0 0 260 240" style={{ width: '100%', maxWidth: 260 }}>
      <defs>
        <radialGradient id="maskGrad" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#2A2A2A" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </radialGradient>
      </defs>

      {/* Outer ornate flourishes — left */}
      <path d="M 32 90 Q 18 75 12 58 Q 8 44 18 38 Q 28 32 36 44 Q 42 54 38 68 Q 48 55 60 60 Q 52 72 42 74" fill="none" stroke="rgba(212,175,55,0.45)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 28 110 Q 12 100 6 86 Q 2 74 14 72 Q 24 70 30 82 Q 36 72 46 78 Q 38 88 34 96" fill="none" stroke="rgba(212,175,55,0.3)" strokeWidth="1" strokeLinecap="round" />
      {/* Left gem */}
      <polygon points="18,58 22,52 26,58 22,64" fill="rgba(139,0,0,0.7)" stroke="#D4AF37" strokeWidth="0.8" />

      {/* Outer ornate flourishes — right */}
      <path d="M 228 90 Q 242 75 248 58 Q 252 44 242 38 Q 232 32 224 44 Q 218 54 222 68 Q 212 55 200 60 Q 208 72 218 74" fill="none" stroke="rgba(212,175,55,0.45)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 232 110 Q 248 100 254 86 Q 258 74 246 72 Q 236 70 230 82 Q 224 72 214 78 Q 222 88 226 96" fill="none" stroke="rgba(212,175,55,0.3)" strokeWidth="1" strokeLinecap="round" />
      {/* Right gem */}
      <polygon points="238,58 242,52 246,58 242,64" fill="rgba(139,0,0,0.7)" stroke="#D4AF37" strokeWidth="0.8" />

      {/* Main mask shape */}
      <path d="M 50 80 Q 50 40 130 35 Q 210 40 210 80 Q 215 130 200 155 Q 180 180 130 182 Q 80 180 60 155 Q 45 130 50 80Z" fill="url(#maskGrad)" stroke="#D4AF37" strokeWidth="1.5" />

      {/* Gold edge trim line */}
      <path d="M 52 82 Q 52 44 130 39 Q 208 44 208 82 Q 213 128 199 152 Q 180 176 130 178 Q 80 176 61 152 Q 47 128 52 82Z" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="0.5" />

      {/* Left eye socket — skull style */}
      <ellipse cx="100" cy="95" rx="28" ry="22" fill="#0B0B0B" />
      {/* Skull eye socket angular cuts */}
      <path d="M 76 84 L 72 78 L 80 80Z" fill="#0B0B0B" />
      <path d="M 124 84 L 128 78 L 120 80Z" fill="#0B0B0B" />
      <path d="M 74 108 L 70 114 L 78 112Z" fill="#0B0B0B" />
      <path d="M 126 108 L 130 114 L 122 112Z" fill="#0B0B0B" />
      {/* Eye socket inner glow */}
      <ellipse cx="100" cy="95" rx="18" ry="14" fill="rgba(139,0,0,0.15)" />
      <path d="M 88 102 Q 100 108 112 102" stroke="rgba(139,0,0,0.35)" strokeWidth="1" fill="none" />

      {/* Right eye socket — skull style */}
      <ellipse cx="160" cy="95" rx="28" ry="22" fill="#0B0B0B" />
      <path d="M 136 84 L 132 78 L 140 80Z" fill="#0B0B0B" />
      <path d="M 184 84 L 188 78 L 180 80Z" fill="#0B0B0B" />
      <path d="M 134 108 L 130 114 L 138 112Z" fill="#0B0B0B" />
      <path d="M 186 108 L 190 114 L 182 112Z" fill="#0B0B0B" />
      <ellipse cx="160" cy="95" rx="18" ry="14" fill="rgba(139,0,0,0.15)" />
      <path d="M 148 102 Q 160 108 172 102" stroke="rgba(139,0,0,0.35)" strokeWidth="1" fill="none" />

      {/* Nose bridge */}
      <path d="M 122 108 Q 126 120 130 125 Q 134 120 138 108" fill="none" stroke="rgba(212,175,55,0.3)" strokeWidth="1" />

      {/* Ornate cheek patterns */}
      {/* Left cheek */}
      <path d="M 58 115 Q 68 108 78 112 Q 72 122 62 120Z" fill="rgba(212,175,55,0.1)" stroke="rgba(212,175,55,0.3)" strokeWidth="0.7" />
      <circle cx="65" cy="130" r="4" fill="none" stroke="rgba(212,175,55,0.25)" strokeWidth="0.8" />
      <circle cx="65" cy="130" r="1.5" fill="rgba(212,175,55,0.3)" />
      {/* Right cheek */}
      <path d="M 202 115 Q 192 108 182 112 Q 188 122 198 120Z" fill="rgba(212,175,55,0.1)" stroke="rgba(212,175,55,0.3)" strokeWidth="0.7" />
      <circle cx="195" cy="130" r="4" fill="none" stroke="rgba(212,175,55,0.25)" strokeWidth="0.8" />
      <circle cx="195" cy="130" r="1.5" fill="rgba(212,175,55,0.3)" />

      {/* Bottom decorative row — zig-zag at chin */}
      <path d="M 90 172 Q 100 165 110 172 Q 120 165 130 172 Q 140 165 150 172 Q 160 165 170 172" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Center forehead gem */}
      <path d="M 130 45 L 137 58 L 130 65 L 123 58Z" fill="rgba(139,0,0,0.8)" stroke="#D4AF37" strokeWidth="1" />
      <path d="M 130 50 L 135 58 L 130 62 L 125 58Z" fill="rgba(212,175,55,0.2)" />

      {/* Handle stick */}
      <rect x="126" y="182" width="8" height="50" rx="4" fill="#C8941A" stroke="#D4AF37" strokeWidth="0.8" />
      <circle cx="130" cy="228" r="5" fill="#D4AF37" opacity="0.7" />

      {/* Label */}
      <text x="130" y="245" textAnchor="middle" fill="rgba(212,175,55,0.5)" fontSize="8" fontFamily="Space Mono, monospace" letterSpacing="2">MASK · 面具</text>
    </svg>
  )
}

/* ── Symbol 3: The Bloody Coin · 沾血金币 ────────────── */
export function CoinIcon() {
  return (
    <svg viewBox="0 0 200 280" style={{ width: '100%', maxWidth: 200 }}>
      <defs>
        <radialGradient id="coinGrad" cx="45%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#A8872A" />
          <stop offset="100%" stopColor="#6B5518" />
        </radialGradient>
        <radialGradient id="coinInner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8C84A" />
          <stop offset="100%" stopColor="#8B6914" />
        </radialGradient>
      </defs>

      {/* Coin body */}
      <circle cx="100" cy="105" r="80" fill="url(#coinGrad)" />
      {/* Rim */}
      <circle cx="100" cy="105" r="80" fill="none" stroke="#F0D060" strokeWidth="2" />
      <circle cx="100" cy="105" r="74" fill="none" stroke="rgba(168,135,42,0.6)" strokeWidth="1" />
      <circle cx="100" cy="105" r="70" fill="url(#coinInner)" />
      {/* Inner ring */}
      <circle cx="100" cy="105" r="62" fill="none" stroke="rgba(100,80,20,0.6)" strokeWidth="1" />

      {/* Coin engraving: Skull-flower motif */}
      {/* Skull head */}
      <ellipse cx="100" cy="90" rx="22" ry="20" fill="rgba(80,60,10,0.6)" stroke="rgba(60,45,5,0.8)" strokeWidth="1" />
      {/* Skull eyes */}
      <ellipse cx="91" cy="88" rx="7" ry="7" fill="rgba(50,38,5,0.8)" />
      <ellipse cx="109" cy="88" rx="7" ry="7" fill="rgba(50,38,5,0.8)" />
      <ellipse cx="91" cy="88" rx="4" ry="4" fill="rgba(20,15,2,0.9)" />
      <ellipse cx="109" cy="88" rx="4" ry="4" fill="rgba(20,15,2,0.9)" />
      {/* Skull nose */}
      <path d="M 97 98 L 100 95 L 103 98 L 101 103 L 99 103Z" fill="rgba(50,38,5,0.8)" />
      {/* Skull teeth */}
      <path d="M 88 108 Q 100 115 112 108" stroke="rgba(50,38,5,0.8)" strokeWidth="1.5" fill="none" />
      <line x1="94" y1="108" x2="94" y2="113" stroke="rgba(50,38,5,0.8)" strokeWidth="1.2" />
      <line x1="100" y1="109" x2="100" y2="114" stroke="rgba(50,38,5,0.8)" strokeWidth="1.2" />
      <line x1="106" y1="108" x2="106" y2="113" stroke="rgba(50,38,5,0.8)" strokeWidth="1.2" />

      {/* Petal decorations around skull */}
      {[0, 51.4, 102.8, 154.2, 205.6, 257, 308.4].map((angle, i) => {
        const rad = (angle - 90) * Math.PI / 180
        const cx2 = 100 + Math.cos(rad) * 48
        const cy2 = 105 + Math.sin(rad) * 48
        return (
          <ellipse key={i} cx={cx2} cy={cy2} rx="7" ry="12"
            fill="rgba(80,62,12,0.5)" stroke="rgba(60,46,8,0.7)" strokeWidth="0.8"
            transform={`rotate(${angle},${cx2},${cy2})`} />
        )
      })}

      {/* Coin text arc */}
      <path id="coinArc" d="M 30,105 A 70,70 0 1,1 170,105" fill="none" />
      <text fontSize="7" fill="rgba(80,62,12,0.9)" fontFamily="Space Mono, monospace" letterSpacing="3">
        <textPath href="#coinArc">· MEMENTO MORI · 门票 · BLOODY ·</textPath>
      </text>

      {/* Blood drips */}
      {/* Drip 1 */}
      <path d="M 88 185 Q 86 196 88 208 Q 90 215 88 222 Q 86 218 87 210 Q 85 200 84 188Z" fill="#8B0000" />
      <ellipse cx="87" cy="223" rx="5" ry="6" fill="#8B0000" />
      {/* Drip 2 — longer */}
      <path d="M 100 185 Q 99 200 101 218 Q 103 228 100 240 Q 97 232 98 220 Q 96 204 96 190Z" fill="#8B0000" />
      <ellipse cx="99" cy="241" rx="6" ry="7" fill="#8B0000" />
      {/* Drip 2 branch */}
      <path d="M 100 215 Q 107 222 108 230 Q 106 228 105 222 Q 103 218 100 215Z" fill="#700000" />
      <ellipse cx="108" cy="231" rx="4" ry="5" fill="#700000" />
      {/* Drip 3 — short */}
      <path d="M 112 185 Q 114 194 112 203 Q 110 209 112 215" fill="none" stroke="#8B0000" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="112" cy="216" rx="5" ry="6" fill="#8B0000" />

      {/* Blood pool at base of coin */}
      <ellipse cx="100" cy="187" rx="38" ry="4" fill="rgba(139,0,0,0.5)" />

      {/* Label */}
      <text x="100" y="270" textAnchor="middle" fill="rgba(212,175,55,0.5)" fontSize="8" fontFamily="Space Mono, monospace" letterSpacing="2">COIN · 沾血金币</text>
    </svg>
  )
}

/* ── Form I: 顺从的玩偶 Character Sheet ─────────────── */
export function FormOneFigure() {
  return (
    <svg viewBox="0 0 440 640" style={{ width: '100%', maxWidth: 440 }}>
      <defs>
        <pattern id="dotGrid" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="0.6" fill="rgba(212,175,55,0.08)" />
        </pattern>
        <linearGradient id="skinGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F2DCC8" />
          <stop offset="100%" stopColor="#E8C8A8" />
        </linearGradient>
        <linearGradient id="hairGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2A0A0A" />
          <stop offset="100%" stopColor="#1A0505" />
        </linearGradient>
      </defs>

      <rect width="440" height="640" fill="#0B0B0B" />
      <rect width="440" height="640" fill="url(#dotGrid)" />

      {/* ─ LEFT PIGTAIL ─ */}
      {/* Main hair mass */}
      <path d="M 78 120 Q 60 100 55 130 Q 48 165 55 200 Q 62 240 70 280 Q 80 320 75 360 Q 70 390 78 420" fill="url(#hairGrad1)" stroke="#D4AF37" strokeWidth="1" />
      <path d="M 78 120 Q 68 95 72 150 Q 76 200 72 250 Q 68 300 72 345 Q 76 380 80 415" fill="url(#hairGrad1)" />
      <path d="M 140 105 Q 130 85 115 90 Q 90 95 80 120 L 78 420 Q 80 415 82 380 Q 88 340 84 295 Q 80 245 84 195 Q 88 155 85 125 Q 100 105 125 100 Q 135 98 140 105Z" fill="url(#hairGrad1)" stroke="rgba(212,175,55,0.4)" strokeWidth="0.8" />
      {/* Hair strand details */}
      <path d="M 65 140 Q 60 175 64 210 Q 58 250 62 290" fill="none" stroke="rgba(212,175,55,0.25)" strokeWidth="1" />
      <path d="M 75 160 Q 70 200 74 240 Q 68 280 72 320" fill="none" stroke="rgba(212,175,55,0.15)" strokeWidth="0.8" />
      {/* Ribbon bow LEFT */}
      <path d="M 80 108 Q 92 94 100 106 Q 108 94 120 108 Q 108 122 100 108 Q 92 122 80 108Z" fill="#8B0000" />
      <circle cx="100" cy="107" r="7" fill="#D4AF37" />
      <circle cx="100" cy="107" r="4" fill="#8B0000" />

      {/* ─ RIGHT PIGTAIL ─ */}
      <path d="M 300 120 Q 318 95 325 125 Q 332 160 328 195 Q 322 238 328 278 Q 336 320 332 360 Q 328 392 322 422" fill="url(#hairGrad1)" stroke="#D4AF37" strokeWidth="1" />
      <path d="M 300 120 Q 310 90 308 145 Q 306 198 310 248 Q 314 298 310 344 Q 306 378 302 416" fill="url(#hairGrad1)" />
      <path d="M 260 105 Q 270 85 285 90 Q 310 95 320 120 L 322 422 Q 320 415 318 382 Q 314 342 318 296 Q 322 246 318 196 Q 314 156 316 126 Q 302 106 278 101 Q 268 98 260 105Z" fill="url(#hairGrad1)" stroke="rgba(212,175,55,0.4)" strokeWidth="0.8" />
      <path d="M 332 135 Q 338 170 334 208 Q 340 248 336 288" fill="none" stroke="rgba(212,175,55,0.25)" strokeWidth="1" />
      {/* Ribbon bow RIGHT */}
      <path d="M 280 108 Q 292 94 300 106 Q 308 94 320 108 Q 308 122 300 108 Q 292 122 280 108Z" fill="#8B0000" />
      <circle cx="300" cy="107" r="7" fill="#D4AF37" />
      <circle cx="300" cy="107" r="4" fill="#8B0000" />

      {/* ─ HEAD ─ */}
      {/* Top hair patch connecting pigtails */}
      <path d="M 140 110 Q 165 85 200 80 Q 235 85 260 110 Q 248 100 200 98 Q 152 100 140 110Z" fill="url(#hairGrad1)" />
      {/* Head face ellipse */}
      <ellipse cx="200" cy="168" rx="72" ry="78" fill="url(#skinGrad1)" stroke="rgba(50,20,10,0.8)" strokeWidth="1.2" />

      {/* ─ FACE ─ */}
      {/* Left eye */}
      <ellipse cx="172" cy="157" rx="16" ry="20" fill="#0A0A0A" />
      <ellipse cx="172" cy="154" rx="11" ry="14" fill="#3D1515" />
      <ellipse cx="172" cy="152" rx="8" ry="10" fill="#7B1E1E" />
      <circle cx="167" cy="148" r="5" fill="#fff" />
      <circle cx="175" cy="154" r="2.5" fill="rgba(255,255,255,0.4)" />
      {/* Left lashes */}
      {[[-12,-8],[-8,-13],[-3,-16],[3,-16],[8,-13],[12,-10]].map(([dx, dy], i) => (
        <line key={i} x1={172} y1={143} x2={172 + dx} y2={143 + dy} stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" />
      ))}
      {/* Left eyebrow */}
      <path d="M 155 136 Q 168 130 184 133" stroke="#1A0505" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Right eye */}
      <ellipse cx="228" cy="157" rx="16" ry="20" fill="#0A0A0A" />
      <ellipse cx="228" cy="154" rx="11" ry="14" fill="#3D1515" />
      <ellipse cx="228" cy="152" rx="8" ry="10" fill="#7B1E1E" />
      <circle cx="223" cy="148" r="5" fill="#fff" />
      <circle cx="231" cy="154" r="2.5" fill="rgba(255,255,255,0.4)" />
      {[[-12,-8],[-8,-13],[-3,-16],[3,-16],[8,-13],[12,-10]].map(([dx, dy], i) => (
        <line key={i} x1={228} y1={143} x2={228 + dx} y2={143 + dy} stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" />
      ))}
      <path d="M 216 136 Q 228 130 244 133" stroke="#1A0505" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Nose - tiny */}
      <path d="M 196 178 Q 200 184 204 178" stroke="rgba(160,100,70,0.5)" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* Smile — sweet but too wide */}
      <path d="M 181 196 Q 200 212 219 196" stroke="#C06060" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Dimples */}
      <circle cx="180" cy="195" r="2" fill="rgba(200,100,100,0.2)" />
      <circle cx="220" cy="195" r="2" fill="rgba(200,100,100,0.2)" />
      {/* Cheek blush */}
      <ellipse cx="156" cy="178" rx="16" ry="9" fill="rgba(230,100,100,0.1)" />
      <ellipse cx="244" cy="178" rx="16" ry="9" fill="rgba(230,100,100,0.1)" />

      {/* ─ NECK & COLLAR ─ */}
      <rect x="186" y="240" width="28" height="28" rx="5" fill="url(#skinGrad1)" stroke="rgba(50,20,10,0.5)" strokeWidth="1" />
      {/* Collar lace */}
      <path d="M 162 266 Q 180 258 200 262 Q 220 258 238 266" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
      <path d="M 165 270 Q 182 278 200 275 Q 218 278 235 270" stroke="rgba(212,175,55,0.4)" strokeWidth="0.8" fill="none" strokeDasharray="3,2" />

      {/* ─ BODY & CORSET ─ */}
      {/* Shoulder cape */}
      <path d="M 128 272 Q 155 260 200 264 Q 245 260 272 272 Q 265 295 255 305 Q 235 295 200 292 Q 165 295 145 305 Q 135 295 128 272Z" fill="#1A0808" stroke="rgba(212,175,55,0.5)" strokeWidth="1" />
      {/* Corset body */}
      <path d="M 148 300 Q 165 285 185 282 L 200 280 L 215 282 Q 235 285 252 300 L 256 360 Q 240 368 200 370 Q 160 368 144 360Z" fill="#220A0A" stroke="#D4AF37" strokeWidth="1.2" />
      {/* Corset center bone */}
      <line x1="200" y1="282" x2="200" y2="370" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
      {/* Corset busk hooks */}
      {[292, 306, 320, 334, 348, 362].map((y, i) => (
        <g key={i}>
          <circle cx="200" cy={y} r="3" fill="#D4AF37" opacity="0.6" />
          <path d={`M 183 ${y} Q 192 ${y - 5} 197 ${y}`} stroke="rgba(212,175,55,0.35)" strokeWidth="0.8" fill="none" />
          <path d={`M 217 ${y} Q 208 ${y - 5} 203 ${y}`} stroke="rgba(212,175,55,0.35)" strokeWidth="0.8" fill="none" />
        </g>
      ))}
      {/* Ribbon at waist */}
      <path d="M 148 360 Q 172 352 200 355 Q 228 352 252 360" stroke="#8B0000" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Center bow */}
      <path d="M 188 357 Q 196 347 200 355 Q 204 347 212 357 Q 204 365 200 355 Q 196 365 188 357Z" fill="#8B0000" />
      <circle cx="200" cy="356" r="5" fill="#D4AF37" />

      {/* ─ SKIRT ─ */}
      {/* Layer 3 base */}
      <path d="M 144 360 Q 112 390 92 440 Q 82 490 200 505 Q 318 490 308 440 Q 288 390 256 360Z" fill="#0D0404" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
      {/* Lace hem bottom */}
      {Array.from({ length: 18 }).map((_, i) => {
        const t = i / 17
        const x = 92 + t * (308 - 92)
        const y = 495 + Math.sin(t * Math.PI) * 10
        return <circle key={i} cx={x} cy={y} r="3" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="0.8" />
      })}
      <path d="M 92 495 Q 145 508 200 510 Q 255 508 308 495" stroke="#D4AF37" strokeWidth="0.8" fill="none" opacity="0.4" />
      {/* Layer 2 petticoat */}
      <path d="M 158 360 Q 130 385 118 425 Q 112 460 200 470 Q 288 460 282 425 Q 270 385 242 360Z" fill="#1A0808" stroke="rgba(212,175,55,0.3)" strokeWidth="0.8" />
      <path d="M 118 460 Q 155 475 200 477 Q 245 475 282 460" stroke="#8B0000" strokeWidth="0.8" fill="none" opacity="0.6" strokeDasharray="4,3" />
      {/* Layer 3 inner */}
      <path d="M 168 360 Q 148 382 140 415 Q 136 442 200 450 Q 264 442 260 415 Q 252 382 232 360Z" fill="#220C0C" />
      {/* Skirt fold lines */}
      {[[155, 375, 148, 420], [175, 365, 170, 415], [225, 365, 230, 415], [245, 375, 252, 420]].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(212,175,55,0.12)" strokeWidth="0.8" />
      ))}

      {/* ─ ANNOTATION LINES ─ */}
      <line x1="340" y1="107" x2="322" y2="107" stroke="rgba(212,175,55,0.3)" strokeWidth="0.6" />
      <line x1="340" y1="107" x2="390" y2="107" stroke="rgba(212,175,55,0.3)" strokeWidth="0.6" />
      <text x="393" y="110" fill="rgba(212,175,55,0.6)" fontSize="7.5" fontFamily="Space Mono, monospace">RIBBON · 缎带蝴蝶结</text>

      <line x1="340" y1="155" x2="290" y2="155" stroke="rgba(212,175,55,0.3)" strokeWidth="0.6" />
      <line x1="340" y1="155" x2="390" y2="155" stroke="rgba(212,175,55,0.3)" strokeWidth="0.6" />
      <text x="393" y="158" fill="rgba(212,175,55,0.6)" fontSize="7.5" fontFamily="Space Mono, monospace">EYES · 病娇大眼</text>

      <line x1="340" y1="198" x2="220" y2="198" stroke="rgba(212,175,55,0.3)" strokeWidth="0.6" />
      <line x1="340" y1="198" x2="390" y2="198" stroke="rgba(212,175,55,0.3)" strokeWidth="0.6" />
      <text x="393" y="201" fill="rgba(212,175,55,0.6)" fontSize="7.5" fontFamily="Space Mono, monospace">SMILE · 过分完美的微笑</text>

      <line x1="340" y1="330" x2="258" y2="330" stroke="rgba(212,175,55,0.3)" strokeWidth="0.6" />
      <line x1="340" y1="330" x2="390" y2="330" stroke="rgba(212,175,55,0.3)" strokeWidth="0.6" />
      <text x="393" y="333" fill="rgba(212,175,55,0.6)" fontSize="7.5" fontFamily="Space Mono, monospace">CORSET · 束缚之具</text>

      <line x1="340" y1="440" x2="295" y2="440" stroke="rgba(212,175,55,0.3)" strokeWidth="0.6" />
      <line x1="340" y1="440" x2="390" y2="440" stroke="rgba(212,175,55,0.3)" strokeWidth="0.6" />
      <text x="393" y="443" fill="rgba(212,175,55,0.6)" fontSize="7.5" fontFamily="Space Mono, monospace">LACE · 多层蕾丝礼裙</text>

      {/* Form label watermark */}
      <text x="18" y="580" fill="rgba(139,0,0,0.18)" fontSize="80" fontFamily="Abril Fatface, serif">I</text>
      {/* Status bar */}
      <rect x="18" y="605" width="160" height="22" fill="rgba(139,0,0,0.15)" />
      <text x="26" y="619" fill="rgba(212,175,55,0.7)" fontSize="7.5" fontFamily="Space Mono, monospace" letterSpacing="1">FORM I · 顺从的玩偶</text>
    </svg>
  )
}

/* ── Form I Emotion Grid ─────────────────────────────── */
export function FormOneEmotions() {
  const expressions = [
    { label: '甜美伪装', curve: 'M 32 42 Q 40 52 48 42', eyeY: 30, browCurve: 'M 25 22 Q 35 18 44 21' },
    { label: '空洞凝视', curve: 'M 34 42 Q 40 44 46 42', eyeY: 30, browCurve: 'M 25 22 Q 35 20 44 22' },
    { label: '病娇微笑', curve: 'M 30 40 Q 40 56 50 40', eyeY: 30, browCurve: 'M 25 24 Q 35 18 44 22' },
    { label: '冷眼旁观', curve: 'M 33 44 Q 40 46 47 44', eyeY: 32, browCurve: 'M 25 24 Q 35 22 44 24' },
    { label: '真实漠然', curve: 'M 34 43 Q 40 43 46 43', eyeY: 31, browCurve: 'M 26 22 Q 35 19 44 22' },
    { label: '崩坏瞬间', curve: 'M 30 44 Q 40 38 50 44', eyeY: 30, browCurve: 'M 24 22 Q 35 28 46 22' },
  ]

  return (
    <svg viewBox="0 0 420 300" style={{ width: '100%' }}>
      <rect width="420" height="300" fill="#0D0404" />
      <text x="210" y="18" textAnchor="middle" fill="rgba(212,175,55,0.5)" fontSize="8" fontFamily="Space Mono, monospace" letterSpacing="2">EMOTION SHEET · 表情拆解</text>

      {expressions.map((expr, i) => {
        const col = i % 3
        const row = Math.floor(i / 3)
        const cx = 50 + col * 110
        const cy = 50 + row * 110

        return (
          <g key={i} transform={`translate(${cx - 40},${cy - 40})`}>
            <rect x="0" y="0" width="80" height="95" rx="3" fill="#0B0B0B" stroke="rgba(139,0,0,0.3)" strokeWidth="0.7" />
            {/* Face oval */}
            <ellipse cx="40" cy="42" rx="26" ry="30" fill="#F0D8C0" stroke="rgba(30,10,5,0.5)" strokeWidth="0.8" />
            {/* Hair top */}
            <rect x="14" y="14" width="52" height="16" rx="8" fill="#1A0505" />
            {/* Eyes */}
            <ellipse cx="29" cy={expr.eyeY} rx="6" ry="7" fill="#0A0A0A" />
            <ellipse cx="51" cy={expr.eyeY} rx="6" ry="7" fill="#0A0A0A" />
            <circle cx="27" cy={expr.eyeY - 2} r="2.5" fill="#fff" />
            <circle cx="49" cy={expr.eyeY - 2} r="2.5" fill="#fff" />
            {/* Eyebrows */}
            <path d={expr.browCurve} stroke="#1A0505" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d={`M ${expr.browCurve.split('M ')[1].split(' Q')[0].split(' ').map((v, vi) => vi === 0 ? String(parseInt(v) + 26) : v).join(' ')} Q ${expr.browCurve.split('Q ')[1]}`}
              stroke="#1A0505" strokeWidth="1.5" fill="none" strokeLinecap="round"
              transform="scale(-1,1) translate(-80,0)" />
            {/* Mouth */}
            <path d={expr.curve} stroke={i === 5 ? '#8B0000' : '#C06060'} strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {i === 5 && <line x1="30" y1="48" x2="50" y2="48" stroke="rgba(139,0,0,0.3)" strokeWidth="0.7" />}
            {/* Label */}
            <text x="40" y="87" textAnchor="middle" fill="rgba(212,175,55,0.6)" fontSize="7" fontFamily="Space Mono, monospace">{expr.label}</text>
          </g>
        )
      })}
    </svg>
  )
}

/* ── Form II: 裂变时刻 Key Art ───────────────────────── */
export function FormTwoKeyArt() {
  return (
    <svg viewBox="0 0 440 600" style={{ width: '100%', maxWidth: 440 }}>
      <defs>
        <radialGradient id="burstGrad" cx="55%" cy="38%" r="55%">
          <stop offset="0%" stopColor="rgba(139,0,0,0.3)" />
          <stop offset="100%" stopColor="rgba(11,11,11,0)" />
        </radialGradient>
        <linearGradient id="skinGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F0D4B8" />
          <stop offset="100%" stopColor="#E0C0A0" />
        </linearGradient>
        <linearGradient id="scissorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C8C8C8" />
          <stop offset="50%" stopColor="#F0F0F0" />
          <stop offset="100%" stopColor="#A0A0A0" />
        </linearGradient>
        <pattern id="dotGrid2" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="0.5" fill="rgba(212,175,55,0.06)" />
        </pattern>
      </defs>

      <rect width="440" height="600" fill="#0B0B0B" />
      <rect width="440" height="600" fill="url(#dotGrid2)" />
      <circle cx="245" cy="228" r="240" fill="url(#burstGrad)" />

      {/* ─ ENERGY BURST LINES ─ */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i / 24) * Math.PI * 2
        const r1 = 90 + (i % 3) * 12
        const r2 = 200 + (i % 5) * 20
        return (
          <line key={i}
            x1={245 + Math.cos(angle) * r1} y1={228 + Math.sin(angle) * r1}
            x2={245 + Math.cos(angle) * r2} y2={228 + Math.sin(angle) * r2}
            stroke="rgba(139,0,0,0.12)" strokeWidth={i % 3 === 0 ? 1.2 : 0.6} />
        )
      })}
      {/* Gold burst inner */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2
        return (
          <line key={i}
            x1={245 + Math.cos(angle) * 65} y1={228 + Math.sin(angle) * 65}
            x2={245 + Math.cos(angle) * 95} y2={228 + Math.sin(angle) * 95}
            stroke="rgba(212,175,55,0.2)" strokeWidth="1" />
        )
      })}

      {/* ─ BODY (dynamic, slightly tilted right) ─ */}
      {/* Figure tilted ~8 deg */}
      <g transform="rotate(8, 200, 350)">
        {/* Lower body / legs */}
        <path d="M 165 400 Q 162 470 165 540 L 195 540 Q 192 470 188 400Z" fill="#1A0808" stroke="rgba(212,175,55,0.3)" strokeWidth="0.8" />
        <path d="M 215 400 Q 218 470 215 540 L 245 540 Q 248 470 242 400Z" fill="#1A0808" stroke="rgba(212,175,55,0.3)" strokeWidth="0.8" />

        {/* Body torso */}
        <path d="M 148 280 Q 162 265 185 262 L 215 262 Q 238 265 252 280 L 258 395 Q 238 402 200 404 Q 162 402 142 395Z" fill="#1A0808" stroke="#D4AF37" strokeWidth="1" />
        {/* Torn lace detail on clothing */}
        <path d="M 148 340 Q 142 330 148 320 Q 142 310 150 305" stroke="rgba(212,175,55,0.3)" strokeWidth="0.8" fill="none" />
        <path d="M 252 340 Q 258 330 252 320 Q 258 310 250 305" stroke="rgba(212,175,55,0.3)" strokeWidth="0.8" fill="none" />
      </g>

      {/* ─ LEFT ARM (down, holding cut strand) ─ */}
      <path d="M 158 295 Q 140 315 125 340 Q 115 360 118 385 L 130 390 Q 130 368 138 348 Q 150 325 168 305Z" fill="url(#skinGrad2)" stroke="rgba(40,15,5,0.6)" strokeWidth="0.8" />
      {/* Cut hair strand in left hand */}
      <path d="M 120 388 Q 118 400 122 415 Q 116 430 120 445 Q 114 460 118 475" stroke="#2A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 125 390 Q 122 405 126 420 Q 120 435 124 450" stroke="#1A0505" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* ─ RIGHT ARM (raised — holding scissors) ─ */}
      <path d="M 242 290 Q 265 270 285 255 Q 305 242 318 248 L 314 260 Q 300 255 282 268 Q 262 282 248 302Z" fill="url(#skinGrad2)" stroke="rgba(40,15,5,0.6)" strokeWidth="0.8" />

      {/* ─ SCISSORS ─ */}
      <g transform="rotate(-38, 315, 248)">
        {/* Blade 1 */}
        <path d="M 315 195 L 322 248 L 310 250 L 308 198Z" fill="url(#scissorGrad)" stroke="rgba(200,200,200,0.6)" strokeWidth="0.8" />
        {/* Blade 2 */}
        <path d="M 315 195 L 308 248 L 320 250 L 322 198Z" fill="url(#scissorGrad)" stroke="rgba(200,200,200,0.6)" strokeWidth="0.8" />
        {/* Pivot screw */}
        <circle cx="315" cy="247" r="5" fill="#D4AF37" stroke="rgba(168,135,42,0.8)" strokeWidth="1" />
        <circle cx="315" cy="247" r="2" fill="#A8872A" />
        {/* Handle ring 1 */}
        <ellipse cx="308" cy="268" rx="10" ry="12" fill="none" stroke="url(#scissorGrad)" strokeWidth="4" />
        {/* Handle ring 2 */}
        <ellipse cx="322" cy="268" rx="10" ry="12" fill="none" stroke="url(#scissorGrad)" strokeWidth="4" />
        {/* Blade blood drip */}
        <path d="M 312 200 Q 311 208 313 215" stroke="#8B0000" strokeWidth="1.5" fill="none" />
        <circle cx="313" cy="216" r="2.5" fill="#8B0000" />
      </g>

      {/* ─ HEAD (slightly tilted, expression: cold) ─ */}
      <g transform="rotate(-5, 205, 200)">
        {/* Remaining short hair after cut — chaotic */}
        <path d="M 155 165 Q 148 145 155 130 Q 162 115 175 118 Q 168 140 168 165Z" fill="#1A0505" />
        <path d="M 248 165 Q 255 148 252 132 Q 248 118 238 120 Q 244 142 242 165Z" fill="#1A0505" />
        <path d="M 165 118 Q 180 102 200 100 Q 220 102 235 118 Q 225 108 200 106 Q 175 108 165 118Z" fill="#1A0505" />
        {/* Top hair tufts — short and messy */}
        <path d="M 172 112 Q 178 98 185 105 Q 180 100 185 110Z" fill="#2A0A0A" />
        <path d="M 190 104 Q 196 88 205 96 Q 198 90 202 104Z" fill="#2A0A0A" />
        <path d="M 210 108 Q 218 94 226 103 Q 220 96 222 110Z" fill="#2A0A0A" />

        {/* Face */}
        <ellipse cx="204" cy="180" rx="68" ry="72" fill="url(#skinGrad2)" stroke="rgba(40,15,5,0.7)" strokeWidth="1" />

        {/* EYES — heavy-lidded, cold */}
        {/* Left eye — half closed */}
        <ellipse cx="178" cy="172" rx="14" ry="11" fill="#0A0A0A" />
        <path d="M 164 167 Q 178 164 192 167" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="0" /> {/* upper lid */}
        <ellipse cx="178" cy="174" rx="10" ry="7" fill="#4A1515" />
        <circle cx="174" cy="172" r="3.5" fill="#fff" />
        {/* Eyelid line */}
        <path d="M 164 168 Q 178 162 192 168" stroke="#0A0A0A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Right eye — half closed */}
        <ellipse cx="230" cy="172" rx="14" ry="11" fill="#0A0A0A" />
        <ellipse cx="230" cy="174" rx="10" ry="7" fill="#4A1515" />
        <circle cx="226" cy="172" r="3.5" fill="#fff" />
        <path d="M 216 168 Q 230 162 244 168" stroke="#0A0A0A" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Eyebrows — slightly raised, one higher */}
        <path d="M 163 158 Q 175 153 190 156" stroke="#1A0505" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 218 156 Q 230 150 244 154" stroke="#1A0505" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Nose */}
        <path d="M 200 188 Q 196 196 200 200 Q 204 196 208 188" stroke="rgba(140,90,60,0.4)" strokeWidth="1" fill="none" />

        {/* Mouth — slight cold smile, asymmetric */}
        <path d="M 185 214 Q 200 218 218 212" stroke="#A04040" strokeWidth="1.8" fill="none" strokeLinecap="round" />

        {/* Blood drop on cheek */}
        <path d="M 158 185 Q 156 192 158 200" stroke="#8B0000" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="158" cy="202" r="3" fill="#8B0000" />
      </g>

      {/* ─ FLOATING HAIR STRANDS ─ */}
      {/* Cut hair falling */}
      <path d="M 230 170 Q 240 200 248 240 Q 255 275 252 310" stroke="#2A0A0A" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.9" />
      <path d="M 236 168 Q 250 195 260 230 Q 268 262 265 295" stroke="#1A0505" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M 242 172 Q 260 200 268 238 Q 274 268 270 300" stroke="#2A0505" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M 248 178 Q 270 202 278 240" stroke="#1A0505" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
      {/* Shorter flying strands */}
      <path d="M 222 165 Q 230 158 240 162 Q 248 156 260 162" stroke="#2A0A0A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M 218 160 Q 228 150 240 155" stroke="#1A0505" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* ─ TORN LACE STRIPS ─ */}
      <path d="M 145 320 Q 135 330 140 345 Q 132 355 138 365" stroke="rgba(212,175,55,0.25)" strokeWidth="1" fill="none" strokeDasharray="4,3" />
      <path d="M 255 315 Q 265 325 260 340 Q 268 352 262 362" stroke="rgba(212,175,55,0.25)" strokeWidth="1" fill="none" strokeDasharray="4,3" />

      {/* ─ TATTOO GLIMPSE ON UPPER BACK ─ */}
      {/* Just visible at collar */}
      <path d="M 185 270 Q 200 260 215 270" stroke="rgba(212,175,55,0.2)" strokeWidth="0.7" fill="none" />
      <path d="M 188 264 Q 200 255 212 264" stroke="rgba(212,175,55,0.15)" strokeWidth="0.5" fill="none" />

      {/* Form label watermark */}
      <text x="18" y="570" fill="rgba(139,0,0,0.15)" fontSize="80" fontFamily="Abril Fatface, serif">II</text>
      <rect x="18" y="582" width="165" height="22" fill="rgba(139,0,0,0.15)" />
      <text x="26" y="596" fill="rgba(212,175,55,0.7)" fontSize="7.5" fontFamily="Space Mono, monospace" letterSpacing="1">FORM II · 裂变时刻</text>

      {/* Scissors annotation */}
      <line x1="330" y1="195" x2="370" y2="175" stroke="rgba(212,175,55,0.25)" strokeWidth="0.6" />
      <text x="372" y="178" fill="rgba(212,175,55,0.55)" fontSize="7.5" fontFamily="Space Mono, monospace">SCISSORS · 裂变之具</text>
      <line x1="270" y1="295" x2="370" y2="295" stroke="rgba(212,175,55,0.25)" strokeWidth="0.6" />
      <text x="372" y="298" fill="rgba(212,175,55,0.55)" fontSize="7.5" fontFamily="Space Mono, monospace">FALLING HAIR · 剪落</text>
      <line x1="162" y1="200" x2="42" y2="200" stroke="rgba(139,0,0,0.3)" strokeWidth="0.6" />
      <text x="8" y="203" fill="rgba(139,0,0,0.65)" fontSize="7.5" fontFamily="Space Mono, monospace">BLOOD · 鲜血</text>
    </svg>
  )
}

/* ── Form II Tattoo Pattern: 浮世绘木偶戏台 ─────────── */
export function TattooPattern() {
  return (
    <svg viewBox="0 0 380 280" style={{ width: '100%' }}>
      <defs>
        <pattern id="wavePattern" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 10 Q10 0 20 10 Q30 20 40 10" fill="none" stroke="rgba(212,175,55,0.12)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="380" height="280" fill="#0D0404" />
      <rect width="380" height="280" fill="url(#wavePattern)" />

      {/* Stage frame — 戏台框架 */}
      {/* Outer frame */}
      <rect x="20" y="20" width="340" height="240" rx="2" fill="none" stroke="rgba(212,175,55,0.35)" strokeWidth="1.5" />
      {/* Inner frame */}
      <rect x="28" y="28" width="324" height="224" rx="1" fill="none" stroke="rgba(212,175,55,0.15)" strokeWidth="0.7" />

      {/* Roof — 屋顶 (traditional curved) */}
      <path d="M 30 80 Q 190 30 350 80 L 350 90 Q 190 42 30 90Z" fill="rgba(139,0,0,0.4)" stroke="#D4AF37" strokeWidth="1" />
      {/* Roof ridge */}
      <path d="M 30 80 Q 190 30 350 80" stroke="rgba(212,175,55,0.6)" strokeWidth="1.5" fill="none" />
      {/* Roof tiles texture */}
      {Array.from({ length: 10 }).map((_, i) => (
        <path key={i} d={`M ${30 + i * 32} 82 Q ${46 + i * 32} 76 ${62 + i * 32} 82`} stroke="rgba(212,175,55,0.2)" strokeWidth="0.7" fill="none" />
      ))}
      {/* Eaves decorative ends */}
      <circle cx="30" cy="82" r="6" fill="rgba(139,0,0,0.6)" stroke="#D4AF37" strokeWidth="1" />
      <circle cx="350" cy="82" r="6" fill="rgba(139,0,0,0.6)" stroke="#D4AF37" strokeWidth="1" />

      {/* Stage pillars */}
      <rect x="55" y="90" width="12" height="155" fill="rgba(50,20,5,0.8)" stroke="rgba(212,175,55,0.4)" strokeWidth="0.8" />
      <rect x="313" y="90" width="12" height="155" fill="rgba(50,20,5,0.8)" stroke="rgba(212,175,55,0.4)" strokeWidth="0.8" />
      {/* Pillar capitals */}
      <rect x="48" y="86" width="26" height="8" rx="2" fill="rgba(80,35,8,0.8)" stroke="rgba(212,175,55,0.4)" strokeWidth="0.8" />
      <rect x="306" y="86" width="26" height="8" rx="2" fill="rgba(80,35,8,0.8)" stroke="rgba(212,175,55,0.4)" strokeWidth="0.8" />

      {/* Stage floor */}
      <rect x="55" y="220" width="270" height="25" rx="2" fill="rgba(50,20,5,0.7)" stroke="rgba(212,175,55,0.3)" strokeWidth="0.8" />
      {/* Floor planks */}
      {[75, 100, 125, 150, 175, 200, 225, 250, 275, 300].map(x => (
        <line key={x} x1={x} y1="220" x2={x} y2="245" stroke="rgba(212,175,55,0.12)" strokeWidth="0.6" />
      ))}

      {/* Stage curtain backdrop */}
      <path d="M 67 90 Q 80 120 70 160 Q 78 185 68 220" stroke="rgba(139,0,0,0.4)" strokeWidth="1" fill="none" />
      <path d="M 313 90 Q 300 120 310 160 Q 302 185 312 220" stroke="rgba(139,0,0,0.4)" strokeWidth="1" fill="none" />

      {/* ─ PUPPET MASTER FIGURE (center back, elevated) ─ */}
      {/* The puppeteer — she who pulls the strings */}
      <g transform="translate(140, 95)">
        {/* Body */}
        <path d="M 50 20 Q 52 0 50 -15 Q 48 -30 50 -42" stroke="rgba(212,175,55,0.6)" strokeWidth="1.5" fill="none" />
        {/* Head */}
        <circle cx="50" cy="-48" r="12" fill="none" stroke="rgba(212,175,55,0.6)" strokeWidth="1.2" />
        {/* Hair — bob silhouette */}
        <path d="M 38 -52 Q 38 -62 50 -65 Q 62 -62 62 -52" fill="rgba(20,5,5,0.8)" stroke="rgba(212,175,55,0.4)" strokeWidth="0.8" />
        {/* Eyes */}
        <circle cx="46" cy="-50" r="2" fill="rgba(212,175,55,0.5)" />
        <circle cx="54" cy="-50" r="2" fill="rgba(212,175,55,0.5)" />
        {/* Cigarette holder */}
        <line x1="62" y1="-47" x2="76" y2="-52" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
        {/* Arms out — controlling strings */}
        <path d="M 40 10 Q 20 5 10 8" stroke="rgba(212,175,55,0.5)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M 60 10 Q 80 5 90 8" stroke="rgba(212,175,55,0.5)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        {/* STRINGS going down */}
        <line x1="12" y1="10" x2="12" y2="75" stroke="rgba(212,175,55,0.3)" strokeWidth="0.7" strokeDasharray="3,2" />
        <line x1="28" y1="8" x2="30" y2="75" stroke="rgba(212,175,55,0.3)" strokeWidth="0.7" strokeDasharray="3,2" />
        <line x1="72" y1="8" x2="70" y2="75" stroke="rgba(212,175,55,0.3)" strokeWidth="0.7" strokeDasharray="3,2" />
        <line x1="88" y1="10" x2="88" y2="75" stroke="rgba(212,175,55,0.3)" strokeWidth="0.7" strokeDasharray="3,2" />
      </g>

      {/* ─ PUPPET FIGURES (foreground, on stage) ─ */}
      {/* Left puppet — kneeling, being controlled */}
      <g transform="translate(85, 145)">
        <circle cx="20" cy="0" r="10" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
        <path d="M 20 10 L 18 35 M 20 10 L 10 25 M 20 10 L 30 25" stroke="rgba(212,175,55,0.4)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M 18 35 L 14 60 M 18 35 L 22 60" stroke="rgba(212,175,55,0.35)" strokeWidth="1" strokeLinecap="round" fill="none" />
        {/* Puppet cross bar */}
        <line x1="8" y1="-18" x2="32" y2="-18" stroke="rgba(212,175,55,0.3)" strokeWidth="1.2" />
        <line x1="20" y1="-18" x2="20" y2="-8" stroke="rgba(212,175,55,0.3)" strokeWidth="1" />
        <line x1="8" y1="-18" x2="10" y2="25" stroke="rgba(212,175,55,0.2)" strokeWidth="0.7" strokeDasharray="2,2" />
        <line x1="32" y1="-18" x2="30" y2="25" stroke="rgba(212,175,55,0.2)" strokeWidth="0.7" strokeDasharray="2,2" />
      </g>

      {/* Right puppet — sprawled, collapsed */}
      <g transform="translate(240, 148)">
        <circle cx="20" cy="0" r="10" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
        <path d="M 20 10 L 22 35 M 20 10 L 5 22 M 20 10 L 35 22" stroke="rgba(212,175,55,0.4)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M 22 35 L 15 60 M 22 35 L 28 60" stroke="rgba(212,175,55,0.35)" strokeWidth="1" strokeLinecap="round" fill="none" />
        <line x1="8" y1="-18" x2="32" y2="-18" stroke="rgba(212,175,55,0.3)" strokeWidth="1.2" />
        <line x1="20" y1="-18" x2="20" y2="-8" stroke="rgba(212,175,55,0.3)" strokeWidth="1" />
        <line x1="8" y1="-18" x2="10" y2="22" stroke="rgba(212,175,55,0.2)" strokeWidth="0.7" strokeDasharray="2,2" />
        <line x1="32" y1="-18" x2="34" y2="22" stroke="rgba(212,175,55,0.2)" strokeWidth="0.7" strokeDasharray="2,2" />
      </g>

      {/* Decorative corner ornaments */}
      {[[20, 20], [360, 20], [20, 260], [360, 260]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x},${y}) rotate(${i * 90})`}>
          <path d="M 0 0 L 12 0 M 0 0 L 0 12" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" />
        </g>
      ))}

      {/* Label */}
      <text x="190" y="272" textAnchor="middle" fill="rgba(212,175,55,0.4)" fontSize="7.5" fontFamily="Space Mono, monospace" letterSpacing="2">TATTOO · 浮世绘木偶戏台图腾</text>
    </svg>
  )
}

/* ── Form III: 幕后庄家 Main Figure ─────────────────── */
export function FormThreeFigure() {
  return (
    <svg viewBox="0 0 480 660" style={{ width: '100%', maxWidth: 480 }}>
      <defs>
        <radialGradient id="bgGlow3" cx="50%" cy="35%" r="55%">
          <stop offset="0%" stopColor="rgba(139,0,0,0.22)" />
          <stop offset="100%" stopColor="rgba(11,11,11,0)" />
        </radialGradient>
        <linearGradient id="skinGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EDD0B0" />
          <stop offset="100%" stopColor="#D8B890" />
        </linearGradient>
        <linearGradient id="capeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A0808" />
          <stop offset="50%" stopColor="#0D0404" />
          <stop offset="100%" stopColor="#220A0A" />
        </linearGradient>
        <linearGradient id="dressGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E0808" />
          <stop offset="100%" stopColor="#0A0404" />
        </linearGradient>
        <pattern id="brocade" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 12 0 Q 18 6 12 12 Q 6 18 12 24" fill="none" stroke="rgba(139,0,0,0.35)" strokeWidth="0.8" />
          <path d="M 0 12 Q 6 6 12 12 Q 18 18 24 12" fill="none" stroke="rgba(139,0,0,0.35)" strokeWidth="0.8" />
          <circle cx="12" cy="12" r="1.5" fill="rgba(212,175,55,0.2)" />
        </pattern>
        <pattern id="dotGrid3" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="9" cy="9" r="0.5" fill="rgba(212,175,55,0.06)" />
        </pattern>
      </defs>

      <rect width="480" height="660" fill="#0B0B0B" />
      <rect width="480" height="660" fill="url(#dotGrid3)" />
      <ellipse cx="240" cy="230" rx="280" ry="260" fill="url(#bgGlow3)" />

      {/* ─ CAPE — draped dramatically left ─ */}
      <path d="M 200 290 Q 155 310 100 370 Q 60 420 45 490 Q 38 540 50 590 Q 75 580 95 560 Q 105 520 120 480 Q 145 430 175 390 Q 195 360 210 330 Q 215 310 210 295Z" fill="url(#capeGrad)" stroke="rgba(212,175,55,0.35)" strokeWidth="1.2" />
      {/* Cape inner fold highlights */}
      <path d="M 200 295 Q 168 330 148 380 Q 132 425 128 475" fill="none" stroke="rgba(212,175,55,0.15)" strokeWidth="0.8" />
      <path d="M 195 308 Q 170 345 155 390 Q 142 432 140 478" fill="none" stroke="rgba(212,175,55,0.1)" strokeWidth="0.6" />
      {/* Cape lining — rich crimson */}
      <path d="M 208 295 Q 175 325 158 378 Q 142 428 138 482 Q 155 475 162 428 Q 172 382 188 338 Q 200 310 210 295Z" fill="rgba(139,0,0,0.25)" />
      {/* Cape gold trim edge */}
      <path d="M 200 290 Q 155 312 100 370 Q 60 422 46 492 Q 40 542 52 592" stroke="#D4AF37" strokeWidth="1.5" fill="none" strokeDasharray="6,4" opacity="0.5" />

      {/* ─ DRESS BODY ─ */}
      <path d="M 195 290 Q 215 278 240 275 Q 265 278 282 292 L 290 400 L 295 560 Q 275 575 240 578 Q 205 575 188 560 L 192 400Z" fill="url(#dressGrad)" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
      {/* Brocade pattern on dress */}
      <path d="M 195 290 Q 215 278 240 275 Q 265 278 282 292 L 290 400 L 295 560 Q 275 575 240 578 Q 205 575 188 560 L 192 400Z" fill="url(#brocade)" opacity="0.9" />
      {/* Dress gold edge details */}
      <path d="M 195 292 L 190 560" stroke="rgba(212,175,55,0.3)" strokeWidth="0.8" />
      <path d="M 283 294 L 292 558" stroke="rgba(212,175,55,0.3)" strokeWidth="0.8" />
      {/* Dress center vertical lines */}
      <line x1="240" y1="275" x2="242" y2="578" stroke="rgba(212,175,55,0.2)" strokeWidth="0.7" />
      {/* Gold brocade accent lines horizontal */}
      {[340, 390, 440, 490, 540].map(y => (
        <path key={y} d={`M 190 ${y} Q 240 ${y - 8} 290 ${y}`} stroke="rgba(212,175,55,0.18)" strokeWidth="0.7" fill="none" />
      ))}
      {/* Slit detail lower dress */}
      <path d="M 240 500 Q 255 530 260 578" stroke="rgba(212,175,55,0.25)" strokeWidth="1" fill="none" />

      {/* ─ RIGHT ARM — cigarette holder ─ */}
      <path d="M 282 295 Q 305 278 320 268 Q 335 260 345 264 L 342 276 Q 332 272 318 280 Q 304 290 288 307Z" fill="url(#skinGrad3)" stroke="rgba(40,20,5,0.6)" strokeWidth="0.8" />
      {/* Hand */}
      <ellipse cx="346" cy="270" rx="12" ry="9" fill="url(#skinGrad3)" stroke="rgba(40,20,5,0.5)" strokeWidth="0.8" />
      {/* Cigarette holder — long and elegant */}
      <path d="M 355 262 Q 375 250 398 242 Q 418 235 432 232" stroke="#C8941A" strokeWidth="4" strokeLinecap="round" />
      <path d="M 355 262 Q 375 250 398 242 Q 418 235 432 232" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" />
      {/* Cigarette tip ember */}
      <circle cx="432" cy="232" r="4" fill="#8B0000" opacity="0.8" />
      <circle cx="432" cy="232" r="2" fill="#FF4400" opacity="0.5" />
      {/* Smoke from cigarette */}
      <path d="M 432 228 Q 436 218 430 208 Q 425 200 430 190" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 436 226 Q 442 214 436 202 Q 431 192 438 182" stroke="rgba(255,255,255,0.07)" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* ─ LEFT ARM — holding mask ─ */}
      <path d="M 197 295 Q 178 310 162 325 Q 148 338 142 352 L 154 358 Q 158 346 170 334 Q 183 320 200 307Z" fill="url(#skinGrad3)" stroke="rgba(40,20,5,0.6)" strokeWidth="0.8" />
      {/* Hand */}
      <ellipse cx="148" cy="356" rx="13" ry="10" fill="url(#skinGrad3)" stroke="rgba(40,20,5,0.5)" strokeWidth="0.8" transform="rotate(20,148,356)" />
      {/* MASK — dangling from fingers */}
      <g transform="translate(120, 355) rotate(25, 30, 30)">
        {/* Mask body */}
        <path d="M 5 15 Q 5 0 30 -2 Q 55 0 55 15 Q 58 40 50 55 Q 40 68 30 69 Q 20 68 10 55 Q 2 40 5 15Z" fill="#1A1A1A" stroke="#D4AF37" strokeWidth="1.2" />
        {/* Skull eye left */}
        <ellipse cx="19" cy="20" rx="9" ry="8" fill="#0B0B0B" />
        {/* Skull eye right */}
        <ellipse cx="41" cy="20" rx="9" ry="8" fill="#0B0B0B" />
        {/* Skull eye inner glow */}
        <ellipse cx="19" cy="21" rx="5" ry="4" fill="rgba(139,0,0,0.2)" />
        <ellipse cx="41" cy="21" rx="5" ry="4" fill="rgba(139,0,0,0.2)" />
        {/* Decorative crystals */}
        <polygon points="30,-4 33,2 30,6 27,2" fill="rgba(139,0,0,0.8)" stroke="#D4AF37" strokeWidth="0.7" />
        {/* Gold ornament on cheeks */}
        <circle cx="8" cy="35" r="3" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="0.8" />
        <circle cx="52" cy="35" r="3" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="0.8" />
        {/* Handle */}
        <rect x="27" y="68" width="6" height="28" rx="3" fill="#C8941A" stroke="#D4AF37" strokeWidth="0.7" />
      </g>

      {/* ─ NECK & COLLAR ─ */}
      <rect x="224" y="252" width="32" height="32" rx="6" fill="url(#skinGrad3)" stroke="rgba(40,20,5,0.5)" strokeWidth="0.8" />
      {/* Collar — deep V neckline */}
      <path d="M 198 280 Q 216 268 240 272 Q 264 268 282 280 Q 265 288 240 292 Q 215 288 198 280Z" fill="#1A0808" stroke="rgba(212,175,55,0.4)" strokeWidth="0.8" />

      {/* ─ HEAD ─ */}
      {/* Hair: elegant bob waves */}
      {/* Left side bob */}
      <path d="M 168 200 Q 162 185 168 170 Q 172 158 180 162 Q 174 182 175 200Z" fill="#1A0505" stroke="rgba(212,175,55,0.3)" strokeWidth="0.8" />
      {/* Right side bob */}
      <path d="M 308 200 Q 314 185 308 170 Q 304 158 296 162 Q 302 182 301 200Z" fill="#1A0505" stroke="rgba(212,175,55,0.3)" strokeWidth="0.8" />
      {/* Main hair bob — left wave */}
      <path d="M 172 165 Q 168 148 175 132 Q 182 118 195 120 Q 185 135 185 155 Q 183 175 180 200 L 175 200Z" fill="#1A0505" stroke="rgba(212,175,55,0.3)" strokeWidth="0.8" />
      {/* Main hair bob — right wave */}
      <path d="M 302 165 Q 308 148 301 132 Q 294 118 281 120 Q 291 135 291 155 Q 293 175 296 200 L 301 200Z" fill="#1A0505" stroke="rgba(212,175,55,0.3)" strokeWidth="0.8" />
      {/* Top hair — smooth waves */}
      <path d="M 178 128 Q 195 108 240 104 Q 285 108 302 128 Q 285 116 240 114 Q 195 116 178 128Z" fill="#1A0505" />
      {/* Wave crest details */}
      <path d="M 182 135 Q 200 118 240 114 Q 280 118 298 135" stroke="#D4AF37" strokeWidth="0.7" fill="none" opacity="0.3" />
      {/* Side waves */}
      <path d="M 175 140 Q 170 158 172 178 Q 168 196 172 210" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="1" />
      <path d="M 182 135 Q 178 155 180 175 Q 176 195 180 212" fill="none" stroke="rgba(212,175,55,0.15)" strokeWidth="0.8" />
      <path d="M 301 140 Q 306 158 304 178 Q 308 196 304 210" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="1" />

      {/* Face */}
      <ellipse cx="240" cy="190" rx="68" ry="76" fill="url(#skinGrad3)" stroke="rgba(40,20,5,0.7)" strokeWidth="1" />

      {/* EYES — heavy-lidded, commanding */}
      {/* Left eye */}
      <ellipse cx="213" cy="185" rx="15" ry="11" fill="#0A0A0A" />
      <ellipse cx="213" cy="187" rx="10" ry="7" fill="#4A1515" />
      <ellipse cx="213" cy="186" rx="6" ry="5" fill="#7B1E1E" />
      <circle cx="210" cy="183" r="3.5" fill="#fff" />
      <circle cx="216" cy="186" r="1.5" fill="rgba(255,255,255,0.35)" />
      {/* Upper eyelid — thick, defined */}
      <path d="M 198 181 Q 213 176 228 181" stroke="#0A0A0A" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      {/* Lower lash line */}
      <path d="M 200 191 Q 213 194 226 191" stroke="#0A0A0A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Outer lashes */}
      <path d="M 198 182 Q 194 176 190 174" stroke="#0A0A0A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M 201 179 Q 198 172 197 168" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M 206 177 Q 205 170 206 166" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Left eyebrow — arched, sharp */}
      <path d="M 196 168 Q 210 160 227 164" stroke="#1A0505" strokeWidth="2.2" fill="none" strokeLinecap="round" />

      {/* Right eye */}
      <ellipse cx="267" cy="185" rx="15" ry="11" fill="#0A0A0A" />
      <ellipse cx="267" cy="187" rx="10" ry="7" fill="#4A1515" />
      <ellipse cx="267" cy="186" rx="6" ry="5" fill="#7B1E1E" />
      <circle cx="264" cy="183" r="3.5" fill="#fff" />
      <circle cx="270" cy="186" r="1.5" fill="rgba(255,255,255,0.35)" />
      <path d="M 252 181 Q 267 176 282 181" stroke="#0A0A0A" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      <path d="M 254 191 Q 267 194 280 191" stroke="#0A0A0A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M 282 182 Q 286 176 290 174" stroke="#0A0A0A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M 279 179 Q 282 172 283 168" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M 274 177 Q 275 170 274 166" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M 253 168 Q 267 160 284 164" stroke="#1A0505" strokeWidth="2.2" fill="none" strokeLinecap="round" />

      {/* Nose — elegant */}
      <path d="M 234 204 Q 238 212 240 214 Q 242 212 246 204" stroke="rgba(130,85,50,0.45)" strokeWidth="1.2" fill="none" />

      {/* Mouth — cool, slight asymmetric smile */}
      <path d="M 225 228 Q 238 234 256 228" stroke="#A04040" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 253 228 Q 258 225 260 228" stroke="#A04040" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Cheekbone shadows — sharp, defined */}
      <path d="M 192 208 Q 205 215 215 210" stroke="rgba(160,80,50,0.15)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 288 208 Q 275 215 265 210" stroke="rgba(160,80,50,0.15)" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* ─ ANNOTATION LINES ─ */}
      <line x1="360" y1="118" x2="305" y2="128" stroke="rgba(212,175,55,0.28)" strokeWidth="0.6" />
      <line x1="360" y1="118" x2="410" y2="118" stroke="rgba(212,175,55,0.28)" strokeWidth="0.6" />
      <text x="413" y="121" fill="rgba(212,175,55,0.6)" fontSize="7.5" fontFamily="Space Mono, monospace">HAIR · 复古手推波浪卷</text>

      <line x1="360" y1="183" x2="284" y2="183" stroke="rgba(212,175,55,0.28)" strokeWidth="0.6" />
      <line x1="360" y1="183" x2="410" y2="183" stroke="rgba(212,175,55,0.28)" strokeWidth="0.6" />
      <text x="413" y="186" fill="rgba(212,175,55,0.6)" fontSize="7.5" fontFamily="Space Mono, monospace">EYES · 慵懒而冰冷</text>

      <line x1="360" y1="270" x2="344" y2="270" stroke="rgba(212,175,55,0.28)" strokeWidth="0.6" />
      <line x1="360" y1="270" x2="410" y2="270" stroke="rgba(212,175,55,0.28)" strokeWidth="0.6" />
      <text x="413" y="273" fill="rgba(212,175,55,0.6)" fontSize="7.5" fontFamily="Space Mono, monospace">PIPE · 长杆玉嘴烟枪</text>

      <line x1="360" y1="400" x2="292" y2="400" stroke="rgba(212,175,55,0.28)" strokeWidth="0.6" />
      <line x1="360" y1="400" x2="410" y2="400" stroke="rgba(212,175,55,0.28)" strokeWidth="0.6" />
      <text x="413" y="403" fill="rgba(212,175,55,0.6)" fontSize="7.5" fontFamily="Space Mono, monospace">BROCADE · 织锦缎礼服</text>

      <line x1="50" y1="440" x2="110" y2="440" stroke="rgba(212,175,55,0.28)" strokeWidth="0.6" />
      <line x1="50" y1="440" x2="8" y2="440" stroke="rgba(212,175,55,0.28)" strokeWidth="0.6" />
      <text x="2" y="443" textAnchor="end" fill="rgba(212,175,55,0.6)" fontSize="7.5" fontFamily="Space Mono, monospace">CAPE · 天鹅绒披肩</text>

      <line x1="85" y1="360" x2="135" y2="360" stroke="rgba(212,175,55,0.28)" strokeWidth="0.6" />
      <line x1="85" y1="360" x2="8" y2="360" stroke="rgba(212,175,55,0.28)" strokeWidth="0.6" />
      <text x="2" y="363" textAnchor="end" fill="rgba(212,175,55,0.6)" fontSize="7.5" fontFamily="Space Mono, monospace">MASK · 水钻骷髅面具</text>

      {/* Form label watermark */}
      <text x="18" y="620" fill="rgba(139,0,0,0.15)" fontSize="80" fontFamily="Abril Fatface, serif">III</text>
      <rect x="18" y="630" width="175" height="22" fill="rgba(139,0,0,0.2)" />
      <text x="26" y="644" fill="rgba(212,175,55,0.8)" fontSize="7.5" fontFamily="Space Mono, monospace" letterSpacing="1">FORM III · 幕后庄家</text>

      {/* Current form badge */}
      <rect x="290" y="630" width="120" height="22" fill="rgba(139,0,0,0.3)" stroke="rgba(139,0,0,0.5)" strokeWidth="1" />
      <text x="298" y="644" fill="rgba(212,175,55,0.9)" fontSize="7.5" fontFamily="Space Mono, monospace" letterSpacing="1">CURRENT FORM ·现役</text>
    </svg>
  )
}
