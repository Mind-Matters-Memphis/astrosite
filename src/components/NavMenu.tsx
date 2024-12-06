import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";


interface NavMenu {
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

const Link = ({ href, ...props }: Link) => {
  // const location = useLocation();
  // const isActive = location?.pathname === href;

  return (
    // <NavigationMenu.Link asChild active={isActive}>
    <NavigationMenu.Link asChild>
      <a href={href} className={linkStyle} {...props} />
    </NavigationMenu.Link>
  );
};
// currently lacking animation for dropdown
// [data-motion] attribute missing from NavigationMenu.Content..?

const linkStyle = "block p-8 text-sand transition-all duration-300 ease-in-out hover:text-midnight hover:bg-sand hover:shadow-md lg:hover:text-sand lg:hover:bg-midnight lg:relative lg:p-4 lg:before:absolute lg:before:bottom-[15%] lg:before:left-[50%] lg:before:h-[2px] lg:before:w-0 lg:before:origin-center lg:before:rounded-sm lg:before:bg-sand lg:before:transition-all lg:before:duration-300 lg:before:ease-in-out lg:before:content-[''] lg:hover:before:left-[0%] lg:hover:before:w-[100%] lg:active:left-[1px] lg:active:top-[2px] lg:active:shadow-none xl:mx-4";

const NavMenu: React.FC<NavMenu> = () => (
  <NavigationMenu.Root className="hidden relative z-50 lg:flex w-full bg-midnight text-sand text-2xl shadow-sm group font-accessdisplay *:w-full">
    <NavigationMenu.List className="flex w-full items-center">
      <NavigationMenu.Item className="py-4 lg:py-8">
        <a href="/" className="p-4 lg:p-8 sm:text-4xl">
          Mind Matters Memphis
        </a>
      </NavigationMenu.Item>

      <div id="spacer" className="grow"></div>

      <NavigationMenu.Item>
        <a href="/meet-dr-gould">
          About
        </a>
      </NavigationMenu.Item>

      <NavigationMenu.Item className="relative">
        <NavigationMenu.Trigger className={linkStyle + " group flex items-center gap-3 peer"}>
          <span>Clinical</span>
          {/* <ChevronDown className="transition-transform duration-[250ms] ease-in group-data-[state=open]:-rotate-180" /> */}
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className="absolute bg-midnight rounded-b-md -left-[50%] peer-data-[open=true]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft">
          <ul className="flex flex-col justify-center p-4">
            <ListItem href="/clinical-neuropsychology" title="Clinical Neuropsychology" className="" />
            <ListItem href="/cognitive-aging" title="Cognitive Aging" className="" />
            <ListItem href="/forms" title="Forms" className="flex" />
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <a href="/forensic-evaluations">
          Forensic Evaluations
        </a>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <a href="/contact" >
          Contact
        </a>
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
          className={"flex justify-center " + className}
          {...props}
          ref={forwardedRef}
        >
          <div className={linkStyle + " self-center text-nowrap"}>
            {title}
          </div>
          <p className="">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  ),
);


export default NavMenu;