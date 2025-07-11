'use client'

import { useState } from 'react'
import nlp from 'compromise'

interface Token {
  text: string;
  tag: string;
}

type AnalysisResult = Token[] | null;

export default function Home() {
  const [input, setInput] = useState('The quick brown fox jumps gracefully over the lazy dog.');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const colorMap: { [key: string]: string } = {
    'Noun': 'bg-blue-100 text-blue-800',
    'Verb': 'bg-green-100 text-green-800',
    'Adjective': 'bg-yellow-100 text-yellow-800',
    'Adverb': 'bg-indigo-100 text-indigo-800',
    'Preposition': 'bg-pink-100 text-pink-800',
    'Conjunction': 'bg-purple-100 text-purple-800',
    'Determiner': 'bg-gray-200 text-gray-700',
    'Pronoun': 'bg-sky-100 text-sky-800',
    'Punctuation': 'text-gray-400',
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

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setFormError('Please enter a valid email.');
      return;
    }
    setIsSubmitting(true);
    setFormError('');
    await new Promise(res => setTimeout(res, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  
  const usedTags = analysisResult ? new Set(analysisResult.map(t => t.tag).filter(t => t !== 'Punctuation')) : new Set<string>();

  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
        <header className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4">
                Master English Sentences. <span className="hero-gradient-text">Visually.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                From simple color-coding to detailed Reed-Kellogg diagrams, SentenceVizu helps you visualize and master English grammar.
            </p>
        </header>

        <main className="max-w-4xl mx-auto">
            <section className="card p-6 md:p-8 mb-16">
                <div className="w-full">
                    <textarea 
                      id="sentence-input" 
                      placeholder="Paste or type any English sentence here..." 
                      className="w-full h-32 p-4 text-lg border-2 border-gray-200 rounded-xl resize-none focus:border-blue-500 focus:outline-none transition-colors mb-4"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyPress}
                    />
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-500">Press <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-md">Enter</kbd> to analyze or click the button.</p>
                        <button 
                          id="analyze-button" 
                          className="w-full sm:w-auto btn-primary text-white font-bold text-lg px-8 py-3 rounded-xl shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                          onClick={analyzeSentence}
                          disabled={isAnalyzing || !input.trim()}
                        >
                            {isAnalyzing ? 'Analyzing...' : 'Analyze Sentence'}
                        </button>
                    </div>
                </div>
            </section>

            {analysisResult && (
              <section id="results-container" className="card p-6 md:p-8 mb-16 opacity-100 transform-none">
                  <h3 className="text-xl font-bold mb-4">Analysis Result</h3>
                  <div id="sentence-output" className="text-2xl leading-relaxed font-medium flex flex-wrap gap-x-2 gap-y-3 items-center p-4 bg-gray-50 rounded-lg">
                      {analysisResult.map((token, index) => {
                        if (token.tag === 'Punctuation') {
                          return <span key={index} className={`px-0 ${colorMap[token.tag]}`}>{token.text}</span>;
                        }
                        return (
                          <span key={index} className={`token px-2.5 py-1.5 rounded-lg font-semibold ${colorMap[token.tag] || defaultColor}`} title={token.tag}>
                            {token.text}
                          </span>
                        );
                      })}
                  </div>
                  <div id="legend" className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="text-lg font-bold mb-3">Legend</h4>
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                          {Array.from(usedTags).map((tag: string) => (
                            <span key={tag} className="flex items-center text-sm">
                              <span className={`w-4 h-4 rounded-md mr-2 ${colorMap[tag] || defaultColor}`}></span>{tag}
                            </span>
                          ))}
                      </div>
                  </div>
              </section>
            )}

            <section className="text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">The Future of Sentence Diagramming</h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">We're building two powerful new ways to visualize grammar. Be the first to try them.</p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="card p-8 hover:border-blue-300 transition-all">
                        <svg className="w-12 h-12 mx-auto text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.55a2.5 2.5 0 010 4.9L15 15M9 10l-4.55a2.5 2.5 0 000 4.9L9 15m0-5v5m3-10l-3 3m0 0l-3-3m3 3v12"></path></svg>
                        <h3 className="text-xl font-bold mt-4">Structure Tree Mind Maps</h3>
                        <p className="text-gray-600 mt-2">Transform sentences into intuitive mind maps that reveal core structures and component relationships. Perfect for visual learners.</p>
                    </div>
                    <div className="card p-8 hover:border-purple-300 transition-all">
                         <svg className="w-12 h-12 mx-auto text-purple-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2z"></path></svg>
                        <h3 className="text-xl font-bold mt-4">AI-Powered Reed-Kellogg Diagrams</h3>
                        <p className="text-gray-600 mt-2">Generate classic Reed-Kellogg system diagrams used by grammar experts. The ultimate tool for deep analysis, made effortless.</p>
                    </div>
                </div>

                <div className="max-w-md mx-auto">
                    {isSubmitted ? (
                      <div className="text-center p-4 bg-green-100 text-green-800 rounded-xl">
                        <h3 className="font-bold">Thanks for joining!</h3>
                        <p>We'll email you when we launch.</p>
                      </div>
                    ) : (
                      <>
                        <p className="font-semibold text-lg mb-4">Sound interesting? Join the waitlist for early access.</p>
                        <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3">
                            <input 
                              type="email" 
                              name="email" 
                              placeholder="your.email@example.com" 
                              required 
                              className="flex-grow p-3 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <button 
                              type="submit" 
                              className="bg-gray-800 text-white font-bold px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors disabled:opacity-60"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? 'Joining...' : 'Get Early Access'}
                            </button>
                        </form>
                        {formError && <p className="text-red-600 text-sm mt-2">{formError}</p>}
                        <p className="text-gray-500 text-sm mt-4">No spam, ever. Unsubscribe at any time.</p>
                      </>
                    )}
                </div>
            </section>
        </main>

        <footer className="mt-16 text-center text-gray-500 text-sm p-4">
            <p>&copy; 2025 SentenceVizu. All Rights Reserved.</p>
        </footer>
    </div>
  )
} 