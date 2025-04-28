
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/use-theme";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between py-4">
        <a href="#home" className="text-xl md:text-2xl font-bold font-display">
          <span className="gradient-text">Isaac Zachary</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors rounded-md"
            >
              {item.name}
            </a>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="mr-2"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          <Button 
            variant="ghost"
            size="icon" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg">
            <nav className="flex flex-col py-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-6 py-3 hover:bg-muted transition-colors"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
