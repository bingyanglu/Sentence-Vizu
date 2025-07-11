export default function UpcomingFeatures() {
  const upcomingFeatures = [
    {
      title: "Mind Map Diagrams",
      description: "Transform sentences into intuitive mind maps that reveal core structures and component relationships.",
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      status: "In Development",
      color: "bg-purple-100 border-purple-200"
    },
    {
      title: "Reed-Kellogg Diagrams", 
      description: "Generate classic Reed-Kellogg system diagrams used by grammar experts for deep grammatical analysis.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
      ),
      status: "Planned",
      color: "bg-indigo-100 border-indigo-200"
    }
  ];

  return (
    <section className="py-16 mt-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-orange-100 text-orange-600 text-sm font-medium rounded-full mb-4">
            Coming Soon
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-brand mb-4">
            More Powerful Features Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're developing more visualization tools to make grammar analysis more intuitive and comprehensive
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {upcomingFeatures.map((feature, index) => (
            <div key={index} className={`relative p-6 rounded-2xl border-2 ${feature.color} hover:shadow-lg transition-all duration-300`}>
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/80 text-gray-600">
                  {feature.status}
                </span>
              </div>
              
              {/* Icon */}
              <div className="mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white shadow-sm">
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Discord Community */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Join our Discord community for feedback, discussions, and updates!
          </p>
          <a 
            href="https://discord.gg/uXacrqAHXD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Join Discord Community
          </a>
        </div>
      </div>
    </section>
  );
} 