'use client'

export default function Error({ error, reset }) {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-xl text-red-500">
        {error.message || 'Failed to load member profile'}
      </h2>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try Again
      </button>
    </div>
  )
}