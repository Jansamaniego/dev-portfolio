import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Section } from "@/components/Section";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProjectGrid } from "@/components/ProjectGrid";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Contact } from "@/components/Contact";
import { photos } from "@/data/photos";
import { dogs } from "@/data/dogs";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />

        <Section id="about" index="01" title="About" subtitle="A bit about me and what I work with.">
          <About />
        </Section>

        <Section
          id="projects"
          index="02"
          title="Projects"
          subtitle="Products and apps I've built."
        >
          <ProjectGrid />
        </Section>

        <Section
          id="photos"
          index="03"
          title="Photos"
          subtitle="Life outside the developer — click any image to expand."
        >
          <PhotoGrid images={photos} />
        </Section>

        <Section
          id="dogs"
          index="04"
          title="Dogs"
          subtitle="The best coworkers."
        >
          <PhotoGrid images={dogs} mirror />
        </Section>

        <Section id="contact" index="05" title="Contact" subtitle="Let's connect.">
          <Contact />
        </Section>
      </main>

      <SiteFooter />
    </>
  );
}
