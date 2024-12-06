import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
// import { Link as a, useLocation } from "react-router-dom";
// import { ChevronDown, CornerDownRight } from "lucide-react";

interface NavMenuMobile {
  className?: string;
}
interface ListItem {
  className?: string;
  children?: React.ReactNode;
  title: string;
  href: string;
}
interface Link {
  href: string;
  children?: string;
  className?: string;
}

const Link = ({ href, className, ...props }: Link) => {
  // const location = useLocation();
  // const isActive = location?.pathname === href;

  return (
    // <NavigationMenu.Link asChild active={isActive}>
    <NavigationMenu.Link asChild >
      <a href={href} className={className + " " + linkStyle} {...props} />
    </NavigationMenu.Link>
  );
};

const linkStyle = "block text-sand transition-all duration-300 ease-in-out hover:text-midnight hover:bg-sand hover:shadow-md";

const NavMenuMobile: React.FC<NavMenuMobile> = () => (
  <NavigationMenu.Root className="peer relative z-50 flex w-full group bg-midnight text-sand text-2xl shadow-sm group font-accessdisplay lg:hidden *:w-full">
    <NavigationMenu.List className="flex items-center relative">
      <NavigationMenu.Item className="">
        <a href="/" className="p-4 px-2 sm:px-6 lg:p-8 sm:text-4xl">
          Mind Matters Memphis
        </a>
      </NavigationMenu.Item>

      <div id="spacer" className="grow"></div>

      <NavigationMenu.Item>
        <NavigationMenu.Trigger className="flex gap-4 items-center p-4 px-2 sm:px-6 group">
          Menu
          {/* <ChevronDown className="transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" /> */}
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className="absolute bg-midnight top-16 md:top-[72px] left-0 w-full min-h-screen" data-orientation="vertical" >
          <NavigationMenu.Sub data-orientation="vertical" defaultValue="about">
            <NavigationMenu.List>
              <NavigationMenu.Item value="about">
                <a href="/meet-dr-gould" className="p-8">
                  About
                </a>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <a href="/clinical-neuropsychology" className="p-8">
                  Clinical Neuropsychology
                </a>
                <div className="pl-12 flex gap-4 items-center">
                  {/* <CornerDownRight /> */}
                  <a href="/forms" className="grow p-6">
                    Forms
                  </a>
                </div>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <a href="/forensic-evaluations" className="p-8">
                  Forensic Evaluations
                </a>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <a href="/cognitive-aging" className="p-8">
                  Cognitive Aging
                </a>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <a href="/contact" className="p-8">
                  Contact
                </a>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Sub>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  </NavigationMenu.Root>
);


const ListItem = React.forwardRef<HTMLAnchorElement, ListItem>(
  ({ className, children, title, href, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          href={href}
          className={"" + className}
          {...props}
          ref={forwardedRef}
        >
          <div className={linkStyle + " "}>
            {title}
          </div>
          <p className="">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  ),
);


export default NavMenuMobile;