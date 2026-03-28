import { getDictionary } from "@/lib/translations";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import MethodologySection from "@/components/MethodologySection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyUsSection from "@/components/WhyUsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ClientAccessCards from "@/components/ClientAccessCards";
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
        <SolutionSection dict={dict.solutions} lang={typedLang} />
        <MethodologySection dict={dict.methodology} />
        <ComparisonSection dict={dict.comparison} />
        <TestimonialsSection dict={dict.testimonials} />
        <WhyUsSection dict={dict.whyus} lang={typedLang} />
        <ClientAccessCards />
        <FAQSection dict={dict.faq} />
        <CTASection dict={dict.cta} lang={typedLang} />
      </main>
      <Footer dict={dict.footer} lang={typedLang} />
    </>
  );
}
