"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      aria-label="Toggle theme"
      type="button"
      variant="ghost"
      size="icon"
      className="cursor-pointer"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="size-4 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="size-4 hidden dark:block dark:text-neutral-200" />
    </Button>
  );
}
