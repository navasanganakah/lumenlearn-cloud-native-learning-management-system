import { IndexedEntity } from "./core-utils";
import type { User, Course, Lesson, Assignment } from "@shared/types";
import { MOCK_USERS, MOCK_COURSES, MOCK_LESSONS, MOCK_ASSIGNMENTS } from "@shared/mock-data";
export class UserEntity extends IndexedEntity<User & { id: string }> {
  static readonly entityName = "user";
  static readonly indexName = "users";
  static readonly initialState: User & { id: string } = { id: "", name: "", email: "", role: 'Student' };
  static seedData = MOCK_USERS;
}
export class CourseEntity extends IndexedEntity<Course & { id: string }> {
  static readonly entityName = "course";
  static readonly indexName = "courses";
  static readonly initialState: Course & { id: string } = { 
    id: "", title: "", description: "", instructorId: "", instructorName: "", imageUrl: "" 
  };
  static seedData = MOCK_COURSES;
}
export class LessonEntity extends IndexedEntity<Lesson & { id: string }> {
  static readonly entityName = "lesson";
  static readonly indexName = "lessons";
  static readonly initialState: Lesson & { id: string } = { id: "", courseId: "", title: "", order: 0 };
  static seedData = MOCK_LESSONS;
}
export class AssignmentEntity extends IndexedEntity<Assignment & { id: string }> {
  static readonly entityName = "assignment";
  static readonly indexName = "assignments";
  static readonly initialState: Assignment & { id: string } = { 
    id: "", courseId: "", courseName: "", title: "", description: "", dueDate: "", maxPoints: 0, status: 'Upcoming' 
  };
  static seedData = MOCK_ASSIGNMENTS;
}