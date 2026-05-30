import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { MOCK_COURSES } from '@shared/mock-data';
import { BookOpen, User, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
export function StudentCoursesPage() {
  return (
    <DashboardLayout userRole="Student">
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-3xl font-display font-bold">My Courses</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9">
              <Filter className="w-4 h-4 mr-2" /> Filters
            </Button>
            <Button size="sm" className="h-9">
              Browse More
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MOCK_COURSES.map((course) => (
            <Card key={course.id} className="overflow-hidden border border-border/50 shadow-soft hover:shadow-xl transition-all group flex flex-col">
              <div className="aspect-video w-full overflow-hidden relative">
                <img 
                  src={course.imageUrl} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  {course.progress === 100 ? 'Completed' : 'In Progress'}
                </div>
              </div>
              <CardHeader className="pb-3 flex-grow">
                <CardTitle className="text-lg group-hover:text-primary transition-colors leading-snug">{course.title}</CardTitle>
                <div className="flex items-center text-xs text-muted-foreground mt-2">
                  <User className="w-3 h-3 mr-1" />
                  {course.instructorName}
                </div>
                <CardDescription className="text-xs line-clamp-2 mt-2 leading-relaxed">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 mt-auto">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-1" />
                </div>
                <Button className="w-full h-10 font-semibold group-hover:bg-primary" asChild>
                  <Link to={`/student/courses/${course.id}`}>
                    Go to Course <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}