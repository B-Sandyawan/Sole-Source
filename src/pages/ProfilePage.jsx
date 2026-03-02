/**
 * ProfilePage.jsx — Team profiles page for Sole Source.
 *
 * Figma design (id: 1:47):
 * - 4 team member cards in a grid
 * - Each card has a background image and portrait photo
 * - Names: Athallah Izzan Bianta, Muhammad Iqbal Maulana,
 *          Benedictus Sandyawan Winarko, Joanda Dyrta
 *
 * Route: /profile
 */

import { Link } from "react-router-dom";
import sidebarArrow from "../assets/images/sidebar arrow.svg";

// Profile images
import profile1 from "../assets/images/profile1.svg";
import profile1bg from "../assets/images/profile1background.svg";
import profile2 from "../assets/images/profile2.svg";
import profile2bg from "../assets/images/profile2background.svg";
import profile3 from "../assets/images/profile3.svg";
import profile3bg from "../assets/images/profile3background.svg";
import profile4 from "../assets/images/profile4.svg";
import profile4bg from "../assets/images/profile4background.svg";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Athallah Izzan Bianta",
    role: "Web Design Creative",
    photo: profile1,
    background: profile1bg,
  },
  {
    id: 2,
    name: "Bendictus Sandyawan Winarko",
    role: "Web Programer",
    photo: profile2,
    background: profile2bg,
  },
  {
    id: 3,
    name: "Joanda Dyrta",
    role: "Web Designer",
    photo: profile3,
    background: profile3bg,
  },
  {
    id: 4,
    name: "Muhammad Iqbal Maulana",
    role: "Web Ilusrtration",
    photo: profile4,
    background: profile4bg,
  },
];

const ProfilePage = () => {
  return (
    <div className="max-w-[1920px] mx-auto px-10 sm:px-14 md:px-16 lg:px-20 py-8 sm:py-12">
      {/* Back navigation */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-black mb-8 no-underline group transition-colors"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </Link>

      {/* Page heading */}
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 dark:text-white">
        Our Team
      </h1>

      {/* Team member grid: 2 columns on desktop, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative overflow-hidden rounded-xl group"
          >
            {/* Background image */}
            <div className="aspect-[4/3] relative">
              <img
                src={member.background}
                alt=""
                className="w-full h-full object-cover"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Portrait photo — centered circle overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>

              {/* Name and role — bottom of card */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                <h3 className="text-base sm:text-lg md:text-xl font-bold">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
