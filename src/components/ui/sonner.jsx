"use client";
import { Toaster as Sonner } from "sonner"

// LOCAL PATCH: upstream imports `useTheme` from `next-themes` purely to forward
// a theme string. This site has no dark mode (`darkMode: ['class']` is declared
// so shadcn compiles, but nothing ever sets `dark` on <html>), so the dependency
// bought nothing. Hard-coded to "light" and `next-themes` was uninstalled.
// Pass `theme` explicitly if dark mode is ever switched on.
const Toaster = ({
  theme = "light",
  ...props
}) => {
  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props} />
  );
}

export { Toaster }
