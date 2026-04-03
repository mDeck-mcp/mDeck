import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function getOs(): string {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("win")) return "windows";
  if (ua.includes("mac")) return "macos";
  if (ua.includes("linux")) return "linux";
  return "unknown";
}

/** Appends UTM params for nishantdev.space links; passes other URLs through unchanged. */
export function trackUrl(url: string): string {
  if (!url.includes("nishantdev.space")) return url;
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}utm_source=mcpdeck&utm_medium=desktop&utm_content=${getOs()}`;
}
