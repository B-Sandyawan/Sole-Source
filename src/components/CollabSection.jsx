/**
 * CollabSection.jsx — "COLLAB NEWS!!" section on the homepage.
 *
 * Props:
 * @param {Array} collabs - Array of collab objects from collabNews in products.js.
 */

import CollabCard from "./CollabCard";
import useScrollReveal from "../hooks/useScrollReveal";

const CollabSection = ({ collabs }) => {
  const sectionRef = useScrollReveal();

  return (
    <section id="news" className="bg-white dark:bg-[#111] transition-colors duration-300">
      <div
        ref={sectionRef}
        className="section-reveal w-full max-w-[1920px] mx-auto px-10 sm:px-10 md:px-12 lg:px-16 xl:px-20"
        style={{ paddingTop: "64px", paddingBottom: "64px" }}
      >
        {/* Section heading */}
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-extrabold tracking-tight leading-tight mb-8 sm:mb-10 md:mb-12 dark:text-white">
          COLLAB NEWS !!
        </h2>

        {/* Grid: 3 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {collabs.map((collab) => (
            <div key={collab.id} className="card-reveal">
              <CollabCard collab={collab} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollabSection;
