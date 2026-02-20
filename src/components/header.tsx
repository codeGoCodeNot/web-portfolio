import Link from "next/link";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about-me" },
];

const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-20 bg-black/90 backdrop-blur supports-backdrop-blur:bg-black/80 w-full flex justify-between items-center animate-slide-from-top border-b py-3 px-5">
      <div className="flex items-center gap-6">
        <Button variant="ghost" asChild>
          <Link href="/">Home</Link>
        </Button>
        {navLinks.map((link) => (
          <Button key={link.label} variant="ghost" asChild>
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
      </div>
      <div>
        <Button variant="outline" asChild>
          <Link href="/#contact">Contact me</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
