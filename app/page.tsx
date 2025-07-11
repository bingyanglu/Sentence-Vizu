'use client'

import { useState, useEffect } from 'react'
import nlp from 'compromise'
import Header from '../components/Header'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import UpcomingFeatures from '../components/UpcomingFeatures'

interface Token {
  text: string;
  tag: string;
}

type AnalysisResult = Token[] | null;

export default function Home() {
  const [input, setInput] = useState('The quick brown fox jumps gracefully over the lazy dog.');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const colorMap: { [key: string]: string } = {
    'Noun': 'bg-blue-100 text-blue-800',
    'Verb': 'bg-green-100 text-green-800',
    'Adjective': 'bg-yellow-100 text-yellow-800',
    'Adverb': 'bg-indigo-100 text-indigo-800',
    'Preposition': 'bg-pink-100 text-pink-800',
    'Conjunction': 'bg-purple-100 text-purple-800',
    'Determiner': 'bg-gray-200 text-gray-700',
    'Pronoun': 'bg-sky-100 text-sky-800',
    'Punctuation': 'text-muted-foreground',
  };
  const defaultColor = 'bg-gray-100 text-gray-700';

  const analyzeSentence = () => {
    if (!input.trim() || isAnalyzing) return;

    setIsAnalyzing(true);
    try {
      const doc = nlp(input.trim());
      const terms = doc.json({ tags: true } as any)[0].terms;

      const result: Token[] = terms.map((term: { text: string; tags: string[] }) => {
        let mainTag = 'Noun'; // Fallback
        const tags = new Set(term.tags);

        if (tags.has('Punctuation')) mainTag = 'Punctuation';
        else if (tags.has('Pronoun')) mainTag = 'Pronoun';
        else if (tags.has('Verb')) mainTag = 'Verb';
        else if (tags.has('Adjective')) mainTag = 'Adjective';
        else if (tags.has('Adverb')) mainTag = 'Adverb';
        else if (tags.has('Determiner')) mainTag = 'Determiner';
        else if (tags.has('Conjunction')) mainTag = 'Conjunction';
        else if (tags.has('Preposition')) mainTag = 'Preposition';
        else if (tags.has('Noun')) mainTag = 'Noun';

        return { text: term.text, tag: mainTag };
      });
      setAnalysisResult(result);
      setShowResults(true);
    } catch (error) {
      console.error("Analysis failed:", error);
      setAnalysisResult(null);
    } finally {
      setIsAnalyzing(false);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      analyzeSentence();
    }
  };
  
  const usedTags = analysisResult ? new Set(analysisResult.map(t => t.tag).filter(t => t !== 'Punctuation')) : new Set<string>();

  useEffect(() => {
    if (showResults) {
      const timer = setTimeout(() => {
        const resultsContainer = document.getElementById('results-container');
        if (resultsContainer) {
          resultsContainer.classList.add('visible');
        }
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [showResults]);

  return (
    <div className="min-h-screen font-sans antialiased">
      <Header />

      <main className="overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col items-center justify-center text-center py-8 sm:py-16">
            <div className="w-full max-w-5xl mx-auto px-4">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary-brand">Master English Sentences. Visually.</h1>
              <p className="mt-4 sm:mt-6 text-lg sm:text-xl font-medium text-muted-foreground max-w-2xl mx-auto">From color-coding to full diagrams, SentenceVizu makes grammar easy to understand.</p>
            </div>
          </div>

          {/* AI Grammar Analyzer Section */}
          <div className="space-y-8">
            <div className="w-full mx-auto max-w-4xl">
              <div className="border border-border bg-card shadow-sm rounded-xl px-3 sm:px-6 py-4">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Grammar Analyzer</h2>
                </div>
                <div className="bg-gray-50 rounded-xl p-2 sm:p-4 mb-4 sm:mb-6">
                  <div className="relative">
                    <label className="text-muted-foreground text-xs sm:text-sm">Enter your sentence</label>
                    <textarea 
                      id="sentence-input"
                      placeholder="What do you want to analyze?" 
                      className="w-full bg-transparent text-lg sm:text-xl focus:outline-none mt-1 text-gray-900 placeholder:text-gray-400 resize-none h-[60px] overflow-y-auto"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyPress}
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-4 sm:gap-6">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <button 
                      id="analyze-button"
                      className="relative px-4 sm:px-6 py-2 text-sm rounded-md font-semibold bg-primary-btn disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={analyzeSentence}
                      disabled={isAnalyzing || !input.trim()}
                      aria-label="Analyze the entered sentence for grammar and parts of speech"
                    >
                      {isAnalyzing ? 'Analyzing...' : 'Analyze'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          {showResults && analysisResult && (
            <div id="results-container" className="mt-8 max-w-4xl mx-auto opacity-0" style={{ display: 'block' }}>
              <div className="border border-border bg-card shadow-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Analysis Result</h3>
                <div id="sentence-output" className="text-2xl leading-relaxed font-medium flex flex-wrap gap-x-2 gap-y-3 items-center p-4 bg-gray-50 rounded-lg">
                  {analysisResult.map((token, index) => {
                    if (token.tag === 'Punctuation') {
                      return <span key={index} className={`px-0 ${colorMap[token.tag]}`}>{token.text}</span>;
                    }
                    return (
                      <span key={index} className={`token px-2 py-1 rounded-md font-medium ${colorMap[token.tag] || defaultColor}`} title={token.tag}>
                        {token.text}
                      </span>
                    );
                  })}
                </div>
                <div id="legend" className="mt-6 pt-6 border-t border-border">
                  <h4 className="text-lg font-bold mb-3 text-gray-900">Legend</h4>
                  <div id="legend-items" className="flex flex-wrap gap-x-6 gap-y-2">
                    {Array.from(usedTags).map((tag: string) => (
                      <div key={tag} className="flex items-center text-sm text-gray-700">
                        <span className={`w-4 h-4 rounded-md mr-2 ${colorMap[tag] || defaultColor}`}></span>{tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Key Features Section */}
          <section id="features" className="py-16 mt-8">
            <div className="mx-auto flex max-w-screen-md flex-col items-center gap-2 text-center">
              <h2 className="mb-2 text-pretty text-3xl font-bold lg:text-4xl text-primary-brand">Key Features of SentenceVizu</h2>
              <p className="mb-8 max-w-xl text-muted-foreground lg:max-w-none lg:text-lg">An intuitive tool designed for students, writers, and English learners.</p>
            </div>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <div className="flex flex-col text-center items-center">
                <div className="mb-5 flex size-16 items-center justify-center rounded-full border-2 border-primary-btn bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-blue-600">
                    <path d="M13 10H20L11 23V14H4L13 1V10Z"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Instant Analysis</h3>
                <p className="text-muted-foreground">Get immediate, client-side feedback on sentence structure without waiting for a server.</p>
              </div>
              <div className="flex flex-col text-center items-center">
                <div className="mb-5 flex size-16 items-center justify-center rounded-full border-2 border-primary-btn bg-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-green-600">
                    <path d="M2.707 12.293a1 1 0 0 0-1.414 1.414l7.5 7.5a1 1 0 0 0 1.414 0l13-13a1 1 0 0 0-1.414-1.414L9.5 16.086 3.707 10.293a1 1 0 1 0-1.414 1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Visual Clarity</h3>
                <p className="text-muted-foreground">Color-coded parts of speech make complex grammatical roles easy to see and understand at a glance.</p>
              </div>
              <div className="flex flex-col text-center items-center">
                <div className="mb-5 flex size-16 items-center justify-center rounded-full border-2 border-primary-btn bg-purple-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-purple-600">
                    <path d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 7C10.8954 7 10 7.89543 10 9C10 9.74025 10.4022 10.3866 10.9999 10.7324L11 15H13L13.0011 10.7318C13.5983 10.3858 14 9.73984 14 9C14 7.89543 13.1046 7 12 7Z"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Perfect Educational Tool</h3>
                <p className="text-muted-foreground">An ideal companion for homework, exam preparation, and improving writing skills.</p>
              </div>
            </div>
          </section>

          {/* Upcoming Features Section */}
          <UpcomingFeatures />

          {/* FAQ Section */}
          <FAQ />

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
} 