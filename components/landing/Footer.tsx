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

interface FooterProps {
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  font: string;
  text: string;
}

const Footer = ({ type, props, design, name }: ComponentProps) => {

  const getContent = (variant: string) => {
    const content = {
      "1": (
        <Footer1
          backgroundColor={design.colors.background}
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          text={props.text}
        />
      ),
      "2": (
        <Footer2
          backgroundColor={design.colors.background}
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          text={props.text}
        />
      ),
      "3": (
        <Footer3
          backgroundColor={design.colors.background}
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          text={props.text}
        />
      ),
      "4": (
        <Footer4
          backgroundColor={design.colors.background}
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          text={props.text}
        />
      ),
      default: (
        <Footer1
          backgroundColor={design.colors.background}
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          text={props.text}
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
  primaryColor,
  secondaryColor,
  accentColor,
  textColor,
  font,
  text,
}: FooterProps) => {
  const fontClass = `font-${font}`;
  const currentYear = new Date().getFullYear();

  const getGradientStyle = () => ({
    background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`
  });

  return (
    <footer
      className={`${fontClass} relative py-16 sm:py-20`}
      id="footer"
      style={{ backgroundColor }}
    >
      {/* Diagonal background with gradient */}
      <div 
        className="absolute inset-0 skew-y-3 origin-top-right -z-10"
        style={getGradientStyle()}
      />
      
      {/* Floating squares decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              opacity: 0.1,
              backgroundColor: i % 2 === 0 ? primaryColor : secondaryColor,
              animation: `float ${Math.random() * 10 + 10}s infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Text with accent line */}
          <div className="relative mb-8">
            <span 
              className="absolute -left-6 top-0 h-full w-1 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
            <h2 
              className="text-3xl font-bold"
              style={{ color: textColor }}
            >
              {text}
            </h2>
          </div>

          {/* Decorative dots */}
          <div className="flex space-x-2 mb-8">
            {[primaryColor, secondaryColor, accentColor].map((color, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          {/* Copyright */}
          <p 
            className="text-sm relative"
            style={{ color: textColor, opacity: 0.6 }}
          >
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1">
        <div 
          className="h-full w-1/3 mx-auto rounded-t-full"
          style={{ backgroundColor: accentColor, opacity: 0.3 }}
        />
      </div>
    </footer>
  );
};

const Footer2 = ({
  backgroundColor,
  primaryColor,
  secondaryColor,
  accentColor,
  textColor,
  font,
  text,
}: FooterProps) => {
  const fontClass = `font-${font}`;
  const currentYear = new Date().getFullYear();

  const getGradientStyle = () => ({
    background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor}, ${accentColor})`
  });

  const getDecorationStyle = (color: string) => ({
    color: color,
    opacity: 0.1
  });

  return (
    <footer 
      className={`${fontClass} relative overflow-hidden py-16 sm:py-24`} 
      style={{ backgroundColor }}
    >
      {/* Decorative elements */}
      <div 
        className="absolute top-0 left-0 w-full h-px"
        style={getGradientStyle()}
      />
      <div className="absolute bottom-0 right-0 w-1/3 h-32">
        <svg 
          viewBox="0 0 100 100" 
          className="absolute right-0 bottom-0 w-full h-full" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0 100 C 20 0, 50 0, 100 100 Z" 
            fill="currentColor" 
            style={getDecorationStyle(primaryColor)}
          />
        </svg>
      </div>
      <div className="absolute top-1/2 left-0 w-1/4 h-1/4 transform -translate-y-1/2">
        <svg 
          viewBox="0 0 100 100" 
          className="absolute left-0 top-0 w-full h-full" 
          preserveAspectRatio="none"
        >
          <circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill="currentColor" 
            style={getDecorationStyle(secondaryColor)}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p 
            className="text-lg" 
            style={{ color: textColor, opacity: 0.75 }}
          >
            {text}
          </p>
          <div 
            className="w-24 h-1 mx-auto my-8"
            style={getGradientStyle()}
          />
          <p 
            className="text-sm" 
            style={{ color: textColor, opacity: 0.6 }}
          >
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const Footer3 = ({
  backgroundColor,
  primaryColor,
  secondaryColor,
  accentColor,
  textColor,
  font,
  text,
}: FooterProps) => {
  const fontClass = `font-${font}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${fontClass} relative py-16 sm:py-20 overflow-hidden`}
      id="footer"
      style={{ backgroundColor }}
    >
      {/* Geometric patterns */}
      <div className="absolute inset-0">
        {/* Left side pattern */}
        <div className="absolute left-0 top-0 h-full w-1/3">
          <div className="absolute top-1/4 left-4 w-24 h-24 transform -rotate-45"
               style={{ backgroundColor: primaryColor, opacity: 0.05 }} />
          <div className="absolute top-1/2 left-8 w-16 h-16 transform rotate-12"
               style={{ backgroundColor: secondaryColor, opacity: 0.05 }} />
          <div className="absolute bottom-1/4 left-6 w-20 h-20"
               style={{ backgroundColor: accentColor, opacity: 0.05 }} />
        </div>
        
        {/* Right side pattern */}
        <div className="absolute right-0 bottom-0 h-full w-1/3">
          <div className="absolute bottom-1/4 right-4 w-32 h-32"
               style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', backgroundColor: primaryColor, opacity: 0.05 }} />
          <div className="absolute bottom-1/3 right-12 w-24 h-24"
               style={{ borderRadius: '50%', backgroundColor: secondaryColor, opacity: 0.05 }} />
        </div>
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Main text area with side accents */}
          <div className="relative mb-12 px-8">
            {/* Left accent */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-12"
                 style={{ background: `linear-gradient(to bottom, ${primaryColor}, ${secondaryColor})` }} />
            
            {/* Right accent */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-12"
                 style={{ background: `linear-gradient(to bottom, ${secondaryColor}, ${accentColor})` }} />
            
            {/* Text */}
            <h2 
              className="text-3xl sm:text-4xl font-bold text-center px-8"
              style={{ color: textColor }}
            >
              {text}
            </h2>
          </div>

          {/* Decorative lines pattern */}
          <div className="flex space-x-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-8"
                style={{
                  width: '2px',
                  backgroundColor: i % 2 === 0 ? primaryColor : secondaryColor,
                  transform: `rotate(${(i - 2) * 15}deg)`,
                  opacity: 0.6
                }}
              />
            ))}
          </div>

          {/* Copyright with underline decoration */}
          <div className="relative">
            <p 
              className="text-sm text-center"
              style={{ color: textColor, opacity: 0.6 }}
            >
              © {currentYear} All rights reserved.
            </p>
            <div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 rounded-full"
              style={{ backgroundColor: accentColor, opacity: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div 
        className="absolute bottom-0 right-0 w-32 h-32 transform translate-x-16 translate-y-16"
        style={{ 
          background: `conic-gradient(from 0deg at 50% 50%, ${primaryColor}, ${secondaryColor}, ${accentColor}, ${primaryColor})`,
          borderRadius: '100% 0 0 0',
          opacity: 0.1
        }} 
      />
    </footer>
  );
};

const Footer4 = ({
  backgroundColor,
  primaryColor,
  secondaryColor,
  accentColor,
  textColor,
  font,
  text,
}: FooterProps) => {
  const fontClass = `font-${font}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${fontClass} relative py-20 sm:py-24`}
      id="footer"
      style={{ backgroundColor }}
    >
      {/* Wave patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top wave */}
        <svg 
          className="absolute top-0 left-0 w-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            style={{ fill: primaryColor, opacity: 0.05 }}
          />
        </svg>

        {/* Middle wave */}
        <svg 
          className="absolute top-10 left-0 w-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            style={{ fill: secondaryColor, opacity: 0.05 }}
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Text container with layered background */}
        <div className="relative">
          {/* Layered backgrounds */}
          <div 
            className="absolute inset-0 transform -rotate-1"
            style={{ backgroundColor: primaryColor, opacity: 0.05 }}
          />
          <div 
            className="absolute inset-0 transform rotate-1"
            style={{ backgroundColor: secondaryColor, opacity: 0.05 }}
          />
          
          {/* Content */}
          <div className="relative px-8 py-12">
            {/* Main text with dot pattern border */}
            <div className="relative mx-auto max-w-3xl text-center mb-12">
              {/* Dot pattern */}
              <div className="absolute -inset-4 flex justify-between">
                {[...Array(16)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1 h-1 rounded-full"
                    style={{ 
                      backgroundColor: i % 2 === 0 ? primaryColor : accentColor,
                      opacity: 0.3
                    }}
                  />
                ))}
              </div>
              
              <h2 
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: textColor }}
              >
                {text}
              </h2>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div 
                className="flex-grow h-px"
                style={{ backgroundColor: textColor, opacity: 0.1 }}
              />
              <div 
                className="w-2 h-2 transform rotate-45"
                style={{ backgroundColor: accentColor }}
              />
              <div 
                className="flex-grow h-px"
                style={{ backgroundColor: textColor, opacity: 0.1 }}
              />
            </div>

            {/* Copyright */}
            <p 
              className="text-center text-sm relative"
              style={{ color: textColor, opacity: 0.6 }}
            >
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
        <div className="relative w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full"
              style={{
                left: `${i * 5}%`,
                width: '3px',
                backgroundColor: i % 3 === 0 ? primaryColor : i % 3 === 1 ? secondaryColor : accentColor,
                opacity: 0.2,
                transform: `translateY(${i % 2 === 0 ? '50%' : '0'})`,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};
