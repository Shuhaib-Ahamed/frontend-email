"use client";

// React and Next.
import { useState } from "react";

// External packages.
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface RqProviderProps {
  children: React.ReactNode;
}

export default function RqProvider({ children }: RqProviderProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
