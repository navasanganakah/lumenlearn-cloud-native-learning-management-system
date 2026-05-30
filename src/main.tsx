import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { AuthPage } from '@/pages/AuthPage'
import { StudentDashboard } from '@/pages/StudentDashboard'
import { StudentCoursesPage } from '@/pages/StudentCoursesPage'
import { StudentCourseDetailPage } from '@/pages/StudentCourseDetailPage'
import { StudentAssignmentsPage } from '@/pages/StudentAssignmentsPage'
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/student/dashboard",
    element: <StudentDashboard />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/student/courses",
    element: <StudentCoursesPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/student/courses/:id",
    element: <StudentCourseDetailPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/student/assignments",
    element: <StudentAssignmentsPage />,
    errorElement: <RouteErrorBoundary />,
  },
  // Redirects for other roles (to be implemented)
  {
    path: "/teacher/dashboard",
    element: <div className="p-10 text-center">Teacher Dashboard Placeholder</div>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/admin/dashboard",
    element: <div className="p-10 text-center">Admin Dashboard Placeholder</div>,
    errorElement: <RouteErrorBoundary />,
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
)