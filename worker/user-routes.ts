import { Hono } from "hono";
import type { Env } from './core-utils';
import { ok, bad, notFound } from './core-utils';
import { MOCK_USERS, MOCK_COURSES, MOCK_ASSIGNMENTS } from "@shared/mock-data";
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  // AUTH
  app.post('/api/auth/login', async (c) => {
    const { email } = (await c.req.json()) as { email?: string };
    const user = MOCK_USERS.find(u => u.email === email);
    if (!user) return bad(c, 'User not found');
    return ok(c, { user });
  });
  // STUDENT DATA
  app.get('/api/student/dashboard-summary', async (c) => {
    return ok(c, {
      courses: MOCK_COURSES,
      assignments: MOCK_ASSIGNMENTS,
      stats: { gpa: 3.85, completedHours: 42.5 }
    });
  });
  app.get('/api/student/courses', async (c) => {
    return ok(c, MOCK_COURSES);
  });
  app.get('/api/student/courses/:id', async (c) => {
    const course = MOCK_COURSES.find(c => c.id === c.req.param('id'));
    if (!course) return notFound(c, 'Course not found');
    return ok(c, course);
  });
  app.get('/api/student/assignments', async (c) => {
    return ok(c, MOCK_ASSIGNMENTS);
  });
  // LEGACY (from template, preserved for compatibility until Phase 3)
  app.get('/api/health', (c) => ok(c, { status: 'healthy' }));
}