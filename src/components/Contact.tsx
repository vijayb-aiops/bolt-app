import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    try {
      const configuredEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
      const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'bvijaycloud@gmail.com';
      const endpoint =
        configuredEndpoint ||
        `https://formsubmit.co/ajax/${encodeURIComponent(contactEmail)}`;

      if (!endpoint) {
        throw new Error('Contact form endpoint is not configured.');
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New message from your portfolio site',
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || result.message || 'Failed to send message');
      }

      setStatus('success');
      setStatusMessage(result.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setStatusMessage(
        error instanceof Error ? error.message : 'Failed to send message'
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Let's Connect
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Ready to collaborate on cloud automation and DevOps solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Whether you're looking to enhance your cloud infrastructure, optimize CI/CD
              pipelines, or implement security automation, I'm here to help bring your DevOps
              vision to life.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:bvijaycloud@gmail.com"
                className="group flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Email</div>
                  <div className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                    bvijaycloud@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+12263366047"
                className="group flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-teal-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Phone</div>
                  <div className="text-white font-semibold group-hover:text-teal-400 transition-colors duration-300">
                    +1 (226) 336-6047
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/b-vijaya/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">LinkedIn</div>
                  <div className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                    linkedin.com/in/b-vijaya
                  </div>
                </div>
              </a>

              <div className="group flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Location</div>
                  <div className="text-white font-semibold">Toronto, Canada</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/vijayab"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:border-teal-400/50 hover:scale-110 transition-all duration-300"
              >
                <Github className="w-6 h-6 text-slate-400 group-hover:text-teal-400 transition-colors duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/b-vijaya/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:border-blue-400/50 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors duration-300"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors duration-300"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="w-full px-4 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group relative w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-lg font-semibold text-white">
                  {status === 'loading' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {status === 'success' && (
                <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-green-400">{statusMessage}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-400">{statusMessage}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
