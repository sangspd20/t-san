"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50", { variants: { variant: { default: "bg-primary text-primary-foreground hover:bg-primary-hover", outline: "border bg-surface hover:bg-surface-secondary", ghost: "hover:bg-surface-secondary" }, size: { default: "h-9 px-3", sm: "h-8 px-2.5 text-xs", lg: "h-10 px-4" } }, defaultVariants: { variant: "default", size: "default" } });
export function Button({ className, variant, size, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) { return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />; }
export function Input({ className, ...props }: React.ComponentProps<"input">) { return <input className={cn("h-9 w-full rounded-md border bg-surface px-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary", className)} {...props} />; }
export function Label({ className, ...props }: React.ComponentProps<"label">) { return <label className={cn("text-sm font-medium", className)} {...props} />; }
export const Badge = ({ className, ...props }: React.ComponentProps<"span">) => <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium", className)} {...props} />;
export const Separator = ({ className, ...props }: React.ComponentProps<"div">) => <div role="separator" className={cn("h-px w-full bg-border", className)} {...props} />;
export const Skeleton = ({ className, ...props }: React.ComponentProps<"div">) => <div className={cn("animate-pulse rounded-md bg-surface-secondary", className)} {...props} />;
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Content>) => <DialogPrimitive.Portal><DialogPrimitive.Overlay className="fixed inset-0 bg-foreground/20" /><DialogPrimitive.Content className={cn("fixed left-1/2 top-1/2 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-surface p-5 shadow-xl", className)} {...props} /></DialogPrimitive.Portal>;
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = ({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) => <DropdownMenuPrimitive.Portal><DropdownMenuPrimitive.Content className={cn("z-50 min-w-40 rounded-md border bg-surface p-1 shadow-lg", className)} {...props} /></DropdownMenuPrimitive.Portal>;
export const DropdownMenuItem = ({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Item>) => <DropdownMenuPrimitive.Item className={cn("cursor-pointer rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-surface-secondary", className)} {...props} />;
export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = () => <ToastPrimitive.Viewport className="fixed right-4 top-4 z-50 flex w-80 max-w-[calc(100vw-2rem)] flex-col gap-2" />;
export const Toast = ({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Root>) => <ToastPrimitive.Root className={cn("rounded-md border bg-surface p-4 shadow-lg", className)} {...props} />;
export const ToastTitle = ToastPrimitive.Title;
export const ToastDescription = ToastPrimitive.Description;
export const ToastAction = ToastPrimitive.Action;
