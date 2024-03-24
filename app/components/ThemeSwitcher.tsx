"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./Icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mx-2 hover:scale-110 duration-300">
      {theme === "dark" && (
        <span onClick={() => setTheme("light")}>{<SunIcon />}</span>
      )}
      {theme === "light" && (
        <span onClick={() => setTheme("dark")}>{<MoonIcon />}</span>
      )}
    </div>
  );
}
