'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { magicalFields } from '@/lib/types';
import { WandSparkles } from 'lucide-react';

const formSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters.'),
  description: z.string().min(20, 'Description must be at least 20 characters.'),
  field: z.string({ required_error: 'Please select a magical field.' }),
  skills: z.string().min(2, 'Please list at least one skill.'),
});

type VaultFormValues = z.infer<typeof formSchema>;

export default function VaultForm() {
  const { toast } = useToast();
  const form = useForm<VaultFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      skills: '',
    },
  });

  function onSubmit(values: VaultFormValues) {
    console.log(values);
    toast({
      title: 'Project Vaulted!',
      description: 'Your spell has been securely stored in the EduVault.',
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Spell Name (Project Title)</FormLabel>
              <FormControl>
                <Input placeholder="e.g., The Marauder's Map of Social Networks" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Grimoire Entry (Project Description)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your project, its goals, and its current state."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="field"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Magical Discipline</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a discipline for your project" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {magicalFields.map((fieldName) => (
                    <SelectItem key={fieldName} value={fieldName}>
                      {fieldName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Classifying your project helps others find it.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Required Incantations (Skills)</FormLabel>
              <FormControl>
                <Input placeholder="Python, PyTorch, Natural Language Processing..." {...field} />
              </FormControl>
               <FormDescription>
                A comma-separated list of skills, technologies, or concepts.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
            <Button type="submit" size="lg" className="transition-all duration-300 transform hover:scale-105">
                <WandSparkles className="mr-2 h-5 w-5" />
                Vault This Spell
            </Button>
        </div>
      </form>
    </Form>
  );
}
