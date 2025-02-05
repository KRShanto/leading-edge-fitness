import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NsC5v0mtIsfDWUjzlJerAZKlQ04NPz.png"
              alt="LGP Logo"
              className="h-8 w-auto"
              width={32}
              height={32}
            />
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Transforming athletes through specialized fitness programs since
            2010.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Programs</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Golf Fitness
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Hockey Fitness
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Performance Training
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <span className="text-sm text-muted-foreground">
                info@lgpfitness.com
              </span>
            </li>
            <li>
              <span className="text-sm text-muted-foreground">
                (555) 123-4567
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8">
        <p className="text-center text-sm text-muted-foreground">
          © 2024 LGP Fitness. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
