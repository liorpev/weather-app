import { render, waitFor } from "@testing-library/react";
import type { RenderResult } from "@testing-library/react";
import { act } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createRouter,
  createMemoryHistory,
} from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen";

// Create test versions of the providers
export function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // Disable retries for tests
        staleTime: 0,
        gcTime: 0,
      },
      mutations: {
        retry: false,
      },
    },
  });
}

export function createTestRouter(initialLocation = "/", searchParams = "") {
  const queryClient = createTestQueryClient();

  const history = createMemoryHistory({
    initialEntries: [initialLocation + searchParams],
  });

  const router = createRouter({
    routeTree,
    context: {
      queryClient,
    },
    history,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
  });

  return { router, queryClient };
}

// Custom render function for testing routes with providers
export async function renderRoute(initialLocation = "/", searchParams = "") {
  const { router, queryClient } = createTestRouter(
    initialLocation,
    searchParams
  );

  let renderResult: RenderResult | undefined;

  await act(async () => {
    // Wait for router to be ready
    await router.load();

    renderResult = render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    );
  });

  if (!renderResult) {
    throw new Error("Failed to render component");
  }

  // Wait for any pending router updates to complete
  await waitFor(() => {
    expect(renderResult!.container).toBeTruthy();
  });

  return {
    ...renderResult,
    router,
    queryClient,
  };
}
