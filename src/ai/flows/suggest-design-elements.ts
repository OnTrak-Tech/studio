// 'use server';

/**
 * @fileOverview AI-powered tool to suggest design elements based on user input.
 *
 * - suggestDesignElements - A function that handles the design suggestion process.
 * - SuggestDesignElementsInput - The input type for the suggestDesignElements function.
 * - SuggestDesignElementsOutput - The return type for the suggestDesignElements function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestDesignElementsInputSchema = z.object({
  prompt: z.string().describe('A text or image prompt describing the design idea.'),
});
export type SuggestDesignElementsInput = z.infer<typeof SuggestDesignElementsInputSchema>;

const SuggestDesignElementsOutputSchema = z.object({
  materials: z
    .array(z.string())
    .describe('A list of suggested materials for the design.'),
  patterns: z
    .array(z.string())
    .describe('A list of suggested patterns for the design.'),
  silhouettes: z
    .array(z.string())
    .describe('A list of suggested silhouettes for the design.'),
});
export type SuggestDesignElementsOutput = z.infer<typeof SuggestDesignElementsOutputSchema>;

export async function suggestDesignElements(input: SuggestDesignElementsInput): Promise<SuggestDesignElementsOutput> {
  return suggestDesignElementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestDesignElementsPrompt',
  input: {schema: SuggestDesignElementsInputSchema},
  output: {schema: SuggestDesignElementsOutputSchema},
  prompt: `You are a fashion design assistant. A user will provide a description of a design idea, and you will suggest relevant materials, patterns, and silhouettes to inspire and accelerate the design process.

  Design Idea: {{{prompt}}}

  Materials: A comma separated list of materials suitable for the design.
  Patterns: A comma separated list of patterns suitable for the design.
  Silhouettes: A comma separated list of silhouettes suitable for the design.
  `,
});

const suggestDesignElementsFlow = ai.defineFlow(
  {
    name: 'suggestDesignElementsFlow',
    inputSchema: SuggestDesignElementsInputSchema,
    outputSchema: SuggestDesignElementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
