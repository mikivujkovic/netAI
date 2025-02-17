"use server";

import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";

import { content } from "../app/content";

import { colorSchema, heroSchema, benefitsSchema, ctaSchema, problemSchema } from "./schemas";
import { colorPrompt, heroPrompt, benefitsPrompt, ctaPrompt, problemPrompt } from "./prompts";

function getRandomNumber(n: number) {
  return Math.floor(Math.random() * n) + 1;
}

export const generateJson = async (
  schema: z.ZodObject<any>,
  prompt: string
) => {
  const generateOpenAI = async (schema: z.ZodObject<any>, prompt: string) => {
    const { object } = await generateObject({
      schema: schema,
      model: openai("chatgpt-4o-latest"),
      mode: "json",
      prompt: prompt,
    });
    return object;
  };
  try {
    const result = await generateOpenAI(schema, prompt);
    return JSON.stringify(result);
  } catch (error) {
    console.error("Error generating OpenAI response:", error);
    return JSON.stringify({ error: "Failed to generate the response" });
  }
};

export const generateContent = async (prompt: string, name: string) => {
  console.log("started to generate");
  const color = await generateJson(colorSchema, prompt + colorPrompt);
  console.log("generated color: ", color);
  const hero = await generateJson(heroSchema, prompt + heroPrompt);
  console.log("generated hero: ", hero);
  const problem = await generateJson(problemSchema, prompt + problemPrompt);
  console.log("generated problem: ", problem);
  const benefits = await generateJson(benefitsSchema, prompt + benefitsPrompt);
  const benefitsArrray = Object.values(JSON.parse(benefits).benefits);
  console.log("generated benefits: ", benefits);
  const cta = await generateJson(ctaSchema, prompt + ctaPrompt);
  console.log("generated cta: ", cta);

  const outputContent = {
    name: name,
    design: {
      colors: {
        background: JSON.parse(color).background,
        primary: JSON.parse(color).primary,
        secondary: JSON.parse(color).secondary,
        accent: JSON.parse(color).accent,
      },
      shadows: {
        intensity: "lg",
      },
      fonts: {
        heading: "Roboto",
        body: "Saira Condensed",
      },
    },
    components: [
      {
        type: "Heading",
        props: {
          variant: getRandomNumber(4),
          links: [
            {
              href: "#solution",
              text: "Our Approach",
            },
            {
              href: "#features",
              text: "Features",
            },
            {
              href: "#contact",
              text: "Contact Us",
            },
          ],
        },
      },
      {
        type: "Hero",
        props: {
          variant: getRandomNumber(4),
          headline: JSON.parse(hero).headline,
          description: JSON.parse(hero).description,
        },
      },
      {
        type: "Problem",
        props: {
          variant: getRandomNumber(4),
          problem: JSON.parse(problem).problem,
          agitate: JSON.parse(problem).agitate,
          solve: JSON.parse(problem).solve,
        },
      },
      {
        type: "Benefits",
        props: {
          variant: getRandomNumber(4),
          title: JSON.parse(benefits).title,
          description: JSON.parse(benefits).description,
          benefits: benefitsArrray,
        },
      },
      {
        type: "CTA",
        props: {
          variant: getRandomNumber(4),
          title: JSON.parse(cta).title,
          description: JSON.parse(cta).description,
          button: JSON.parse(cta).button,
          link: JSON.parse(cta).link,
        },
      },
      {
        type: "Footer",
        props: {
          variant: getRandomNumber(4),
          text: name,
        },
      },
    ],
  };
  return JSON.stringify(outputContent);
};
