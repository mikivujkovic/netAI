import { z } from "zod";

export const colorSchema = z.object({
  background: z.string(),
  primary: z.string(),
  secondary: z.string(),
  accent: z.string(),
});

export const heroSchema = z.object({
  headline: z.string(),
  description: z.string(),
});

export const problemSchema = z.object({
  problem: z.string(),
  agitate: z.string(),
  solve: z.string(),
});

export const benefitsSchema = z.object({
  title: z.string(),
  description: z.string(),
  benefits: z.array(z.object({
    title: z.string(),
    description: z.string(),
  })),
});

export const ctaSchema = z.object({
  title: z.string(),
  description: z.string(),
  button: z.string(),
  link: z.string(),
});
