import { Award, Code, Shield, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl blur-xl" />
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-teal-400/50 transition-all duration-300">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Results-driven Cloud & DevOps Engineer with{' '}
                <span className="text-teal-400 font-semibold">6+ years of experience</span> in
                cloud automation, infrastructure management, and security compliance across consulting
                and enterprise IT.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Specializes in{' '}
                <span className="text-blue-400 font-semibold">
                  CI/CD pipeline optimization, security automation,
                </span>{' '}
                and cloud scalability enhancements to improve performance, cost efficiency, and
                system reliability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Code className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-white mb-2">Cloud Automation</h3>
              <p className="text-slate-400 text-sm">
                AWS, Azure, Kubernetes, Docker expertise
              </p>
            </div>

            <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-teal-400/50 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Shield className="w-10 h-10 text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-white mb-2">Security</h3>
              <p className="text-slate-400 text-sm">
                IAM automation, compliance enforcement
              </p>
            </div>

            <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <TrendingUp className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>
              <p className="text-slate-400 text-sm">
                Reduced MTTR by 50%, 80% automation
              </p>
            </div>

            <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Award className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
              <p className="text-slate-400 text-sm">
                Multi-cloud governance & monitoring
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-teal-400/50 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-t-xl" />
            <h4 className="text-teal-400 font-semibold mb-3 text-lg">Cloud Automation</h4>
            <p className="text-slate-400 text-sm">
              Designed AWS IAM frameworks reducing manual intervention by 80%
            </p>
          </div>

          <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-t-xl" />
            <h4 className="text-blue-400 font-semibold mb-3 text-lg">CI/CD Excellence</h4>
            <p className="text-slate-400 text-sm">
              Built Jenkins & GitLab pipelines accelerating releases by 40%
            </p>
          </div>

          <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-xl" />
            <h4 className="text-cyan-400 font-semibold mb-3 text-lg">Monitoring</h4>
            <p className="text-slate-400 text-sm">
              Integrated Dynatrace, Prometheus reducing MTTR by 50%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
