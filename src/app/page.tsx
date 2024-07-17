import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Text from "@/components/text";
import Experience from "@/components/experience";
import Skillsgroup from "@/components/skillsgroup";
import Projects  from "@/components/projects_new";
import Contact from "@/components/contact";
import Icons from "@/components/icons";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main>
     <Navbar></Navbar>
    <HeroSection></HeroSection>
   <Experience></Experience>
   <Projects></Projects>
   <Text></Text>
   <Skillsgroup></Skillsgroup>
   <Contact></Contact>
   <Icons></Icons>
   <Footer></Footer>
    </main>
  );
}
