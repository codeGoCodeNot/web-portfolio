import Link from "next/link";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

const projects = [
  {
    title: "Mini Dashboard",
    live: "https://minidashboard.johnsenb.dev",
    description:
      "A mini dashboard for my practice to better-auth, built with Next.js, prisma, better-auth and TypeScript.",
  },
  {
    title: "Works",
    live: "https://work.johnsenb.dev",
    description:
      "A platform for product submissions and approval workflow, using Drizzle ORM and Next.js.",
  },
  {
    title: "TicketHub",
    live: "https://tickethub.johnsenb.dev",
    description:
      "A ticket management system for handling support and tasks, built with Next.js, Prisma, Typescript, Lucia-auth and Tailwind CSS.",
  },
];

const ProjectsSection = () => (
  <section className="py-16" id="projects">
    <h2 className="text-3xl font-bold mb-6 text-center tracking-widest text-gray-300">
      Portfolio
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Card
          key={project.title}
          className="relative group p-7 flex flex-col text-gray-200 overflow-hidden hover:scale-[1.025] transition-transform bg-secondary/35"
        >
          <div className="absolute right-4 top-4 opacity-10 text-7xl font-black select-none pointer-events-none group-hover:opacity-20 transition-opacity">
            {project.title[0]}
          </div>
          <div className="flex-1 flex flex-col justify-center items-center mb-4">
            <span className="text-2xl font-bold mb-2 text-primary/95 drop-shadow-lg">
              {project.title}
            </span>
            <p className="text-sm text-muted-foreground text-center mb-2 px-2">
              {project.description}
            </p>
          </div>
          <Separator />
          <div className="flex gap-2 mt-auto justify-center">
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/80 transition-colors border border-primary"
            >
              Live Demo
            </Link>
          </div>
        </Card>
      ))}
    </div>
    <div className="w-full flex justify-center">
      <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-gray-700 to-transparent my-12" />
    </div>
  </section>
);

export default ProjectsSection;
