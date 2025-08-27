import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import RecentWorks from "@/components/RecentWorks";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
     <NavBar/>
     <Header/>
     <AboutMe/>
     <RecentWorks/>
     <ContactMe/>
     <Footer/>
    </div>
  );
}
