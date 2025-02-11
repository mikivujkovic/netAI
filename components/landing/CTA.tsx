"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

import { Rocket,
  Zap,
  Shield,
  Star,
  Target,
  Trophy,
  Lightbulb,
  Heart,
  Clock,
  BadgeCheck,
  ArrowRight,
  Sparkles, } from "lucide-react";
import { text } from "stream/consumers";

interface ComponentProps {
  type: string;
  props: any;
  design: any;
  name: string;
}

interface CTAProps {
  backgroundColor: string;
  textColor: string;
  secondaryColor: string;
  primaryColor: string;
  accentColor: string;
  font: string;
  name: string;
  title: string;
  description: string;
  button: string;
  link: string;
}

const CTA = ({ type, props, design, name }: ComponentProps) => {
  const getContent = (variant: string) => {
    const content = {
      "1": (
        <CTA1
          backgroundColor={design.colors.background}
          textColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          primaryColor={design.color.primary}
          accentColor={design.color.accent}
          font={design.fonts.heading}
          name={name}
          title={props.title}
          description={props.description}
          button={props.button}
          link={props.link}
        />
      ),
      "2": (
        <CTA2
          backgroundColor={design.colors.background}
          textColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          primaryColor={design.color.primary}
          accentColor={design.color.accent}
          font={design.fonts.heading}
          name={name}
          title={props.title}
          description={props.description}
          button={props.button}
          link={props.link}
        />
      ),
      "3": (
        <CTA3
          backgroundColor={design.colors.background}
          textColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          primaryColor={design.color.primary}
          accentColor={design.color.accent}
          font={design.fonts.heading}
          name={name}
          title={props.title}
          description={props.description}
          button={props.button}
          link={props.link}
        />
      ),
      "4": (
        <CTA4
          backgroundColor={design.colors.background}
          textColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          primaryColor={design.color.primary}
          accentColor={design.color.accent}
          font={design.fonts.heading}
          name={name}
          title={props.title}
          description={props.description}
          button={props.button}
          link={props.link}
        />
      ),
      default: (
        <CTA1
          backgroundColor={design.colors.background}
          textColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          primaryColor={design.color.primary}
          accentColor={design.color.accent}
          font={design.fonts.heading}
          name={name}
          title={props.title}
          description={props.description}
          button={props.button}
          link={props.link}
        />
      ),
    } as { [key: string]: JSX.Element };
    return content[variant] || content["default"];
  };

  return <div>{getContent(props.variant)}</div>;
};

export default CTA;

const CTA1 = ({
  backgroundColor,
  textColor,
  secondaryColor,
  primaryColor,
  accentColor,
  font,
  name,
  title,
  description,
  button,
  link,
}: CTAProps) => {
  const getButtonStyle = () => {
    return {
      backgroundColor: primaryColor,
      transition: 'all 0.3s ease',
      color: backgroundColor
    };
  };

  return (
    <div 
      className="py-20 sm:py-28"
      style={{ backgroundColor }} 
      id="cta"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="flex flex-col items-center">
            {/* Main title */}
            <p 
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:px-8"
              style={{ color: textColor }}
            >
              {title}
            </p>
            
            {/* Description */}
            <p 
              className="mt-6 text-lg leading-8 lg:px-8 mb-8"
              style={{ color: textColor, opacity: 0.8 }}
            >
              {description}
            </p>

            {/* CTA Button */}
            <a
              href={link}
              className="inline-flex items-center px-6 py-3 rounded-full text-base font-semibold shadow-sm hover:-translate-y-1 transition-all duration-300"
              style={getButtonStyle()}
            >
              {button}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const CTA2 = ({
  backgroundColor,
  textColor,
  secondaryColor,
  primaryColor,
  accentColor,
  font,
  name,
  title,
  description,
  button,
  link,
}: CTAProps) => {
  return (
    <div 
      className="py-24 sm:py-32"
      style={{ 
        backgroundColor,
        background: `linear-gradient(to right, ${accentColor}10, ${accentColor}15)`
      }} 
      id="cta"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          <h2 
            className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl text-center sm:text-left"
            style={{ color: textColor }}
          >
            {title}
          </h2>
          
          <div className="flex-shrink-0">
            <a
              href={link}
              className="inline-flex items-center px-5 py-3 rounded-full text-base font-medium transition-all duration-200 hover:opacity-90"
              style={{ 
                backgroundColor: primaryColor, 
                color: backgroundColor 
              }}
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const CTA3 = ({
  backgroundColor,
  textColor,
  secondaryColor,
  primaryColor,
  accentColor,
  font,
  name,
  title,
  description,
  button,
  link,
}: CTAProps) => {

  const getButtonStyle = () => {
    return {
      backgroundColor: primaryColor,
      transition: 'all 0.3s ease',
      color: backgroundColor
    };
  };

  return (
    <div 
      className="relative overflow-hidden py-20 sm:py-28"
      style={{ backgroundColor }} 
      id="cta"
    >
      <div className="max-w-7xl flex flex-col items-center justify-center mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center">
              {/* Main title */}
              <h1 
                className="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-6xl"
                style={{ color: textColor }}
              >
                {title}
              </h1>
              
              {/* Description */}
              <p 
                className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                style={{ color: textColor, opacity: 0.8 }}
              >
                {description}
              </p>

              {/* CTA Button */}
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <a
                    href={link}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md hover:-translate-y-1 transition-all duration-300 md:py-4 md:text-lg md:px-10"
                    style={getButtonStyle()}
                  >
                    {button}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

const CTA4 = ({
  backgroundColor,
  textColor,
  secondaryColor,
  primaryColor,
  accentColor,
  font,
  name,
  title,
  description,
  button,
  link,
}: CTAProps) => {
  return (
    <div 
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ backgroundColor }}
      id="cta"
    >
      {/* Background decorative elements */}
      <div 
        className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{ 
          background: `radial-gradient(circle at center, ${accentColor}20 0%, transparent 70%)` 
        }}
      />
      <div 
        className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 transform rounded-full opacity-20"
        style={{ 
          background: `radial-gradient(circle at center, ${primaryColor}20 0%, transparent 70%)` 
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Small accent line above title */}
          <div 
            className="h-px w-12 mb-12"
            style={{ backgroundColor: accentColor }}
          />

          {/* Main content container */}
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: textColor }}
            >
              {title}
            </h2>

            <p 
              className="mt-6 text-lg leading-relaxed opacity-80 max-w-2xl mx-auto"
              style={{ color: textColor }}
            >
              {description}
            </p>

            {/* Button */}
            <div className="mt-10">
              <a
                href={link}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-base font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{ 
                  backgroundColor: primaryColor, 
                  color: backgroundColor 
                }}
              >
                <span>{button}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
