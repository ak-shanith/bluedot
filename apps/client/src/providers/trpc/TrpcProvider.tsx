import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpLink } from "@trpc/client/links/httpLink";
import { PropsWithChildren, useState } from "react";

import { t } from "@trpc";

const useTrpc = () => {
  const [trpcQueryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  const [trpcClient] = useState(() =>
    t.createClient({ links: [httpLink({ url: "/trpc" })] })
  );

  return {
    trpcQueryClient,
    trpcClient,
  };
};

export const TrpcProvider = ({ children }: PropsWithChildren) => {
  const { trpcQueryClient, trpcClient } = useTrpc();
  return (
    <t.Provider client={trpcClient} queryClient={trpcQueryClient}>
      <QueryClientProvider client={trpcQueryClient}>
        {children}
      </QueryClientProvider>
    </t.Provider>
  );
};
