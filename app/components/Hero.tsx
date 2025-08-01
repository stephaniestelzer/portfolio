import Button from './Button';

export default function Hero() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Greeting */}
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Stephanie</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who creates beautiful, functional web experiences. 
            I love turning ideas into reality through clean code and thoughtful design.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/projects" size="lg">
              View My Work
            </Button>
            <Button href="/about" variant="outline" size="lg">
              Learn More About Me
            </Button>
          </div>
          
          {/* Quick Stats or Skills Preview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 