const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export interface UploadResponse {
  lecture_id: number
  status: string
  message: string
}

export interface LectureDetail {
  id: number
  title: string
  status: 'processing' | 'completed' | 'failed'
  transcript: string
  notes: string
  flashcards: Array<{ question: string; answer: string }>
  quiz: Array<{ question: string; options: string[]; correct_answer: number }>
  video_url: string
  slides_url: string
  created_at: string
}

const api = {
  async uploadLecture(formData: FormData): Promise<UploadResponse> {
    const response = await fetch(`${API_BASE}/api/upload`, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.detail || 'Upload failed')
    }

    return response.json()
  },

  async getLecture(id: number): Promise<LectureDetail> {
    const response = await fetch(`${API_BASE}/api/lectures/${id}`)

    if (!response.ok) {
      throw new Error('Failed to fetch lecture')
    }

    return response.json()
  },

  async getLectures(limit = 10, offset = 0) {
    const response = await fetch(`${API_BASE}/api/lectures?limit=${limit}&offset=${offset}`)

    if (!response.ok) {
      throw new Error('Failed to fetch lectures')
    }

    return response.json()
  },

  async generateFlashcards(lectureId: number) {
    const response = await fetch(`${API_BASE}/api/lectures/${lectureId}/flashcards`)

    if (!response.ok) {
      throw new Error('Failed to generate flashcards')
    }

    return response.json()
  },

  async generateQuiz(lectureId: number) {
    const response = await fetch(`${API_BASE}/api/lectures/${lectureId}/quiz`)

    if (!response.ok) {
      throw new Error('Failed to generate quiz')
    }

    return response.json()
  },
}

export default api
