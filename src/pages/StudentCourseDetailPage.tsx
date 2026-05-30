import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { MOCK_COURSES, MOCK_LESSONS, MOCK_ASSIGNMENTS } from '@shared/mock-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, Circle, PlayCircle, FileText, Download, ArrowLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
export function StudentCourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const course = MOCK_COURSES.find(c => c.id === id) || MOCK_COURSES[0];
  const lessons = MOCK_LESSONS.filter(l => l.courseId === course.id);
  const assignments = MOCK_ASSIGNMENTS.filter(a => a.courseId === course.id);
  return (
    <DashboardLayout userRole="Student">
      <div className="space-y-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link to="/student/courses"><ArrowLeft className="w-4 h-4 mr-2" /> Back to My Courses</Link>
        </Button>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-display font-bold tracking-tight">{course.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{course.description}</p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center"><PlayCircle className="w-4 h-4 mr-1.5" /> 12 Lessons</div>
                <div className="flex items-center"><Clock className="w-4 h-4 mr-1.5" /> 8.5 Total Hours</div>
                <div className="flex items-center font-medium text-foreground"><CheckCircle2 className="w-4 h-4 mr-1.5 text-green-500" /> {course.progress}% Completed</div>
              </div>
              <Progress value={course.progress} className="h-2 w-full max-w-md" />
            </div>
            <Tabs defaultValue="lessons" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-3 mb-6 h-12 bg-muted/50">
                <TabsTrigger value="lessons" className="h-10">Curriculum</TabsTrigger>
                <TabsTrigger value="assignments" className="h-10">Tasks</TabsTrigger>
                <TabsTrigger value="resources" className="h-10">Library</TabsTrigger>
              </TabsList>
              <TabsContent value="lessons" className="space-y-4">
                <Accordion type="single" collapsible defaultValue="section-1" className="w-full space-y-4">
                  <AccordionItem value="section-1" className="border rounded-xl px-6 bg-card">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <span className="text-lg font-bold">Module 1: Fundamentals</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="space-y-2">
                        {lessons.map((lesson) => (
                          <div key={lesson.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors cursor-pointer group">
                            <div className="flex items-center gap-3">
                              {lesson.isCompleted ? (
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                              ) : (
                                <Circle className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                              )}
                              <span className={lesson.isCompleted ? "text-muted-foreground line-through" : "font-medium"}>
                                {lesson.order}. {lesson.title}
                              </span>
                            </div>
                            <span className="text-xs text-muted-foreground">15:00</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              <TabsContent value="assignments" className="space-y-4">
                {assignments.length > 0 ? (
                   <div className="grid grid-cols-1 gap-4">
                     {assignments.map(a => (
                       <div key={a.id} className="flex items-center justify-between p-5 border rounded-xl bg-card shadow-sm">
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <FileText className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-bold">{a.title}</h4>
                              <p className="text-xs text-muted-foreground">Due {new Date(a.dueDate).toLocaleDateString()}</p>
                            </div>
                         </div>
                         <Button size="sm">View Assignment</Button>
                       </div>
                     ))}
                   </div>
                ) : (
                  <div className="p-10 text-center text-muted-foreground">No assignments for this course.</div>
                )}
              </TabsContent>
              <TabsContent value="resources" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {['Project Brief.pdf', 'Source Code.zip', 'Asset Pack.rar'].map((res, i) => (
                     <div key={i} className="flex items-center justify-between p-4 border rounded-xl bg-card hover:border-primary/40 transition-colors">
                        <span className="text-sm font-medium">{res}</span>
                        <Button variant="ghost" size="icon"><Download className="w-4 h-4" /></Button>
                     </div>
                   ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="w-full lg:w-80 space-y-6">
            <Card className="border-none shadow-soft overflow-hidden">
               <div className="aspect-video bg-muted relative">
                  <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
               </div>
               <CardHeader className="p-5">
                 <CardTitle className="text-xl">Enrolled</CardTitle>
                 <CardDescription>You joined this course on Jan 12, 2025.</CardDescription>
               </CardHeader>
               <CardContent className="p-5 pt-0">
                  <Button className="w-full h-12 text-lg font-bold bg-gradient-primary">Watch Next Lesson</Button>
               </CardContent>
            </Card>
            <Card className="bg-primary/5 border-none shadow-none p-5 rounded-xl space-y-3">
               <h4 className="font-bold text-sm">Instructor</h4>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20" />
                  <div>
                    <p className="text-sm font-bold leading-none">{course.instructorName}</p>
                    <p className="text-[10px] text-muted-foreground mt-1">Senior Technical Educator</p>
                  </div>
               </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}