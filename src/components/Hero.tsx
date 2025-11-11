import { Cloud, Terminal, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-teal-950" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <Cloud className="w-10 h-10 text-blue-400 animate-float" />
          <Terminal className="w-10 h-10 text-teal-400 animate-float delay-200" />
          <Zap className="w-10 h-10 text-cyan-400 animate-float delay-400" />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400">
            Hi, I'm Vijaya B
          </span>
        </h1>

        <div className="text-3xl md:text-4xl font-semibold mb-4 text-slate-300 animate-slide-up delay-200">
          Cloud & DevOps Engineer
        </div>

        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto animate-slide-up delay-400">
          Building automation, reliability, and AI-driven infrastructure
          <br />
          <span className="text-teal-400">6+ years of experience</span> in Cloud & DevOps Excellence
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-600">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50"
          >
            <span className="relative z-10 text-lg font-semibold text-white">
              View Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="#contact"
            className="group relative px-8 py-4 border-2 border-teal-400 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/30"
          >
            <span className="relative z-10 text-lg font-semibold text-teal-400 group-hover:text-slate-900">
              Connect with Me
            </span>
            <div className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-8 animate-fade-in delay-800">
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400">6+</div>
            <div className="text-sm text-slate-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">15+</div>
            <div className="text-sm text-slate-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">100%</div>
            <div className="text-sm text-slate-400">Cloud Compliance</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
