import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { MOCK_COURSES, MOCK_ASSIGNMENTS } from '@shared/mock-data';
import { Calendar, BookOpen, Star, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
export function StudentDashboard() {
  const activeCourses = MOCK_COURSES.slice(0, 3);
  const upcomingAssignments = MOCK_ASSIGNMENTS.filter(a => a.status !== 'Graded').slice(0, 3);
  return (
    <DashboardLayout userRole="Student">
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-display font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-1 text-lg">Welcome back! You have 2 assignments due this week.</p>
          </div>
          <Button className="w-fit" size="lg">
            Resume Learning <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-none shadow-soft bg-blue-50/50 dark:bg-blue-900/10">
            <CardHeader className="pb-2">
              <CardDescription>Courses Enrolled</CardDescription>
              <CardTitle className="text-3xl font-bold">{MOCK_COURSES.length}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-xs text-blue-600 font-medium">
                <BookOpen className="w-3 h-3 mr-1" /> 2 completions pending
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-soft bg-orange-50/50 dark:bg-orange-900/10">
            <CardHeader className="pb-2">
              <CardDescription>GPA</CardDescription>
              <CardTitle className="text-3xl font-bold">3.85</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-xs text-orange-600 font-medium">
                <Star className="w-3 h-3 mr-1" /> Top 5% of class
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-soft bg-green-50/50 dark:bg-green-900/10">
            <CardHeader className="pb-2">
              <CardDescription>Hours Learned</CardDescription>
              <CardTitle className="text-3xl font-bold">42.5</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-xs text-green-600 font-medium">
                <Clock className="w-3 h-3 mr-1" /> +12% from last week
              </div>
            </CardContent>
          </Card>
        </div>
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Current Progress</h2>
            <Button variant="ghost" asChild>
              <Link to="/student/courses">View All <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden shadow-soft hover:shadow-lg transition-all group">
                <div className="aspect-video w-full overflow-hidden">
                  <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg line-clamp-1">{course.title}</CardTitle>
                  <CardDescription className="text-xs">{course.instructorName}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Course Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-1.5" />
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link to={`/student/courses/${course.id}`}>Continue</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <section className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold">Upcoming Assignments</h2>
            <div className="space-y-4">
              {upcomingAssignments.map((assignment) => (
                <div key={assignment.id} className="flex items-center p-4 rounded-xl border bg-card/50 hover:bg-accent transition-colors cursor-pointer border-l-4 border-l-primary shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">{assignment.title}</h4>
                    <p className="text-xs text-muted-foreground truncate">{assignment.courseName}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="flex items-center text-xs font-medium text-destructive">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(assignment.dueDate).toLocaleDateString()}
                    </div>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Due Soon</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Announcements</h2>
            <div className="space-y-4">
              <Card className="bg-muted/50 border-none shadow-none">
                <CardHeader className="p-4">
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">New Resource Added</h4>
                      <p className="text-xs text-muted-foreground">Dr. Sarah Smith uploaded "React Perf Cheat Sheet" to Advanced React Patterns.</p>
                      <p className="text-[10px] pt-1">2 hours ago</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card className="bg-muted/50 border-none shadow-none">
                <CardHeader className="p-4">
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Course Completed!</h4>
                      <p className="text-xs text-muted-foreground">Congratulations! You finished "Design Basics".</p>
                      <p className="text-[10px] pt-1">Yesterday</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}