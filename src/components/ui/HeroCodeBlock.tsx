import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Run = 'build_dashboard' | 'fetch_surveys' | null

const EDITOR_BG = '#1a1e29'
const DOT_RED = '#ff5f56'
const DOT_ORANGE = '#ffbd2e'
const DOT_GREEN = '#27c93f'
const KEYWORD = '#22d3ee'
const TEXT = '#e5e7eb'

const LINES = [
  { id: 'l1', fn: 'build_dashboard' as const, raw: 'def build_dashboard(data):' },
  { id: 'l2', fn: 'build_dashboard' as const, raw: '    return ApexCharts.render(data)' },
  { id: 'l3', fn: null, raw: '' },
  { id: 'l4', fn: 'fetch_surveys' as const, raw: 'async fetch_surveys():' },
  { id: 'l5', fn: 'fetch_surveys' as const, raw: '    return Kobo.api()' },
]

function CodeLine({
  line,
  running,
  visible,
  onRun,
}: {
  line: (typeof LINES)[0]
  running: Run
  visible: boolean
  onRun: (fn: 'build_dashboard' | 'fetch_surveys') => void
}) {
  if (!line.raw) {
    return <div className="h-4" />
  }

  const isRunning = line.fn && running === line.fn
  const isClickable = !!line.fn

  const content = (() => {
    if (line.raw.startsWith('def ')) {
      return (
        <>
          <span style={{ color: KEYWORD }}>def</span> <span style={{ color: TEXT }}>build_dashboard</span>
          <span style={{ color: TEXT }}>(data):</span>
        </>
      )
    }
    if (line.raw.includes('return ApexCharts')) {
      return (
        <>
          <span style={{ color: KEYWORD }}>return</span> <span style={{ color: TEXT }}>ApexCharts</span>
          <span style={{ color: TEXT }}>.render(data)</span>
        </>
      )
    }
    if (line.raw.startsWith('async ')) {
      return (
        <>
          <span style={{ color: KEYWORD }}>async</span> <span style={{ color: TEXT }}>fetch_surveys</span>
          <span style={{ color: TEXT }}>():</span>
        </>
      )
    }
    if (line.raw.includes('return Kobo')) {
      return (
        <>
          <span style={{ color: KEYWORD }}>return</span> <span style={{ color: TEXT }}>Kobo</span>
          <span style={{ color: TEXT }}>.api()</span>
        </>
      )
    }
    return <span style={{ color: TEXT }}>{line.raw}</span>
  })()

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -8 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center font-mono text-[13px] leading-relaxed ${
        isRunning ? 'rounded-r border-l-2 border-[var(--accent)] bg-white/[0.04] pl-2' : 'pl-2'
      } ${isClickable ? 'cursor-pointer' : ''}`}
      onClick={() => isClickable && onRun(line.fn!)}
    >
      {content}
    </motion.div>
  )
}

function MiniChart() {
  const bars = [40, 72, 55, 88, 62]
  return (
    <div className="flex h-14 items-end gap-1.5">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="min-h-[2px] w-2 rounded-t"
          style={{
            background: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
          }}
        />
      ))}
    </div>
  )
}

function KoboResult() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-1 text-left"
    >
      <div className="font-medium text-[var(--text)]">Kobo → 127 submissions</div>
      <div className="text-xs text-[var(--text-muted)]">3 forms • last 24h</div>
    </motion.div>
  )
}

type HeroCodeBlockProps = { isBackground?: boolean }

export function HeroCodeBlock({ isBackground }: HeroCodeBlockProps) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [running, setRunning] = useState<Run>(null)
  const [typingDone, setTypingDone] = useState(false)

  const run = useCallback((fn: 'build_dashboard' | 'fetch_surveys') => {
    setRunning(fn)
  }, [])

  // Typing: reveal lines one by one
  useEffect(() => {
    if (visibleLines >= LINES.length) {
      setTypingDone(true)
      return
    }
    const t = setTimeout(() => setVisibleLines((n) => n + 1), 380)
    return () => clearTimeout(t)
  }, [visibleLines])

  // Auto cycle: run build_dashboard ↔ fetch_surveys after typing ends
  useEffect(() => {
    if (!typingDone) return
    const cycle = () => {
      setRunning((r) => (r === 'build_dashboard' ? 'fetch_surveys' : 'build_dashboard'))
    }
    const first = setTimeout(cycle, 600)
    const interval = setInterval(cycle, 4200)
    return () => {
      clearTimeout(first)
      clearInterval(interval)
    }
  }, [typingDone])

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="w-full max-w-[360px] overflow-hidden rounded-xl border border-white/10 shadow-2xl"
      style={{ background: EDITOR_BG }}
    >
      {/* macOS window dots */}
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: DOT_RED }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: DOT_ORANGE }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: DOT_GREEN }} />
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Code */}
        <div className="flex-1 p-4">
          {LINES.map((line) => (
            <CodeLine
              key={line.id}
              line={line}
              running={running}
              visible={visibleLines > LINES.indexOf(line)}
              onRun={run}
            />
          ))}
          {!isBackground && (
            <div className="mt-2 font-mono text-[11px] text-[var(--text-muted)]">
              Click a function to run it
            </div>
          )}
        </div>

        {/* Result panel */}
        <div
          className="flex min-h-[100px] flex-col border-t border-white/10 p-4 md:border-l md:border-t-0"
          style={{ background: 'rgba(0,0,0,0.2)' }}
        >
          <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
            Result
          </div>
          <AnimatePresence mode="wait">
            {running === 'build_dashboard' && (
              <motion.div
                key="chart"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex h-16 items-end"
              >
                <MiniChart />
              </motion.div>
            )}
            {running === 'fetch_surveys' && (
              <motion.div
                key="kobo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <KoboResult />
              </motion.div>
            )}
            {!running && typingDone && (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm text-[var(--text-muted)]"
              >
                Run a function →
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
