import { AnimatedSeparator } from "../ui/animated-separator";
const HeroSection = () => (
  <section className="py-16 text-center">
    <h1 className="text-4xl font-bold mb-4">
      Building reliable solutions with Next.js
    </h1>
    <p className="mb-6 text-lg">
      Focused on clean, efficient, and scalable code to bring your ideas to
      life.
    </p>
    <div className="w-full flex justify-center">
      <AnimatedSeparator className="w-2/3 my-12" />
    </div>
  </section>
);

export default HeroSection;
