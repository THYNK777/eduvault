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

const GenerateFundingSearchQueriesOutputSchema = z.object({
  searchQueries: z.array(z.string()).describe('An array of search queries tailored for finding funding opportunities.'),
});
export type GenerateFundingSearchQueriesOutput = z.infer<typeof GenerateFundingSearchQueriesOutputSchema>;

export async function generateFundingSearchQueries(input: GenerateFundingSearchQueriesInput): Promise<GenerateFundingSearchQueriesOutput> {
  return generateFundingSearchQueriesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFundingSearchQueriesPrompt',
  input: {schema: GenerateFundingSearchQueriesInputSchema},
  output: {schema: GenerateFundingSearchQueriesOutputSchema},
  prompt: `You are an AI assistant specialized in generating search queries to help students find funding opportunities for their academic projects.

  Given the following information about a student's project, generate an array of diverse search queries that can be used to find relevant research grants, scholarships, and mentors.

  Project Title: {{{projectTitle}}}
  Project Description: {{{projectDescription}}}
  Magic Field/Subject: {{{magicField}}}
  User Skills: {{#each userSkills}}{{{this}}}, {{/each}}

  Ensure that the search queries are specific, targeted, and cover a range of potential funding sources and mentorship opportunities.
  The magic field name should be incorporated in at least one search query.
  Consider skills and the project title when constructing the queries.
  Return the queries in an array.
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
