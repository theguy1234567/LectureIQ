import { useState } from 'react'
import { Search, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Lecture {
  id: string
  title: string
  flashcards_count?: number
}

export function LectureSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<Lecture[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSearch = async (query: string) => {
    setSearchTerm(query)
    if (query.length < 2) {
      setResults([])
      return
    }

    setLoading(true)
    try {
      const response = await fetch(`http://localhost:8000/api/lectures`)
      if (response.ok) {
        const data = await response.json()
        const filtered = (data.lectures || []).filter((l: Lecture) =>
          l.title.toLowerCase().includes(query.toLowerCase())
        )
        setResults(filtered.slice(0, 5))
      }
    } catch (err) {
      console.error('Search error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search lectures..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      </div>

      {/* Dropdown Results */}
      {isOpen && searchTerm.length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg z-10">
          {loading ? (
            <div className="p-4 text-center text-slate-500">Loading...</div>
          ) : results.length > 0 ? (
            <div className="max-h-64 overflow-y-auto">
              {results.map((lecture) => (
                <Link
                  key={lecture.id}
                  to={`/lectures/${lecture.id}`}
                  className="flex items-center justify-between p-3 hover:bg-teal-50 transition border-b border-slate-100 last:border-b-0"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-900 truncate">{lecture.title}</p>
                    {lecture.flashcards_count && (
                      <p className="text-xs text-slate-500">{lecture.flashcards_count} cards</p>
                    )}
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 ml-2" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-slate-500">No lectures found</div>
          )}
        </div>
      )}
    </div>
  )
}
