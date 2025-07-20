'use server';

/**
 * @fileOverview A flow that indexes vaulted content from the Restricted Section Scrolls.
 *
 * - indexVaultedContent - A function that generates an index for vaulted blog and video assets.
 * - IndexVaultedContentInput - The input type for the indexVaultedContent function.
 * - IndexVaultedContentOutput - The return type for the indexVaultedContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IndexVaultedContentInputSchema = z.object({
  content: z
    .string()
    .describe('The text content of the blog or a description of the video asset.'),
  title: z.string().describe('The title of the vaulted content.'),
  contentType: z
    .enum(['blog', 'video'])
    .describe('The type of content being indexed.'),
});
export type IndexVaultedContentInput = z.infer<typeof IndexVaultedContentInputSchema>;

const IndexVaultedContentOutputSchema = z.object({
  index: z
    .string()
    .describe(
      'An index of the vaulted content, including key topics, concepts, and timestamps (if applicable).' // Adjusted description
    ),
});
export type IndexVaultedContentOutput = z.infer<typeof IndexVaultedContentOutputSchema>;

export async function indexVaultedContent(
  input: IndexVaultedContentInput
): Promise<IndexVaultedContentOutput> {
  return indexVaultedContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'indexVaultedContentPrompt',
  input: {schema: IndexVaultedContentInputSchema},
  output: {schema: IndexVaultedContentOutputSchema},
  prompt: `You are an expert archivist, skilled at creating indexes for various types of content.

  Create a detailed index for the following vaulted content. The index should include key topics,
  concepts, and, if applicable, timestamps for important segments (for videos).

  Content Type: {{{contentType}}}
  Title: {{{title}}}
  Content: {{{content}}}

  Index:
  `,
});

const indexVaultedContentFlow = ai.defineFlow(
  {
    name: 'indexVaultedContentFlow',
    inputSchema: IndexVaultedContentInputSchema,
    outputSchema: IndexVaultedContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
