import { useEffect, useState } from 'react'

// Animates from 0 to `target` once `start` becomes true.
export function useCountUp(target, start, duration = 1200) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return undefined

    const numericTarget = parseInt(target, 10)
    if (Number.isNaN(numericTarget)) {
      const id = requestAnimationFrame(() => setValue(target))
      return () => cancelAnimationFrame(id)
    }

    let frame
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(numericTarget * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, start, duration])

  return value
}
