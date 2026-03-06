"use client";

export default function SocialShare() {
     const eventUrl = "https://live.strakon.fr";
     const eventTitle = "Soirée STRAKON Demo — Mardi 17 Mars 2026 à 20h00";
     const eventDescription = "Venez découvrir STRAKON en live et en action — une soirée démo ouverte à tous, en ligne et 100% gratuite.";

     const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventUrl)}`;
     const emailUrl = `mailto:?subject=${encodeURIComponent(eventTitle)}&body=${encodeURIComponent(`${eventDescription}\n\nInscrivez-vous ici : ${eventUrl}`)}`;

     return (
          <div className="bg-gray-50 py-12">
               <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-lg font-semibold text-gray-900 mb-6">Partagez l&apos;événement avec vos collègues</p>
                    <div className="flex justify-center gap-4">
                         <a
                              href={linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white font-semibold rounded-lg hover:bg-[#005E93] transition-colors shadow-md"
                         >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                              LinkedIn
                         </a>
                         <a
                              href={emailUrl}
                              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-md"
                         >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                              </svg>
                              Email
                         </a>
                    </div>
               </div>
          </div>
     );
}
