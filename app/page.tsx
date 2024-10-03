import { Process } from "@/components/Process";
import { Clients } from "@/components/Clients";
import { Experience } from "@/components/Experience";
import { Grid } from "@/components/Grid";
import { Hero } from "@/components/Hero";
import { RecentProjects } from "@/components/RecentProjects";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

// const navItems = [
//   {
//     name: "Home",
//     link: "/",
//     icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
//   },
//   {
//     name: "About",
//     link: "/about",
//     icon: <FaUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
//   },
// ];

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidde mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNavbar navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Process />
      </div>
    </main>
  );
}
