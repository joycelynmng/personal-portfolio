import Head from "next/head";
import Header from "../components/indexComponents/Header"
import Intro from "../components/indexComponents/Intro"
import Projects from "../components/indexComponents/Projects"
import Skills from "../components/indexComponents/Skills"
import About from "../components/indexComponents/About"
import Resume from "../components/indexComponents/Resume"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Personal Portfolio</title>
        <meta name="description" content="joycelyn ng portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Intro/>
      <About />
      <Resume />
      <Skills />
      <Projects/>
    </div>
  )
}
