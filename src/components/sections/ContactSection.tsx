import Link from "next/link";
import Image from "next/image";

const ContactSection = () => (
  <section className="py-10 flex flex-col gap-y-10" id="contact">
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
    </div>

    <div className="flex justify-center">
      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 border border-gray-700 rounded-2xl shadow-xl px-10 py-8 flex flex-col items-center gap-4 min-w-[320px] max-w-full">
        <span className="text-lg font-semibold text-white tracking-wide">
          09260826406
        </span>
        <span className="text-lg font-semibold text-white tracking-wide">
          johnsenberdin2930@gmail.com
        </span>
        <div className="flex gap-6 mt-2">
          <Link
            href="https://github.com/codeGoCodeNot"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <Image
              src="/logo/github.png"
              width={32}
              height={32}
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
              width={32}
              height={32}
              alt="LinkedIn"
              className="rounded"
            />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
