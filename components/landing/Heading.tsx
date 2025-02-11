"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Circle } from "lucide-react";
import { cn } from "../../lib/utils";

interface ComponentProps {
  type: string;
  props: any;
  design: any;
  name: string;
}

interface HeaderProps {
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  font: string;
  links: Array<{ text: string; href: string }>;
  sticky: boolean;
  name: string;
}

const Heading = ({ type, props, design, name }: ComponentProps) => {
  const getContent = (variant: string) => {
    const content = {
      "1": (
        <Header1
          backgroundColor={design.colors.background}
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          links={props.links}
          sticky={true}
          name={name}
        />
      ),
      "2": (
        <Header2
          backgroundColor={design.colors.background}
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          links={props.links}
          sticky={true}
          name={name}
        />
      ),
      "3": (
        <Header3
          backgroundColor={design.colors.background}
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          links={props.links}
          sticky={true}
          name={name}
        />
      ),
      "4": (
        <Header4
          backgroundColor={design.colors.background}
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          links={props.links}
          sticky={true}
          name={name}
        />
      ),
      default: (
        <Header1
          backgroundColor={design.colors.background}
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          links={props.links}
          sticky={true}
          name={name}
        />
      ),
    } as { [key: string]: JSX.Element };
    return content[variant] || content["default"];
  };

  return (
    <div>
      {/* <Header1
        backgroundColor={design.colors.background}
        textColor={design.colors.primary}
        font={design.fonts.heading}
        links={props.links}
        sticky={true}
        name={name}
      /> */}
      {getContent(props.variant)}
    </div>
  );
};

export default Heading;

const Header1 = ({
  backgroundColor,
  primaryColor,
  secondaryColor,
  accentColor,
  textColor,
  font,
  links,
  sticky,
  name,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const fontClass = `font-${font}`;
  const stickyClass = sticky ? "sticky top-0 z-50" : "";

  const getLinkStyle = (isHovered: boolean) => ({
    color: textColor,
    background: isHovered ? `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})` : 'transparent',
    transition: 'all 0.3s ease',
  });

  const getMenuButtonStyle = (isHovered: boolean) => ({
    color: textColor,
    background: isHovered ? `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})` : 'transparent',
  });

  return (
    <header
      className={`${stickyClass} ${fontClass} relative backdrop-blur-sm`}
      style={{ 
        backgroundColor: `${backgroundColor}ee`,
        borderBottom: `1px solid ${primaryColor}22`
      }}
    >
      {/* Decorative accent line */}
      <div 
        className="absolute top-0 left-0 w-full h-1"
        style={{ 
          background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor}, ${accentColor})`,
          opacity: 0.5 
        }}
      />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name section */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="text-xl font-bold relative group"
              style={{ color: textColor }}
            >
              {name}
              <span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: accentColor }}
              />
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="px-3 py-2 rounded-full text-sm font-medium relative group overflow-hidden"
                  style={{ color: textColor }}
                >
                  {link.text}
                  <span 
                    className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ backgroundColor: accentColor }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full transition-colors duration-300 hover:ring-2"
              style={{ 
                color: textColor,
              }}
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div 
              className="px-2 pt-2 pb-3 space-y-1 rounded-lg mt-2"
              style={{ 
                backgroundColor: `${backgroundColor}ff`,
                boxShadow: `0 4px 6px -1px ${primaryColor}22`
              }}
            >
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  style={{ color: textColor }}
                >
                  <span className="relative">
                    {link.text}
                    <span 
                      className="absolute -bottom-1 left-0 w-0 h-0.5 hover:w-full transition-all duration-300"
                      style={{ backgroundColor: accentColor }}
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const Header2 = ({
  backgroundColor,
  primaryColor,
  secondaryColor,
  accentColor,
  textColor,
  font,
  links,
  sticky,
  name,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const fontClass = `font-${font}`;

  const stickyClass = sticky ? "sticky top-0 z-50" : "";

  // <header className={`${stickyClass} ${backgroundClass} ${fontClass}`}>

  return (
    <header
      className={cn(backgroundColor, fontClass, stickyClass)}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-16">
          <div className="w-full md:w-1/4 flex justify-start py-4 md:py-0">
            <a href="/" className="text-xl font-bold">
              {name}
            </a>
          </div>
          <nav className="hidden md:flex w-full md:w-2/4 justify-center">
            <ul className="flex space-x-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="w-full md:w-1/4 flex justify-end">
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Header3 = ({
  backgroundColor,
  primaryColor,
  secondaryColor,
  accentColor,
  textColor,
  font,
  links,
  sticky,
  name,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const fontClass = `font-${font}`;
  const stickyClass = sticky ? "sticky top-0 z-50" : "";

  return (
    <header
      className={`${fontClass} ${stickyClass} relative backdrop-blur-md`}
      style={{ 
        backgroundColor: `${backgroundColor}99`,
        color: textColor,
      }}
    >
      {/* Glass effect border */}
      <div 
        className="absolute inset-0 border-b"
        style={{ borderColor: `${primaryColor}15` }}
      />

      {/* Floating dots decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 rounded-full"
            style={{
              background: `radial-gradient(circle, ${i === 0 ? primaryColor : i === 1 ? secondaryColor : accentColor}11, transparent 70%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
              animation: `float${i} 10s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className="text-xl font-bold relative overflow-hidden group flex items-center"
            >
              <span 
                className="relative z-10 inline-flex items-center gap-2"
                style={{ color: textColor }}
              >
                {name}
                <ChevronRight 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  style={{ color: accentColor }}
                />
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <ul className="flex items-center gap-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="px-4 py-2 rounded-full relative group transition-all duration-300 hover:scale-105"
                    style={{ 
                      color: textColor,
                      background: `linear-gradient(to right, ${primaryColor}11, ${secondaryColor}11)`
                    }}
                  >
                    <span className="relative z-10">
                      {link.text}
                    </span>
                    <div 
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ 
                        background: `linear-gradient(45deg, ${primaryColor}22, ${secondaryColor}22)`,
                      }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full transition-transform duration-200 hover:scale-105 relative"
              style={{ 
                background: `linear-gradient(45deg, ${primaryColor}11, ${secondaryColor}11)`,
              }}
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? (
                <X className="h-5 w-5" style={{ color: textColor }} />
              ) : (
                <Menu className="h-5 w-5" style={{ color: textColor }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full">
            <div 
              className="mx-4 my-2 rounded-2xl backdrop-blur-lg p-2"
              style={{ 
                backgroundColor: `${backgroundColor}dd`,
                border: `1px solid ${primaryColor}22`,
                boxShadow: `0 4px 6px -1px ${primaryColor}11`
              }}
            >
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-200 hover:scale-102"
                  style={{ 
                    color: textColor,
                  }}
                >
                  <span>{link.text}</span>
                  <ChevronRight 
                    className="w-4 h-4 opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    style={{ color: accentColor }}
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float0 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }
        @keyframes float1 {
          0%, 100% { transform: translate(-50%, -50%) scale(1.1); }
          50% { transform: translate(-50%, -50%) scale(0.9); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(-50%, -50%) scale(0.9); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }
      `}</style>
    </header>
  );
};

const Header4 = ({
  backgroundColor,
  primaryColor,
  secondaryColor,
  accentColor,
  textColor,
  font,
  links,
  sticky,
  name,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const fontClass = `font-${font}`;
  const stickyClass = sticky ? "sticky top-0 z-50" : "";

  return (
    <header
      className={`${fontClass} ${stickyClass} relative`}
      style={{ 
        backgroundColor,
        color: textColor,
      }}
    >
      {/* Top accent line with gradient dots */}
      <div className="absolute top-0 left-0 right-0 h-0.5 flex justify-between overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 rounded-full transform -translate-y-1/2"
            style={{
              backgroundColor: i % 2 === 0 ? primaryColor : secondaryColor,
              opacity: 0.1 + (i % 3) * 0.1,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo Section with animated dot */}
          <div className="flex items-center space-x-2">
            <a 
              href="/" 
              className="text-xl font-bold relative group"
              style={{ color: textColor }}
            >
              <span className="relative">
                {name}
                <span 
                  className="absolute -right-3 -top-1 w-1.5 h-1.5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"
                  style={{ backgroundColor: accentColor }}
                />
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {links.map((link, index) => (
                <li 
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative"
                >
                  <a
                    href={link.href}
                    className="text-sm relative py-2 transition-colors duration-300"
                    style={{ color: textColor }}
                  >
                    {link.text}
                    {hoveredIndex === index && (
                      <div 
                        className="absolute -bottom-1 left-0 w-full h-0.5 animate-slide-in"
                        style={{ backgroundColor: accentColor }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button with ring animation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-full overflow-hidden group"
              style={{ color: textColor }}
            >
              <span className="sr-only">Toggle menu</span>
              <div 
                className="absolute inset-0 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"
                style={{ backgroundColor: `${primaryColor}11` }}
              />
              {isOpen ? (
                <X className="h-5 w-5 relative z-10" />
              ) : (
                <Menu className="h-5 w-5 relative z-10" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with fade and slide animation */}
        {isOpen && (
          <div className="md:hidden">
            <div 
              className="absolute left-0 right-0 top-full animate-fade-in"
              style={{ 
                backgroundColor: `${backgroundColor}f8`,
              }}
            >
              <div className="container mx-auto px-4 py-2">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block py-3 relative group"
                    style={{ color: textColor }}
                  >
                    <div className="flex items-center">
                      <Circle 
                        className="w-1.5 h-1.5 mr-3 transform group-hover:scale-150 transition-transform"
                        style={{ color: accentColor }}
                        fill={accentColor}
                      />
                      <span>{link.text}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease forwards;
        }
      `}</style>
    </header>
  );
};
