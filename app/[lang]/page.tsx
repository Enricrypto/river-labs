import { getDictionary } from "@/lib/translations";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import SectorIdeasSection from "@/components/SectorIdeasSection";
// import ClientAccessCards from "@/components/ClientAccessCards";
import ApproachSection from "@/components/ApproachSection";
import MethodologySection from "@/components/MethodologySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }, { lang: "pt" }];
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const typedLang = lang as "en" | "es" | "pt";
  return (
    <>
      <Nav dict={dict.nav} lang={typedLang} />
      <main>
        <Hero dict={dict.hero} lang={typedLang} />
        <SocialProofBar dict={dict.proof} />
        <ProblemSection dict={dict.problems} />
        <ServicesSection dict={dict.services} />
        <SectorIdeasSection dict={dict.sectorIdeas} />
        {/* <ClientAccessCards dict={dict.clientCards} /> */}
        <ApproachSection dict={dict.methodology} />
        <MethodologySection dict={dict.methodology} />
        <FAQSection dict={dict.faq} />
        <CTASection dict={dict.cta} lang={typedLang} />
      </main>
      <Footer dict={dict.footer} lang={typedLang} />
    </>
  );
}
