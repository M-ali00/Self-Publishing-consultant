import { Hero } from "@/components/home/Hero";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServiceBento } from "@/components/home/ServiceBento";
import { ContactUs } from "@/components/home/ContactUs";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactForm } from "@/components/home/ContactForm";
import { FAQs } from "@/components/home/FAQs";
import { Portfolio } from "@/components/home/Portfolio";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServiceBento />
      <ContactUs />
      <Portfolio />
      <WhyChooseUs />
      {/* <AZServices /> */}
      <Testimonials />
      <ContactForm />
      <FAQs />
    </div>
  );
}
