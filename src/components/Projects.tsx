import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AWS IAM Key Rotation Automation',
    description:
      'Automated AWS IAM key rotation system scanning users daily, rotating keys every 90 days, storing securely in AWS Secrets Manager, and sending email alerts',
    tech: ['AWS Lambda', 'Python', 'AWS Secrets Manager', 'CloudFormation', 'SES'],
    impact: '100% compliance with AWS security policies',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'Jira-GitHub Integration Pipeline',
    description:
      'Developed Jenkins pipeline to automate Jira Autolinks across all GitHub repositories, processing dynamically every 2 hours with batch optimization',
    tech: ['Jenkins', 'Python', 'REST APIs', 'GitHub', 'Jira'],
    impact: 'Reduced manual effort by 80%, improved issue tracking',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Dynatrace Monitoring Automation',
    description:
      'Automated Dynatrace agent injection into Azure App Services and on-prem servers using PowerShell scripts for comprehensive observability',
    tech: ['PowerShell', 'Dynatrace API', 'Azure ARM', 'CSV Processing'],
    impact: 'Unified monitoring across cloud and on-prem infrastructure',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'AWS Account Governance System',
    description:
      'Built automated system for AWS account lifecycle management, reorganization, and deprovisioning with Azure DevOps integration',
    tech: ['AWS Organizations', 'Python', 'Azure DevOps', 'CloudWatch', 'IAM'],
    impact: '90% reduction in manual account management effort',
    color: 'from-teal-500 to-green-500',
  },
  {
    title: 'QA Application User Provisioning',
    description:
      'Created Jenkins automation pipeline for QA user provisioning via database, with Jira integration for real-time status updates',
    tech: ['Jenkins', 'Jira API', 'SQL Server', 'Webhooks', 'Shell'],
    impact: '80% manual effort reduction, 50% faster provisioning',
    color: 'from-red-500 to-orange-500',
  },
  {
    title: 'AWS Tag Compliance Monitoring',
    description:
      'Automated detection and reporting of missing AWS resource tags across multi-account environments ensuring governance compliance',
    tech: ['AWS Lambda', 'Python', 'S3', 'IAM Roles', 'Task Scheduler'],
    impact: 'Ensured standardized tagging for cost tracking and security',
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Real-world DevOps automation and cloud infrastructure projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-teal-400/50 transition-all duration-300 hover:scale-[1.02]">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                <div className="relative h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Github className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} bg-opacity-20 text-white border border-slate-700`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-700">
                    <div className="flex items-start gap-2 mb-4">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mt-2 flex-shrink-0`} />
                      <p className="text-sm text-teal-400 font-semibold">{project.impact}</p>
                    </div>

                    <button className="group/btn w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-all duration-300">
                      <span className="text-sm font-medium text-slate-300 group-hover/btn:text-white">
                        View Details
                      </span>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover/btn:text-teal-400 transition-colors duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-blue-400/50 transition-all duration-300">
            <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-slate-300 font-semibold mb-2">Projects Delivered</div>
            <div className="text-sm text-slate-400">
              Across cloud automation, security, and DevOps tooling
            </div>
          </div>

          <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-teal-400/50 transition-all duration-300">
            <div className="text-4xl font-bold text-teal-400 mb-2">80%</div>
            <div className="text-slate-300 font-semibold mb-2">Automation Achieved</div>
            <div className="text-sm text-slate-400">
              Through intelligent pipeline and infrastructure automation
            </div>
          </div>

          <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300">
            <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
            <div className="text-slate-300 font-semibold mb-2">Compliance Rate</div>
            <div className="text-sm text-slate-400">
              Ensuring security and governance across all deployments
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
