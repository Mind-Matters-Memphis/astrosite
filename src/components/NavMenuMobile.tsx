import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import arrow from "../assets/imgs/icons/arrow-right.svg";
import chevron from "../assets/imgs/icons/chevron-down.svg";

const urlBase = "";

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

const NavLink = ({ href, className, ...props }: Link) => {
  // const location = useLocation();
  // const isActive = location?.pathname === href;

  return (
    // <NavigationMenu.Link asChild active={isActive}>
    <NavigationMenu.Link asChild>
      <a
        href={urlBase + href}
        className={className + " " + linkStyle}
        {...props}
      />
    </NavigationMenu.Link>
  );
};

const linkStyle =
  "block text-sand transition-all duration-300 ease-in-out hover:text-midnight hover:bg-sand hover:shadow-md";

const NavMenuMobile: React.FC<NavMenuMobile> = () => (
  <NavigationMenu.Root className="peer relative z-50 flex w-full group bg-midnight text-sand text-2xl shadow-sm group font-accessdisplay lg:hidden *:w-full">
    <NavigationMenu.List className="flex items-center relative">
      <NavigationMenu.Item className="">
        <a
          href="/"
          className="p-4 px-2 sm:px-6 lg:p-8 sm:text-4xl block text-sand transition-all duration-300 ease-in-out hover:text-midnight hover:bg-sand hover:shadow-md"
        >
          Mind Matters Memphis
        </a>
      </NavigationMenu.Item>

      <div id="spacer" className="grow"></div>

      <NavigationMenu.Item>
        <NavigationMenu.Trigger className="flex gap-4 items-center p-4 px-2 sm:px-6 group">
          Menu
          <img
            src={chevron.src}
            alt=""
            className="h-8 w-8 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
          />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content
          className="absolute bg-midnight top-16 md:top-[72px] left-0 w-full min-h-screen"
          data-orientation="vertical"
        >
          <NavigationMenu.Sub data-orientation="vertical" defaultValue="about">
            <NavigationMenu.List>
              <NavigationMenu.Item value="about">
                <NavLink href="/meet-dr-gould" className="p-8">
                  About
                </NavLink>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavLink href="/clinical-neuropsychology" className="p-8">
                  Clinical Neuropsychology
                </NavLink>
                <div className="pl-12 flex gap-4 items-center">
                  <img src={arrow.src} alt="Arrow" className="h-8 w-8 mb-2" />
                  <NavLink href="/forms" className="grow p-6">
                    Forms
                  </NavLink>
                </div>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavLink href="/forensic-evaluations" className="p-8">
                  Forensic
                </NavLink>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavLink href="/cognitive-aging" className="p-8">
                  Cognitive Aging
                </NavLink>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavLink href="/contact" className="p-8">
                  Contact
                </NavLink>
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
        <a href={href} className={"" + className} {...props} ref={forwardedRef}>
          <div className={linkStyle + " "}>{title}</div>
          <p className="">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  ),
);

export default NavMenuMobile;
