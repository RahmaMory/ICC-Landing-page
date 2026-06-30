import { Star } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import ReviewModal from "./ReviewModal"

const ratings = [
  { star: 5, percent: 85 },
  { star: 4, percent: 10 },
  { star: 3, percent: 3 },
  { star: 2, percent: 1 },
  { star: 1, percent: 1 },
]

export default function RatingSummary() {
  const baseReviews = 1119152
  const displayRating = 4.8

  const [hover, setHover] = useState(0)
  const [rating, setRating] = useState(0)
  const [open, setOpen] = useState(false)

  const [reviewsCount, setReviewsCount] = useState<number>(() => {
    const saved: unknown = JSON.parse(localStorage.getItem("reviews") || "[]")
    const reviewsArray = Array.isArray(saved) ? saved : []
    return baseReviews + reviewsArray.length
  })

  const [animatedBars, setAnimatedBars] = useState([0, 0, 0, 0, 0])

  const sectionRef = useRef<HTMLElement | null>(null)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) return

        hasAnimatedRef.current = true

        let startTime: number | null = null
        const duration = 1400

        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp

          const progress = Math.min((timestamp - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)

          const nextBars = ratings.map((item) => item.percent * eased)
          setAnimatedBars(nextBars)

          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }

        requestAnimationFrame(animate)
      },
      { threshold: 0.35 }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  function handleClick(value: number) {
    setRating(value)
    setOpen(true)
  }

  function handleReviewSubmitted() {
    const saved: unknown = JSON.parse(localStorage.getItem("reviews") || "[]")
    const reviewsArray = Array.isArray(saved) ? saved : []
    setReviewsCount(baseReviews + reviewsArray.length)
  }

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="mb-6 text-4xl font-semibold">
          Ratings and reviews
        </h2>

        <p className="mb-10 max-w-xl text-gray-500">
          Ratings and reviews are verified and are from people who
          use the same type of device that you use
        </p>

        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* LEFT */}
          <div className="flex flex-col items-center">
            <h3 className="text-[80px] font-semibold leading-none">
              {displayRating.toFixed(1)}
            </h3>

            <div className="mt-2 flex">
              {[1, 2, 3, 4, 5].map((star) => {
                const fillPercent = Math.max(
                  0,
                  Math.min(1, displayRating - (star - 1))
                )

                return (
                  <div key={star} className="relative h-5.5 w-5.5">
                    <Star
                      size={22}
                      className="absolute text-gray-400"
                    />

                    <div
                      className="absolute overflow-hidden"
                      style={{ width: `${fillPercent * 100}%` }}
                    >
                      <Star
                        size={22}
                        className="text-blue-600"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            <p className="mt-2 text-gray-500">
              {reviewsCount.toLocaleString()}
            </p>
          </div>

          {/* RIGHT */}
          <div className="w-full flex-1">
            {ratings.map((item, index) => (
              <div key={item.star} className="mb-3 flex items-center gap-4">
                <span className="w-4 text-gray-500">
                  {item.star}
                </span>

                <div className="h-3 flex-1 overflow-hidden rounded-full bg-gray-400">
                  <div
                    className="h-full rounded-full bg-blue-600 transition-all duration-150"
                    style={{ width: `${animatedBars[index]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* USER RATING */}
        <div className="mt-14 text-center">
          <p className="mb-4 text-lg text-gray-400">
            Rate this app
          </p>

          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={36}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                onClick={() => handleClick(star)}
                className={`cursor-pointer transition ${
                  star <= (hover || rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <ReviewModal
          open={open}
          setOpen={setOpen}
          rating={rating}
          onReviewSubmitted={handleReviewSubmitted}
        />
      </div>
    </section>
  )
}