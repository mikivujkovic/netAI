"use client";
import React, { useState, useEffect } from "react";
import {
  Rocket,
  Zap,
  Shield,
  Star,
  Target,
  Trophy,
  Lightbulb,
  Heart,
  Clock,
  BadgeCheck,
  Menu,
  ServerCrash,
  Bomb,
  CheckCheck,
} from "lucide-react";
import { cn } from "../../lib/utils";

const icons = [
  Rocket,
  Zap,
  Shield,
  Star,
  Target,
  Trophy,
  Lightbulb,
  Heart,
  Clock,
  BadgeCheck,
];

interface ComponentProps {
  type: string;
  props: any;
  design: any;
  name: string;
}

interface BenefitsProps {
  backgroundColor: string;
  textColor: string;
  secondaryColor: string;
  primaryColor: string;
  accentColor: string;
  font: string;
  name: string;
  benefits: Array<{ title: string; description: string; icon: string }>;
  title: string;
  description: string;
}

const Benefits = ({ type, props, design, name }: ComponentProps) => {
  const getContent = (variant: string) => {
    const content = {
      "1": (
        <Benefits1
          backgroundColor={design.colors.background}
          textColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          primaryColor={design.colors.primary}
          accentColor={design.colors.accent}
          font={design.fonts.heading}
          name={name}
          benefits={props.benefits}
          title={props.title}
          description={props.description}
        />
      ),
      "2": (
        <Benefits2
          backgroundColor={design.colors.background}
          textColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          primaryColor={design.colors.primary}
          accentColor={design.colors.accent}
          font={design.fonts.heading}
          name={name}
          benefits={props.benefits}
          title={props.title}
          description={props.description}
        />
      ),
      "3": (
        <Benefits3
          backgroundColor={design.colors.background}
          textColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          primaryColor={design.colors.primary}
          accentColor={design.colors.accent}
          font={design.fonts.heading}
          name={name}
          benefits={props.benefits}
          title={props.title}
          description={props.description}
        />
      ),
      "4": (
        <Benefits4
          backgroundColor={design.colors.background}
          textColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          primaryColor={design.colors.primary}
          accentColor={design.colors.accent}
          font={design.fonts.heading}
          name={name}
          benefits={props.benefits}
          title={props.title}
          description={props.description}
        />
      ),
      default: (
        <Benefits1
          backgroundColor={design.colors.background}
          textColor={design.colors.primary}
          secondaryColor={design.colors.secondary}
          primaryColor={design.colors.primary}
          accentColor={design.colors.accent}
          font={design.fonts.heading}
          name={name}
          benefits={props.benefits}
          title={props.title}
          description={props.description}
        />
      ),
    } as { [key: string]: JSX.Element };
    return content[variant] || content["default"];
  };

  return <div>{getContent(props.variant)}</div>;
};

export default Benefits;

const Benefits1 = ({
  backgroundColor,
  textColor,
  secondaryColor,
  primaryColor,
  accentColor,
  font,
  name,
  benefits,
  title,
  description,
}: BenefitsProps) => {
  const getRandomIcon = (index: number) => {
    return icons[index % icons.length];
  };

  // Create gradient for icon backgrounds
  const getIconGradient = (index: number) => {
    const gradients = [
      `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
      `linear-gradient(135deg, ${secondaryColor} 0%, ${accentColor} 100%)`,
      `linear-gradient(135deg, ${accentColor} 0%, ${primaryColor} 100%)`,
    ];
    return gradients[index % 3];
  };

  return (
    <div className="py-20 sm:py-28" style={{ backgroundColor }} id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2
            className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold leading-6 ring-1 ring-inset"
            style={{ color: primaryColor, borderColor: primaryColor }}
          >
            Features
          </h2>
          <p
            className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: textColor }}
          >
            {title}
          </p>
          <p
            className="mt-4 text-lg leading-8"
            style={{ color: textColor, opacity: 0.8 }}
          >
            {description}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-4xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
            {benefits.map((feature, index) => {
              const IconComponent = getRandomIcon(index);
              return (
                <div key={feature.title} className="group relative pl-16">
                  <dt
                    className="text-base font-semibold leading-7"
                    style={{ color: textColor }}
                  >
                    <div
                      className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: getIconGradient(index),
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <IconComponent
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.title}
                  </dt>
                  <dd
                    className="mt-2 text-base leading-7"
                    style={{ color: textColor, opacity: 0.8 }}
                  >
                    {feature.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

const Benefits2 = ({
  backgroundColor,
  textColor,
  secondaryColor,
  primaryColor,
  accentColor,
  font,
  name,
  benefits,
  title,
  description,
}: BenefitsProps) => {
  const getRandomIcon = (index: number) => {
    return icons[index % icons.length];
  };

  // Function to adjust color opacity
  const adjustColor = (color: string, opacity: number) => {
    if (color.startsWith("#")) {
      return `${color}${Math.floor(opacity * 255)
        .toString(16)
        .padStart(2, "0")}`;
    }
    return color;
  };

  // Dynamic gradient combinations
  const getCardStyle = (index: number) => {
    const gradients = [
      // Primary to Secondary
      {
        background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
        overlay: primaryColor,
      },
      // Secondary to Accent
      {
        background: `linear-gradient(135deg, ${secondaryColor} 0%, ${accentColor} 100%)`,
        overlay: secondaryColor,
      },
      // Accent to Primary
      {
        background: `linear-gradient(135deg, ${accentColor} 0%, ${primaryColor} 100%)`,
        overlay: accentColor,
      },
    ];

    return gradients[index % 3];
  };

  return (
    <div className="py-20 sm:py-28" style={{ backgroundColor }} id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2
            className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold leading-6 ring-1 ring-inset"
            style={{ color: primaryColor, borderColor: primaryColor }}
          >
            Features
          </h2>
          <p
            className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: textColor }}
          >
            {title}
          </p>
          <p
            className="mt-4 text-lg leading-8"
            style={{ color: textColor, opacity: 0.8 }}
          >
            {description}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const IconComponent = getRandomIcon(index);
              const cardStyle = getCardStyle(index);

              return (
                <div
                  key={benefit.title}
                  className="relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: cardStyle.background }}
                >
                  <div className="relative z-10 flex h-full flex-col gap-6">
                    <dt className="inline-flex items-center text-base font-semibold text-white">
                      <IconComponent
                        className="h-6 w-6 flex-none"
                        aria-hidden="true"
                      />
                      <span className="ml-4">{benefit.title}</span>
                    </dt>
                    <dd className="text-base leading-7 text-white/80">
                      {benefit.description}
                    </dd>
                  </div>
                  {/* Decorative elements */}
                  <div
                    className="absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-20 mix-blend-multiply blur-2xl"
                    style={{
                      background: `radial-gradient(circle, white 0%, ${cardStyle.overlay} 100%)`,
                    }}
                  />
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

const Benefits3 = ({
  backgroundColor,
  textColor,
  secondaryColor,
  primaryColor,
  accentColor,
  font,
  name,
  benefits,
  title,
  description,
}: BenefitsProps) => {
  const getRandomIcon = (index: number) => {
    return icons[index % icons.length];
  };

  // Create dynamic background styles for cards
  const getCardStyle = (index: number) => {
    const isEven = index % 2 === 0;
    const baseColor = isEven ? primaryColor : secondaryColor;
    
    return {
      background: backgroundColor,
      border: `1px solid ${baseColor}15`,
      boxShadow: `0 4px 20px ${baseColor}10`
    };
  };

  // Create icon container style
  const getIconStyle = (index: number) => {
    const colors = [primaryColor, secondaryColor, accentColor];
    const color = colors[index % 3];
    
    return {
      background: `linear-gradient(135deg, ${color}15 0%, ${color}25 100%)`,
      color: color
    };
  };

  return (
    <div 
      className="py-20 sm:py-28"
      style={{ backgroundColor }} 
      id="features"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="flex justify-center">
            <h2 
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
              style={{ 
                background: `linear-gradient(135deg, ${primaryColor}15 0%, ${primaryColor}25 100%)`,
                color: primaryColor 
              }}
            >
              <span className="flex h-2 w-2 rounded-full" style={{ background: primaryColor }}></span>
              Features
            </h2>
          </div>
          <p 
            className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: textColor }}
          >
            {title}
          </p>
          <p 
            className="mt-4 text-lg leading-8"
            style={{ color: textColor, opacity: 0.8 }}
          >
            {description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const IconComponent = getRandomIcon(index);
              return (
                <div 
                  key={benefit.title}
                  className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={getCardStyle(index)}
                >
                  {/* Icon Container */}
                  <div 
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={getIconStyle(index)}
                  >
                    <IconComponent className="h-6 w-6" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div className="mt-4">
                    <h3 
                      className="text-lg font-semibold leading-6 mb-2"
                      style={{ color: textColor }}
                    >
                      {benefit.title}
                    </h3>
                    <p 
                      className="text-base leading-7"
                      style={{ color: textColor, opacity: 0.7 }}
                    >
                      {benefit.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div 
                    className="absolute right-6 top-6 h-12 w-12 rounded-full opacity-10 blur-xl transition-all duration-300 group-hover:opacity-30"
                    style={{ 
                      background: `radial-gradient(circle at center, ${primaryColor} 0%, transparent 70%)` 
                    }} 
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Benefits4 = ({
  backgroundColor,
  textColor,
  secondaryColor,
  primaryColor,
  accentColor,
  font,
  name,
  benefits,
  title,
  description,
}: BenefitsProps) => {
  const getRandomIcon = (index: number) => {
    return icons[index % icons.length];
  };

  const getCardStyle = (index: number) => {
    const colors = [primaryColor, secondaryColor, accentColor];
    const baseColor = colors[index % 3];
    
    return {
      background: backgroundColor,
      borderBottom: `2px solid ${baseColor}`,
      transition: 'all 0.3s ease'
    };
  };

  const getIconContainerStyle = (index: number) => {
    const colors = [primaryColor, secondaryColor, accentColor];
    const color = colors[index % 3];
    
    return {
      background: `linear-gradient(135deg, ${color}15, ${color}25)`,
      color: color
    };
  };

  return (
    <div 
      className="py-20 sm:py-28"
      style={{ backgroundColor }} 
      id="features"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:text-center mb-16 sm:mb-20">
          <div className="flex flex-col items-center">
            <h2 
              className="inline-flex items-center px-4 py-1.5 text-sm font-semibold rounded-full"
              style={{ 
                color: primaryColor,
                background: `${primaryColor}10`
              }}
            >
              Features
            </h2>
            <p 
              className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:px-8"
              style={{ color: textColor }}
            >
              {title}
            </p>
            <p 
              className="mt-6 text-lg leading-8 lg:px-8"
              style={{ color: textColor, opacity: 0.8 }}
            >
              {description}
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {benefits.map((benefit, index) => {
              const IconComponent = getRandomIcon(index);
              return (
                <div 
                  key={benefit.title}
                  className="group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={getCardStyle(index)}
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={getIconContainerStyle(index)}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 
                        className="text-lg font-semibold mb-2"
                        style={{ color: textColor }}
                      >
                        {benefit.title}
                      </h3>
                      <p 
                        className="text-base leading-relaxed"
                        style={{ color: textColor, opacity: 0.7 }}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtle decorative element */}
                  <div 
                    className="absolute right-4 bottom-4 opacity-[0.08] text-6xl font-bold"
                    style={{ color: textColor }}
                  >
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
