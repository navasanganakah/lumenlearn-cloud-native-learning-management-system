import type { User, Course, Lesson, Assignment, Grade } from './types';
export const MOCK_USERS: User[] = [
  { id: 'u-std-1', name: 'Alex Student', email: 'student@lumenlearn.com', role: 'Student', avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
  { id: 'u-tchr-1', name: 'Dr. Sarah Smith', email: 'teacher@lumenlearn.com', role: 'Teacher', avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
  { id: 'u-adm-1', name: 'System Admin', email: 'admin@lumenlearn.com', role: 'Admin', avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin' }
];
export const MOCK_COURSES: Course[] = [
  { 
    id: 'c1', 
    title: 'Advanced React Patterns', 
    description: 'Master higher-order components, render props, and hooks for scalable apps.', 
    instructorId: 'u-tchr-1', 
    instructorName: 'Dr. Sarah Smith',
    imageUrl: 'https://placehold.co/600x400/007bff/ffffff?text=React+Patterns',
    progress: 65,
    studentsEnrolled: 1240
  },
  { 
    id: 'c2', 
    title: 'Fullstack with Cloudflare Workers', 
    description: 'Learn to build and deploy global applications at the edge.', 
    instructorId: 'u-tchr-1', 
    instructorName: 'Dr. Sarah Smith',
    imageUrl: 'https://placehold.co/600x400/f38020/ffffff?text=Cloudflare+Workers',
    progress: 30,
    studentsEnrolled: 850
  },
  { 
    id: 'c3', 
    title: 'Modern UI/UX Design Systems', 
    description: 'Creating consistent design languages with Tailwind and Radix.', 
    instructorId: 'u-tchr-2', 
    instructorName: 'Prof. Miller',
    imageUrl: 'https://placehold.co/600x400/6c757d/ffffff?text=UI+UX+Design',
    progress: 0,
    studentsEnrolled: 450
  }
];
export const MOCK_LESSONS: Lesson[] = [
  { id: 'l1', courseId: 'c1', title: 'Introduction to Hooks', order: 1, isCompleted: true },
  { id: 'l2', courseId: 'c1', title: 'Custom Hook Design', order: 2, isCompleted: true },
  { id: 'l3', courseId: 'c1', title: 'The useReducer Pattern', order: 3, isCompleted: false },
  { id: 'l4', courseId: 'c1', title: 'Compound Components', order: 4, isCompleted: false },
];
export const MOCK_ASSIGNMENTS: Assignment[] = [
  { 
    id: 'a1', 
    courseId: 'c1', 
    courseName: 'Advanced React Patterns', 
    title: 'Custom Hook Implementation', 
    description: 'Create a useAuth hook that handles session logic.', 
    dueDate: '2025-05-15T23:59:59Z', 
    maxPoints: 100, 
    status: 'Pending' 
  },
  { 
    id: 'a2', 
    courseId: 'c2', 
    courseName: 'Fullstack with Cloudflare Workers', 
    title: 'Durable Object Counter', 
    description: 'Implement a globally consistent counter using DO.', 
    dueDate: '2025-05-10T23:59:59Z', 
    maxPoints: 50, 
    status: 'Upcoming' 
  },
  { 
    id: 'a3', 
    courseId: 'c1', 
    courseName: 'Advanced React Patterns', 
    title: 'Render Props Exercise', 
    description: 'Refactor a standard component to use render props.', 
    dueDate: '2025-04-20T23:59:59Z', 
    maxPoints: 100, 
    status: 'Graded',
    score: 95
  }
];