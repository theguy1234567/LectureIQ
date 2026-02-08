import { ArrowRight, Zap, Brain, Layers, Clock, Shield, BarChart3, Smartphone, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning-Fast Processing',
      desc: 'Upload your lecture and get study materials in minutes, not hours. Our AI works at lightning speed.',
      benefits: ['2-5 minute processing time', 'Instant results', 'No waiting required']
    },
    {
      icon: Brain,
      title: 'Intelligent AI Analysis',
      desc: 'Advanced machine learning extracts key concepts and generates comprehensive study materials automatically.',
      benefits: ['Smart content extraction', 'Concept identification', 'Intelligent summarization']
    },
    {
      icon: Layers,
      title: 'Complete Study Suite',
      desc: 'Get organized notes, interactive flashcards, and comprehensive quizzes all from a single upload.',
      benefits: ['Auto-organized notes', 'Flip card flashcards', 'Comprehensive quizzes']
    },
    {
      icon: Clock,
      title: 'Spaced Repetition',
      desc: 'Flashcards use scientifically-proven spaced repetition to maximize retention and learning efficiency.',
      benefits: ['Optimal review timing', 'Better retention', 'Long-term memory building']
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      desc: 'Your lectures and study materials are encrypted and stored securely. Only you can access your content.',
      benefits: ['End-to-end encryption', 'Privacy guaranteed', 'Secure storage']
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      desc: 'Monitor your learning progress with detailed statistics and performance insights across all quizzes.',
      benefits: ['Performance metrics', 'Progress visualization', 'Detailed analytics']
    },
    {
      icon: Smartphone,
      title: 'Works Everywhere',
      desc: 'Access your study materials from any device - desktop, tablet, or mobile. Learn on the go.',
      benefits: ['Fully responsive', 'Cross-platform', 'Offline access coming soon']
    },
    {
      icon: Download,
      title: 'Anki Export',
      desc: 'Export your flashcards to Anki format for even more flexibility in your study workflow.',
      benefits: ['Anki compatible', 'Easy export', 'Multi-platform study']
    }
  ]

  const howItWorks = [
    {
      number: '01',
      title: 'Upload',
      desc: 'Upload your lecture audio file or paste a transcript directly into LectureIQ.'
    },
    {
      number: '02',
      title: 'Process',
      desc: 'Our AI analyzes the content and generates comprehensive study materials automatically.'
    },
    {
      number: '03',
      title: 'Study',
      desc: 'Access your notes, flashcards, and quizzes. Learn efficiently with interactive tools.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 leading-tight" style={{color: '#362c5d'}}>
              Powerful Features for Better Learning
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Everything you need to master your lectures and ace your exams. Discover what makes LectureIQ the ultimate study companion.
            </p>
            <Link 
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition transform hover:-translate-y-0.5 shadow-md"
              style={{backgroundColor: '#c84449'}}
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition hover:border-slate-300">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full" style={{backgroundColor: 'rgba(200, 68, 73, 0.15)'}}>
                  <Icon className="w-8 h-8" style={{color: '#c84449'}} />
                </div>
                
                <h3 className="text-xl font-bold mb-3" style={{color: '#362c5d'}}>
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {feature.desc}
                </p>

                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#c84449'}} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#362c5d'}}>
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Getting started with LectureIQ is simple. Three easy steps to transform your lectures into study materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl p-8 border border-slate-200 h-full">
                  <div 
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 text-white font-bold text-lg"
                    style={{backgroundColor: '#c84449'}}
                  >
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3" style={{color: '#362c5d'}}>
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < howItWorks.length - 1 && (
                  <div 
                    className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5"
                    style={{backgroundColor: '#c84449', opacity: 0.3}}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{color: '#362c5d'}}>
            LectureIQ vs Traditional Study
          </h2>
          <p className="text-lg text-slate-600">
            See how LectureIQ compares to traditional study methods
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2" style={{borderColor: '#c84449'}}>
                <th className="text-left py-4 px-6 font-bold" style={{color: '#362c5d'}}>Feature</th>
                <th className="text-center py-4 px-6 font-bold" style={{color: '#362c5d'}}>LectureIQ</th>
                <th className="text-center py-4 px-6 font-bold" style={{color: '#362c5d'}}>Manual Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Time to create study materials', '✓ 2-5 minutes', '✗ Hours'],
                ['Organized notes', '✓ Auto-organized', '✗ Manual formatting'],
                ['Flashcards', '✓ Auto-generated', '✗ Create manually'],
                ['Quizzes', '✓ AI-generated', '✗ Not available'],
                ['Spaced repetition', '✓ Included', '✗ Manual tracking'],
                ['Access anywhere', '✓ Cloud-based', '✗ Device dependent'],
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="py-4 px-6 font-medium text-slate-700">{row[0]}</td>
                  <td className="py-4 px-6 text-center text-sm" style={{color: '#16a34a'}}>{row[1]}</td>
                  <td className="py-4 px-6 text-center text-sm" style={{color: '#991b1b'}}>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800" style={{background: `linear-gradient(135deg, #362c5d 0%, #4a3f7f 100%)`}}>
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Ready to transform your learning?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Start Summarizing
            </p>
            <Link 
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition transform hover:-translate-y-0.5 shadow-md"
              style={{backgroundColor: '#c84449'}}
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
