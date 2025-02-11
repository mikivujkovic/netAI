"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

interface ComponentProps {
  type: string;
  props: any;
  design: any;
  name: string;
}

interface HeaderProps {
  backgroundColor: string;
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
      <div className={`container mx-auto px-4`}>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold">
              {name}
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
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

const Header2 = ({
  backgroundColor,
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
