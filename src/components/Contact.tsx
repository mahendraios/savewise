import { Mail, MessageSquare, MapPin } from "lucide-react";

export function Contact() {
  return (
    <div id="contact" className="w-full max-w-[1000px] mx-auto mt-10 mb-32 z-20 relative text-left">
      <div className="absolute inset-0 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in touch</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Have a question or want to see a live demo? We'd love to hear from you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
         
         {/* Contact Info */}
         <div className="flex flex-col justify-center space-y-8">
           <div className="flex items-center gap-5">
             <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
               <Mail className="w-6 h-6 text-purple-400" />
             </div>
             <div>
               <h4 className="text-white font-medium text-lg">Email us</h4>
               <p className="text-gray-400">contactsavewiseai@gmail.com</p>
             </div>
           </div>

           <div className="flex items-center gap-5">
             <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
               <MessageSquare className="w-6 h-6 text-teal-400" />
             </div>
             <div>
               <h4 className="text-white font-medium text-lg">Chat with us</h4>
               <p className="text-gray-400">Will Get back to you soon...</p>
             </div>
           </div>

           <div className="flex items-center gap-5">
             <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
               <MapPin className="w-6 h-6 text-indigo-400" />
             </div>
             <div>
               <h4 className="text-white font-medium text-lg">Visit us</h4>
               <p className="text-gray-400">Hyderabad</p>
             </div>
           </div>
         </div>

         {/* Contact Form */}
         <form className="flex flex-col gap-5">
           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-300">Your Name</label>
             <input type="text" placeholder="Enter your name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all" />
           </div>
           
           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-300">Email Address</label>
             <input type="email" placeholder="Enter your email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all" />
           </div>

           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-300">Message</label>
             <textarea rows={4} placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none"></textarea>
           </div>

           <button onClick={()=>alert("We noticed your request, we will get back to you soon.")} type="button" className="w-full bg-white text-black py-4 rounded-xl font-medium text-lg hover:bg-gray-200 transition-colors mt-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
             Send Message
           </button>
         </form>
      </div>
    </div>
  );
}
