import { useCallback, useEffect, useRef, useState, type FormEvent } from "react"

const reviewWhatsAppNumber = "201031158933"

interface ReviewModalProps {
  open: boolean
  rating: number
  onCancel: () => void
}

interface ReviewFormData {
  name: string
  company: string
  role: string
  rating: number
  review: string
  consentToPublish: boolean
}

export default function ReviewModal({
  open,
  rating,
  onCancel,
}: ReviewModalProps) {
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [text, setText] = useState("")
  const [reviewError, setReviewError] = useState("")
  const [role, setRole] = useState("")
  const [company, setCompany] = useState("")
  const [consentToPublish, setConsentToPublish] = useState(false)
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState<string | null>(null)
  const [preparedRating, setPreparedRating] = useState<number | null>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)
  const dialogRef = useRef<HTMLFormElement>(null)
  const whatsappRetryRef = useRef<HTMLAnchorElement>(null)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)
  const hasPreparedReview = Boolean(
    preparedWhatsAppUrl && preparedRating === rating,
  )

  const handleCancel = useCallback(() => {
    onCancel()
  }, [onCancel])

  useEffect(() => {
    if (!open) return

    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null
    if (hasPreparedReview) {
      whatsappRetryRef.current?.focus()
    } else {
      nameInputRef.current?.focus()
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCancel()
        return
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
          ),
        )

        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      previouslyFocusedRef.current?.focus()
    }
  }, [handleCancel, hasPreparedReview, open])

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmedName = name.trim()
    const trimmedText = text.trim()

    if (!trimmedName) {
      setNameError("Please enter your name.")
      return
    }

    if (trimmedText && trimmedText.length < 10) {
      setReviewError("Please write at least 10 characters, or leave the review empty to submit a rating only.")
      return
    }

    const reviewData: ReviewFormData = {
      name: trimmedName,
      company: company.trim() || "",
      role: role.trim() || "",
      rating,
      review: trimmedText,
      consentToPublish,
    }

    const whatsappMessage = [
      "New review from the ICC website",
      `Customer Name: ${reviewData.name}`,
      `Company: ${reviewData.company || "Not provided"}`,
      `Role: ${reviewData.role || "Not provided"}`,
      `Star Rating: ${reviewData.rating}/5`,
      `Review Text: ${reviewData.review || "Rating only"}`,
      `Permission to feature written review: ${reviewData.review ? (reviewData.consentToPublish ? "Yes" : "No") : "Not applicable"}`,
    ].join("\n")

    const whatsappUrl = `https://wa.me/${reviewWhatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`
    setPreparedRating(rating)
    setPreparedWhatsAppUrl(whatsappUrl)
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) handleCancel()
      }}
    >
      <form
        ref={dialogRef}
        onSubmit={submit}
        className="relative w-full max-w-105 rounded-xl bg-[#0D1421] p-8 text-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="review-dialog-title"
        aria-describedby="review-dialog-description"
      >
        <button
          type="button"
          onClick={handleCancel}
          className="absolute right-4 top-3 rounded px-2 py-1 text-2xl leading-none text-gray-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          aria-label="Close review form"
        >
          ×
        </button>

        {hasPreparedReview && preparedWhatsAppUrl ? (
          <>
            <h3 id="review-dialog-title" className="mb-4 pr-8 text-xl font-semibold">
              Your Review Is Ready!
            </h3>

            <p id="review-dialog-description" className="text-sm leading-6 text-gray-300">
              Your review has been prepared on WhatsApp.
              <br />
              Please press Send there to complete your submission.
            </p>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Your form details are still available here. Opening WhatsApp does not mean the message was sent.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => {
                  setPreparedWhatsAppUrl(null)
                  requestAnimationFrame(() => nameInputRef.current?.focus())
                }}
                className="rounded bg-gray-600 px-4 py-2"
              >
                Edit Review
              </button>

              <a
                ref={whatsappRetryRef}
                href={preparedWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-blue-600 px-6 py-2 text-center"
              >
                Reopen WhatsApp
              </a>
            </div>

            <a
              href={preparedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-center text-sm text-blue-300 underline underline-offset-4"
            >
              WhatsApp did not open? Use this fallback link.
            </a>
          </>
        ) : (
          <>
            <h3 id="review-dialog-title" className="mb-4 pr-8 text-xl font-semibold">
              Your Rating: {rating} ⭐
            </h3>

            <p id="review-dialog-description" className="mb-5 text-sm leading-6 text-gray-400">
              WhatsApp will open so you can send a copy of your rating or review to ICC.
            </p>

            <label htmlFor="review-name" className="sr-only">
              Your name
            </label>
            <input
              id="review-name"
              ref={nameInputRef}
              type="text"
              placeholder="Your name *"
              className="w-full rounded border border-gray-600 bg-transparent p-2"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                if (nameError) setNameError("")
              }}
              aria-invalid={Boolean(nameError)}
              aria-describedby={nameError ? "review-name-error" : undefined}
              maxLength={60}
              required
            />

            {nameError ? (
              <p id="review-name-error" className="mb-3 mt-1 text-sm text-red-400" role="alert">
                {nameError}
              </p>
            ) : (
              <div className="mb-3" />
            )}

            <label htmlFor="review-role" className="sr-only">
              Your role (optional)
            </label>
            <input
              id="review-role"
              type="text"
              placeholder="Your role (optional)"
              className="mb-3 w-full rounded border border-gray-600 bg-transparent p-2"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              maxLength={80}
            />

            <label htmlFor="review-company" className="sr-only">
              Your company (optional)
            </label>
            <input
              id="review-company"
              type="text"
              placeholder="Your company (optional)"
              className="mb-3 w-full rounded border border-gray-600 bg-transparent p-2"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              maxLength={100}
            />

            <label htmlFor="review-text" className="sr-only">
              Write your review (optional)
            </label>
            <textarea
              id="review-text"
              placeholder="Write your review (optional)"
              className="w-full rounded border border-gray-600 bg-transparent p-2"
              value={text}
              onChange={(e) => {
                const nextText = e.target.value
                setText(nextText)
                if (reviewError) setReviewError("")
                if (!nextText.trim()) {
                  setConsentToPublish(false)
                }
              }}
              aria-invalid={Boolean(reviewError)}
              aria-describedby={reviewError ? "review-text-error" : undefined}
              maxLength={400}
            />

            {reviewError ? (
              <p id="review-text-error" className="mb-4 mt-1 text-sm text-red-400" role="alert">
                {reviewError}
              </p>
            ) : (
              <p className="mb-4 mt-1 text-xs text-gray-500">
                Up to 400 characters. Leave empty to submit a rating only.
              </p>
            )}

            {text.trim() ? (
              <div className="mb-5">
                <label className="flex items-start gap-3 text-sm leading-5 text-gray-300">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={consentToPublish}
                    onChange={(e) => setConsentToPublish(e.target.checked)}
                  />
                  <span>I agree that ICC may feature my written review on its website.</span>
                </label>
              </div>
            ) : null}

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={handleCancel}
                className="rounded bg-gray-600 px-4 py-2"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded bg-blue-600 px-6 py-2"
              >
                Share Your Review
              </button>
            </div>

            <p className="mt-3 text-end text-xs leading-5 text-gray-500">
              Your review will open in WhatsApp for you to send directly to our team.
            </p>
          </>
        )}
      </form>
    </div>
  )
}
