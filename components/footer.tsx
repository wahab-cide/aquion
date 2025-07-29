import Link from "next/link";
import React from "react";
import { AquionLogo } from "./aquion-logo";
import {
  IconBrandDiscord,
  IconBrandLinkedin,
  IconBrandMastodon,
  IconBrandTwitter,
} from "@tabler/icons-react";

export function Footer() {
  const documentation = [
    { title: "Construction Manual", href: "#" },
    { title: "Technical Specs", href: "#" },
    { title: "CAD Files", href: "#" },
    { title: "Bill of Materials", href: "#" },
    { title: "Assembly Guide", href: "#" },
  ];

  const resources = [
    { title: "Field Reports", href: "#" },
    { title: "Research Papers", href: "#" },
    { title: "Open Source License", href: "#" },
    { title: "Community Forum", href: "#" },
  ];

  const project = [
    { title: "About Aquion", href: "#" },
    { title: "Team", href: "#" },
    { title: "Partners", href: "#" },
    { title: "Contact", href: "#" },
  ];

  const legal = [
    { title: "Creative Commons License", href: "#" },
    { title: "Apache 2.0 License", href: "#" },
    { title: "Attribution Guidelines", href: "#" },
  ];

  const socials = [
    { title: "Twitter", href: "#", icon: IconBrandTwitter },
    { title: "Discord", href: "#", icon: IconBrandDiscord },
    { title: "LinkedIn", href: "#", icon: IconBrandLinkedin },
    { title: "Mastodon", href: "#", icon: IconBrandMastodon },
  ];

  return (
    <div className="relative border-t border-gray-200 px-8 py-20 bg-gradient-to-b from-blue-50 to-white w-full overflow-hidden mx-auto max-w-7xl">
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 -mb-px flex h-8 items-end overflow-hidden">
        <div className="flex -mb-px h-[2px] w-56">
          <div className="w-full flex-none [background-image:linear-gradient(90deg,rgba(0,102,204,0)_0%,#0066CC_32.29%,rgba(0,102,204,0.3)_67.19%,rgba(0,102,204,0)_100%)] blur-xs" />
        </div>
      </div>

      <div className="max-w-7xl my-28 mx-auto text-sm text-gray-600 flex flex-col justify-between md:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-10 md:mb-0">
            <AquionLogo />
            <p className="mt-4 max-w-xs text-gray-600">
              Harvesting clean water from air through open-source innovation for rural communities.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((social, idx) => (
                <SocialIcon key={`social-${idx}`} href={social.href}>
                  <social.icon strokeWidth={1.5} width={15} height={15} />
                </SocialIcon>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-20">
            <div className="flex flex-col space-y-4">
              <p className="text-gray-900 font-semibold">Documentation</p>
              <ul className="space-y-3">
                {documentation.map((item, idx) => (
                  <li key={`doc-${idx}`}>
                    <Link
                      href={item.href}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <p className="text-gray-900 font-semibold">Resources</p>
              <ul className="space-y-3">
                {resources.map((item, idx) => (
                  <li key={`resource-${idx}`}>
                    <Link
                      href={item.href}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <p className="text-gray-900 font-semibold">Project</p>
              <ul className="space-y-3">
                {project.map((item, idx) => (
                  <li key={`project-${idx}`}>
                    <Link
                      href={item.href}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <p className="text-gray-900 font-semibold">Licensing</p>
              <ul className="space-y-3">
                {legal.map((item, idx) => (
                  <li key={`legal-${idx}`}>
                    <Link
                      href={item.href}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Aquion Project. Released under Creative Commons BY-SA 4.0 License.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Bringing clean water within reach — one square metre and one byte at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
}

export function SocialIcon({ href, children }: SocialIconProps) {
  return (
    <Link
      href={href}
      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-all border border-gray-200 shadow-sm hover:shadow-md relative"
    >
      <div className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors flex justify-center items-center">
        {children}
      </div>
    </Link>
  );
}
