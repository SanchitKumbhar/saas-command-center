import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import AppLayout from "./components/layout/AppLayout";

// ---- Root Route ----
const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

// ---- Lazy page imports ----
import { Suspense, lazy } from "react";
import { LoadingState } from "./components/shared/LoadingState";

const LandingPage = lazy(() => import("./pages/Landing"));
const AuthPage = lazy(() => import("./pages/Auth"));
const DashboardPage = lazy(() => import("./pages/Dashboard"));
const PlannerPage = lazy(() => import("./pages/Planner"));
const ExecutionPage = lazy(() => import("./pages/Execution"));
const ProjectsPage = lazy(() => import("./pages/Projects"));
const TasksPage = lazy(() => import("./pages/Tasks"));
const TeamPage = lazy(() => import("./pages/Team"));
const UpdatesPage = lazy(() => import("./pages/Updates"));

const Wrap = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingState />}>{children}</Suspense>
);

// ---- Public routes ----
const landingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Wrap>
      <LandingPage />
    </Wrap>
  ),
});

const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth",
  component: () => (
    <Wrap>
      <AuthPage />
    </Wrap>
  ),
});

// ---- App layout route ----
const appRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/app",
  component: () => (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
});

// ---- Protected child routes ----
const dashboardRoute = createRoute({
  getParentRoute: () => appRoute,
  path: "/dashboard",
  component: () => (
    <Wrap>
      <DashboardPage />
    </Wrap>
  ),
});

const plannerRoute = createRoute({
  getParentRoute: () => appRoute,
  path: "/planner",
  component: () => (
    <Wrap>
      <PlannerPage />
    </Wrap>
  ),
});

const executionRoute = createRoute({
  getParentRoute: () => appRoute,
  path: "/execution",
  component: () => (
    <Wrap>
      <ExecutionPage />
    </Wrap>
  ),
});

const projectsRoute = createRoute({
  getParentRoute: () => appRoute,
  path: "/projects",
  component: () => (
    <Wrap>
      <ProjectsPage />
    </Wrap>
  ),
});

const tasksRoute = createRoute({
  getParentRoute: () => appRoute,
  path: "/tasks",
  component: () => (
    <Wrap>
      <TasksPage />
    </Wrap>
  ),
});

const teamRoute = createRoute({
  getParentRoute: () => appRoute,
  path: "/team",
  component: () => (
    <Wrap>
      <TeamPage />
    </Wrap>
  ),
});

const updatesRoute = createRoute({
  getParentRoute: () => appRoute,
  path: "/updates",
  component: () => (
    <Wrap>
      <UpdatesPage />
    </Wrap>
  ),
});

// ---- Default redirect inside /app ----
const appIndexRoute = createRoute({
  getParentRoute: () => appRoute,
  path: "/",
  component: () => (
    <Wrap>
      <DashboardPage />
    </Wrap>
  ),
});

// ---- Router ----
const routeTree = rootRoute.addChildren([
  landingRoute,
  authRoute,
  appRoute.addChildren([
    appIndexRoute,
    dashboardRoute,
    plannerRoute,
    executionRoute,
    projectsRoute,
    tasksRoute,
    teamRoute,
    updatesRoute,
  ]),
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
