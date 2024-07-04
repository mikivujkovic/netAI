"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils";

interface ComponentProps {
  type: string;
  props: any;
  design: any;
  name: string;
}

interface FooterProps {
  backgroundColor: string;
  textColor: string;
  font: string;
  name: string;
  headline: string;
  description: string;
}

const Footer = ({ type, props, design, name }: ComponentProps) => {

  const getContent = (variant: string) => {
    const content = {
      "1": (
        <Footer1
          backgroundColor={design.colors.background}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          name={name}
          headline={props.headline}
          description={props.description}
        />
      ),
      "2": (
        <Footer2
          backgroundColor={design.colors.background}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          name={name}
          headline={props.headline}
          description={props.description}
        />
      ),
      default: (
        <Footer1
          backgroundColor={design.colors.background}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          name={name}
          headline={props.headline}
          description={props.description}
        />
      ),
    } as { [key: string]: JSX.Element };
    return content[variant] || content["default"];
  };

  return <div>{getContent(props.variant)}</div>;
};

export default Footer;

const Footer1 = ({
  backgroundColor,
  textColor,
  font,
  name,
  headline,
  description,
}: FooterProps) => {
  const fontClass = `font-${font}`;

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 pb-16"
      id="footer"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <div className="border-t border-slate-900/5 py-10">
        <div className="w-full text-center text-3xl text-gray-900 font-bold">{name}</div>
        <p className="mt-5 text-center text-sm leading-6 text-slate-500">
          © {currentYear} {name} All rights reserved.
        </p>
        {/* <div className="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <a href="/privacy-policy">Privacy policy</a>
          <div className="h-4 w-px bg-slate-500/20"></div>
          <a href="/changelog">Changelog</a>
        </div> */}
      </div>
    </footer>
  );
};

const Footer2 = ({
  backgroundColor,
  textColor,
  font,
  name,
  headline,
  description,
}: FooterProps) => {
  const fontClass = `font-${font}`;

  const currentYear = new Date().getFullYear();
  return (
    <footer 
      className={`${fontClass} relative overflow-hidden py-16 sm:py-24`} 
      style={{ backgroundColor }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/13">
        <svg viewBox="0 0 100 100" className="absolute right-0 bottom-0 w-full h-full" preserveAspectRatio="none">
          <path d="M0 100 C 20 0, 50 0, 100 100 Z" fill="currentColor" className="text-indigo-500 opacity-10"></path>
        </svg>
      </div>
      <div className="absolute top-1/2 left-0 w-1/4 h-1/4 transform -translate-y-1/2">
        <svg viewBox="0 0 100 100" className="absolute left-0 top-0 w-full h-full" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="40" fill="currentColor" className="text-purple-500 opacity-10"></circle>
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: textColor }}>
            {name}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg opacity-75" style={{ color: textColor }}>
            © {currentYear} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
