"use client"

import { useState } from "react"

export default function EssayForm() {
  const [text, setText] = useState("")
  const [feedback, setFeedback] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setFeedback("")

    try {
      const res = await fetch("http://localhost:8000/evaluate-essay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      })

      const data = await res.json()
      setFeedback(data.feedback)
    } catch (err) {
      console.error("Submission error:", err)
      setFeedback("There was an error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">IELTS Essay Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={10}
          className="w-full p-3 border border-gray-300 rounded mb-4"
          placeholder="Paste your IELTS essay here..."
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Evaluating..." : "Get Feedback"}
        </button>
      </form>

      {feedback && (
        <div className="mt-6 bg-gray-50 p-4 rounded border border-gray-300 whitespace-pre-wrap">
          {feedback}
        </div>
      )}
    </div>
  )
}
