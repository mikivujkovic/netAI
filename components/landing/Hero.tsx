"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles, Circle, Square, Triangle } from "lucide-react";
import { cn } from "../../lib/utils";

interface ComponentProps {
  type: string;
  props: any;
  design: any;
  name: string;
}

interface HeroProps {
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
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
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
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
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          name={name}
          headline={props.headline}
          description={props.description}
        />
      ),
      "3": (
        <Hero3
          backgroundColor={design.colors.background}
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          name={name}
          headline={props.headline}
          description={props.description}
        />
      ),
      "4": (
        <Hero4
          backgroundColor={design.colors.background}
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
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
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
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
  primaryColor,
  secondaryColor,
  accentColor,
  textColor,
  font,
  name,
  headline,
  description,
}: HeroProps) => {
  const fontClass = `font-${font}`;

  return (
    <div
      className={`${fontClass} relative isolate overflow-hidden px-6 pt-14 lg:px-8`}
      style={{ backgroundColor }}
      id="hero"
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        {/* Top gradient blob */}
        <div
          className="absolute -top-40 left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-float-slow"
          style={{
            background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`,
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />

        {/* Bottom gradient blob */}
        <div
          className="absolute bottom-0 right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 opacity-30 sm:right-[calc(50%-36rem)] sm:w-[72.1875rem] animate-float-slow-reverse"
          style={{
            background: `linear-gradient(45deg, ${secondaryColor}, ${accentColor})`,
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />

        {/* Animated dots */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-pulse"
              style={{
                backgroundColor: i % 2 === 0 ? primaryColor : secondaryColor,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.2,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative">
        <div className="text-center">
          {/* Headline with gradient text */}
          <h1 
            className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 relative"
            style={{ color: textColor }}
          >
            {/* Accent line */}
            <div 
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-1 rounded-full"
              style={{ background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` }}
            />
            {headline}
          </h1>

          {/* Description with custom opacity */}
          <p 
            className="mt-6 text-lg leading-8"
            style={{ color: textColor, opacity: 0.8 }}
          >
            {description}
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#solution"
              className="rounded-full px-6 py-3 text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ 
                background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`,
                color: backgroundColor
              }}
            >
              Get started
            </a>
            <a
              href="#solution"
              className="text-sm font-semibold leading-6 flex items-center gap-2 group transition-all duration-300"
              style={{ color: textColor }}
            >
              Learn more 
              <ArrowRight 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                style={{ color: accentColor }}
              />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(-50%, 0) rotate(30deg); }
          50% { transform: translate(-50%, -20px) rotate(35deg); }
        }

        @keyframes float-slow-reverse {
          0%, 100% { transform: translate(-50%, 0) rotate(-30deg); }
          50% { transform: translate(-50%, 20px) rotate(-25deg); }
        }

        .animate-float-slow {
          animation: float-slow 15s infinite ease-in-out;
        }

        .animate-float-slow-reverse {
          animation: float-slow-reverse 18s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

const Hero2 = ({
  backgroundColor,
  primaryColor,
  secondaryColor,
  accentColor,
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
      className={`${fontClass} relative flex flex-1 w-full flex-col items-center justify-center text-center px-4 pt-32 pb-20 overflow-hidden`}
      style={{ backgroundColor }}
      id="hero"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient circles */}
        <div 
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-20 animate-pulse-slow"
          style={{ 
            background: `radial-gradient(circle, ${primaryColor}, transparent 70%)` 
          }}
        />
        <div 
          className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20 animate-pulse-slow-delay"
          style={{ 
            background: `radial-gradient(circle, ${secondaryColor}, transparent 70%)` 
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative">
        {/* Headline with custom underline */}
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-7xl">
          <span style={{ color: textColor }}>{headline1}{' '}</span>
          <span className="relative whitespace-nowrap inline-block" style={{ color: textColor }}>
            {/* Custom underline SVG */}
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full opacity-70"
              preserveAspectRatio="none"
            >
              <path 
                d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
                style={{ 
                  fill: `url(#gradient-${headline2})`,
                }}
              />
              <defs>
                <linearGradient id={`gradient-${headline2}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: primaryColor }} />
                  <stop offset="100%" style={{ stopColor: secondaryColor }} />
                </linearGradient>
              </defs>
            </svg>
            <span className="relative">{headline2}</span>
          </span>
        </h1>

        {/* Description with custom styling */}
        <p 
          className="mx-auto mt-12 max-w-xl text-lg leading-7 relative"
          style={{ color: textColor, opacity: 0.8 }}
        >
          {description}
        </p>

        {/* CTA Button */}
        <a
          href="#solution"
          className="inline-flex items-center gap-2 rounded-xl px-6 py-3 sm:mt-10 mt-8 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          style={{ 
            background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`,
            color: backgroundColor 
          }}
        >
          Read more
          <ArrowRight 
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }

        @keyframes pulse-slow-delay {
          0%, 100% { opacity: 0.2; transform: scale(1.1); }
          50% { opacity: 0.15; transform: scale(1); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s infinite ease-in-out;
        }

        .animate-pulse-slow-delay {
          animation: pulse-slow-delay 6s infinite ease-in-out;
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
};

const Hero3 = ({
  backgroundColor,
  primaryColor,
  secondaryColor,
  accentColor,
  textColor,
  font,
  name,
  headline,
  description,
}: HeroProps) => {
  const fontClass = `font-${font}`;

  return (
    <div
      className={`${fontClass} relative min-h-screen flex items-center justify-center overflow-hidden`}
      style={{ backgroundColor }}
      id="hero"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0" 
           style={{ 
             backgroundImage: `linear-gradient(${primaryColor}11 1px, transparent 1px), linear-gradient(to right, ${primaryColor}11 1px, transparent 1px)`,
             backgroundSize: '4rem 4rem'
           }} 
      />

      {/* Animated blobs */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          style={{ 
            background: `radial-gradient(circle, ${primaryColor}22, transparent 70%)`,
            animation: 'blob 7s infinite'
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
          style={{ 
            background: `radial-gradient(circle, ${secondaryColor}22, transparent 70%)`,
            animation: 'blob 7s infinite',
            animationDelay: '2s'
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
          style={{ 
            background: `radial-gradient(circle, ${accentColor}22, transparent 70%)`,
            animation: 'blob 7s infinite',
            animationDelay: '4s'
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Decorative elements */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center justify-center w-20 h-20">
            <Sparkles 
              className="w-8 h-8 animate-pulse" 
              style={{ color: accentColor }}
            />
          </div>
        </div>

        {/* Main content */}
        <div className="text-center max-w-3xl mx-auto backdrop-blur-sm rounded-3xl p-8 relative">
          {/* Headline */}
          <h1 
            className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text"
            style={{ 
              color: textColor,
              textShadow: `0 0 20px ${primaryColor}22`
            }}
          >
            {headline}
          </h1>

          {/* Description */}
          <p 
            className="text-lg sm:text-xl mb-12 leading-relaxed"
            style={{ color: textColor, opacity: 0.8 }}
          >
            {description}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#solution"
              className="group relative px-8 py-3 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105"
              style={{ 
                backgroundColor: primaryColor,
                color: backgroundColor
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                   style={{ 
                     background: `linear-gradient(45deg, ${secondaryColor}, ${accentColor})` 
                   }} 
              />
              <span className="relative flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a
              href="#learn-more"
              className="group flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300"
              style={{ 
                color: textColor,
                backgroundColor: `${primaryColor}11`
              }}
            >
              Learn More
              <ArrowRight 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                style={{ color: accentColor }}
              />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

const Hero4 = ({
  backgroundColor,
  primaryColor,
  secondaryColor,
  accentColor,
  textColor,
  font,
  name,
  headline,
  description,
}: HeroProps) => {
  const fontClass = `font-${font}`;

  return (
    <div
      className={`${fontClass} relative min-h-[90vh] flex items-center justify-center`}
      style={{ backgroundColor }}
      id="hero"
    >
      {/* Geometric pattern background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated shapes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float-${i} ${10 + Math.random() * 10}s infinite ease-in-out`,
            }}
          >
            {i % 3 === 0 ? (
              <Circle 
                className="opacity-20"
                style={{ color: primaryColor }}
                size={20 + Math.random() * 30}
              />
            ) : i % 3 === 1 ? (
              <Square 
                className="opacity-20"
                style={{ color: secondaryColor }}
                size={20 + Math.random() * 30}
              />
            ) : (
              <Triangle 
                className="opacity-20"
                style={{ color: accentColor }}
                size={20 + Math.random() * 30}
              />
            )}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Text content */}
          <div className="text-left">
            {/* Staggered text reveal */}
            <div className="overflow-hidden">
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up"
                style={{ color: textColor }}
              >
                {headline.split(' ').map((word, i) => (
                  <span 
                    key={i}
                    className="inline-block"
                    style={{ 
                      animation: `slide-up 0.5s ease forwards`,
                      animationDelay: `${i * 0.1}s`,
                      opacity: 0,
                      transform: 'translateY(100%)'
                    }}
                  >
                    {word}{' '}
                  </span>
                ))}
              </h1>
            </div>

            <p 
              className="mt-8 text-lg sm:text-xl leading-relaxed"
              style={{ color: textColor, opacity: 0.8 }}
            >
              {description}
            </p>

            {/* CTA section */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#solution"
                className="inline-flex items-center px-6 py-3 rounded-lg transform hover:-translate-y-1 transition-all duration-300"
                style={{ 
                  background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
                  color: backgroundColor
                }}
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 transition-all duration-300 hover:shadow-lg"
                style={{ 
                  borderColor: primaryColor,
                  color: textColor
                }}
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Right side: Geometric design */}
          <div className="relative hidden lg:block h-[600px]">
            {/* Large geometric shapes */}
            <div className="absolute inset-0">
              <div 
                className="absolute top-1/4 left-1/4 w-32 h-32 rounded-2xl transform rotate-45 animate-float-slow"
                style={{ 
                  background: `linear-gradient(135deg, ${primaryColor}33, ${primaryColor}11)`,
                  boxShadow: `0 10px 30px ${primaryColor}22`
                }}
              />
              <div 
                className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full animate-float-slow-reverse"
                style={{ 
                  background: `linear-gradient(135deg, ${secondaryColor}33, ${secondaryColor}11)`,
                  boxShadow: `0 10px 30px ${secondaryColor}22`
                }}
              />
              <div 
                className="absolute bottom-1/4 left-1/3 w-36 h-36 rounded-lg transform -rotate-12 animate-float-medium"
                style={{ 
                  background: `linear-gradient(135deg, ${accentColor}33, ${accentColor}11)`,
                  boxShadow: `0 10px 30px ${accentColor}22`
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-slow {
          0%, 100% { transform: rotate(45deg) translate(0, 0); }
          50% { transform: rotate(45deg) translate(0, -20px); }
        }

        @keyframes float-slow-reverse {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, 20px); }
        }

        @keyframes float-medium {
          0%, 100% { transform: rotate(-12deg) translate(0, 0); }
          50% { transform: rotate(-12deg) translate(-15px, 15px); }
        }

        ${[...Array(12)].map((_, i) => `
          @keyframes float-${i} {
            0%, 100% { transform: translate(0, 0) rotate(${Math.random() * 360}deg); }
            50% { transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px) rotate(${Math.random() * 360}deg); }
          }
        `).join('\n')}
      `}</style>
    </div>
  );
};