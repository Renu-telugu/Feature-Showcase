import React from 'react'

export default function FeatureCard({ index, item, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`group relative w-full text-left py-4 sm:py-5 pl-6 pr-3 transition-colors ${isActive ? 'font-semibold text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}
      aria-current={isActive}
    >
      <span
        className={`absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-sm transition-all ${isActive ? 'bg-brand-blue opacity-100' : 'bg-brand-blue opacity-0 group-hover:opacity-50'}`}
        aria-hidden="true"
      />
      <div className="flex items-center gap-3">
        <span className={`text-sm ${isActive ? 'text-brand-blue' : 'text-gray-400'}`}>Feature {index + 1} :</span>
        <span className="text-sm sm:text-base">{item.rightLabel || item.heading}</span>
      </div>
      {/* Mobile accordion: reveal details when active */}
      <div className={`mt-2 sm:mt-3 max-[1024px]:block min-[1025px]:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${isActive ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="mt-1 text-sm text-gray-700 font-medium">{item.heading}</p>
        <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc pl-5">
          {item.body.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
    </button>
  )
}


