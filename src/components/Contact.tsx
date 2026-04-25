"use client";

import { motion } from "framer-motion";

const contactItems = [
  {
    label: "E-Mail",
    value: "preetam.a.maske@gmail.com",
    href: "mailto:preetam.a.maske@gmail.com",
    external: false,
  },
  {
    label: "Phone",
    value: "(669) 340-6332",
    href: "tel:+16693406332",
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/Preetam3620",
    href: "https://github.com/Preetam3620",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/preetam-maske",
    href: "https://www.linkedin.com/in/preetam-maske/",
    external: true,
  },
  {
    label: "Resume",
    value: "Download",
    href: "/Preetam_Maske.pdf",
    external: true,
  },
];

export default function Contact() {
  return (
    <div className="mt-16 flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
      <div className="w-full md:w-36 flex-shrink-0">
        <h2 className="text-base font-medium text-white">Contact</h2>
      </div>
      <motion.div
        className="flex-1 w-full"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {contactItems.map((item) => (
          <div key={item.label} className="flex items-center py-2">
            <div className="text-base font-medium text-white mr-2">{item.label}:</div>
            <div className="text-base font-normal" style={{ color: "#A0A0A0" }}>
              {item.href ? (
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="hover:text-white transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
