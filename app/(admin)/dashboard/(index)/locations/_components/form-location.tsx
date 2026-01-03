"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle } from "lucide-react";
import { initialState } from "@/lib/types";
import { postLocation } from "../lib/actions";
import { LocationFormValues, locationSchema } from "../lib/definition";

export default function FormLocation() {
  const [state, formAction, isPending] = useActionState(
    postLocation,
    initialState
  );

  const form = useForm<LocationFormValues>({
    resolver: zodResolver(locationSchema),
    defaultValues: {
      name: "",
    },
  });

  return (
    <Form {...form}>
      <form
        action={formAction}
        className="space-y-8 p-6 border rounded-lg shadow-sm"
      >
        {state.error && (
          <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <span>{state.error}</span>
          </div>
        )}

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Input Location Name"
                  {...field}
                  name="name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Saving..." : "Save Category"}
          </Button>
          <Button
            variant="outline"
            type="button"
            onClick={() => window.history.back()}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}
