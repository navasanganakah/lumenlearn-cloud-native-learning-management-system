export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
export type UserRole = 'Student' | 'Teacher' | 'Admin';
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
}
export interface Course {
  id: string;
  title: string;
  description: string;
  instructorId: string;
  instructorName: string;
  imageUrl: string;
  progress?: number;
  studentsEnrolled?: number;
}
export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  contentUrl?: string;
  order: number;
  isCompleted?: boolean;
}
export interface Assignment {
  id: string;
  courseId: string;
  courseName: string;
  title: string;
  description: string;
  dueDate: string;
  maxPoints: number;
  status: 'Upcoming' | 'Pending' | 'Graded';
  score?: number;
}
export interface Grade {
  id: string;
  assignmentId: string;
  studentId: string;
  score: number;
  feedback?: string;
  ts: number;
}
export interface Chat {
  id: string;
  title: string;
}
export interface ChatMessage {
  id: string;
  chatId: string;
  userId: string;
  text: string;
  ts: number;
}