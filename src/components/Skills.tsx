import { useState } from 'react';
import { Cloud, Container, GitBranch, Terminal, Shield, Activity } from 'lucide-react';

const skills = [
  {
    name: 'AWS',
    icon: Cloud,
    color: 'from-orange-400 to-yellow-400',
    useCase: 'EC2, S3, Lambda, CloudFormation - Multi-account governance & automation',
  },
  {
    name: 'Azure',
    icon: Cloud,
    color: 'from-blue-400 to-cyan-400',
    useCase: 'AKS, DevOps, Security Center - Cloud-native deployments & monitoring',
  },
  {
    name: 'Kubernetes',
    icon: Container,
    color: 'from-blue-500 to-purple-500',
    useCase: 'EKS/AKS orchestration, Helm charts, cluster optimization',
  },
  {
    name: 'Docker',
    icon: Container,
    color: 'from-cyan-400 to-blue-600',
    useCase: 'Containerization, microservices architecture, image optimization',
  },
  {
    name: 'Terraform',
    icon: Terminal,
    color: 'from-purple-400 to-pink-500',
    useCase: 'Infrastructure as Code, multi-cloud provisioning & state management',
  },
  {
    name: 'Jenkins',
    icon: GitBranch,
    color: 'from-red-400 to-orange-500',
    useCase: 'CI/CD automation, pipeline optimization, automated testing',
  },
  {
    name: 'GitHub Actions',
    icon: GitBranch,
    color: 'from-slate-400 to-slate-600',
    useCase: 'Workflow automation, continuous deployment, security scanning',
  },
  {
    name: 'Python',
    icon: Terminal,
    color: 'from-blue-400 to-yellow-400',
    useCase: 'Automation scripts, AWS Lambda functions, DevOps tooling',
  },
  {
    name: 'Prometheus',
    icon: Activity,
    color: 'from-orange-500 to-red-500',
    useCase: 'Metrics collection, alerting, real-time monitoring dashboards',
  },
  {
    name: 'Grafana',
    icon: Activity,
    color: 'from-orange-400 to-yellow-500',
    useCase: 'Visualization, performance tracking, incident detection',
  },
  {
    name: 'Ansible',
    icon: Terminal,
    color: 'from-red-500 to-slate-700',
    useCase: 'Configuration management, playbook automation, deployment',
  },
  {
    name: 'Security',
    icon: Shield,
    color: 'from-green-400 to-emerald-600',
    useCase: 'IAM automation, compliance enforcement, vulnerability scanning',
  },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Technical Skills
            </span>
          </h2>
          <p className="text-slate-400 text-lg">Hover to see real-world automation use cases</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:border-teal-400/50 cursor-pointer h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />

                  <div className="flex flex-col items-center text-center">
                    <div className={`mb-4 p-3 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                  </div>

                  <div className={`absolute inset-0 bg-slate-900/95 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <p className="text-sm text-slate-300 text-center leading-relaxed">
                      {skill.useCase}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl" />
            <div className="relative">
              <div className="text-4xl font-bold text-blue-400 mb-2">80%</div>
              <div className="text-slate-300 font-semibold mb-2">Automation Increase</div>
              <div className="text-sm text-slate-400">
                Reduced manual intervention through cloud automation frameworks
              </div>
            </div>
          </div>

          <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-teal-400/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-xl" />
            <div className="relative">
              <div className="text-4xl font-bold text-teal-400 mb-2">40%</div>
              <div className="text-slate-300 font-semibold mb-2">Faster Releases</div>
              <div className="text-sm text-slate-400">
                Accelerated software delivery through optimized CI/CD pipelines
              </div>
            </div>
          </div>

          <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl" />
            <div className="relative">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50%</div>
              <div className="text-slate-300 font-semibold mb-2">MTTR Reduction</div>
              <div className="text-sm text-slate-400">
                Improved incident response through real-time monitoring
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
