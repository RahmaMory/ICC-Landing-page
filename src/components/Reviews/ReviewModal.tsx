import { useState } from "react"

interface ReviewModalProps {
  open: boolean
  setOpen: (value: boolean) => void
  rating: number
  onReviewSubmitted: () => void
}

export default function ReviewModal({
  open,
  setOpen,
  rating,
  onReviewSubmitted,
}: ReviewModalProps) {
  const [name, setName] = useState("")
  const [text, setText] = useState("")
  const [role, setRole] = useState("")
  const [company, setCompany] = useState("")
  const [image, setImage] = useState<string | null>(null)

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()

    reader.onload = () => {
      setImage(reader.result as string)
    }

    reader.readAsDataURL(file)
  }

  function submit() {
    const saved: unknown = JSON.parse(localStorage.getItem("reviews") || "[]")
    const reviewsArray = Array.isArray(saved) ? saved : []

    const newReview = {
      id: Date.now(),
      name: name.trim() || "Anonymous",
      role: role.trim() || "User",
      company: company.trim() || "",
      rating: rating,
      text: text.trim() || "No comment provided",
      image: image || "/avatars/default.webp",
    }

    const updatedReviews = [...reviewsArray, newReview]

    localStorage.setItem("reviews", JSON.stringify(updatedReviews))

    onReviewSubmitted()
    setOpen(false)

    setName("")
    setText("")
    setRole("")
    setCompany("")
    setImage(null)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-105 rounded-xl bg-[#0D1421] p-8 text-white">
        <h3 className="mb-4 text-xl font-semibold">
          Your Rating: {rating} ⭐
        </h3>

        <input
          type="text"
          placeholder="Your name (optional)"
          className="mb-3 w-full rounded border border-gray-600 bg-transparent p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Your role (optional)"
          className="mb-3 w-full rounded border border-gray-600 bg-transparent p-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <input
          type="text"
          placeholder="Your company (optional)"
          className="mb-3 w-full rounded border border-gray-600 bg-transparent p-2"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <textarea
          placeholder="Write your review (optional)"
          className="mb-4 w-full rounded border border-gray-600 bg-transparent p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <label
          htmlFor="review-image"
          className="mb-2 block text-sm text-gray-200"
        >
          Upload image (optional)
        </label>
        <input
          id="review-image"
          type="file"
          accept="image/*"
          title="Upload image (optional)"
          onChange={handleImage}
          className="mb-4"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={() => setOpen(false)}
            className="rounded bg-gray-600 px-4 py-2"
          >
            Cancel
          </button>

          <button
            onClick={submit}
            className="rounded bg-blue-600 px-6 py-2"
          >
            Send Review
          </button>
        </div>
      </div>
    </div>
  )
}