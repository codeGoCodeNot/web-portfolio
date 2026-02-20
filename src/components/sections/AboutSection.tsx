import Link from "next/link";
import { Button } from "../ui/button";

const AboutSection = () => (
  <section className="py-16" id="about-me">
    <h2 className="text-4xl font-bold mb-6 text-center font-satoshi">
      About Me
    </h2>
    <div className="max-w-2xl mx-auto text-center text-lg text-gray-200">
      <p className="mb-4">
        Hi, I'm{" "}
        <span className="font-bold font-satoshi text-2xl">Johnsen Berdin</span>{" "}
        — a curious and passionate web developer, always learning, building, and
        experimenting with new tech. My work focuses on Next.js, TypeScript, and
        modern web practices, as seen in my open-source projects. I am also a
        licensed Customs broker in the Philippines, combining technical
        expertise with real-world business experience.
      </p>
      <p>
        Driven, hardworking, and open to collaboration, I enjoy tackling complex
        challenges and delivering scalable solutions. Explore my projects,
        connect with me, or check out my resume below.
      </p>
      <Button
        className="mt-6 bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
        asChild
      >
        <Link
          href="/resume/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </Link>
      </Button>
    </div>
    <div className="w-full flex justify-center">
      <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-gray-700 to-transparent my-12" />
    </div>
  </section>
);

export default AboutSection;
