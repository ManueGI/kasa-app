import { useState } from 'react'
import './carousel.scss'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

export default function Carousel({ pictures, title }) {
  const [current, setCurrent] = useState(0)
  const total = pictures.length

  const prev = () => setCurrent((current - 1 + total) % total)
  const next = () => setCurrent((current + 1) % total)

  if (total === 0) return null

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{
          width: `${100 * total}%`,
          transform: `translateX(-${(100 / total) * current}%)`,
          transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)'
        }}
      >
        {pictures.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${title} - photo ${idx + 1}`}
            className="carousel-image"
            style={{ width: `${100 / total}%` }}
          />
        ))}
      </div>
      {total > 1 && (
        <>
          <button className="carousel-arrow left" onClick={prev} aria-label="previous">
            <ChevronLeftIcon className='chevron-icon' />
          </button>
          <button className="carousel-arrow right" onClick={next} aria-label="next">
            <ChevronRightIcon className='chevron-icon' />
          </button>
          <div className="carousel-counter">{current + 1} / {total}</div>
        </>
      )}
    </div>
  )
}
