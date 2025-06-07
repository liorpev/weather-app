import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { CityPage } from "../components/CityPage/city-page";
import { CityPageSkeleton } from "../components/CityPage/components/city-page-skeleton";
import { weatherQueryOptions } from "../lib/weather-queries";

const citySearchSchema = z.object({
  citySearch: z.string().optional().default(""),
  continent: z.string().optional().default(""),
  sortBy: z.enum(["name", "distance"]).optional().default("name"),
  temperatureUnit: z.enum(["C", "F"]).optional().default("C"),
  lat: z
    .union([z.string(), z.number()])
    .optional()
    .transform((val) => {
      if (val === undefined) return 0;
      return typeof val === "string" ? parseFloat(val) : val;
    }),
  lng: z
    .union([z.string(), z.number()])
    .optional()
    .transform((val) => {
      if (val === undefined) return 0;
      return typeof val === "string" ? parseFloat(val) : val;
    }),
});

export const Route = createFileRoute("/city/$cityName")({
  validateSearch: citySearchSchema,
  loaderDeps: ({ search }) => ({
    lat: search.lat,
    lng: search.lng,
  }),
  loader: async ({ context, deps }) => {
    const { lat, lng } = deps;

    if (lat && lng && lat !== 0 && lng !== 0) {
      await context.queryClient.ensureQueryData(weatherQueryOptions(lat, lng));
    }
  },
  component: CityPage,
  pendingComponent: CityPageSkeleton,
});
