export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Get In Touch</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-primary font-medium mb-2">Name</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-primary font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-primary font-medium mb-2">Message</label>
              <textarea 
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <button className="w-full bg-secondary text-white py-3 rounded-lg hover:bg-secondary-dark transition-colors font-medium">
              Send Message
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-text-secondary mb-4">Or reach out directly:</p>
              <div className="flex justify-center space-x-8">
                <a href="mailto:your.email@example.com" className="text-secondary hover:text-secondary-dark transition-colors" title="Email">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/yourprofile" className="text-secondary hover:text-secondary-dark transition-colors" title="LinkedIn">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/yourusername" className="text-secondary hover:text-secondary-dark transition-colors" title="GitHub">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}