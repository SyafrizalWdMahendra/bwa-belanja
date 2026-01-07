// "use client";
// import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
// import { deleteCategory } from "../lib/actions";
// import { initialState } from "@/lib/types";
// import { useActionState } from "react";
// import { Trash } from "lucide-react";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";

// export default function FormDeleteCategory({ id }: { id: number }) {
//   const deleteActionWithId = deleteCategory.bind(null, id);

//   const [state, formAction, isPending] = useActionState(
//     async (_state: any, formData: FormData) => {
//       return await deleteActionWithId();
//     },
//     initialState
//   );

//   return (
//     <AlertDialog>
//       <AlertDialogTrigger asChild>
//         <DropdownMenuItem
//           className="text-red-600 focus:text-red-600"
//           onSelect={(e: any) => e.preventDefault()}
//         >
//           <Trash className="w-4 h-4 mr-2 text-red-600" />
//           <span>Delete</span>
//         </DropdownMenuItem>
//       </AlertDialogTrigger>

//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
//           <AlertDialogDescription>
//             Tindakan ini tidak dapat dibatalkan. Data kategori ini akan dihapus
//             secara permanen dari server kami.
//           </AlertDialogDescription>
//         </AlertDialogHeader>

//         <AlertDialogFooter>
//           <AlertDialogCancel>Batal</AlertDialogCancel>

//           <form action={formAction}>
//             <AlertDialogAction
//               type="submit"
//               className="bg-red-600 hover:bg-red-700 text-white"
//               disabled={isPending}
//             >
//               {isPending ? "Menghapus..." : "Ya, Hapus"}
//             </AlertDialogAction>
//           </form>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }
