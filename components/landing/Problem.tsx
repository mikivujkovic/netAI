"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

import { ServerCrash, Bomb, CheckCheck, AlertTriangle, Zap, CheckCircle, Shield, Lightbulb, Target } from "lucide-react";

interface ComponentProps {
  type: string;
  props: any;
  design: any;
  name: string;
}

interface ProblemProps {
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  font: string;
  name: string;
  problem: string;
  agitate: string;
  solve: string;
}

interface PasProps {
  title: string;
  content: string;
  icon: JSX.Element;
  iconColor: string;
}

interface PASCardProps {
  title: string;
  content: string;
  iconColor: string;
  accentColor: string;
  index: number;
}

const Problem = ({ type, props, design, name }: ComponentProps) => {
  const getContent = (variant: string) => {
    const content = {
      "1": (
        <Problem1
          backgroundColor={design.colors.background}
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          name={name}
          problem={props.problem}
          agitate={props.agitate}
          solve={props.solve}
        />
      ),
      "2": (
        <Problem2
          backgroundColor={design.colors.background}
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          name={name}
          problem={props.problem}
          agitate={props.agitate}
          solve={props.solve}
        />
      ),
      "3": (
        <Problem3
          backgroundColor={design.colors.background}
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          name={name}
          problem={props.problem}
          agitate={props.agitate}
          solve={props.solve}
        />
      ),
      "4": (
        <Problem4
          backgroundColor={design.colors.background}
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          name={name}
          problem={props.problem}
          agitate={props.agitate}
          solve={props.solve}
        />
      ),
      default: (
        <Problem1
          backgroundColor={design.colors.background}
          primaryColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          accentColor={design.colors.accent}
          textColor={design.colors.primary}
          font={design.fonts.heading}
          name={name}
          problem={props.problem}
          agitate={props.agitate}
          solve={props.solve}
        />
      ),
    } as { [key: string]: JSX.Element };
    return content[variant] || content["default"];
  };

  return <div>{getContent(props.variant)}</div>;
};

export default Problem;

const Problem1 = ({
  backgroundColor,
  primaryColor,
  secondaryColor,
  accentColor,
  textColor,
  font,
  name,
  problem,
  agitate,
  solve,
}: ProblemProps) => {
  const fontClass = `font-${font}`;

  return (
    <div
      className={`${fontClass} relative py-20 sm:py-32 overflow-hidden`}
      id="solution"
      style={{ backgroundColor }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-y-0 left-0 w-1/2 opacity-10"
          style={{ 
            background: `linear-gradient(to right, ${primaryColor}, transparent)` 
          }}
        />
        <div 
          className="absolute inset-y-0 right-0 w-1/2 opacity-10"
          style={{ 
            background: `linear-gradient(to left, ${secondaryColor}, transparent)` 
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header section */}
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <div 
            className="inline-flex items-center rounded-full px-4 py-1 mb-4"
            style={{ 
              backgroundColor: `${primaryColor}11`,
              color: primaryColor
            }}
          >
            <span className="text-sm font-medium">Problem-Solution Approach</span>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ color: textColor }}
          >
            Transform Your Experience
          </h2>
          
          <p 
            className="text-lg leading-relaxed"
            style={{ color: textColor, opacity: 0.7 }}
          >
            Discover how we address your challenges and provide effective solutions.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {[
            { icon: ServerCrash, title: "The Problem", content: problem, color: primaryColor },
            { icon: Bomb, title: "A Bigger Problem", content: agitate, color: secondaryColor },
            { icon: CheckCheck, title: "The Solution", content: solve, color: accentColor }
          ].map((item, index) => (
            <div 
              key={index}
              className="relative group rounded-2xl p-8 transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: `${item.color}08`,
                border: `1px solid ${item.color}22`
              }}
            >
              {/* Card decoration */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ 
                  background: `linear-gradient(45deg, ${item.color}05, ${item.color}0f)` 
                }}
              />

              {/* Icon container */}
              <div 
                className="relative flex items-center justify-center w-12 h-12 rounded-xl mb-6"
                style={{ backgroundColor: `${item.color}11` }}
              >
                <item.icon 
                  className="w-6 h-6"
                  style={{ color: item.color }} 
                />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: textColor }}
                >
                  {item.title}
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: textColor, opacity: 0.7 }}
                >
                  {item.content}
                </p>
              </div>

              {/* Bottom accent line */}
              <div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 group-hover:w-1/2 transition-all duration-300 rounded-full"
                style={{ backgroundColor: item.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Problem2 = ({
  backgroundColor,
  primaryColor,
  secondaryColor,
  accentColor,
  textColor,
  font,
  name,
  problem,
  agitate,
  solve,
}: ProblemProps) => {
  const fontClass = `font-${font}`;

  return (
    <div 
      className={`${fontClass} relative py-20 sm:py-32`}
      style={{ backgroundColor }}
      id="solution"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 -top-12 -right-12"
          style={{ 
            background: `radial-gradient(circle, ${primaryColor}, transparent 70%)` 
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 -bottom-12 -left-12"
          style={{ 
            background: `radial-gradient(circle, ${secondaryColor}, transparent 70%)` 
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header section */}
        <div className="mx-auto max-w-2xl lg:text-center mb-20">
          <div 
            className="inline-flex items-center rounded-full px-4 py-1 mb-6"
            style={{ backgroundColor: `${primaryColor}11` }}
          >
            <span 
              className="text-sm font-medium"
              style={{ color: primaryColor }}
            >
              Our Approach
            </span>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ color: textColor }}
          >
            From Challenge to Solution
          </h2>
          
          <p 
            className="text-lg leading-relaxed"
            style={{ color: textColor, opacity: 0.7 }}
          >
            We understand your needs and provide effective solutions to enhance your experience.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <PASCard
            title="The Challenge"
            content={problem}
            iconColor={textColor}
            accentColor={primaryColor}
            index={0}
          />
          <PASCard
            title="The Implication"
            content={agitate}
            iconColor={textColor}
            accentColor={secondaryColor}
            index={1}
          />
          <PASCard
            title="Our Solution"
            content={solve}
            iconColor={textColor}
            accentColor={accentColor}
            index={2}
          />
        </div>
      </div>
    </div>
  );
};

const PASSection = ({ title, content, icon, iconColor}: PasProps) => (
  <div className="flex flex-col items-center">
    <div className="relative pl-16 gap-x-3">
      <dt className="text-base font-semibold leading-7 text-gray-900">
        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: iconColor }}>
          {icon}
        </div>
        {title}
      </dt>
      <dd className="mt-2 text-base leading-7 text-gray-600">{content}</dd>
    </div>
  </div>
);

const Problem3 = ({
  backgroundColor,
  primaryColor,
  secondaryColor,
  accentColor,
  textColor,
  font,
  name,
  problem,
  agitate,
  solve,
}: ProblemProps) => {
  const fontClass = `font-${font}`;

  return (
    <div
      className={`${fontClass} relative py-24 sm:py-32`}
      style={{ backgroundColor }}
      id="solution"
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-3xl opacity-10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 400 + 100}px`,
                height: `${Math.random() * 400 + 100}px`,
                background: i % 3 === 0 
                  ? primaryColor 
                  : i % 3 === 1 
                    ? secondaryColor 
                    : accentColor,
                animation: `float-${i} ${15 + Math.random() * 10}s infinite ease-in-out`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div 
            className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-1 mb-6"
            style={{ backgroundColor: `${primaryColor}11` }}
          >
            <span className="relative flex h-2 w-2">
              <span 
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: primaryColor }}
              />
              <span 
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: primaryColor }}
              />
            </span>
            <span 
              className="text-sm font-medium"
              style={{ color: primaryColor }}
            >
              Solution Roadmap
            </span>
          </div>

          <h2 
            className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
            style={{ color: textColor }}
          >
            Your Challenges,
            <span 
              className="relative ml-2 inline-block"
              style={{ color: primaryColor }}
            >
              Our Solutions
              <div 
                className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                style={{ backgroundColor: `${primaryColor}33` }}
              />
            </span>
          </h2>

          <p 
            className="text-lg sm:text-xl leading-relaxed max-w-xl mx-auto"
            style={{ color: textColor, opacity: 0.7 }}
          >
            We transform complex challenges into elegant solutions through our proven approach.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {[
            { 
              icon: AlertTriangle,
              title: "Identify Challenge",
              content: problem,
              color: primaryColor,
              delay: 0
            },
            { 
              icon: Zap,
              title: "Analyze Impact",
              content: agitate,
              color: secondaryColor,
              delay: 100
            },
            { 
              icon: CheckCircle,
              title: "Deliver Solution",
              content: solve,
              color: accentColor,
              delay: 200
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="group relative"
              style={{ 
                animation: 'fade-up 0.6s ease forwards',
                animationDelay: `${item.delay}ms`
              }}
            >
              {/* Card */}
              <div 
                className="relative p-8 rounded-2xl transition-all duration-300 group-hover:translate-y-[-4px]"
                style={{ 
                  backgroundColor: `${item.color}08`,
                  border: `1px solid ${item.color}11`
                }}
              >
                {/* Icon Container */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ 
                    background: `linear-gradient(135deg, ${item.color}22, ${item.color}11)`,
                  }}
                >
                  <item.icon 
                    className="w-6 h-6"
                    style={{ color: item.color }}
                  />
                </div>

                {/* Content */}
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: textColor }}
                >
                  {item.title}
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: textColor, opacity: 0.7 }}
                >
                  {item.content}
                </p>

                {/* Decorative number */}
                <div 
                  className="absolute top-6 right-6 text-5xl font-bold opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                  style={{ color: item.color }}
                >
                  {index + 1}
                </div>
              </div>

              {/* Connection line */}
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px]">
                  <div 
                    className="w-full h-full"
                    style={{ backgroundColor: `${item.color}33` }}
                  />
                  <div 
                    className="absolute top-0 left-0 h-full w-0 group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        ${[...Array(30)].map((_, i) => `
          @keyframes float-${i} {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px); }
          }
        `).join('\n')}
      `}</style>
    </div>
  );
};

const Problem4 = ({
  backgroundColor,
  primaryColor,
  secondaryColor,
  accentColor,
  textColor,
  font,
  name,
  problem,
  agitate,
  solve,
}: ProblemProps) => {
  const fontClass = `font-${font}`;

  return (
    <div
      className={`${fontClass} relative py-24 sm:py-32`}
      style={{ backgroundColor }}
      id="solution"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(${textColor} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          {/* Badge */}
          <div 
            className="inline-flex items-center rounded-full px-4 py-1 mb-6"
            style={{ backgroundColor: `${primaryColor}11` }}
          >
            <span 
              className="text-sm font-medium"
              style={{ color: primaryColor }}
            >
              Problem-Solution Approach
            </span>
          </div>

          {/* Title */}
          <h2 
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ color: textColor }}
          >
            From Challenges to Solutions
          </h2>

          {/* Description */}
          <p 
            className="text-lg leading-relaxed"
            style={{ color: textColor, opacity: 0.7 }}
          >
            We transform complex problems into effective solutions through our proven methodology.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {[
            {
              icon: Shield,
              title: "Identify Challenge",
              content: problem,
              color: primaryColor,
              number: "01"
            },
            {
              icon: Lightbulb,
              title: "Analyze Impact",
              content: agitate,
              color: secondaryColor,
              number: "02"
            },
            {
              icon: Target,
              title: "Deliver Solution",
              content: solve,
              color: accentColor,
              number: "03"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Card */}
              <div 
                className="relative p-8 rounded-2xl transition-all duration-300 group-hover:scale-[1.02]"
                style={{ 
                  backgroundColor: `${item.color}08`,
                  border: `1px solid ${item.color}15`
                }}
              >
                {/* Number indicator */}
                <div 
                  className="text-4xl font-bold mb-6 opacity-20"
                  style={{ color: item.color }}
                >
                  {item.number}
                </div>

                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon 
                    className="w-6 h-6"
                    style={{ color: item.color }}
                  />
                </div>

                {/* Content */}
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: textColor }}
                >
                  {item.title}
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: textColor, opacity: 0.7 }}
                >
                  {item.content}
                </p>

                {/* Bottom accent line */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: `${item.color}20` }}
                />
              </div>

              {/* Connection line */}
              {index < 2 && (
                <div 
                  className="hidden md:block absolute top-1/2 -right-4 w-8 h-px opacity-20"
                  style={{ backgroundColor: item.color }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PASCard = ({ title, content, iconColor, accentColor, index }: PASCardProps) => {
  const icons = {
    0: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    1: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
      </svg>
    ),
    2: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <div className="relative group">
      {/* Connection line between cards */}
      {index < 2 && (
        <div 
          className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 opacity-20"
          style={{ backgroundColor: accentColor }}
        />
      )}

      <div className="relative p-6 rounded-2xl transition-all duration-300 hover:scale-102"
           style={{ backgroundColor: `${accentColor}08` }}>
        {/* Top accent line */}
        <div 
          className="absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-t-2xl"
          style={{ backgroundColor: accentColor }}
        />

        {/* Icon wrapper */}
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
          style={{ 
            backgroundColor: `${accentColor}15`,
            color: iconColor
          }}
        >
          {icons[index as keyof typeof icons]}
        </div>

        {/* Content */}
        <h3 
          className="text-xl font-semibold mb-3"
          style={{ color: iconColor }}
        >
          {title}
        </h3>
        <p 
          className="leading-relaxed"
          style={{ color: iconColor, opacity: 0.7 }}
        >
          {content}
        </p>
      </div>
    </div>
  );
};