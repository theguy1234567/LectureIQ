import React from 'react'
import { BookOpen, Zap, CheckSquare } from 'lucide-react'

const BrandColors = {
  navy: '#362c5d',
  coral: '#c84449',
  'coral-light': '#f5f0f0',
  'navy-light': '#f8f6fa',
}

export default function StudyPackShowcase() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Floating Badge */}
      <div
        className="absolute -top-6 right-4 inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm z-10"
        style={{ backgroundColor: BrandColors.coral + '20', border: `1px solid ${BrandColors.coral}40` }}
      >
        <span className="text-xs font-semibold" style={{ color: BrandColors.coral }}>
          ✨ AI-Generated Study Pack
        </span>
      </div>

      {/* NOTES CARD */}
      <div
        className="rounded-2xl p-8 shadow-2xl border mb-6"
        style={{ backgroundColor: '#ffffff', borderColor: BrandColors.navy + '20' }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: BrandColors.navy + '15' }}
          >
            <BookOpen className="w-6 h-6" style={{ color: BrandColors.navy }} />
          </div>
          <div>
            <h3 className="font-bold text-lg" style={{ color: BrandColors.navy }}>
              Comprehensive Notes
            </h3>
            <p className="text-xs text-slate-600">Auto-organized from your lecture</p>
          </div>
        </div>

        <div className="space-y-2 mb-4 text-sm text-slate-600">
          <div className="flex gap-2">
            <span className="font-semibold" style={{ color: BrandColors.navy }}>1.</span>
            <span>Introduction to Linear Algebra</span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold" style={{ color: BrandColors.navy }}>2.</span>
            <span>Key definitions & formulas</span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold" style={{ color: BrandColors.navy }}>3.</span>
            <span>Worked examples</span>
          </div>
        </div>

        <p className="text-xs text-slate-500 italic">⚡ Skim a 60-min lecture in ~5 min</p>
      </div>

      {/* FLASHCARDS CARD */}
      <div
        className="rounded-2xl p-8 shadow-2xl border mb-6"
        style={{ backgroundColor: BrandColors['coral-light'], borderColor: BrandColors.coral + '30' }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: BrandColors.coral + '20' }}
          >
            <Zap className="w-6 h-6" style={{ color: BrandColors.coral }} />
          </div>
          <div>
            <h3 className="font-bold text-lg" style={{ color: BrandColors.navy }}>
              Flashcard Deck
            </h3>
            <p className="text-xs text-slate-600">342 cards for spaced repetition</p>
          </div>
        </div>

        {/* Three Overlapping Cards */}
        <div className="relative h-32 flex items-center justify-center mb-6">
          {/* Card 1 - Left */}
          <div
            className="absolute w-20 h-28 rounded-xl shadow-lg flex items-center justify-center text-center text-xs font-bold text-white"
            style={{
              backgroundColor: BrandColors.navy,
              transform: 'translateX(-50px) rotate(-12deg)',
              zIndex: 1,
            }}
          >
            <div>
              <div className="text-3xl mb-2">📝</div>
              <div>Definition</div>
            </div>
          </div>

          {/* Card 2 - Center */}
          <div
            className="absolute w-20 h-28 rounded-xl shadow-lg flex items-center justify-center text-center text-xs font-bold text-white"
            style={{
              backgroundColor: BrandColors.coral,
              transform: 'translateY(0)',
              zIndex: 2,
            }}
          >
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <div>Concept</div>
            </div>
          </div>

          {/* Card 3 - Right */}
          <div
            className="absolute w-20 h-28 rounded-xl shadow-lg flex items-center justify-center text-center text-xs font-bold text-white"
            style={{
              backgroundColor: '#8b7ba8',
              transform: 'translateX(50px) rotate(12deg)',
              zIndex: 1,
            }}
          >
            <div>
              <div className="text-3xl mb-2">🎓</div>
              <div>Theorem</div>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-500 italic">🎯 Perfect for spaced repetition</p>
      </div>

      {/* QUIZ CARD */}
      <div
        className="rounded-2xl p-8 shadow-2xl border mb-6"
        style={{ backgroundColor: '#ffffff', borderColor: BrandColors.navy + '20' }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: '#dcfce7' }}
          >
            <CheckSquare className="w-6 h-6" style={{ color: '#16a34a' }} />
          </div>
          <div>
            <h3 className="font-bold text-lg" style={{ color: BrandColors.navy }}>
              Interactive Quiz
            </h3>
            <p className="text-xs text-slate-600">25 questions · 8–12 min</p>
          </div>
        </div>

        {/* Question preview */}
        <div className="mb-4 p-4 rounded-lg" style={{ backgroundColor: BrandColors.navy + '05' }}>
          <p className="text-xs font-semibold text-slate-500 mb-2">Question 3 of 25</p>
          <p className="text-sm font-medium text-slate-700">
            Which of the following is NOT a property of linear transformations?
          </p>
        </div>

        {/* Options preview */}
        <div className="space-y-2">
          <div className="px-3 py-2 rounded text-xs font-medium" style={{ backgroundColor: BrandColors.coral + '20', color: BrandColors.coral }}>
            <span className="font-bold">B.</span> Homogeneity ✓
          </div>
          <div className="px-3 py-2 rounded text-xs font-medium text-slate-600" style={{ backgroundColor: '#f3f4f6' }}>
            <span className="font-bold">A.</span> Additivity
          </div>
        </div>

        <p className="text-xs text-slate-500 italic mt-4">⚡ Instant feedback on every question</p>
      </div>
    </div>
  )
}
