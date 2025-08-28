import React from 'react'

export default function ArrowNav({ onPrev, onNext }) {
  return (
    <div className="flex items-center gap-10 pt-8 select-none">
      <button
        aria-label="Previous feature"
        onClick={onPrev}
        className="relative inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 active:scale-95 transition"
      >
        <span className="sr-only">Previous</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-5 w-5"><path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <div className="h-8 w-1 bg-brand-blue rounded" aria-hidden="true"></div>
      <button
        aria-label="Next feature"
        onClick={onNext}
        className="relative inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 active:scale-95 transition"
      >
        <span className="sr-only">Next</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-5 w-5"><path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
      </button>
    </div>
  )
}


