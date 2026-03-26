/**
 * ContactsPage.jsx — "Contact Us" page for Sole Source.
 *
 * Split layout: Contact info sidebar (left) + contact form (right).
 * Route: /contacts
 */

import { useState } from "react";
import { Link } from "react-router-dom";

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mail: "",
    phone: "",
    role: "Seller",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const roleOptions = ["Seller", "Customer"];

  return (
    <div className="max-w-[1920px] mx-auto px-6 sm:px-14 md:px-16 lg:px-20 py-8 sm:py-12 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center">
      {/* Back navigation */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-black dark:text-gray-500 dark:hover:text-white mb-8 no-underline group transition-colors"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:-translate-x-1 transition-transform"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </Link>

      {/* Page heading */}
      <div className="text-center mb-8 sm:mb-10">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold dark:text-white mb-3">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base text-[#707072] dark:text-gray-400">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* Contact form card */}
      <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#141414]">
        <div className="flex flex-col lg:flex-row">
          {/* ─── Left sidebar: Contact Information ─── */}
          <div className="relative lg:w-[380px] shrink-0 bg-black dark:bg-[#111] text-white p-10 sm:p-12 flex flex-col justify-between overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-[#e53e3e]/30 blur-sm pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-[#e53e3e]/60 pointer-events-none" />
            <div className="absolute bottom-16 left-20 w-20 h-20 rounded-full bg-[#e53e3e]/40 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="font-display text-2xl sm:text-[1.65rem] font-bold mb-2">
                Contact Information
              </h2>
              <p className="text-sm text-gray-300 mb-12 leading-relaxed">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>

              {/* Phone */}
              <div className="flex items-center gap-4 mb-7">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a
                  href="https://wa.me/6283148494413"
                  className="text-sm text-gray-200 hover:text-white no-underline transition-colors"
                >
                  +62 831 4849 4413
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 mb-7">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href="mailto:info@solesource.com"
                  className="text-sm text-gray-200 hover:text-white no-underline transition-colors"
                >
                  info@solesource.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4 mb-12">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm text-gray-200">
                  Indonesia
                </span>
              </div>
            </div>

            {/* Social icons */}
            <div className="relative z-10 flex items-center gap-3 mt-auto">
              <a
                href="https://www.instagram.com/solesource67"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors no-underline"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://x.com/SoleSource6277"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors no-underline"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://wa.me/6283148494413"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#e53e3e] hover:bg-[#c53030] flex items-center justify-center text-white transition-colors no-underline"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ─── Right side: Form ─── */}
          <div className="flex-1 p-10 sm:p-14 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Row 1: First name / Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-semibold text-[#707072] dark:text-gray-400 mb-2 uppercase tracking-wider">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white pb-2 text-sm text-black dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#707072] dark:text-gray-400 mb-2 uppercase tracking-wider">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white pb-2 text-sm text-black dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Mail / Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-semibold text-[#707072] dark:text-gray-400 mb-2 uppercase tracking-wider">
                    Mail
                  </label>
                  <input
                    type="email"
                    name="mail"
                    value={formData.mail}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white pb-2 text-sm text-black dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#707072] dark:text-gray-400 mb-2 uppercase tracking-wider">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+62 xxx xxxx xxxx"
                    className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white pb-2 text-sm text-black dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Who are you radio */}
              <div>
                <label className="block text-xs font-semibold text-[#707072] dark:text-gray-400 mb-4 uppercase tracking-wider">
                  Who are you?
                </label>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  {roleOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                          formData.role === option
                            ? "border-black dark:border-white"
                            : "border-gray-300 dark:border-gray-600 group-hover:border-gray-500 dark:group-hover:border-gray-400"
                        }`}
                      >
                        {formData.role === option && (
                          <span className="w-2 h-2 rounded-full bg-black dark:bg-white" />
                        )}
                      </span>
                      <input
                        type="radio"
                        name="role"
                        value={option}
                        checked={formData.role === option}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className="text-sm text-[#555] dark:text-gray-300">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-[#707072] dark:text-gray-400 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={4}
                  required
                  className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white pb-2 text-sm text-black dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-md bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-[#333] dark:hover:bg-gray-200 active:scale-[0.97] transition-all duration-200 cursor-pointer"
                >
                  {submitted ? (
                    <span className="flex items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Sent!
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
