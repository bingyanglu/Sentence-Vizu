import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'About Us - SentenceVizu',
  description: 'Learn about the story behind SentenceVizu, a tool born from a language learner\'s journey to make English grammar visible and understandable for everyone.',
}

export default function About() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Header />

      <main className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <article className="prose mx-auto max-w-4xl">
            
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 tracking-tight mb-6">
              Our Story
            </h1>
            <p className="text-xl text-center text-gray-600 mt-4 mb-4">
              Hello, and welcome to SentenceVizu!
            </p>
            <p className="text-center text-gray-600 mb-12">
              This tool was born from a personal, yet universal, need: the confusion that every language learner faces when grappling with complex grammar.
            </p>

            <div className="space-y-10">
              <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">How It Started</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-5">
                  Like many of you, I'm a dedicated English learner, using tools like Duolingo every day. I could memorize vocabulary and understand short sentences, but I would hit a wall whenever I encountered long, complex sentences composed of multiple clauses and modifiers. I knew every word individually, but their combined logic was a blur. Who was the subject? What was the action? Which word modified which? These questions were a constant source of frustration.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-5">
                  I realized that traditional learning methods were missing a key component: <strong className="text-gray-900">visualization</strong>. We needed a way to see the "skeleton" of a sentence, laid out as clearly as an anatomical chart.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">The "Eureka" Moment</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-5">
                  While searching for solutions, I stumbled upon "Sentence Diagramming" and its classic implementation, the <strong className="text-gray-900">Reed-Kellogg system</strong>. The first time I saw a sentence diagram, it was a moment of instant clarity. All those abstract grammar rules—subjects, predicates, objects, modifiers—were organized into a clean, logical structure using simple lines and positions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-5">
                  This was the answer I had been looking for! At that moment, an idea sparked: why not create a simple, modern, and accessible online tool so that every learner like me could benefit from this powerful visual method?
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-5">And so, SentenceVizu was born.</p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Our Mission & Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-5">
                  SentenceVizu's mission is simple: <strong className="text-gray-900">Making Grammar Visible.</strong>
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-5">
                  We are dedicated to transforming abstract, often tedious, grammar rules into an intuitive and interactive visual experience. We believe that through visualization, anyone can understand sentence structure more quickly and deeply, building the confidence to use English more effectively.
                </p>
                <ul className="space-y-3 mb-5">
                  <li className="text-lg text-gray-700 leading-relaxed flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span><strong className="text-gray-900">Step One:</strong> Instantly identify different parts of speech with <strong className="text-gray-900">color-coding</strong>.</span>
                  </li>
                  <li className="text-lg text-gray-700 leading-relaxed flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span><strong className="text-gray-900">Next Step:</strong> Launch a <strong className="text-gray-900">mind map</strong> feature to clearly display the logical relationships between words.</span>
                  </li>
                  <li className="text-lg text-gray-700 leading-relaxed flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span><strong className="text-gray-900">Ultimate Goal:</strong> Implement a powerful, AI-driven <strong className="text-gray-900">Reed-Kellogg diagramming</strong> function, providing the ultimate tool for deep grammatical analysis.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Our Journey Together</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-5">
                  This is a long-term project, born from a genuine passion for learning. As a fellow learner still on my journey, I understand your pain points intimately. Every update to SentenceVizu will be dedicated to solving the real problems we face in language acquisition.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-5">
                  Thank you for being here. I hope this little tool helps you on your learning path. If you have any ideas or suggestions, please don't hesitate to reach out!
                </p>
              </section>
            </div>

          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
} 