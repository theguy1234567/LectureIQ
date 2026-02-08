import { create } from 'zustand'

export interface Lecture {
  id: number
  title: string
  status: 'processing' | 'completed' | 'failed'
  transcript?: string
  notes?: string
  flashcards?: Array<{ q: string; a: string }>
  quiz?: Array<{ question: string; options: string[]; answer: number }>
  videoUrl?: string
  slidesUrl?: string
  createdAt: string
}

interface LectureStore {
  currentLecture: Lecture | null
  lectureId: number | null
  isLoading: boolean
  
  setCurrentLecture: (lecture: Lecture) => void
  setLectureId: (id: number) => void
  setIsLoading: (loading: boolean) => void
  resetStore: () => void
}

export const useLectureStore = create<LectureStore>((set) => ({
  currentLecture: null,
  lectureId: null,
  isLoading: false,

  setCurrentLecture: (lecture) => set({ currentLecture: lecture }),
  setLectureId: (id) => set({ lectureId: id }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  resetStore: () => set({
    currentLecture: null,
    lectureId: null,
    isLoading: false,
  }),
}))
