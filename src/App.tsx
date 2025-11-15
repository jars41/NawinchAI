import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import HomePage from "./pages/HomePage";
import BookDetailsPage from "./pages/BookDetailsPage";
import ReadingPage from "./pages/ReadingPage";
import AudioPage from "./pages/AudioPage";
import VideoPage from "./pages/VideoPage";
import LessonPage from "./pages/LessonPage";
import SummaryPage from "./pages/SummaryPage";
import LoginPage from "./pages/LoginPage";
import PreferencesPage from "./pages/PreferencesPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Chatbot from "./components/Chatbot";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/preferences"
              element={
                <ProtectedRoute>
                  <PreferencesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/*"
              element={
                <ProtectedRoute requirePreferences>
                  <>
                    <Header />
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/book/:id" element={<BookDetailsPage />} />
                      <Route path="/reading/:id" element={<ReadingPage />} />
                      <Route path="/audio/:id" element={<AudioPage />} />
                      <Route path="/video/:id" element={<VideoPage />} />
                      <Route path="/lesson/:lessonId" element={<LessonPage />} />
                      <Route path="/summary" element={<SummaryPage />} />
                      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Chatbot />
                  </>
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
