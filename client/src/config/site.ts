/**
 * Site-level config — edit here to rebrand.
 */
export const siteConfig = {
  name: "LaunchBoard",
  tagline: "The open index for builders and makers.",
  description:
    "Submit, discover, and vote on tools and products shaping the next wave of software.",
  copyright: `© ${new Date().getFullYear()} LaunchBoard`,

  nav: [
    { to: "/", label: "Discover" },
    { to: "/library", label: "Index" },
    { to: "/about", label: "About" },
    { to: "/builders", label: "Builders" },
    { to: "/partners", label: "Partners" },
  ],

  /** Categories shown in Library filter and Submit form */
  categories: ["CREATIVE", "UTILITIES", "SECURITY", "WEB3", "SYSTEM", "OTHER"] as const,

  /** Tier labels for the Partners page */
  partnerTiers: {
    CORE: "primary",
    PROTOCOL: "secondary",
    INFRASTRUCTURE: "tertiary",
  } as Record<string, string>,
} as const;

export type Category = typeof siteConfig.categories[number] | "ALL";
