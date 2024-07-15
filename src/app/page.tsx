import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Text from "@/components/text";
import Experience from "@/components/experience";
import Skillsgroup from "@/components/skillsgroup";
import Projects  from "@/components/projects_new";
export default function Home() {
  return (
    <main>
     <Navbar></Navbar>
    <HeroSection></HeroSection>
   
   
   <Experience></Experience>
   <Projects></Projects>
   <Text></Text>
   <Skillsgroup></Skillsgroup>
    </main>
  );
}
