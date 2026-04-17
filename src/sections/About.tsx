import mypic from "../assets/mypic.jpg";

const About = () => {
  return (
    // 1. เพิ่ม Responsive (flex-col บนมือถือ, flex-row บนจอใหญ่) 
    // 2. ใช้ bg-app-bg เพื่อความต่อเนื่องของธีม
    <section id="about" className="min-h-screen bg-app-bg flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-20">
      
      {/* Container สำหรับรูปภาพ */}
      <div className="relative group">
        {/* ตกแต่งด้วยเงาหรือขอบเพื่อให้รูปดูมีมิติ */}
        <div className="absolute -inset-1 bg-primary-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <img 
          src={mypic} 
          alt="Bounpheang's portrait" 
          className="relative h-[390px] w-[350px] object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {/* Container สำหรับข้อความ */}
      <div className="max-w-2xl text-center md:text-left">
        <h2 className="text-primary-500 text-5xl font-bold mb-6">
          About Me
        </h2>
        
        <div className=" text-lg leading-relaxed space-y-4">
          <p>
            I am a developer who believes that software should be as beautiful
            as it is functional. With a background in <span >UI/UX</span> and a passion for 
            frontend engineering, I bridge the gap between imagination and reality.
          </p>
          
          <p>
            Based in the digital ether, I spend my days exploring the latest in 
            <span className="text-primary-400"> React ecosystems</span>, performance optimization, and architectural 
            patterns. My goal is to build products that are fast, accessible, 
            and a joy to use.
          </p>
            //language ability section
          <div className="space-y-4">
            <p className="text-primary-500 text-lg font-bold">
              Language ability
            </p>
          
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm text-text-secondary mb-2">
                  <span>Lao</span>
                  <span>90%</span>
                </div>
                <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary-500 to-cyan-300 w-[90%] transition-all duration-700" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm text-text-secondary mb-2">
                  <span>Thai</span>
                  <span>80%</span>
                </div>
                <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary-500 to-cyan-300 w-[80%] transition-all duration-700" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm text-text-secondary mb-2">
                  <span>English</span>
                  <span>Upper intermediate</span>
                </div>
                <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary-500 to-cyan-300 w-[75%] transition-all duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* เพิ่มลูกเล่นเล็กๆ เช่น Skill Tags */}
        {/* <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
          {['React', 'TypeScript', 'Tailwind', 'Next.js'].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-app-surface border border-app-border text-primary-400 text-sm rounded-full">
              {skill}
            </span>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default About;