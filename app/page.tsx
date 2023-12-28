import { About } from "@/components/about";
import { Intro } from "@/components/intro";
import { Projects } from "@/components/projects";
import { SectionDevider } from "@/components/sectionDevider";

export default function Home() {
  return (
    <main className=" flex flex-col items-center px-4">
      <Intro />
      <SectionDevider />
      <About />
      <Projects />
    </main>
  );
}
