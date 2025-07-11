export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "How does SentenceVizu work?",
      answer: "SentenceVizu is a visual analysis tool that helps you understand English sentence structure through color-coding and diagramming, using advanced natural language processing."
    },
    {
      id: 2,
      question: "Is SentenceVizu free to use?",
      answer: "Yes, SentenceVizu is completely free to use for basic sentence analysis and color-coding features."
    },
    {
      id: 3,
      question: "Does SentenceVizu collect my data?",
      answer: "No. All SentenceVizu analysis is performed locally in your browser and never uploaded to servers, ensuring your privacy and security."
    },
    {
      id: 4,
      question: "Which browsers are supported?",
      answer: "Currently, SentenceVizu supports Chrome, Firefox, Safari, and Edge browsers. We plan to support more browsers in the future."
    },
    {
      id: 5,
      question: "How can I get technical support?",
      answer: "You can contact our technical support team via support@sentencevizu.com, and we'll respond to your questions within 24 hours."
    },
    {
      id: 6,
      question: "Does SentenceVizu support multiple languages?",
      answer: "Currently, SentenceVizu focuses on English grammar analysis, with plans to support additional languages in future updates."
    }
  ];

  return (
    <section id="faq" className="py-16 mt-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-brand mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Have more questions? Contact us via email.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {faqs.map((faq) => (
            <div key={faq.id} className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                  {faq.id}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 