import { Star } from "lucide-react"
import { useState, useEffect, useMemo, useRef } from "react"
import ReviewModal from "./ReviewModal"

// Preview values awaiting confirmation from ICC's approved review records.
const baseReviews = 32
const displayRating = 4.8

const baseRatingCounts = [
  { star: 5, count: 26 },
  { star: 4, count: 6 },
  { star: 3, count: 0 },
  { star: 2, count: 0 },
  { star: 1, count: 0 },
]

function getStoredRatings(): number[] {
  if (typeof window === "undefined") return []

  try {
    const saved: unknown = JSON.parse(localStorage.getItem("reviews") || "[]")
    if (!Array.isArray(saved)) return []

    return saved.flatMap((review): number[] => {
      if (typeof review !== "object" || review === null) return []
      const rating = (review as { rating?: unknown }).rating
      return typeof rating === "number" && rating >= 1 && rating <= 5
        ? [rating]
        : []
    })
  } catch {
    return []
  }
}

function calculateRatingDistribution(storedRatings: number[]) {
  const seededCounts = new Map(
    baseRatingCounts.map((item) => [
      item.star,
      item.count,
    ]),
  )

  storedRatings.forEach((rating) => {
    seededCounts.set(rating, (seededCounts.get(rating) ?? 0) + 1)
  })

  const total = [...seededCounts.values()].reduce((sum, count) => sum + count, 0)

  return baseRatingCounts.map((item) => ({
    star: item.star,
    percent: Number((((seededCounts.get(item.star) ?? 0) / total) * 100).toFixed(4)),
  }))
}

export default function RatingSummary() {
  const [hover, setHover] = useState(0)
  const [rating, setRating] = useState(0)
  const [open, setOpen] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState("")
  const [storedRatings, setStoredRatings] = useState<number[]>(getStoredRatings)
  const ratingDistribution = useMemo(
    () => calculateRatingDistribution(storedRatings),
    [storedRatings],
  )
  const reviewsCount = baseReviews + storedRatings.length

  const [animatedBars, setAnimatedBars] = useState([0, 0, 0, 0, 0])

  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    let timers: ReturnType<typeof setTimeout>[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset
          setAnimatedBars([0, 0, 0, 0, 0]);

          timers.forEach(clearTimeout);
          timers = [];

          ratingDistribution.forEach((item, index) => {
            const timer = setTimeout(() => {
              setAnimatedBars((prev) => {
                const next = [...prev];
                next[index] = item.percent;
                return next;
              });
            }, index * 300);

            timers.push(timer);
          });
        } else {
          timers.forEach(clearTimeout);
          timers = [];
          setAnimatedBars([0, 0, 0, 0, 0]);
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(node);

    return () => {
      timers.forEach(clearTimeout);
      observer.disconnect();
    };
  }, [ratingDistribution]);

  function handleClick(value: number) {
    setRating(value)
    setOpen(true)
  }

  function handleReviewCancelled() {
    setOpen(false)
    setRating(0)
    setHover(0)
  }

  function handleReviewSubmitted(hasWrittenReview: boolean) {
    setStoredRatings(getStoredRatings())
    setSubmissionMessage(
      hasWrittenReview
        ? "WhatsApp is ready — send the message to share your review with ICC."
        : "WhatsApp is ready — send the message to share your rating with ICC."
    )
  }

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="mb-6 text-4xl font-semibold">
          Ratings and reviews
        </h2>

        <p className="mb-10 max-w-xl text-gray-500">
          Client feedback and rating experience with ICC.
        </p>

        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* LEFT */}
          <div className="flex flex-col items-center">
            <h3 className="text-[80px] font-semibold leading-none">
              {displayRating.toFixed(1)}
            </h3>

            <div className="mt-2 flex" aria-label={`${displayRating} out of 5 stars`}>
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
              {reviewsCount.toLocaleString()} reviews
            </p>
          </div>

          {/* RIGHT */}
          <div className="w-full flex-1">
            {ratingDistribution.map((item, index) => (
              <div key={item.star} className="mb-3 flex items-center gap-4">
                <span className="w-4 text-gray-500">
                  {item.star}
                </span>

                <div
                  className="h-3 flex-1 overflow-hidden rounded-full bg-gray-400"
                  role="progressbar"
                  aria-label={`${item.star}-star reviews`}
                  aria-valuenow={item.percent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="h-full rounded-full bg-blue-600 transition-all duration-700 ease-out"
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
            Rate your experience with ICC
          </p>

          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                aria-label={`Rate ${star} out of 5`}
                aria-pressed={rating === star}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                onClick={() => handleClick(star)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    handleClick(star)
                  }
                }}
                className="rounded-sm transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
              >
                <Star
                  size={36}
                  aria-hidden="true"
                  className={`cursor-pointer transition ${star <= (hover || rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                    }`}
                />
              </button>
            ))}
          </div>

          {submissionMessage ? (
            <p className="mt-5 text-sm text-emerald-400" role="status">
              {submissionMessage}
            </p>
          ) : null}
        </div>

        <ReviewModal
          open={open}
          setOpen={setOpen}
          rating={rating}
          onCancel={handleReviewCancelled}
          onReviewSubmitted={handleReviewSubmitted}
        />
      </div>
    </section>
  )
}
