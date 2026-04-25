import Image from "next/image";

export default function Hero() {
  return (
    <div className="absolute top-[-10vh] md:top-[-13vh] left-1/2 transform -translate-x-1/2 z-20 w-full max-w-6xl px-4">
      <div className="flex flex-col md:flex-row items-center md:justify-center space-y-6 md:space-y-0 md:space-x-10">

        {/* Profile picture */}
        <Image
          src="/preetam.png"
          alt="Profile picture of Preetam Maske"
          width={144}
          height={144}
          className="h-28 w-28 md:h-36 md:w-36 rounded-full object-cover object-center flex-shrink-0"
          priority
          style={{ objectPosition: "center 20%", objectFit: "cover" }}
        />

        {/* Profile info */}
        <div className="text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center">
            <h1 className="text-2xl md:text-3xl font-medium text-white">Preetam Maske</h1>
            <span
              className="mt-2 md:mt-0 md:ml-4 text-sm font-medium text-gray-400 px-3 py-1.5 rounded-lg"
              style={{ backgroundColor: "#171717", border: "1px solid #262626" }}
            >
              He/Him
            </span>
          </div>

          {/* Icon + label meta row */}
          <div
            className="mt-4 flex flex-nowrap justify-center md:justify-start items-center gap-6 text-sm font-medium"
            style={{ color: "#9B9B9B" }}
          >
            {/* Role */}
            <div className="flex items-center shrink-0">
              <svg className="w-5 h-5 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
              </svg>
              <span>Software Engineer</span>
            </div>

            {/* Location */}
            <div className="flex items-center shrink-0">
              <svg className="w-5 h-5 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span>San Francisco Bay Area</span>
            </div>

            {/* Email */}
            <a href="mailto:preetam.a.maske@gmail.com" className="flex items-center shrink-0 hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-2 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <span>E-Mail</span>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/preetam-maske/" target="_blank" rel="noopener noreferrer" className="flex items-center shrink-0 hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a href="https://github.com/Preetam3620" target="_blank" rel="noopener noreferrer" className="flex items-center shrink-0 hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>

            {/* Resume */}
            <a href="/Preetam_Maske.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center shrink-0 hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Resume</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
