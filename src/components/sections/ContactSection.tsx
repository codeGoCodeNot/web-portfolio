import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Separator } from "../ui/separator";

const ContactSection = () => (
  <section id="contact" className="py-10 flex flex-col gap-y-10">
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
    </div>

    <div className="flex justify-center">
      <Card
        className="px-6 py-6 flex flex-col items-center gap-4 min-w-[260px] max-w-full border shadow-sm
        "
      >
        <CardHeader className="flex flex-col items-center gap-1 w-full p-0">
          <CardTitle className="text-base font-semibold text-primary tracking-wide mb-1">
            Johnsen Berdin
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-2 w-full p-0">
          <Link
            href="tel:09260826406"
            className="flex items-center gap-2 text-sm text-foreground hover:underline"
          >
            09260826406
          </Link>
          <Link
            href="mailto:johnsenberdin2930@gmail.com"
            className="flex items-center gap-2 text-sm text-foreground hover:underline"
          >
            johnsenberdin2930@gmail.com
          </Link>
        </CardContent>
        <Separator />
        <CardFooter className="flex gap-x-2">
          <Link
            href="https://github.com/codeGoCodeNot"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <Image
              src="/logo/github.png"
              width={25}
              height={25}
              alt="GitHub"
              className="rounded border bg-white"
            />
          </Link>
          <Link
            href="https://linkedin.com/in/johnsen-berdin-a30b4a383"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <Image
              src="/logo/linkedin.png"
              width={25}
              height={25}
              alt="LinkedIn"
              className="rounded"
            />
          </Link>
        </CardFooter>
      </Card>
    </div>
  </section>
);

export default ContactSection;
