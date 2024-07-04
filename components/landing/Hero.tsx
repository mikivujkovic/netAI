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

interface HeroProps {
  backgroundColor: string;
  textColor: string;
  font: string;
  name: string;
  headline: string;
  description: string;
}

function splitLastWord(sentence: string) {
  // Trim the sentence to remove any leading or trailing whitespace
  sentence = sentence.trim();

  // Find the last space in the sentence
  const lastSpaceIndex = sentence.lastIndexOf(" ");

  // If there's no space, return the whole sentence as the last word
  if (lastSpaceIndex === -1) {
    return ["", sentence];
  }

  // Split the sentence
  const sentenceWithoutLastWord = sentence.slice(0, lastSpaceIndex);
  const lastWord = sentence.slice(lastSpaceIndex + 1);

  return [sentenceWithoutLastWord, lastWord];
}

const Hero = ({ type, props, design, name }: ComponentProps) => {
  const getContent = (variant: string) => {
    const content = {
      "1": (
        <Hero1
          backgroundColor={design.colors.background}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          name={name}
          headline={props.headline}
          description={props.description}
        />
      ),
      "2": (
        <Hero2
          backgroundColor={design.colors.background}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          name={name}
          headline={props.headline}
          description={props.description}
        />
      ),
      default: (
        <Hero1
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

export default Hero;

const Hero1 = ({
  backgroundColor,
  textColor,
  font,
  name,
  headline,
  description,
}: HeroProps) => {
  const fontClass = `font-${font}`;

  return (
    <div
      className="relative isolate px-6 pt-14 lg:px-8"
      style={{ backgroundColor: backgroundColor }}
      id="hero"
    >
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className={`relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]`}
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#solution"
              style={{ backgroundColor: textColor }}
              className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a
              href="#solution"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className={`relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]`}
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

const Hero2 = ({
  backgroundColor,
  textColor,
  font,
  name,
  headline,
  description,
}: HeroProps) => {
  const fontClass = `font-${font}`;

  const [headline1, headline2] = splitLastWord(headline);

  return (
    <div
      className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 pt-32 pb-20"
      style={{ backgroundColor: backgroundColor }}
      id="hero"
    >
      {/* <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
      >
        Inspired by the amazing
        <span className="font-semibold">restorePhotos</span> app
      </a> */}
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
        {headline1}
        <span className="relative whitespace-nowrap" style={{color: textColor}}>
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em]"
            style={{fill: textColor}}
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
          </svg>
          <span className="relative">{headline2}</span>
        </span>
      </h1>
      <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
        {description}
      </p>
      <a
        style={{ backgroundColor: textColor }}
        className="rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
        href="#solution"
      >
        Read more →
      </a>
    </div>
  );
};
