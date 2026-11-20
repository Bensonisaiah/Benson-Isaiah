import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { personalInfo } from '../../../data/personalInfo';
import { Container } from '../../common/Container';
import { SectionHeader } from '../../common/SectionHeader';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission / mailto fallback
    window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-white/5 relative">
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
              <h3 className="text-xl font-heading font-semibold text-white">Contact Information</h3>
              <p className="text-sm font-body font-normal text-gray-400 leading-relaxed">
                Feel free to reach out directly via email or connect with me on social platforms.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 hover:bg-white/10 transition-all text-sm font-body font-medium text-gray-300 hover:text-white"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                    <Icon icon="mdi:email-outline" className="w-5 h-5" />
                  </div>
                  <span className="truncate">{personalInfo.email}</span>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 text-sm font-body font-medium text-gray-300">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                    <Icon icon="mdi:map-marker-outline" className="w-5 h-5" />
                  </div>
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Social icons */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Connect on Socials
                </p>
                <div className="flex items-center gap-2.5">
                  {personalInfo.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
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
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <Icon icon="mdi:check-circle-outline" className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-white">Email Client Opened!</h4>
                  <p className="text-sm font-body font-normal text-gray-400 max-w-sm mx-auto">
                    Thank you for reaching out. If your mail client didn't launch automatically, please email me directly at {personalInfo.email}.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-body font-medium text-gray-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm font-body font-normal focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-body font-medium text-gray-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm font-body font-normal focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-body font-medium text-gray-300 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm font-body font-normal focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    icon="mdi:send-outline"
                    iconPosition="right"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
