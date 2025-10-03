import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import OnboardingFlow from "./components/OnboardingFlow";
import ResourceLibrary from "./pages/ResourceLibrary";
import ResourceDetail from "./pages/ResourceDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={
                hasCompletedOnboarding ? (
                  <Navigate to="/resources" replace />
                ) : (
                  <OnboardingFlow onComplete={() => setHasCompletedOnboarding(true)} />
                )
              } 
            />
            <Route path="/resources" element={<ResourceLibrary />} />
            <Route path="/resources/:resourceId" element={<ResourceDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
