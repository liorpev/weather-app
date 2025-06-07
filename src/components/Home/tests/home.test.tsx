import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderRoute } from "../../../test/test-utils";

describe("Home Component", () => {
  it("should prefill form fields with search params from URL", async () => {
    // Render the route with search params - no mocking needed!
    const searchParams =
      "?citySearch=New%20York&continent=North%20America&sortBy=distance&temperatureUnit=F";

    await renderRoute("/", searchParams);
    // Check that form fields are prefilled with the search params
    const searchInput = screen.getByLabelText(/search/i) as HTMLInputElement;
    const continentSelect = screen.getByLabelText(
      /continent/i
    ) as HTMLSelectElement;
    const distanceRadio = screen.getByLabelText(
      /distance/i
    ) as HTMLInputElement;
    const fahrenheitRadio = screen.getByLabelText(/°f/i) as HTMLInputElement;
    const nameRadio = screen.getByLabelText(/name/i) as HTMLInputElement;
    const celsiusRadio = screen.getByLabelText(/°c/i) as HTMLInputElement;

    // Assert that the values match the search params
    expect(searchInput.value).toBe("New York");
    expect(continentSelect.value).toBe("North America");
    expect(distanceRadio.checked).toBe(true);
    expect(nameRadio.checked).toBe(false);
    expect(fahrenheitRadio.checked).toBe(true);
    expect(celsiusRadio.checked).toBe(false);
  });
});
