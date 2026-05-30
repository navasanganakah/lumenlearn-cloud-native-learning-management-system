import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { MOCK_ASSIGNMENTS } from '@shared/mock-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, ChevronRight } from 'lucide-react';
export function StudentAssignmentsPage() {
  const upcoming = MOCK_ASSIGNMENTS.filter(a => a.status === 'Upcoming');
  const pending = MOCK_ASSIGNMENTS.filter(a => a.status === 'Pending');
  const graded = MOCK_ASSIGNMENTS.filter(a => a.status === 'Graded');
  const AssignmentTable = ({ data }: { data: typeof MOCK_ASSIGNMENTS }) => (
    <div className="border rounded-xl bg-card shadow-sm overflow-hidden animate-fade-in">
      <Table>
        <TableHeader className="bg-muted/30">
          <TableRow>
            <TableHead className="w-[300px]">Assignment</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? data.map((a) => (
            <TableRow key={a.id} className="hover:bg-accent/30">
              <TableCell className="font-semibold py-4">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                     <FileText className="w-4 h-4 text-primary" />
                   </div>
                   {a.title}
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground text-sm">{a.courseName}</TableCell>
              <TableCell className="text-sm">
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1.5 opacity-50" />
                  {new Date(a.dueDate).toLocaleDateString()}
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={a.status === 'Upcoming' ? 'outline' : a.status === 'Pending' ? 'secondary' : 'default'} className="px-2 py-0.5">
                  {a.status} {a.score !== undefined && `(${a.score}/${a.maxPoints})`}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm">Details <ChevronRight className="ml-1 w-4 h-4" /></Button>
              </TableCell>
            </TableRow>
          )) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-12 text-muted-foreground">
                No assignments found in this category.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
  return (
    <DashboardLayout userRole="Student">
      <div className="space-y-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-display font-bold tracking-tight">Assignments</h1>
          <p className="text-muted-foreground">Manage and track all your academic tasks.</p>
        </div>
        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="bg-muted/50 mb-8 p-1 h-11 inline-flex w-auto border">
            <TabsTrigger value="upcoming" className="px-6">Upcoming</TabsTrigger>
            <TabsTrigger value="pending" className="px-6">Pending Submission</TabsTrigger>
            <TabsTrigger value="graded" className="px-6">Graded</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            <AssignmentTable data={upcoming} />
          </TabsContent>
          <TabsContent value="pending">
            <AssignmentTable data={pending} />
          </TabsContent>
          <TabsContent value="graded">
            <AssignmentTable data={graded} />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}