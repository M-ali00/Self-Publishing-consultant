import { Hero } from "@/components/home/Hero";
import { ServiceBento } from "@/components/home/ServiceBento";
import { AZServices } from "@/components/home/AZServices";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServiceBento />
      <AZServices />
      <Testimonials />
    </div>
  );
}
