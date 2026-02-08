# LectureIQ - API Keys Setup Guide

## ✅ What You Need

There are **ONLY 2 REQUIRED SERVICES**:

### 1. **Google Gemini API** (Content Generation)
   - **For**: Generating notes, flashcards, and quiz questions
   - **Cost**: FREE tier available (60 requests/minute)
   - **Setup**: 5 minutes

### 2. **Whisper API** (Audio Transcription)
   - **For**: Converting speech to text
   - **Options**: 
     - FREE: OpenAI's whisper (installed locally)
     - PAID: OpenAI's Whisper API
   - **Setup**: 2 minutes (pip install)

---

## 🚀 Quick Setup

### Step 1: Get Gemini API Key (FREE)

1. Go to: https://ai.google.dev/
2. Click "Get API Key"
3. Create/select a Google Cloud project
4. Copy your API key

### Step 2: Set Environment Variable

**Windows (PowerShell):**
```powershell
$env:GEMINI_API_KEY="your_api_key_here"
```

**Windows (Permanent - .env file):**
```env
GEMINI_API_KEY=your_api_key_here
```

### Step 3: Install Whisper (FREE)

```bash
pip install openai-whisper
```

That's it! You're done.

---

## 🔧 Backend Configuration

Your `.env` file should look like:

```env
# Required
DATABASE_URL=sqlite:///./lectureiq.db
GEMINI_API_KEY=your_gemini_api_key_here

# Optional
REDIS_URL=redis://localhost:6379
STORAGE_BUCKET=your_storage_bucket
STORAGE_PATH=storage
USE_CELERY=false
```

---

## 🎯 How It Works

### Upload Flow:
1. User uploads MP4 → Saved to storage
2. Audio extracted → WAV file
3. **Whisper transcribes** → Text (free, local)
4. **Gemini generates** → Notes, flashcards, quizzes
5. All saved to database

### If Something is Missing:

**Error: "GEMINI_API_KEY not set"**
- Solution: Add `GEMINI_API_KEY` to `.env`

**Error: "No module named 'whisper'"**
- Solution: `pip install openai-whisper`

**Error: "Gemini API rate limited"**
- Solution: Wait 60 seconds (free tier: 60 requests/minute)

---

## 💰 Pricing

| Service | Free Tier | Paid | Notes |
|---------|-----------|------|-------|
| Gemini API | 60 req/min | $0.075 per 1K input tokens | Most lectures fit in free tier |
| Whisper | Local installation | - | Run locally, completely free |
| Database | SQLite | - | Included, free |

---

## ✨ That's Really It

You need:
- ✅ Gemini API key (5 minutes)
- ✅ Whisper installed (1 minute)

Everything else is included or free!

---

## 🐛 Troubleshooting

### "ImportError: No module named 'google.generativeai'"

```bash
pip install google-generativeai
```

### "Gemini API returned error"

1. Check your API key is valid
2. Make sure you're using the correct key (not old one)
3. Check quota: https://console.cloud.google.com/

### "Whisper model downloading..."

First run will download the model (~140MB). This is normal.

---

## 📝 Notes

- **Gemini API**: Free tier is sufficient for learning/testing
- **Whisper**: Runs locally, no API needed after installation
- **No limits** on how many lectures you can process (just Gemini rate limiting)

Happy learning! 🎓
