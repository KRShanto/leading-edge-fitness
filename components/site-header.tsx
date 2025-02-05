import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/611c5d9c-0376-41d0-a9a5-66351a110a52-DtCFb4c2Pj7PdMVB3cMmUAfpkGrd8C.png"
            alt="LGP Logo"
            className="h-8 w-auto"
            width={32}
            height={32}
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Golf Fitness
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Hockey Fitness
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Programs
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="ml-4 flex items-center space-x-4">
          <Button variant="default">Book Now</Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
