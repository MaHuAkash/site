import { FloatingDock } from "../components/acernityui/floating-dock"; // Update with your actual path
import { Home, User, Mail, Briefcase } from "tabler-icons-react";

export const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      icon: <Home className="stroke-current" />,
      href: "/",
    },
    {
      title: "About",
      icon: <User className="stroke-current" />,
      href: "/about",
    },
    {
      title: "Contact",
      icon: <Mail className="stroke-current" />,
      href: "/contact",
    },
    {
      title: "Blog",
      icon: <Briefcase className="stroke-current" />,
      href: "https://blog.aakashlamsal.com.np",
    },
  ];

  return (
    <FloatingDock
      items={navItems}
      desktopClassName="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      mobileClassName="fixed bottom-6 right-6 z-50"
    />
  );
};