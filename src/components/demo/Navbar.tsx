import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Event Details", href: "#event-details" },
    { name: "Location", href: "#location" },
    { name: "Comments", href: "#comments" },
    { name: "Donate", href: "#donate" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full bg-background pt-4 pb-0 md:pb-4 ${
        isScrolled
          ? "fixed top-0 left-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : ""
      } transition-all duration-200 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4 pb-0 md:pb-5 sm:px-6 lg:px-8  ">
        <div className="flex flex-col items-center justify-between h-16">
          <div className="hidden sm:hidden md:flex items-center mb-5">
            <a href="#" className="text-2xl font-bold">
              I&R
            </a>
          </div>
          <div className="hidden md:block pb-10 ">
            <div className="ml-10 flex items-baseline space-x-10 ">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden px-2 w-full">
            <div className="flex justify-between">
              <a href="#" className="text-2xl font-bold">
                L&R
              </a>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden ">
          <div className="px-2 pt-1 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
