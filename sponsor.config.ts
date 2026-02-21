import { defineConfig, tierPresets } from "sponsorkit";

export default defineConfig({
  renderer: "circles",
  // renderer: "tiers",
  github: {
    login: "DaleStudy",
    type: "organization",
  },
  tiers: [
    {
      title: "Past Sponsors",
      monthlyDollars: -1,
      preset: tierPresets.medium,
    },
    {
      title: "Sponsors",
      preset: tierPresets.large,
    },
  ],
  circles: {
    radiusMax: 50,
    radiusMin: 40,
    radiusPast: 30,
  },
  formats: ["svg"],
});
