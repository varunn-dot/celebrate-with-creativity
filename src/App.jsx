import React from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Clock3,
  Flower2,
  Gift,
  Image as ImageIcon,
  MessageCircle,
  PlaySquare,
  Sparkles,
  ThumbsUp,
  Zap,
} from 'lucide-react'

const phoneNumber = '916381675219'
const whatsappLink = (message) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

const festivals = [
  { name: 'Ayudha Pooja', symbol: '🛠️', note: 'Celebrate the tools of your trade' },
  { name: 'Saraswati Pooja', symbol: '📚', note: 'A celebration of knowledge' },
  { name: 'Dussehra', symbol: '🏹', note: 'Share the victory of good' },
  { name: 'Diwali', symbol: '🪔', note: 'Light up your brand' },
  { name: 'Christmas', symbol: '🎄', note: 'Spread festive cheer' },
  { name: 'New Year', symbol: '🎆', note: 'Welcome fresh beginnings' },
  { name: 'Pongal', symbol: '🌾', note: 'Celebrate abundance' },
]

const packages = [
  {
    eyebrow: 'A little festive magic',
    title: 'Festival Creative Poster',
    description: 'A custom festival design made with your logo and brand details.',
    price: '₹150',
    oldPrice: '₹250',
    icon: ImageIcon,
    tone: 'rose',
    message: 'Hi! I want to order a Festival Creative Poster for ₹150. Please share the next steps.',
    features: ['Custom design', 'Your logo and brand details', 'Ready for social media'],
  },
  {
    eyebrow: 'Bring your brand to life',
    title: 'AI Festival Video',
    description: 'A 20-second festival video with your logo, brand name and music.',
    price: '₹750',
    oldPrice: '₹1,000',
    icon: PlaySquare,
    tone: 'green',
    message: 'Hi! I want to order an AI Festival Video for ₹750. Please share the next steps.',
    features: ['20-second video', 'Logo and brand name', 'Music included'],
  },
]

function WhatsAppButton({ children, message, className = '', light = false }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-emerald-900/20 ${
        light
          ? 'border border-white/25 bg-white text-forest hover:bg-cream'
          : 'bg-forest text-white shadow-lg shadow-forest/15 hover:bg-[#06442f]'
      } ${className}`}
    >
      <MessageCircle size={18} />
      {children}
      <ArrowRight size={16} />
    </a>
  )
}

function SectionHeading({ kicker, title, description, centered = true }) {
  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-maroon">
        <Sparkles size={14} /> {kicker}
      </p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-[#29271f] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-7 text-stone-600 sm:text-lg">{description}</p>}
    </div>
  )
}

function App() {
  const comboMessage = 'Hi! I want the Festival Offer: 1 Poster + 1 AI Video for ₹850 (combo offer). Please share the next steps.'

  return (
    <div className="min-h-screen overflow-hidden bg-cream text-[#29271f]">
      <div className="top-strip flex items-center justify-center gap-2 px-4 py-2.5 text-center text-[11px] font-semibold tracking-wide text-white sm:text-xs">
        <Sparkles size={14} className="text-amber-200" />
        FESTIVE SPECIAL · Custom creatives for your business
        <Sparkles size={14} className="text-amber-200" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a href="#home" className="flex items-center gap-3" aria-label="Celebrate With Creativity home">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest text-amber-100 shadow-md">
            <Flower2 size={23} />
          </span>
          <span>
            <span className="block font-display text-lg font-bold leading-tight sm:text-xl">Celebrate</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.23em] text-forest sm:text-[11px]">With Creativity</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-stone-600 md:flex">
          <a className="transition hover:text-maroon" href="#packages">Packages</a>
          <a className="transition hover:text-maroon" href="#festivals">Festivals</a>
          <a className="transition hover:text-maroon" href="#how-it-works">How it works</a>
        </nav>
        <a
          href={whatsappLink('Hi! I would like to know more about your festival creative offers.')}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/70 px-4 py-2.5 text-xs font-bold text-forest transition hover:bg-white sm:px-5 sm:text-sm"
        >
          <MessageCircle size={16} /> <span className="hidden sm:inline">Let's talk</span><span className="sm:hidden">WhatsApp</span>
        </a>
      </header>

      <main>
        <section id="home" className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-5 sm:px-8 sm:pb-20 lg:grid-cols-[1.03fr_.97fr] lg:gap-14 lg:px-12 lg:pb-28 lg:pt-10">
          <div className="hero-orb pointer-events-none absolute -left-36 top-20 h-80 w-80 rounded-full bg-[#e7d6ad]/30 blur-3xl" />
          <div className="relative z-[1] order-2 max-w-2xl lg:order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/70 px-4 py-2 text-xs font-bold text-forest shadow-sm sm:text-sm">
              <Sparkles size={15} className="text-gold" />
              Your brand deserves a festive glow
            </div>
            <h1 className="font-display text-[2.8rem] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-6xl lg:text-[4.4rem] xl:text-[5rem]">
              Celebrate with <span className="italic text-maroon">creativity.</span>
              <span className="mt-2 block text-forest">Make every festival memorable.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
              Give your business a festive makeover with custom posters and AI-powered festival videos — made to look good, feel personal, and get your brand noticed.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton message={comboMessage} className="w-full sm:w-auto">Get the ₹850 combo</WhatsAppButton>
              <a href="#packages" className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white/50 px-6 py-3.5 text-sm font-bold text-stone-700 transition hover:border-forest/40 hover:bg-white">
                Explore packages <ArrowDownRight size={16} />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-semibold text-stone-600 sm:text-sm">
              <span className="inline-flex items-center gap-2"><Check size={16} className="text-forest" /> Brand-ready designs</span>
              <span className="inline-flex items-center gap-2"><Check size={16} className="text-forest" /> Quick delivery</span>
              <span className="inline-flex items-center gap-2"><Check size={16} className="text-forest" /> Easy WhatsApp ordering</span>
            </div>
            <div className="mt-9 flex items-center gap-4 border-t border-stone-300/70 pt-6">
              <div className="flex -space-x-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream bg-[#f3d9a7] text-lg">🪔</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream bg-[#dce7d6] text-lg">🌿</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream bg-[#f1d8db] text-lg">✨</span>
              </div>
              <p className="text-xs leading-5 text-stone-500 sm:text-sm">One small creative touch.<br /><span className="font-bold text-stone-700">A more memorable brand.</span></p>
            </div>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-[510px] lg:order-2 lg:max-w-none">
            <div className="absolute -inset-3 rotate-2 rounded-[2rem] border border-gold/30 sm:-inset-4 sm:rounded-[2.5rem]" />
            <div className="absolute -right-4 -top-5 z-10 flex h-20 w-20 rotate-6 flex-col items-center justify-center rounded-full bg-gold text-center text-white shadow-lg sm:-right-7 sm:-top-6 sm:h-24 sm:w-24">
              <span className="text-[9px] font-bold uppercase tracking-widest">Festive</span>
              <span className="font-display text-2xl font-bold leading-none">Offer</span>
              <Sparkles size={13} className="mt-1" />
            </div>
            <div className="relative overflow-hidden rounded-[1.7rem] border-[5px] border-white bg-white shadow-soft sm:rounded-[2rem] sm:border-[7px]">
              <img
                src={`${import.meta.env.BASE_URL}festival-promo.jpg`}
                alt="Smiling woman in a cream and gold saree with a maroon blouse, in a warm festive Diwali setting"
                className="h-auto w-full object-cover"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-soft sm:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f8e8d9] text-maroon"><Gift size={20} /></span>
              <span><span className="block text-xs text-stone-500">Combo offer</span><span className="font-display text-xl font-bold text-maroon">Save with ₹850</span></span>
            </div>
          </div>
        </section>

        <section className="relative z-[1] border-y border-[#e9ddc8] bg-white/55">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-7 sm:grid-cols-4 sm:px-8 sm:py-8 lg:px-12">
            {[
              { icon: ImageIcon, big: '₹150', small: 'Custom festival poster' },
              { icon: PlaySquare, big: '₹750', small: '20-second AI video' },
              { icon: Gift, big: '₹850', small: 'Poster + video combo' },
              { icon: Zap, big: 'Quick', small: 'Easy WhatsApp ordering' },
            ].map(({ icon: Icon, big, small }) => (
              <div key={small} className="flex items-center gap-3 sm:justify-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e4ebdf] text-forest sm:h-12 sm:w-12"><Icon size={20} /></span>
                <span><span className="block font-display text-xl font-bold text-[#29271f] sm:text-2xl">{big}</span><span className="block text-[11px] leading-4 text-stone-500 sm:text-xs">{small}</span></span>
              </div>
            ))}
          </div>
        </section>

        <section id="packages" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <SectionHeading
            kicker="Pick your festive favourite"
            title={<>Small price. <span className="italic text-maroon">Big impression.</span></>}
            description="Choose a creative that fits your business, or pair both together and make your festival promotion go further."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((item) => {
              const Icon = item.icon
              const isGreen = item.tone === 'green'
              return (
                <article key={item.title} className={`package-card flex flex-col rounded-[1.7rem] border p-6 sm:p-8 ${isGreen ? 'border-forest/15 bg-[#e8eee3]' : 'border-[#ecd8d7] bg-[#fbebea]'}`}>
                  <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${isGreen ? 'bg-forest text-white' : 'bg-maroon text-white'}`}><Icon size={23} /></div>
                  <p className={`text-xs font-bold uppercase tracking-[0.15em] ${isGreen ? 'text-forest' : 'text-maroon'}`}>{item.eyebrow}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 min-h-[3.5rem] text-sm leading-6 text-stone-600">{item.description}</p>
                  <div className="mt-6 flex items-end gap-3">
                    <span className={`font-display text-5xl font-bold tracking-tight ${isGreen ? 'text-forest' : 'text-maroon'}`}>{item.price}</span>
                    <span className="pb-2 text-sm text-stone-500 line-through">{item.oldPrice}</span>
                  </div>
                  <ul className="mt-6 space-y-3 border-t border-stone-400/20 pt-6">
                    {item.features.map((feature) => <li key={feature} className="flex items-center gap-2 text-sm text-stone-700"><Check size={16} className={isGreen ? 'text-forest' : 'text-maroon'} /> {feature}</li>)}
                  </ul>
                  <WhatsAppButton message={item.message} className={`mt-8 w-full ${isGreen ? '' : 'bg-maroon hover:bg-[#761128]'} `}>Order this package</WhatsAppButton>
                </article>
              )
            })}

            <article className="relative flex flex-col overflow-hidden rounded-[1.7rem] bg-forest p-6 text-white shadow-xl shadow-forest/15 sm:p-8">
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-white/10" />
              <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-white/10" />
              <span className="absolute right-5 top-5 rounded-full bg-gold px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white">Best value</span>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-amber-200"><Gift size={23} /></div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-200">Double the creativity</p>
              <h3 className="mt-2 font-display text-2xl font-semibold">Festival Combo</h3>
              <p className="mt-3 min-h-[3.5rem] text-sm leading-6 text-white/75">One custom poster and one AI festival video, together in one offer.</p>
              <div className="mt-6 flex items-end gap-3">
                <span className="font-display text-5xl font-bold tracking-tight text-white">₹850</span>
                <span className="pb-2 text-sm text-white/55 line-through">₹1,250</span>
              </div>
              <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-amber-100"><Sparkles size={14} /> Save ₹400 on the combo</div>
              <ul className="mt-6 space-y-3 border-t border-white/15 pt-6">
                {['1 custom festival poster', '1 AI video (20 seconds)', 'Your logo and brand name'].map((feature) => <li key={feature} className="flex items-center gap-2 text-sm text-white/90"><Check size={16} className="text-amber-200" /> {feature}</li>)}
              </ul>
              <WhatsAppButton message={comboMessage} light className="mt-8 w-full">Claim combo offer</WhatsAppButton>
            </article>
          </div>
          <p className="mt-6 text-center text-xs leading-5 text-stone-500">Share your logo and details on WhatsApp to get started. Final design details can be confirmed in chat.</p>
        </section>

        <section id="festivals" className="festival-section border-y border-[#e8dcc6] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <SectionHeading
              kicker="A creative for every celebration"
              title={<>Your festivals. <span className="italic text-forest">Your brand.</span></>}
              description="From the first festive spark to the final celebration of the season, show up with a design that feels like you."
            />
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
              {festivals.map((festival, index) => (
                <div key={festival.name} className="festival-card group rounded-2xl border border-white bg-white/75 p-4 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft">
                  <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-4xl shadow-inner sm:h-24 sm:w-24 ${['bg-[#f7dfbf]', 'bg-[#e5e8f3]', 'bg-[#f4dfc6]', 'bg-[#f8e6b9]', 'bg-[#dce9dc]', 'bg-[#dce6f0]', 'bg-[#f4dfc6]'][index]}`}>
                    {festival.symbol}
                  </div>
                  <h3 className="mt-4 text-sm font-bold leading-5 text-stone-800">{festival.name}</h3>
                  <p className="mt-1 hidden text-[11px] leading-4 text-stone-500 lg:block">{festival.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28">
          <div>
            <SectionHeading
              kicker="Simple from start to finish"
              title={<>Your next festival creative is just <span className="italic text-maroon">three steps away.</span></>}
              description="No complicated checkout. Just message us, share your details, and let the creativity begin."
              centered={false}
            />
            <WhatsAppButton message="Hi! I'd like to create a festival creative for my business. Please guide me." className="mt-7">Start on WhatsApp</WhatsAppButton>
          </div>
          <div className="space-y-4">
            {[
              { number: '01', title: 'Choose your package', body: 'Pick a poster, a 20-second AI video, or the ₹850 combo offer.', icon: Gift },
              { number: '02', title: 'Send your brand details', body: 'Share your logo, business name and festival preference in WhatsApp.', icon: MessageCircle },
              { number: '03', title: 'Get festival-ready', body: 'We’ll confirm your requirements and prepare your creative for sharing.', icon: Sparkles },
            ].map(({ number, title, body, icon: Icon }) => (
              <div key={number} className="flex gap-4 rounded-2xl border border-[#e8dcc6] bg-white/65 p-5 sm:gap-5 sm:p-6">
                <span className="font-display text-2xl font-bold text-gold sm:text-3xl">{number}</span>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-stone-600">{body}</p>
                </div>
                <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e5ecdf] text-forest sm:flex"><Icon size={20} /></span>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
          <div className="cta-panel relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-forest px-6 py-12 text-center text-white sm:px-12 sm:py-16 lg:rounded-[2.5rem] lg:py-20">
            <div className="absolute -left-20 -top-28 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -bottom-36 -right-12 h-96 w-96 rounded-full border border-white/10" />
            <div className="relative mx-auto max-w-3xl">
              <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-amber-200"><Sparkles size={27} /></span>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-200">Make this festival count</p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">Let's make something <span className="italic text-amber-200">memorable.</span></h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">Your brand, your festival, your creative moment. Message us to book your poster or video.</p>
              <WhatsAppButton message={comboMessage} light className="mt-8">Book your festival creative</WhatsAppButton>
              <p className="mt-5 text-sm font-semibold tracking-wide text-white/80">WhatsApp: +91 63816 75219</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e8dcc6] px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <a href="#home" className="font-display text-lg font-bold">Celebrate <span className="italic text-maroon">With Creativity</span></a>
          <p className="text-xs text-stone-500">Festive creatives for brands that want to be remembered.</p>
          <a href={whatsappLink('Hi! I would like to know more about your festival creative offers.')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-forest hover:text-maroon"><MessageCircle size={16} /> +91 63816 75219</a>
        </div>
        <p className="mt-5 text-center text-[11px] text-stone-400">© {new Date().getFullYear()} Celebrate With Creativity. All rights reserved.</p>
      </footer>

      <a
        href={whatsappLink('Hi! I would like to order a festival creative. Please share the available packages.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#168b53] px-4 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-900/25 transition hover:-translate-y-1 hover:bg-[#117745] focus:outline-none focus:ring-4 focus:ring-emerald-900/20"
      >
        <MessageCircle size={20} /> <span className="hidden sm:inline">Chat on WhatsApp</span><span className="sm:hidden">Chat</span>
      </a>
    </div>
  )
}

export default App
