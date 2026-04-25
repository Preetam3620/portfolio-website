"use client";

import { useState, useEffect } from "react";

export default function MyTime() {
  const [time, setTime] = useState("");
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/Los_Angeles",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
      setDateStr(
        now.toLocaleDateString("en-US", {
          timeZone: "America/Los_Angeles",
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-16 relative">
      {/* Full-bleed background */}
      <div
        className="absolute inset-0 py-16"
        style={{ left: "-100vw", right: "-100vw", backgroundColor: "#171717" }}
      />

      {/* Content */}
      <div className="relative flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0 py-16 max-w-6xl mx-auto px-4 md:px-8">
        <div className="w-full md:w-36 flex-shrink-0">
          <h2 className="text-base font-medium text-white">My time</h2>
        </div>
        <div className="flex-1">
          <div className="text-4xl md:text-6xl font-light" style={{ color: "#9B9B9B" }}>
            {time}
          </div>
          <div className="mt-3 space-y-1 text-sm" style={{ color: "#9B9B9B" }}>
            <div>{dateStr}</div>
            <div>San Jose, CA — Pacific Time</div>
          </div>

          {/* Footer integrated into this section */}
          <div
            className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm"
            style={{ color: "#9B9B9B" }}
          >
            <p>© 2025 Preetam Maske. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Preetam3620"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:preetam.a.maske@gmail.com"
                className="hover:text-white transition-colors"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
