"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils";

import { ServerCrash, Bomb, CheckCheck } from "lucide-react";
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
  font,
  name,
  title,
  description,
  button,
  link,
}: CTAProps) => {
  const fontClass = `font-${font}`;

  return (
    <div className="" style={{ backgroundColor: backgroundColor, color: textColor }} id="contact">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900">
            {title}
          </h2>
          <p className="mb-6 font-light md:text-lg text-gray-900">
            {description}
          </p>
          <a
            href={link}
            style={{ backgroundColor: textColor }}
            className="text-white hover:bg-indigo-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            {button}
          </a>
        </div>
      </div>
    </div>
  );
};

const CTA2 = ({
  backgroundColor,
  textColor,
  secondaryColor,
  font,
  name,
  title,
  description,
  button,
  link,
}: CTAProps) => {
  const fontClass = `font-${font}`;

  return (
    <div className={`${fontClass} relative overflow-hidden`} style={{ backgroundColor }} id="contact">
      <div className="max-w-7xl flex flex-col items-center justify-center mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center">
              <h1 className="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-gray-900">
                {title}
              </h1>
              <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-gray-900">
                {description}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <a
                    href={link}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white hover:opacity-90 md:py-4 md:text-lg md:px-10"
                    style={{ backgroundColor: textColor }}
                  >
                    {button}
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
