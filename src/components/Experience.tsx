import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'PointClickCare',
    location: 'Mississauga',
    role: 'DevOps Analyst',
    period: 'Mar 2024 – Present',
    highlights: [
      'Enhanced Jenkins pipeline reliability with retry logic, reducing build failures by 30%',
      'Implemented Prometheus, Grafana, and Alertmanager for real-time monitoring',
      'Automated Jira-GitHub integration across all repositories',
      'Reduced incident resolution time by 40% through proactive monitoring',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    company: 'Deloitte',
    location: 'Toronto',
    role: 'Sr Systems Engineer (Automation-DevOps)',
    period: 'Nov 2022 – Feb 2024',
    highlights: [
      'Developed cloud governance automation ensuring 100% compliance',
      'Automated AWS IAM key rotation system with Secrets Manager integration',
      'Built AWS account lifecycle management reducing manual effort by 90%',
      'Automated Dynatrace monitoring injection into Azure App Services',
    ],
    color: 'from-teal-500 to-green-500',
  },
  {
    company: 'Roche',
    location: 'Mississauga',
    role: 'DevOps Engineer',
    period: 'Mar 2022 – Oct 2022',
    highlights: [
      'Managed and optimized Kubernetes clusters for production environments',
      'Built CI/CD pipelines with GitLab and Jenkins improving deployment efficiency',
      'Provided L3 operational support for critical system issues',
      'Implemented performance optimizations enhancing application efficiency',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    company: 'BLS International',
    location: 'Winnipeg',
    role: 'IT Support & System Administration',
    period: 'Sep 2018 – Feb 2022',
    highlights: [
      'Managed visa and passport processing systems at Indian Consulate',
      'Ensured compliance with IT security policies and data protection protocols',
      'Installed biometric fingerprinting software with security compliance',
      'Optimized IT workflows reducing processing delays',
    ],
    color: 'from-orange-500 to-red-500',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Professional Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full" />
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-teal-500 to-purple-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute left-8 w-4 h-4 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full -translate-x-[7px] mt-2 hidden md:block group-hover:scale-150 transition-transform duration-300 z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full animate-ping opacity-75" />
                </div>

                <div className="md:ml-20 relative">
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-teal-400/50 transition-all duration-300 hover:scale-[1.02]">
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                    <div className="relative">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Building2 className={`w-6 h-6 bg-gradient-to-br ${exp.color} bg-clip-text text-transparent`} />
                            <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                          </div>
                          <div className="text-lg text-teal-400 font-semibold mb-1">
                            {exp.role}
                          </div>
                          <div className="text-slate-400">{exp.location}</div>
                        </div>
                        <div className={`flex items-center gap-2 mt-4 md:mt-0 px-4 py-2 rounded-lg bg-gradient-to-r ${exp.color} bg-opacity-10 border border-slate-700`}>
                          <Calendar className="w-4 h-4 text-teal-400" />
                          <span className="text-slate-300 font-medium">{exp.period}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {exp.highlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="flex items-start gap-3 group/item">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${exp.color} mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300`} />
                            <p className="text-slate-300 leading-relaxed group-hover/item:text-white transition-colors duration-300">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl px-8 py-4 hover:border-teal-400/50 transition-all duration-300">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-2">
              6+ Years
            </div>
            <div className="text-slate-400">
              Building Cloud & DevOps Excellence Across Enterprise Organizations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
