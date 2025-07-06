import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to IELTS AI Coach</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-xl">
        Get instant, AI-powered feedback on your IELTS essays. Improve grammar,
        vocabulary, coherence, and score with GPT-powered insights.
      </p>
      <Link
        href="/essay-feedback"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700"
      >
        Try Essay Feedback
      </Link>
    </main>
  )
}
