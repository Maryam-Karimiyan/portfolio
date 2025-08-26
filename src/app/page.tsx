import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import RecentWorks from "@/components/RecentWorks";
export default function Home() {
  return (
    <div>
     <NavBar/>
     <Header/>
     <AboutMe/>
     <RecentWorks/>
    </div>
  );
}
