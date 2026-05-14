import { ServiceCard } from "../ui/ServiceCard";

export default function Services() {
  return (
    <section className="py-20 px-6 grid md:grid-cols-3 gap-6">
      <ServiceCard title="Mentorship" desc="Learn forex step by step" />
      <ServiceCard title="Signals" desc="Daily trade signals" />
      <ServiceCard title="Community" desc="Join elite traders" />
    </section>
  );
}
