"use client";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { Dispatch, SetStateAction, useCallback } from "react";

export function useDragHandler<T extends { id: number | string }>(
  setData: Dispatch<SetStateAction<T[]>>
) {
  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (active && over && active.id !== over.id) {
        setData((currentData) => {
          const oldIndex = currentData.findIndex(
            (item) => item.id === active.id
          );
          const newIndex = currentData.findIndex((item) => item.id === over.id);
          return arrayMove(currentData, oldIndex, newIndex);
        });
      }
    },
    [setData]
  );

  return { handleDragEnd };
}
