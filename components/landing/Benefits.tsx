"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils";

import { ServerCrash, Bomb, CheckCheck } from "lucide-react";

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
  font,
  name,
  benefits,
  title,
  description,
}: BenefitsProps) => {
  const fontClass = `font-${font}`;

  return (
    <div className="py-24 sm:py-32" style={{backgroundColor: backgroundColor}} id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {benefits.map((feature) => (
              <div key={feature.title} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    {/* <feature.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                    <Bomb  className="text-white" aria-hidden="true" />
                  </div>
                  {feature.description} 
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
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
  font,
  name,
  benefits,
  title,
  description,
}: BenefitsProps) => {
  const fontClass = `font-${font}`;

  return (
    <div className={`py-24 sm:py-32`} style={{backgroundColor: backgroundColor, color: textColor }} id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 text-center">
            Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
            {title}
          </p>
          <p className="mt-6 text-lg leading-8 opacity-80 text-gray-900">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className={`rounded-lg p-8 shadow-lg ring-1 ring-opacity-5 ${
                  index % 3 === 0 ? 'bg-indigo-500' :
                  index % 3 === 1 ? 'bg-fuchsia-600' : 'bg-blue-500'
                } text-white`}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <Bomb className="h-5 w-5 flex-none" aria-hidden="true" />
                  {benefit.title}
                </dt>
                <dd className="mt-4 text-base leading-7 opacity-80">
                  {benefit.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
