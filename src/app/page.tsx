import Hero from "@/components/site/Hero";
import { SectionImpactStats } from "@/components/site/SectionImpactStats";
import { SectionAbout } from "@/components/site/SectionAbout";
import { SectionPrograms } from "@/components/site/SectionPrograms";
import { SectionExpertHelp } from "@/components/site/SectionExpertHelp";
import { SectionDonate } from "@/components/site/SectionDonate";
import { SectionVolunteer } from "@/components/site/SectionVolunteer";
import { SectionStories } from "@/components/site/SectionStories";
import { SectionGallery } from "@/components/site/SectionGallery";
import { SectionTestimonials } from "@/components/site/SectionTestimonials";
import { SectionBlog } from "@/components/site/SectionBlog";
import { SectionPartners } from "@/components/site/SectionPartners";
import { SectionContact } from "@/components/site/SectionContact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <SectionImpactStats />
      <SectionAbout />
      <SectionPrograms />
      <SectionExpertHelp />
      <SectionDonate />
      <SectionVolunteer />
      <SectionStories />
      <SectionGallery />
      <SectionTestimonials />
      <SectionBlog />
      <SectionPartners />
      <SectionContact />
    </main>
  );
}
