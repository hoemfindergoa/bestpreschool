
import Programs from '@/components/SmallProgram';
import SmallAbout from '@/components/SmallAbout';
import HeroNEW from '@/components/HeroNew';
import ProgramsSection from '@/components/ProgramsNew';
import BlogSection from '@/components/BlogComponents';
import Homecta from '@/components/HomeCta';
import Daycare from '@/components/Daycare';

export default function Page() {
  return (
    <div className="w-full bg-[#02040a] text-white  overflow-x-hidden relative">

         {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* Moving Stars (CSS Animation) */}
         <div className="absolute inset-0 opacity-40" style={{ 
           backgroundImage: 'radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0))',
           backgroundSize: '200px 200px',
           animation: 'moveStars 100s linear infinite'
          }}></div>
         
         {/* Nebula Glows */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/20 blur-[120px] rounded-full mix-blend-screen" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>
          <HeroNEW/>

      {/* <HeroNEW/> */}
        <ProgramsSection/>
        <Daycare/>
              <Programs/>
        {/* <Homecta/>   */}
      {/* <BlogSection/> */}
 
    </div>
  );
}
