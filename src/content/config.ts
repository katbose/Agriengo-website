import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().default('Pradeep Nagar'),
    tags: z.array(z.string()).default(['Organic Farming']),
  }),
});

const faq = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    order: z.number().default(0),
    category: z.string().default('General'),
  }),
});

export const collections = { blog, faq };
