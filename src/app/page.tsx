import Image from "next/image";
import DefaultLayout from "../components/DefaultLayout";
import Landing from "../components/Landing";
import AboutMe from "../components/About/AboutMe";
import TechStack from "../components/TechStack";
import AboutHighlight from "../components/About/AboutHighlight";

export default function Home() {
  return (
    <main className="bg-secondary-light dark:bg-primary-dark transition duration-300">
      <DefaultLayout>
        <Landing />
        <AboutMe />
        <AboutHighlight />
        <TechStack />
      </DefaultLayout>
    </main>
  );
}
