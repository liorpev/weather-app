import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Home } from "../components/Home/home";

const homeSearchSchema = z.object({
  citySearch: z.string().optional().default(""),
  continent: z.string().optional().default(""),
  sortBy: z.enum(["name", "distance"]).optional().default("name"),
  temperatureUnit: z.enum(["C", "F"]).optional().default("C"),
});

export const Route = createFileRoute("/")({
  validateSearch: homeSearchSchema,
  component: Home,
});
