"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
     days: number;
     hours: number;
     minutes: number;
     seconds: number;
}

export default function Countdown() {
     const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
     const [mounted, setMounted] = useState(false);

     useEffect(() => {
          setMounted(true);
          const targetDate = new Date("2026-03-17T20:00:00+01:00").getTime();

          const calculateTimeLeft = () => {
               const now = new Date().getTime();
               const difference = targetDate - now;

               if (difference <= 0) {
                    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
               }

               return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
               };
          };

          setTimeLeft(calculateTimeLeft());
          const timer = setInterval(() => {
               setTimeLeft(calculateTimeLeft());
          }, 1000);

          return () => clearInterval(timer);
     }, []);

     if (!mounted) return null;

     const blocks = [
          { value: timeLeft.days, label: "Jours" },
          { value: timeLeft.hours, label: "Heures" },
          { value: timeLeft.minutes, label: "Minutes" },
          { value: timeLeft.seconds, label: "Secondes" },
     ];

     return (
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-10">
               <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-lg text-blue-200 mb-6 font-medium">L&apos;événement commence dans :</p>
                    <div className="flex justify-center gap-4 sm:gap-8">
                         {blocks.map((block) => (
                              <div key={block.label} className="flex flex-col items-center">
                                   <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-2">
                                        <span className="text-2xl sm:text-3xl font-bold tabular-nums">
                                             {String(block.value).padStart(2, "0")}
                                        </span>
                                   </div>
                                   <span className="text-xs sm:text-sm text-blue-200">{block.label}</span>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
}
