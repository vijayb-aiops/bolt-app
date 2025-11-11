import { Award, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    name: 'Azure DevOps Engineer Expert',
    issuer: 'Microsoft',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    color: 'from-blue-400 to-purple-500',
  },
  {
    name: 'Dynatrace Professional',
    issuer: 'Dynatrace',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Terraform Associate',
    issuer: 'HashiCorp',
    color: 'from-purple-400 to-indigo-500',
  },
  {
    name: 'AWS Security Specialty',
    issuer: 'Amazon Web Services',
    color: 'from-green-500 to-emerald-600',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Certifications & Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-teal-400/50 transition-all duration-300 hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />

                <div className="relative flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
                    {cert.name}
                  </h3>

                  <p className="text-sm text-slate-400">{cert.issuer}</p>

                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400" />
                      <span className="text-xs text-slate-400">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Bachelor of Science</h3>
                  <p className="text-slate-400">Aeronautics & Technology</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-300">
                    Vaughn College of Aeronautics and Technology
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-300">New York, USA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-teal-400/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent rounded-2xl" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Post Graduate Diploma</h3>
                  <p className="text-slate-400">Leadership Management</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span className="text-slate-300">Post Graduate Program</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span className="text-slate-300">Winnipeg, Canada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
