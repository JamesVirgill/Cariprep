import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const StaticRedirect = ({ to }: { to: string }) => {
  useEffect(() => { window.location.replace(to); }, [to]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/before/*"      element={<StaticRedirect to="/before/index.html" />} />
          <Route path="/during/*"      element={<StaticRedirect to="/during/index.html" />} />
          <Route path="/after/*"       element={<StaticRedirect to="/after/index.html" />} />
          <Route path="/contacts/*"    element={<StaticRedirect to="/contacts/index.html" />} />
          <Route path="/shelters/*"    element={<StaticRedirect to="/shelters/index.html" />} />
          <Route path="/checklist/*"   element={<StaticRedirect to="/checklist/index.html" />} />
          <Route path="/supply-kit/*"  element={<StaticRedirect to="/supply-kit/index.html" />} />
          <Route path="/family-plan/*" element={<StaticRedirect to="/family-plan/index.html" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
