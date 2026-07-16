import type { SiteContent } from '@/content/types'

export default function Footer({
  contact,
  footer,
}: Pick<SiteContent, 'contact' | 'footer'>) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-hlc-blue-800 pt-20 pb-8 text-white relative overflow-hidden">
      {/* Background Graphic (Subtle large shape on the right) */}
      <div className="absolute right-[-10%] top-1/4 opacity-[0.05] pointer-events-none w-[600px] h-[600px]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M10,90 L30,10 L50,90 L70,10 L90,90" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="page-wrap relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-24">
          
          {/* Column 1: Logo & Identity */}
          <div className="w-full lg:w-1/4 space-y-10">
            <div>
              <h2 className="text-[1.35rem] font-bold tracking-widest mb-1 uppercase">HLC Energies</h2>
              <p className="text-[0.65rem] text-white/80 uppercase tracking-widest">Excellence in Renewable Solutions</p>
            </div>
            
            <div className="space-y-3">
              <p className="text-[0.75rem] text-white/90">A subsidiary of:</p>
              <div className="flex items-center gap-3">
                <span className="font-bold text-xl tracking-wider">CC1</span>
                <span className="text-[0.65rem] opacity-90 border-l border-white/40 pl-3 leading-tight uppercase">Construction<br/>Corporation No.1</span>
              </div>
            </div>

            <div className="bg-white text-gray-900 rounded-sm w-max overflow-hidden shadow-sm">
              <div className="bg-[#e3000f] text-white font-bold px-3 py-2.5 text-[0.7rem] leading-tight tracking-wide">
                Great<br/>Place<br/>To<br/>Work.
              </div>
              <div className="px-3 py-1.5 text-center text-[0.6rem] font-bold tracking-wider uppercase text-blue-900">
                Certified
              </div>
            </div>

            <button className="text-[0.85rem] text-white hover:text-white/80 transition-colors pt-2">
              Manage Cookie Preferences
            </button>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-8 lg:w-1/6">
            <h3 className="text-[0.9rem] font-medium text-white/90">Company</h3>
            <ul className="space-y-4">
              {['About', 'Success Stories', 'News & Events', 'Career', 'The Experience', 'Partners', 'Customers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[0.8rem] text-white hover:text-white/70 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries & Services */}
          <div className="space-y-8 lg:w-1/4">
            <h3 className="text-[0.9rem] font-medium text-white/90">Industries & Services</h3>
            <ul className="space-y-4">
              {['Electrical Supplies', 'Control & Automation Supplies', 'HVAC, Fire Fighting & Mechanical supplies', 'Airport lighting and Aviation Services', 'Electrical services'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[0.8rem] text-white hover:text-white/70 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="space-y-8">
            <h3 className="text-[0.9rem] font-medium text-white/90">Social</h3>
            <div className="flex gap-2">
              <a href="#" className="w-[1.65rem] h-[1.65rem] bg-white rounded-sm flex items-center justify-center text-hlc-blue-800 hover:bg-white/90 transition-colors">
                <span className="font-bold text-[0.7rem]">in</span>
              </a>
              <a href="#" className="w-[1.65rem] h-[1.65rem] bg-white rounded-sm flex items-center justify-center text-hlc-blue-800 hover:bg-white/90 transition-colors">
                <span className="font-bold text-[0.65rem] mt-0.5">yt</span>
              </a>
            </div>
          </div>

          {/* Column 5: Contact us */}
          <div className="space-y-8">
            <h3 className="text-[0.9rem] font-medium text-white/90">Contact us</h3>
            <a href="#contactos" className="inline-flex items-center gap-2 border border-white/60 rounded-md px-4 py-1.5 text-[0.75rem] font-medium text-white hover:bg-white hover:text-hlc-blue-800 transition-colors">
              <span className="w-1 h-1 rounded-full bg-current"></span> Contact us
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[0.75rem] text-white/90">
          <p>{footer.copyright}</p>
          <div className="flex items-center gap-12 lg:pr-32">
            <a href="#" className="hover:text-white transition-colors font-medium">DSR</a>
            <a href="#" className="hover:text-white transition-colors font-medium">Privacy policy</a>
          </div>
          <button onClick={scrollToTop} className="hover:text-white transition-colors flex items-center gap-1.5 font-medium">
            Back to top <span className="text-[0.85rem]">↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
