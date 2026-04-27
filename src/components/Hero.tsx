import { useState, useEffect } from "react";

const typingSegments = [
  { isBreak: false, text: "Take Control of Your ", className: "" },
  { isBreak: false, text: "Money", className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400" },
  { isBreak: false, text: " ", className: "" },
  { isBreak: true, text: "", className: "hidden md:block" },
  { isBreak: false, text: "Without Complicated ", className: "" },
  { isBreak: false, text: "Budgets", className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400" },
];

export function Hero() {
  const [charCount, setCharCount] = useState(0);
  
  const totalChars = typingSegments.reduce((acc, seg) => acc + seg.text.length + (seg.isBreak ? 1 : 0), 0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setCharCount(prev => (prev < totalChars ? prev + 1 : prev));
      if (i >= totalChars) clearInterval(interval);
    }, 100); // Adjust typing speed here
    
    return () => clearInterval(interval);
  }, [totalChars]);

  let renderedChars = 0;

  return (
    <>
      {/* Animated Badge */}
      {/* <div className="glass-pill px-4 py-2 flex items-center gap-3 mb-10 cursor-pointer hover:bg-white/10 transition-colors duration-300 transform hover:-translate-y-1">
        <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#A855F7] animate-Savewise"></div>
        <span className="text-purple-300 text-sm font-medium pr-1">Savewise Platform v2.0 is live</span>
      </div> */}
      
      {/* Hero Title Container */}
      <h1 className="relative text-4xl sm:text-7xl md:text-[4contactsavewiseai@gmail.comrem] font-bold text-white tracking-[-0.03em] max-w-[1000px] leading-[1.05] mb-8 drop-shadow-2xl">
        
        {/* Invisible text reserves width & height for layout stability */}
        <span className="invisible pointer-events-none select-none">
          Take Control of Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">Money</span> <br className="hidden md:block"/> Without Complicated <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Budgets</span>
        </span>

        {/* Typing Overlay */}
        <span className="absolute inset-0">
          {typingSegments.map((seg, i) => {
            if (renderedChars >= charCount) return null;

            if (seg.isBreak) {
              renderedChars++;
              return <br key={i} className={seg.className} />;
            }

            const segLength = seg.text.length;
            const startChars = renderedChars;
            const endChars = renderedChars + segLength;
            renderedChars += segLength;

            if (charCount < startChars) return null;

            const visibleText = charCount >= endChars 
              ? seg.text 
              : seg.text.substring(0, charCount - startChars);

            return (
              <span key={i} className={seg.className}>
                {visibleText}
              </span>
            );
          })}
          

        </span>
      </h1>
      
      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-14 leading-relaxed font-normal">
        SaveWise helps you build smarter spending habits, track your money effortlessly, and grow your savings — one decision at a time.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        {/* <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105">
          Get started for free
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button> */}
        <button 
          onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full sm:w-auto glass-pill px-8 py-4 rounded-full text-lg font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex justify-center hover:scale-105"
        >
         See How It Works
        </button>
      </div>
    </>
  );
}
