"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

const footerLinks = {
  programs: [
    { name: "Golf Fitness", href: "/golf-fitness" },
    { name: "Hockey Fitness", href: "/hockey-fitness" },
    { name: "Other Programs", href: "/other-programs" },
  ],
  company: [
    { name: "About Marie", href: "/marie-hall" },
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "FAQs", href: "/faqs" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/" className="inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/611c5d9c-0376-41d0-a9a5-66351a110a52-DtCFb4c2Pj7PdMVB3cMmUAfpkGrd8C.png"
                alt="LGP Logo"
                className="h-12 w-auto"
                width={48}
                height={48}
              />
            </Link>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@lgpfitness.com"
                  className="hover:text-gray-800"
                >
                  info@lgpfitness.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Fitness Street, City, ST 12345</span>
              </div>
            </div>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-600">
              Subscribe to our newsletter for tips and updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-800 placeholder:text-gray-400 flex-1"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white hover:bg-primary-light transition-colors rounded-md"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <span>© 2024 LGP Fitness. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
