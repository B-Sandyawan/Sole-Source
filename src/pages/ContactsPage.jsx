/**
 * ContactsPage.jsx — "Contact Us" page for Sole Source.
 *
 * Professional layout with contact cards, icons, and social links.
 * Route: /contacts
 */

import { Link } from "react-router-dom";

const ContactsPage = () => {
  const contacts = [
    {
      name: "General Inquiries",
      email: "info@solesource.com",
      description: "Questions about our products, pricing, or availability.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      name: "Customer Support",
      email: "support@solesource.com",
      description: "Help with orders, returns, or technical issues.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      ),
    },
    {
      name: "Business & Partnerships",
      email: "business@solesource.com",
      description: "Collaboration, wholesale, and partnership opportunities.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
        </svg>
      ),
    },
  ];

  const socials = [
    {
      name: "Instagram",
      handle: "@solesource",
      url: "https://instagram.com/solesource",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      handle: "+62 812 3456 7890",
      url: "https://wa.me/6281234567890",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      handle: "@solesource",
      url: "https://x.com/solesource",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="max-w-[1920px] mx-auto px-10 sm:px-14 md:px-16 lg:px-20 py-8 sm:py-12">
      {/* Back navigation */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-black dark:text-gray-500 dark:hover:text-white mb-8 no-underline group transition-colors"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </Link>

      {/* Page heading */}
      <div className="mb-10 sm:mb-14">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white mb-4">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg text-[#707072] dark:text-gray-400 max-w-xl leading-relaxed">
          Have a question, feedback, or partnership idea? We'd love to hear from you. Reach out through any of the channels below.
        </p>
      </div>

      {/* Contact cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-14 sm:mb-20">
        {contacts.map((contact) => (
          <a
            key={contact.email}
            href={`mailto:${contact.email}`}
            className="group block p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-lg transition-all duration-300 no-underline"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[#333] dark:text-gray-300 mb-5 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
              {contact.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-2">
              {contact.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#999] dark:text-gray-500 mb-4 leading-relaxed">
              {contact.description}
            </p>

            {/* Email with arrow */}
            <div className="flex items-center gap-2 text-[#555] dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
              <span className="text-sm sm:text-base font-medium">{contact.email}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <polyline points="9 6 15 12 9 18"></polyline>
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* Social & additional section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
        {/* Social media */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
            Follow Us
          </h2>
          <div className="space-y-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-[#1a1a1a] hover:bg-gray-50 dark:hover:bg-[#222] transition-all no-underline"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[#555] dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {social.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-black dark:text-white">{social.name}</p>
                  <p className="text-xs text-[#999] dark:text-gray-500">{social.handle}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white transition-colors">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Response info card */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
            Response Time
          </h2>
          <div className="p-6 sm:p-8 rounded-2xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800">
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-black dark:text-white">General Inquiries</p>
                  <p className="text-xs text-[#999] dark:text-gray-500">Within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-black dark:text-white">Customer Support</p>
                  <p className="text-xs text-[#999] dark:text-gray-500">Within 12 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-black dark:text-white">Business & Partnerships</p>
                  <p className="text-xs text-[#999] dark:text-gray-500">Within 48 hours</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-[#707072] dark:text-gray-400 leading-relaxed">
                We value every message and strive to provide thoughtful, timely responses. For urgent matters, please reach out via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
