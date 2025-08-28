import React, { useEffect, useMemo, useRef, useState } from 'react'
import features from '../features.js'
import FeatureCard from './FeatureCard.jsx'
import ArrowNav from './ArrowNav.jsx'

export default function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0) // default to Feature 1
  const sectionRef = useRef(null)
  const stickyRef = useRef(null)
  const isAutoScrolling = useRef(false)

  const active = useMemo(() => features[activeIndex], [activeIndex])

  const goPrev = () => setActiveIndex((i) => (i - 1 + features.length) % features.length)
  const goNext = () => setActiveIndex((i) => (i + 1) % features.length)
  const goTo = (i) => setActiveIndex(i)

  // Auto-advance via scroll when section is sticky/in view
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry.isIntersecting) return
      },
      { threshold: 0.2 }
    )
    io.observe(section)

    const onScroll = () => {
      const sticky = stickyRef.current
      if (!sticky) return
      const rect = sticky.getBoundingClientRect()
      const viewport = window.innerHeight

      const topInView = rect.top <= 0 + 80 // allow small offset
      const bottomStillOnScreen = rect.bottom - viewport >= 0

      // Only auto-advance while sticky occupies the viewport (pinning effect)
      if (topInView && bottomStillOnScreen) {
        const progress = Math.min(1, Math.max(0, (0 - rect.top) / (rect.height - viewport)))
        const step = Math.floor(progress * features.length)
        const clamped = Math.min(features.length - 1, step)
        if (!isAutoScrolling.current) {
          isAutoScrolling.current = true
        }
        setActiveIndex(clamped)
      } else {
        if (isAutoScrolling.current) {
          isAutoScrolling.current = false
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className="sticky-section relative">
      {/* Wrapper that creates a long scroll region to step through 5 features */}
      <div ref={stickyRef} className="relative" style={{ height: '520vh' }}>
        <div className="sticky top-0">
          <div className="max-w-7xl mx-auto grid grid-cols-1 min-[551px]:grid-cols-2 min-[1025px]:grid-cols-3 gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 py-8 md:py-12 bg-white">
            {/* Left pane */}
            <div className="order-2 hidden min-[1025px]:flex flex-col justify-center">
              <p className="text-brand-blue font-medium">{`Feature No.${active.id} -`}</p>
              <h2 className="mt-3 md:mt-6 text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide">{active.heading}</h2>
              <ul className="mt-4 md:mt-6 space-y-2 text-base md:text-base text-gray-600 list-disc pl-5">
                {active.body.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
              <ArrowNav onPrev={goPrev} onNext={goNext} />
            </div>

            {/* Middle phone */}
            <div className="order-2 min-[551px]:order-1 min-[1025px]:order-2 flex items-center justify-center">
              <div className="relative w-[200px] sm:w-[240px] md:w-[300px] aspect-[9/19.5] rounded-[42px] shadow-phone overflow-hidden" aria-label="Feature phone preview">
                <div className="absolute inset-[10px] rounded-[36px] bg-white/5">
                  <div className="absolute inset-0">
                    {/* Gradient fallback (behind) */}
                    <div className="absolute inset-0 h-full w-full phone-mock z-0" />
                    {/* Reference image (above) */}
                    <img
                      src={active.image}
                      alt="iPhone mockup"
                      className="absolute inset-0 h-full w-full object-cover z-10 rounded-[36px]"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-40 bg-black/80 rounded-b-2xl"></div>
                </div>
              </div>
            </div>

            {/* Right feature list */}
            <div className="order-1 min-[551px]:order-2 min-[1025px]:order-3 flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-3 lg:mb-4">Feature Showcase</h3>
              <div className="rounded-xl bg-gray-50 lg:bg-transparent divide-y divide-gray-100">
                {features.map((f, i) => (
                  <FeatureCard
                    key={f.id}
                    index={i}
                    item={f}
                    isActive={activeIndex === i}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


