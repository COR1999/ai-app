import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Hi, I'm <span className="text-blue-600">Cian O'Rourke</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Full Stack Developer with a passion for creating exceptional digital experiences. 
                When I'm not coding, you'll find me in the kitchen crafting culinary masterpieces.
              </p>
              <div className="flex gap-4 text-sm text-blue-600 font-medium">
                <span className="bg-blue-100 px-3 py-1 rounded-full">💻 Developer</span>
                <span className="bg-blue-100 px-3 py-1 rounded-full">👨‍🍳 Chef</span>
                <span className="bg-blue-100 px-3 py-1 rounded-full">🌍 World Traveler</span>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto relative overflow-hidden shadow-2xl">
                {/* Placeholder for your photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium">
                  Your Photo Here
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg">
                <span className="text-2xl">👨‍🍳</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Journey</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tech Journey */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Tech Passion</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                My love for technology started early, but it was the precision and creativity 
                required in professional kitchens that taught me the discipline and attention 
                to detail I bring to coding. Every line of code is crafted with the same care 
                I put into plating a dish.
              </p>
            </div>

            {/* Culinary Journey */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">👨‍🍳</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Culinary Arts</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Trained in award-winning kitchens across Dublin, I've honed my skills in 
                high-pressure environments where precision, creativity, and teamwork are 
                essential. These experiences shaped my approach to problem-solving and 
                collaboration in tech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Adventures */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Culinary Adventures</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Dublin */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600 relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-3xl mb-2 block">🇮🇪</span>
                  <h3 className="text-xl font-bold">Dublin</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-800 mb-2">Award-Winning Kitchens</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Trained in some of Dublin's most prestigious restaurants, learning the fundamentals 
                  of professional cooking and kitchen management from renowned chefs.
                </p>
              </div>
            </div>

            {/* Greece */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600 relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-3xl mb-2 block">🇬🇷</span>
                  <h3 className="text-xl font-bold">Greece</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-800 mb-2">Mediterranean Events</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Worked alongside international chefs creating memorable dining experiences 
                  in the stunning Greek islands, mastering Mediterranean flavors and techniques.
                </p>
              </div>
            </div>

            {/* London */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-3xl mb-2 block">🇬🇧</span>
                  <h3 className="text-xl font-bold">London</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-800 mb-2">Culinary Events</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Collaborated with top chefs on exclusive events and pop-ups across London, 
                  bringing innovative concepts to life in the heart of the culinary world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests & Skills */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Drives Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Culinary Interests</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🍳</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Experimental Cooking</h4>
                    <p className="text-gray-600 text-sm">Always pushing boundaries with new flavor combinations and techniques</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🌿</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Farm-to-Table</h4>
                    <p className="text-gray-600 text-sm">Passionate about sustainable, locally-sourced ingredients</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🍷</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Food & Wine Pairing</h4>
                    <p className="text-gray-600 text-sm">Creating perfect harmony between flavors and complementary wines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Beyond the Kitchen</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">✈️</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Travel & Culture</h4>
                    <p className="text-gray-600 text-sm">Exploring new cultures through their food traditions and techniques</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📚</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Continuous Learning</h4>
                    <p className="text-gray-600 text-sm">Always studying new technologies and culinary trends</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🤝</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Mentoring</h4>
                    <p className="text-gray-600 text-sm">Sharing knowledge with aspiring chefs and developers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Curiosity Section */}
      <section className="py-16" style={{ backgroundColor: '#f8f5f7' }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#2e6171' }}>
              A Mind That Never Stops Learning
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#556f7a' }}>
              I believe curiosity is the fuel of innovation. Here are some of the subjects that fascinate me
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Geography */}
            <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="font-bold text-lg mb-3" style={{ color: '#2e6171' }}>Geography</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#798086' }}>
                  Fascinated by how physical landscapes shape cultures, economies, and human migration patterns across the globe.
                </p>
              </div>
            </div>

            {/* Economics */}
            <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="font-bold text-lg mb-3" style={{ color: '#2e6171' }}>Economics</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#798086' }}>
                  Understanding market dynamics, behavioral economics, and how financial systems impact everyday life.
                </p>
              </div>
            </div>

            {/* History */}
            <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">📜</div>
                <h3 className="font-bold text-lg mb-3" style={{ color: '#2e6171' }}>History</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#798086' }}>
                  Learning from the past to understand the present - from ancient civilizations to modern technological evolution.
                </p>
              </div>
            </div>

            {/* Psychology */}
            <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="font-bold text-lg mb-3" style={{ color: '#2e6171' }}>Psychology</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#798086' }}>
                  How people think, make decisions, and interact - essential for creating user-centered design and experiences.
                </p>
              </div>
            </div>

            {/* Science & Technology */}
            <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="font-bold text-lg mb-3" style={{ color: '#2e6171' }}>Science & Tech</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#798086' }}>
                  From quantum computing to biotechnology - staying curious about the cutting edge of human innovation.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">💭</div>
                <h3 className="font-bold text-lg mb-3" style={{ color: '#2e6171' }}>Philosophy</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#798086' }}>
                  Exploring ethics, logic, and the fundamental questions about existence, knowledge, and human nature.
                </p>
              </div>
            </div>
          </div>

          {/* Learning Quote */}
          <div className="text-center mt-12">
            <div className="max-w-2xl mx-auto p-6 rounded-xl" style={{ backgroundColor: 'rgba(183, 159, 173, 0.1)' }}>
              <blockquote className="text-lg font-medium italic mb-4" style={{ color: '#2e6171' }}>
                "The more I learn, the more I realize how much I don't know. And that's exactly what keeps me excited about tomorrow."
              </blockquote>
              <p className="text-sm font-semibold" style={{ color: '#b79fad' }}>— My approach to life and learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Fun Facts About Me</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <span className="text-3xl mb-3 block">🌍</span>
              <h4 className="font-bold text-gray-800 mb-2">Countries Cooked In</h4>
              <p className="text-2xl font-bold text-blue-600">3+</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <span className="text-3xl mb-3 block">⭐</span>
              <h4 className="font-bold text-gray-800 mb-2">Award-Winning Kitchens</h4>
              <p className="text-2xl font-bold text-blue-600">Multiple</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <span className="text-3xl mb-3 block">🍽️</span>
              <h4 className="font-bold text-gray-800 mb-2">Signature Dish</h4>
              <p className="text-sm font-medium text-gray-600">Modern Irish Cuisine</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <span className="text-3xl mb-3 block">💡</span>
              <h4 className="font-bold text-gray-800 mb-2">Favorite Combo</h4>
              <p className="text-sm font-medium text-gray-600">Code & Cook</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Let's Create Something Amazing</h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether it's building your next web application or discussing the perfect flavor profile, 
            I'd love to connect and explore new possibilities together.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
            <a 
              href="/projects" 
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}