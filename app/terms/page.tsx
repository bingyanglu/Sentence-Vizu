import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service - SentenceVizu',
  description: 'Read the Terms of Service for using the SentenceVizu visual grammar analysis tool.',
}

export default function Terms() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Header />

      <main className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <article className="prose mx-auto max-w-4xl">
            
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-center text-gray-500 mt-2 mb-12">Last updated: July 11, 2025</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Introduction and Acceptance of Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  Welcome to <strong className="text-gray-900">SentenceVizu</strong>, a web-based tool designed to assist with English grammar analysis by visualizing sentence structures. By accessing or using our website and its tools, you agree to be bound by these Terms of Service. If you do not agree with any of these terms, please do not use our service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Use of the Service
                </h2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  SentenceVizu provides users with tools to enhance their understanding of English grammar through color-coding and diagramming. You agree to use the service in accordance with all applicable laws and these Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Service Features and Usage
                </h2>
                <ul className="space-y-2 mb-5 pl-6">
                  <li className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Color-Coded Analysis:</strong> The service allows you to instantly see the parts of speech in a sentence highlighted with different colors.
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Client-Side Processing:</strong> All grammatical analysis is performed locally in your browser to protect your privacy. Your text is not sent to our servers.
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Future Features:</strong> Upcoming features may include mind maps and Reed-Kellogg sentence diagrams.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  User Responsibilities
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">You agree to:</p>
                <ul className="space-y-2 mb-5 pl-6">
                  <li className="text-gray-700 leading-relaxed">Use the service responsibly and for educational purposes.</li>
                  <li className="text-gray-700 leading-relaxed">Not attempt to reverse engineer, decompile, or modify the service.</li>
                  <li className="text-gray-700 leading-relaxed">Not use the service for any illegal or unauthorized purpose.</li>
                  <li className="text-gray-700 leading-relaxed">Not use automated scripts or bots to access or overload our service.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Content and Intellectual Property Rights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  The SentenceVizu service, including its code, design, branding, and functionality, is protected under copyright law and is the exclusive property of SentenceVizu. While the sentences you input and analyze are your own, the tool and its features remain our property.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Prohibited Activities
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">You agree not to:</p>
                <ul className="space-y-2 mb-5 pl-6">
                  <li className="text-gray-700 leading-relaxed">Modify, adapt, or hack the service or attempt to gain unauthorized access to it.</li>
                  <li className="text-gray-700 leading-relaxed">Use the service in any way that could interfere with its normal operation or the experience of other users.</li>
                  <li className="text-gray-700 leading-relaxed">Distribute, sell, or lease any part of the service.</li>
                  <li className="text-gray-700 leading-relaxed">Remove any copyright or proprietary notices from the service.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Privacy and Data Collection
                </h2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  SentenceVizu is designed with privacy as a priority. All analysis of the text you provide happens locally within your browser. We do not collect, store, or transmit the sentences you analyze. For more detailed information, please refer to our (future) Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Service Availability
                </h2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  The service is provided "as is" and "as available." We may update the service periodically to add features or fix issues. We reserve the right to modify or discontinue the service with or without notice, although we will strive to inform users of any significant changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Disclaimer of Warranties
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The service is provided without any warranties of any kind, either express or implied. While we strive for accuracy, we do not warrant that:
                </p>
                <ul className="space-y-2 mb-5 pl-6">
                  <li className="text-gray-700 leading-relaxed">The grammatical analysis will be 100% accurate or meet your specific requirements.</li>
                  <li className="text-gray-700 leading-relaxed">The service will be uninterrupted, timely, secure, or error-free.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Limitation of Liability
                </h2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  To the fullest extent permitted by law, SentenceVizu shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the service, or any decisions made based on the tool's output.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Changes to These Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  We may update these Terms of Service from time to time. We will notify users of any changes by posting the new terms on this page. Your continued use of the service after any changes indicates your acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Contact Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  If you have any questions about these Terms of Service, please contact us at: <strong className="text-gray-900">support@sentencevizu.com</strong> (or your preferred contact email).
                </p>
                <p className="text-gray-700 leading-relaxed mb-5">
                  By using SentenceVizu, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. Thank you for using our tool to make grammar visible!
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