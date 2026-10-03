import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const imageRef = z.object({
  src: z.string(),
  alt: z.string(),
});

const fotografias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/fotografias' }),
  schema: z.object({
    title: z.string(),
    cover: z.string(),
    order: z.number(),
    statement: z.string().optional(),
    images: z.array(imageRef).min(1),
  }),
});

const escrituras = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/escrituras' }),
  schema: z.object({
    title: z.string(),
    cover: z.string(),
    order: z.number(),
    images: z.array(imageRef).optional(),
  }),
});

const exploraciones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/exploraciones' }),
  schema: z.object({
    title: z.string(),
    cover: z.string(),
    order: z.number(),
    statement: z.string().optional(),
    images: z.array(imageRef).min(1),
  }),
});

export const collections = { fotografias, escrituras, exploraciones };