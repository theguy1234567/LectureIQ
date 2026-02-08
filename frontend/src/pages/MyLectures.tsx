import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, FileText, Calendar } from 'lucide-react';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';
import Alert from '../components/Alert';

interface Lecture {
  id: string;
  title: string;
  video_file: string;
  slides_file: string;
  status: string;
  created_at?: string;
  flashcards_count?: number;
  quiz_count?: number;
}

export function MyLectures() {
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchLectures();
  }, []);

  const fetchLectures = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:8000/api/lectures`);
      if (!response.ok) throw new Error('Failed to fetch lectures');
      const data = await response.json();
      setLectures(data.lectures || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const deleteLecture = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this lecture?')) return;
    try {
      const response = await fetch(`http://localhost:8000/api/lectures/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete lecture');
      setLectures(lectures.filter(l => l.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete lecture');
    }
  };

  const filteredLectures = lectures.filter(lecture =>
    lecture.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">My Lectures</h1>
          <p className="text-slate-600">View and manage your uploaded lectures</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search lectures by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Error Alert */}
        {error && <Alert type="error">{error}</Alert>}

        {/* Empty State */}
        {filteredLectures.length === 0 && !loading && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              {searchTerm ? 'No lectures found' : 'No lectures yet'}
            </h3>
            <p className="text-slate-600 mb-6">
              {searchTerm
                ? 'Try a different search term'
                : 'Upload your first lecture to get started'}
            </p>
            {!searchTerm && (
              <Link to="/">
                <Button>Upload a Lecture</Button>
              </Link>
            )}
          </div>
        )}

        {/* Lectures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLectures.map((lecture) => (
            <div
              key={lecture.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-slate-200"
            >
              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-900 mb-3 truncate">
                {lecture.title}
              </h3>

              {/* Metadata */}
              <div className="space-y-2 mb-4 text-sm text-slate-600">
                {lecture.created_at && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(lecture.created_at).toLocaleDateString()}</span>
                  </div>
                )}
                {lecture.flashcards_count !== undefined && (
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>{lecture.flashcards_count} flashcards</span>
                  </div>
                )}
                {lecture.quiz_count !== undefined && (
                  <div>
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                      {lecture.quiz_count} questions
                    </span>
                  </div>
                )}
              </div>

              {/* Status Badge */}
              <div className="mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  lecture.status === 'completed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {lecture.status || 'Processing'}
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Link to={`/lectures/${lecture.id}`} className="flex-1">
                  <Button variant="secondary" fullWidth>
                    View
                  </Button>
                </Link>
                <button
                  onClick={() => deleteLecture(lecture.id)}
                  className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                  title="Delete lecture"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        {filteredLectures.length > 0 && (
          <div className="mt-12 p-6 bg-white rounded-lg border border-slate-200">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-indigo-600">{filteredLectures.length}</p>
                <p className="text-slate-600">Lectures</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-violet-600">
                  {filteredLectures.reduce((sum, l) => sum + (l.flashcards_count || 0), 0)}
                </p>
                <p className="text-slate-600">Flashcards</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-teal-600">
                  {filteredLectures.reduce((sum, l) => sum + (l.quiz_count || 0), 0)}
                </p>
                <p className="text-slate-600">Questions</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
