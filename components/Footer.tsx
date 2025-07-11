import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center gap-6 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Logo size={32} />
            <span className="text-2xl font-bold text-primary-brand">SentenceVizu</span>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">
            Master English Grammar Through Visual Analysis
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2025 • SentenceVizu All rights reserved.
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm">
              <a 
                href="mailto:support@sentencevizu.com" 
                className="text-muted-foreground hover:text-gray-900 transition-colors"
              >
                support@sentencevizu.com
              </a>
              <a 
                href="/privacy" 
                className="text-muted-foreground hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-muted-foreground hover:text-gray-900 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 