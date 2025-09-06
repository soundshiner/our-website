
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AudioProvider } from "@/contexts/AudioContext";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Join from "./pages/Join";
import JoinDJ from "./pages/JoinDJ";
import JoinVolunteer from "./pages/JoinVolunteer";
import Shows from "./pages/Shows";
import Schedule from "./pages/Schedule";
import Events from "./pages/Events";
import Donate from "./pages/Donate";
import Merch from "./pages/Merch";
import Supporters from "./pages/Supporters";
import ListeningOptions from "./pages/ListeningOptions";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AudioProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/join" element={<Join />} />
              <Route path="/join/dj" element={<JoinDJ />} />
              <Route path="/join/volunteer" element={<JoinVolunteer />} />
              <Route path="/shows" element={<Shows />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/events" element={<Events />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/merch" element={<Merch />} />
              <Route path="/supporters" element={<Supporters />} />
              <Route path="/listening-options" element={<ListeningOptions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </AudioProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
