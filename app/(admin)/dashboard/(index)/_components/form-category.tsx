"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ActionResult } from "@/types";
import { postCategory } from "../categories/lib/actions";
import { useActionState } from "react";
import { useForm } from "react-hook-form";
import {
  CategoryFormValues,
  categorySchema,
} from "../categories/lib/definition";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle } from "lucide-react";
import { initialState } from "@/lib/utils";

export default function FormCategory() {
  const [state, formAction, isPending] = useActionState(
    postCategory,
    initialState
  );

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
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
                  placeholder="Input Category Name"
                  {...field}
                  name="name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isPending}>
          {isPending ? "Saving..." : "Save Category"}
        </Button>
      </form>
    </Form>
  );
}
