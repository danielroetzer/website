import { glob } from 'astro/loaders';
import { defineCollection, reference, z } from 'astro:content';

const companyProjects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/companies' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    company: reference('companies'),
  }),
});

const companies = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/companies' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    homepage: z.string().url(),
    startDate: z.string().date(),
    endDate: z.date().nullable(),
  }),
});

export const collections = { companyProjects, companies };
