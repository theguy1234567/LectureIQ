export default function Footer() {
  return (
    <>
      <style>{`
        .bg-brand-navy { background-color: #362c5d; }
        .text-brand-coral { color: #c84449; }
        footer { border-color: rgba(200, 68, 73, 0.2); }
      `}</style>
      <footer className="bg-brand-navy text-white mt-24" style={{borderTopColor: 'rgba(200, 68, 73, 0.2)'}}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="LectureIQ" className="h-10 w-auto mb-4" />
            <p className="text-slate-300 text-sm leading-relaxed">
              Transform how you learn. AI-powered notes, flashcards, and quizzes from your lectures.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/features" className="text-slate-300 hover:text-brand-coral transition">Features</a></li>
              <li><a href="/docs" className="text-slate-300 hover:text-brand-coral transition">Documentation</a></li>
              <li><a href="/my-lectures" className="text-slate-300 hover:text-brand-coral transition">Dashboard</a></li>
              <li><a href="#" className="text-slate-300 hover:text-brand-coral transition">API</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-300 hover:text-brand-coral transition">Privacy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-brand-coral transition">Terms</a></li>
              <li><a href="#" className="text-slate-300 hover:text-brand-coral transition">Contact</a></li>
              <li><a href="#" className="text-slate-300 hover:text-brand-coral transition">Status</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm">© 2026 LectureIQ. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-brand-coral transition text-sm">Twitter</a>
              <a href="#" className="text-slate-400 hover:text-brand-coral transition text-sm">GitHub</a>
              <a href="#" className="text-slate-400 hover:text-brand-coral transition text-sm">Discord</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
