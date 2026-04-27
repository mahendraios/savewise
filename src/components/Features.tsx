import { motion } from "framer-motion";
import { BarChart, Lock, Settings, Layout, Globe, Zap as FastZap } from "lucide-react";

export function Features() {
  return (
    <div id="features" className="w-full max-w-[1200px] mt-40 mb-32 z-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Everything You Need to Manage Money Smarter</h2>
        {/* <p className="text-xl text-gray-400 max-w-2xl mx-auto">Powerful analytics built for modern data teams.</p> */}
      </div>
      
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {[
          { title: "Smart Expense Tracking", description: "Track your daily spending with a clean, intuitive interface.Understand exactly where your money goes — without complexity", icon: <BarChart className="w-6 h-6 text-purple-400" /> },
          { title: "Monthly Insights & Comparisons", description: "Compare your spending month-over-month and discover trends that help you improve faster.", icon: <Lock className="w-6 h-6 text-teal-400" /> },
          { title: "Habit-Based Saving", description: "Save money by improving your everyday choices — not by forcing unrealistic budgets.  ", icon: <FastZap className="w-6 h-6 text-yellow-400" /> },
          { title: "Goal Tracking", description: "Set financial goals and track your progress visually to stay motivated and consistent.", icon: <Layout className="w-6 h-6 text-indigo-400" /> },
          { title: "Privacy First", description: "No bank connections. No tracking. No unnecessary data collection.Your data stays with you — always.", icon: <Globe className="w-6 h-6 text-blue-400" /> },
          { title: "Advanced Settings", description: "Configure every aspect of your data pipeline and delivery.", icon: <Settings className="w-6 h-6 text-pink-400" /> }
        ].map((feature, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            key={i} 
            className="sticky md:static top-[calc(100px+(var(--offset)*16px))] z-[var(--offset)] bg-[#0C0C0E] md:bg-white/[0.03] border border-white/10 md:border-white/10 border-t-white/20 md:border-t-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-colors cursor-pointer group hover:border-white/20 shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.8)] md:shadow-none"
            style={{ '--offset': i } as React.CSSProperties}
          >
            <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-left">{feature.title}</h3>
            <p className="text-gray-400 text-left leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
