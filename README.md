# 🎓 LectureIQ

**AI-Powered Lecture Processing Platform** — Transform video lectures into interactive study materials with AI-generated notes, flashcards, and quizzes.

Built for the **Gemini 3 Hackathon**

---

## 🌟 Features

### Core Functionality
- **📹 Video Processing** — Upload lecture videos in any format (MP4, MOV, AVI, WebM)
- **📄 Slide Extraction** — Upload PDF slides for synchronized content
- **🎙️ Audio Transcription** — Extract and transcribe audio using Whisper/Google STT
- **🧠 AI Content Generation** — Generate notes, flashcards, and quizzes with Google Gemini
- **⏱️ Smart Alignment** — Align transcript sections with relevant slides

### Study Tools
- **📝 Interactive Notes** — Structured notes with key concepts and timestamps
- **🗂️ Flashcards** — AI-generated flashcards with difficulty levels
- **✅ Quiz Interface** — Multiple-choice questions with explanations
- **🔄 Section Navigation** — Navigate between lecture sections

---

## 🚀 Quick Start

### Prerequisites
- Python 3.10+
- Node.js 18+
- FFmpeg (optional)
- Google Gemini API Key (optional for testing)

### Installation

1. **Install Python dependencies**
   ```bash
   pip install -r backend/requirements.txt
   ```

2. **Configure environment**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env and add GEMINI_API_KEY (optional)
   ```

3. **Run database migrations**
   ```bash
   cd backend
   python -m alembic upgrade head
   ```

4. **Start backend** (Terminal 1)
   ```bash
   cd backend
   python -m uvicorn app.main:app --reload
   ```

5. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

6. **Start frontend** (Terminal 2)
   ```bash
   cd frontend
   npm run dev
   ```

7. **Open** http://localhost:3000

---

## 🏗️ Tech Stack

**Frontend**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v4
- React Query
- Zustand

**Backend**
- FastAPI
- SQLAlchemy
- SQLite
- Alembic
- Google Gemini API

---

## 📖 Usage

1. Navigate to http://localhost:3000
2. Upload a video file and optional PDF slides
3. Enter a lecture title
4. Click "Process Lecture"
5. View generated notes, flashcards, and quiz

---

## 🔧 Configuration

### Backend `.env`
```env
DATABASE_URL=sqlite:///./lectureiq.db
GEMINI_API_KEY=your_api_key_here
USE_CELERY=false
```

### Frontend `.env.local`
```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

---

## 📚 Project Structure

```
LectureIq/
├── backend/
│   ├── app/
│   │   ├── core/          # Config, database
│   │   ├── models/        # ORM models
│   │   ├── schemas/       # Pydantic schemas
│   │   ├── services/      # Business logic
│   │   ├── tasks/         # Processing pipeline
│   │   ├── utils/         # Utilities
│   │   ├── prompts/       # AI prompts
│   │   └── main.py        # FastAPI app
│   ├── alembic/           # Migrations
│   ├── storage/           # Uploaded files
│   └── requirements.txt
│
└── frontend/
    ├── src/
    │   ├── app/           # Pages
    │   ├── components/    # UI components
    │   └── store/         # State management
    └── package.json
```

---

## 🧪 Development

### Mock Mode
Backend includes mock services for testing without API keys:
- Mock transcription returns sample data
- Mock Gemini generates flashcards/quizzes
- FFmpeg bypass for systems without ffmpeg

### Database Reset
```bash
cd backend
rm lectureiq.db
python -m alembic upgrade head
```

---

## 📄 License

MIT License

---

**Built with ❤️ for the Gemini 3 Hackathon**
