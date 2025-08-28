import React from 'react'
import FeatureShowcase from './components/FeatureShowcase.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <FeatureShowcase />
      {/* Extra spacer content to allow normal scroll after showcase */}
      <section className="max-w-5xl mx-auto px-4 py-24 text-center text-gray-500">
        <h2 className="text-2xl font-semibold mb-4">Continue Scrolling</h2>
        <p>After the last feature, scrolling resumes as usual. This extra content is here to demonstrate the sticky behavior.</p>
        <div className="h-[120vh]"></div>
      </section>
    </div>
  )
}


