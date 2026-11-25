import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { personalInfo } from '../../../data/personalInfo';
import { Container } from '../../common/Container';
import { SectionHeader } from '../../common/SectionHeader';
import { Card } from '../../common/Card';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-neutral-200 dark:border-white/5 relative">
      <Container>
        <SectionHeader
          badge="Contact"
          badgeIcon="mdi:email-outline"
          title="Let's Build Something Together"
          subtitle="Have an inquiry, project proposal, or just want to connect? Send me a message."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Direct contact info cards */}
          <div className="lg:col-span-5 space-y-4">
            <Card hoverEffect={false} className="space-y-6">
              <h3 className="text-xl font-heading font-semibold text-neutral-950 dark:text-white">Contact Information</h3>
              <p className="text-sm font-body font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Feel free to reach out directly via email or connect with me on social platforms.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/5 hover:border-neutral-300 dark:hover:border-indigo-500/30 hover:bg-neutral-100 dark:hover:bg-white/10 transition-all text-sm font-body font-medium text-neutral-800 dark:text-gray-300 hover:text-neutral-950 dark:hover:text-white shadow-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Icon icon="mdi:email-outline" className="w-5 h-5" />
                  </div>
                  <span className="truncate">{personalInfo.email}</span>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/5 text-sm font-body font-medium text-neutral-800 dark:text-gray-300 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Icon icon="mdi:map-marker-outline" className="w-5 h-5" />
                  </div>
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Social icons */}
              <div className="pt-4 border-t border-neutral-200 dark:border-white/10">
                <p className="text-xs font-heading font-semibold text-neutral-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Connect on Socials
                </p>
                <div className="flex items-center gap-2.5">
                  {personalInfo.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 dark:text-gray-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors shadow-sm"
                      aria-label={social.name}
                    >
                      <Icon icon={social.icon} className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Card hoverEffect={false}>
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Icon icon="mdi:check-circle-outline" className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-neutral-950 dark:text-white">Email Client Opened!</h4>
                  <p className="text-sm font-body font-normal text-neutral-600 dark:text-gray-400 max-w-sm mx-auto">
                    Thank you for reaching out. If your mail client didn't launch automatically, please email me directly at {personalInfo.email}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-full border border-neutral-300 dark:border-white/20 text-neutral-800 dark:text-white text-xs font-body font-medium hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-body font-medium text-neutral-700 dark:text-gray-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-950 dark:text-white placeholder-neutral-400 dark:placeholder-gray-500 text-sm font-body font-normal focus:outline-none focus:border-neutral-900 dark:focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-body font-medium text-neutral-700 dark:text-gray-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-950 dark:text-white placeholder-neutral-400 dark:placeholder-gray-500 text-sm font-body font-normal focus:outline-none focus:border-neutral-900 dark:focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-body font-medium text-neutral-700 dark:text-gray-300 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-950 dark:text-white placeholder-neutral-400 dark:placeholder-gray-500 text-sm font-body font-normal focus:outline-none focus:border-neutral-900 dark:focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-950 text-white hover:bg-black dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 font-body font-semibold text-sm shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Icon icon="mdi:send-outline" className="w-4 h-4" />
                  </button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
