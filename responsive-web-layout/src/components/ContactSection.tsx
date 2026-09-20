import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Mail, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    layoutCategory: 'Grid Layout',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 border-b border-stone-200 bg-white"
    >
      <div className="custom-responsive-container">
        <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-xl relative overflow-hidden">
          {/* Subtle responsive background grid decoration */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading and Context */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-stone-800 px-3 py-1 rounded-md border border-stone-700 mb-4">
                Responsive Form Alignment
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
                Have layout ideas or questions?
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
                This responsive form showcases adaptive input stacking: on mobile viewports, fields wrap into a single accessible vertical column; on desktop, they align into balanced rows.
              </p>

              <div className="space-y-3 w-full text-xs sm:text-sm text-stone-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fluid input widths with 44px min touch target</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Accessible label-to-input association</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WCAG compliant contrast and focus rings</span>
                </div>
              </div>
            </div>

            {/* Right Column: Responsive Interactive Form */}
            <div className="lg:col-span-7 bg-stone-850/90 rounded-2xl p-6 sm:p-8 border border-stone-750 backdrop-blur-xs">
              {submitted ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Layout Feedback Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 max-w-sm mb-6">
                    Thank you, {formData.name}. Your feedback on responsive layout design and spacing has been noted.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', layoutCategory: 'Grid Layout', message: '' });
                    }}
                    className="px-4 py-2 bg-stone-700 hover:bg-stone-600 text-white rounded-lg text-xs font-semibold font-mono transition-colors"
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Name and Email (Stacked on mobile, 2 columns on tablet/desktop) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="form-name"
                        className="block text-xs font-mono font-medium text-stone-300 mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-800 text-white border border-stone-700 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 placeholder:text-stone-500 min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="form-email"
                        className="block text-xs font-mono font-medium text-stone-300 mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-800 text-white border border-stone-700 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 placeholder:text-stone-500 min-h-[44px]"
                      />
                    </div>
                  </div>

                  {/* Row 2: Layout Technique Interest */}
                  <div>
                    <label
                      htmlFor="form-category"
                      className="block text-xs font-mono font-medium text-stone-300 mb-1.5"
                    >
                      Focus Area
                    </label>
                    <select
                      id="form-category"
                      value={formData.layoutCategory}
                      onChange={(e) => setFormData({ ...formData, layoutCategory: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-800 text-white border border-stone-700 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 min-h-[44px]"
                    >
                      <option value="CSS Media Queries">CSS Media Queries &amp; Breakpoints</option>
                      <option value="Responsive Navigation">Responsive Navigation &amp; Drawers</option>
                      <option value="CSS Grid Re-flow">CSS Grid Auto-Fit &amp; MinMax</option>
                      <option value="Spacing Math">8pt Rhythm &amp; Padding Math</option>
                    </select>
                  </div>

                  {/* Row 3: Message Textarea */}
                  <div>
                    <label
                      htmlFor="form-message"
                      className="block text-xs font-mono font-medium text-stone-300 mb-1.5"
                    >
                      Notes or Message
                    </label>
                    <textarea
                      id="form-message"
                      rows={3}
                      placeholder="Share your thoughts on responsive design techniques..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-800 text-white border border-stone-700 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 placeholder:text-stone-500"
                    />
                  </div>

                  {/* Submit Button (Full width on mobile, auto width aligned right on desktop) */}
                  <div className="pt-2 flex flex-col sm:flex-row justify-end">
                    <button
                      id="submit-feedback-btn"
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold rounded-lg text-sm transition-colors flex items-center justify-center gap-2 shadow-sm min-h-[44px]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Layout Feedback</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
