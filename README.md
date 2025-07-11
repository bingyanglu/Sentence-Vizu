# Sentence Vizu

**Visual Sentence Analysis Tool** - Making English grammar intuitive through color-coded visualization

## 🚀 Project Overview

Sentence Vizu is an online tool designed for English learners, students, and writers. It transforms complex English sentence structures into clear, understandable visual representations. Users input a sentence, and the system instantly identifies the part of speech for each word (nouns, verbs, adjectives, etc.) and highlights them with different colors.

## ✨ Core Features

- **Real-time Sentence Analysis**: Uses compromise.js for part-of-speech tagging
- **Color-coded Parts of Speech**: Different colors highlight different grammatical functions
- **Intuitive Legend**: Clear color explanations help understanding
- **Responsive Design**: Optimized for desktop and mobile devices
- **Waitlist Feature**: Collecting early users for advanced features

## 🛠️ Tech Stack

- **Framework**: Next.js 14 + TypeScript
- **Styling**: Tailwind CSS
- **NLP Processing**: compromise.js
- **Deployment**: Vercel

## 🎨 Part of Speech Color Mapping

- 🔵 **Blue** - Nouns
- 🟢 **Green** - Verbs
- 🟡 **Yellow** - Adjectives
- 🟣 **Purple** - Adverbs
- 🔴 **Red** - Pronouns
- 🩷 **Pink** - Prepositions
- 🟠 **Orange** - Conjunctions
- 🟡 **Light Green** - Determiners

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the result.

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
sentence-vizu/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   ├── robots.ts        # Robots.txt generator
│   └── sitemap.ts       # Sitemap generator
├── components/          # React components
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎯 How to Use

1. Paste or type any English sentence in the input box
2. Click the "Analyze Sentence" button or press Enter
3. View the color-coded part-of-speech results
4. Refer to the legend to understand what each color represents

## 🔮 Future Plans

- Traditional sentence diagramming (Reed-Kellogg system)
- Grammar structure visualization
- Sentence complexity analysis
- Multi-language support
- AI-powered advanced analysis

## 📄 License

MIT License 