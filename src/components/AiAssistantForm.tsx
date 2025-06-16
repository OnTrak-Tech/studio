"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, ShoppingBag, Scissors, Palette } from 'lucide-react'; // Palette for patterns
import { suggestDesignElements, type SuggestDesignElementsOutput } from '@/ai/flows/suggest-design-elements';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const aiAssistantFormSchema = z.object({
  prompt: z.string().min(10, { message: "Prompt must be at least 10 characters." }).max(500, { message: "Prompt cannot exceed 500 characters."}),
});

type AiAssistantFormValues = z.infer<typeof aiAssistantFormSchema>;

export function AiAssistantForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestDesignElementsOutput | null>(null);

  const form = useForm<AiAssistantFormValues>({
    resolver: zodResolver(aiAssistantFormSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const onSubmit: SubmitHandler<AiAssistantFormValues> = async (data) => {
    setIsLoading(true);
    setSuggestions(null);
    try {
      const result = await suggestDesignElements({ prompt: data.prompt });
      setSuggestions(result);
      toast({
        title: "Suggestions Generated!",
        description: "AI has provided some creative ideas for your design.",
      });
    } catch (error) {
      console.error("AI Assistant Error:", error);
      toast({
        title: "Error",
        description: "Failed to generate suggestions. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-headline text-xl text-foreground">Describe Your Design Idea</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., A summer dress inspired by ocean waves, using light and airy fabrics with a flowing silhouette..."
                    {...field}
                    className="font-body min-h-[150px] text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6 group" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-5 w-5 group-hover:animate-ping" />
            )}
            {isLoading ? 'Generating Ideas...' : 'Get AI Suggestions'}
          </Button>
        </form>
      </Form>

      {suggestions && (
        <div className="space-y-6 pt-8">
          <h2 className="font-headline text-3xl text-primary text-center">AI-Powered Suggestions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="font-headline text-xl text-primary">Materials</CardTitle>
                <ShoppingBag className="h-5 w-5 text-accent" />
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 font-body text-sm text-muted-foreground">
                  {suggestions.materials.map((item, index) => <li key={`mat-${index}`}>{item}</li>)}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="font-headline text-xl text-primary">Patterns</CardTitle>
                <Palette className="h-5 w-5 text-accent" />
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 font-body text-sm text-muted-foreground">
                  {suggestions.patterns.map((item, index) => <li key={`pat-${index}`}>{item}</li>)}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="font-headline text-xl text-primary">Silhouettes</CardTitle>
                <Scissors className="h-5 w-5 text-accent" />
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 font-body text-sm text-muted-foreground">
                  {suggestions.silhouettes.map((item, index) => <li key={`sil-${index}`}>{item}</li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
