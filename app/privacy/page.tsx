import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - SentenceVizu',
  description: 'Read the Privacy Policy for the SentenceVizu visual grammar analysis tool.',
}

export default function Privacy() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Header />

      <main className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <article className="prose mx-auto max-w-4xl">
            
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-center text-gray-500 mt-2 mb-12">Last updated: July 12, 2025</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  Welcome to <strong className="text-gray-900">SentenceVizu</strong>. We are committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our website and services. Your privacy is a top priority, and our core service is designed to function without collecting your personal data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Information We Do Not Collect
                </h2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  <strong className="text-gray-900">We do not collect, store, log, or transmit the sentences you enter for analysis.</strong> All grammatical processing and visualization happen locally in your web browser. The text you paste into our tool never leaves your computer.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Information We May Collect
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  While our core tool does not collect personal data, we may collect information in the following limited circumstances:
                </p>
                <ul className="space-y-2 mb-5 pl-6">
                  <li className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Contact Information:</strong> If you choose to contact us for support or feedback via email, we will collect your email address and any other information you provide in your message to respond to your inquiry.
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Analytics Data:</strong> We may collect anonymous, aggregated usage data to understand how our service is used and to improve it. This data does not include personal information and cannot be tied to an individual user. It may include information like browser type, device type, and general usage patterns.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  How We Use Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Any information we collect is used solely for the following purposes:
                </p>
                <ul className="space-y-2 mb-5 pl-6">
                  <li className="text-gray-700 leading-relaxed">To provide and maintain our service.</li>
                  <li className="text-gray-700 leading-relaxed">To improve the user experience and develop new features.</li>
                  <li className="text-gray-700 leading-relaxed">To respond to your questions and provide customer support.</li>
                  <li className="text-gray-700 leading-relaxed">To monitor the service for security and technical issues.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  We may use cookies or similar technologies for essential website functions. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Future Business Models
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Our goal is to create a sustainable tool that can grow and improve over time. To achieve this, our business model may evolve. In the future, we may introduce:
                </p>
                <ul className="space-y-2 mb-5 pl-6">
                  <li className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Premium Features:</strong> Optional paid features that offer advanced functionality. This would require user accounts and the collection of necessary payment information, which would be handled by a secure third-party payment processor.
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Advertising:</strong> We may display advertisements from third-party networks. These networks may use cookies to collect non-personal information to show relevant ads.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-5">
                  Should our practices change, we will update this Privacy Policy accordingly and provide clear notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Children's Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  Our service is not directed to anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we become aware that we have collected personal data from a child under 13, we will take steps to delete that information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  If you have any questions about this Privacy Policy, please contact us at: <strong className="text-gray-900">support@sentencevizu.com</strong>.
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