import { useState, useEffect } from 'react'

type TypeWriterProps = {
  text: string
  className?: string
  speed?: number
  cursorClassName?: string
}

export function TypeWriter({
  text,
  className = '',
  speed = 40,
  cursorClassName = 'typing-cursor',
}: TypeWriterProps) {
  const [display, setDisplay] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplay('')
    setDone(false)
    let i = 0
    const t = setInterval(() => {
      if (i <= text.length) {
        setDisplay(text.slice(0, i))
        i += 1
      } else {
        setDone(true)
        clearInterval(t)
      }
    }, speed)
    return () => clearInterval(t)
  }, [text, speed])

  return (
    <span className={className}>
      {display}
      {!done && <span className={cursorClassName} />}
    </span>
  )
}
