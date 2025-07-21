'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating search queries to find funding opportunities.
 *
 * - generateFundingSearchQueries - A function that generates relevant search queries for funding opportunities.
 * - GenerateFundingSearchQueriesInput - The input type for the generateFundingSearchQueries function.
 * - GenerateFundingSearchQueriesOutput - The return type for the generateFundingSearchQueries function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFundingSearchQueriesInputSchema = z.object({
  projectTitle: z.string().describe('The title of the academic project.'),
  projectDescription: z.string().describe('A detailed description of the academic project.'),
  magicField: z.string().describe('The magic field/subject of the project (e.g., Divination, Runes, Charms).'),
  userSkills: z.array(z.string()).describe('List of user skills related to project.'),
});
export type GenerateFundingSearchQueriesInput = z.infer<typeof GenerateFundingSearchQueriesInputSchema>;

const FundingSourceSchema = z.object({
    name: z.string().describe("The name of the funding source (e.g., 'Gringotts Grants for Magical Startups')."),
    description: z.string().describe("A brief description of why this source is a good fit for the project."),
    type: z.enum(['grant', 'scholarship', 'fellowship']).describe("The type of funding.")
});

const MentorSchema = z.object({
    name: z.string().describe("The name of a potential mentor."),
    expertise: z.string().describe("The mentor's area of expertise and why they are a good match."),
});

const GenerateFundingSearchQueriesOutputSchema = z.object({
  searchQueries: z.array(z.string()).describe('An array of search queries tailored for finding funding opportunities.'),
  fundingSources: z.array(FundingSourceSchema).describe("A list of potential funding sources."),
  mentors: z.array(MentorSchema).describe("A list of potential mentors."),
});
export type GenerateFundingSearchQueriesOutput = z.infer<typeof GenerateFundingSearchQueriesOutputSchema>;

export async function generateFundingSearchQueries(input: GenerateFundingSearchQueriesInput): Promise<GenerateFundingSearchQueriesOutput> {
  return generateFundingSearchQueriesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFundingSearchQueriesPrompt',
  input: {schema: GenerateFundingSearchQueriesInputSchema},
  output: {schema: GenerateFundingSearchQueriesOutputSchema},
  prompt: `You are an AI assistant specialized in helping students find funding opportunities and mentorship for their academic projects.

  Given the following information about a student's project, generate:
  1. An array of diverse search queries.
  2. A list of 2-3 potential funding sources (grants, scholarships) with a brief explanation of their relevance.
  3. A list of 1-2 potential mentors with expertise relevant to the project.

  Project Title: {{{projectTitle}}}
  Project Description: {{{projectDescription}}}
  Magic Field/Subject: {{{magicField}}}
  User Skills: {{#each userSkills}}{{{this}}}, {{/each}}

  Ensure the output is creative, relevant to the magical/academic theme, and structured according to the output schema.
`,
});

const generateFundingSearchQueriesFlow = ai.defineFlow(
  {
    name: 'generateFundingSearchQueriesFlow',
    inputSchema: GenerateFundingSearchQueriesInputSchema,
    outputSchema: GenerateFundingSearchQueriesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
