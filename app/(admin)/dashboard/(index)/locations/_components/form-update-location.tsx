"use client";

import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { initialState } from "@/lib/utils";
import { FormUpdateLocationProps } from "@/lib/utils";
import { updateLocation } from "../lib/actions";
import { LocationFormValues, locationSchema } from "../lib/definition";

export default function FormUpdateLocation({ data }: FormUpdateLocationProps) {
  const updateActionWithId = async (state: any, formData: FormData) => {
    return updateLocation(data.id, state, formData);
  };

  const [state, formAction, isPending] = useActionState(
    updateActionWithId,
    initialState
  );

  const form = useForm<LocationFormValues>({
    resolver: zodResolver(locationSchema),
    defaultValues: {
      name: data.name,
    },
  });

  return (
    <Form {...form}>
      <form
        action={formAction}
        className="space-y-8 p-6 border rounded-lg shadow-sm"
      >
        {state?.error && (
          <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md border border-red-200">
            Error: {state.error}
          </div>
        )}

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location Name</FormLabel>
              <FormControl>
                <Input placeholder="Update location name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Updating..." : "Save Changes"}
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
