import { About } from "@/components/about";
import { Banner } from "@/components/banner";
import { Belt } from "@/components/belt";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Project } from "@/components/project";
import { SectionBlog } from "@/components/section_blog";
import { Service } from "@/components/service";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Banner />
      <Belt />
      <Service />
      <Project />
      <About />
      {/* <SectionBlog /> */}
      <Contact />
      <Footer />
    </>
  );
}
