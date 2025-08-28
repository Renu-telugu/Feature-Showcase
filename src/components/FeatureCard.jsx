import React from 'react'

export default function FeatureCard({ index, item, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`group relative w-full text-left py-4 pl-6 pr-2 transition-colors ${isActive ? 'font-semibold text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}
      aria-current={isActive}
    >
      <span
        className={`absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-sm transition-all ${isActive ? 'bg-brand-blue opacity-100' : 'bg-brand-blue opacity-0 group-hover:opacity-50'}`}
        aria-hidden="true"
      />
      <div className="flex items-center gap-3">
        <span className={`text-sm ${isActive ? 'text-brand-blue' : 'text-gray-400'}`}>Feature {index + 1} :</span>
        <span>{item.rightLabel || item.heading}</span>
      </div>
    </button>
  )
}


