import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data = [
    { id: '1', first_name: 'John', last_name: "Doe", email: "test@tes.com", ects: 2, courses: [] },
    { id: '2', first_name: 'Jane', last_name: "Joe", email: "test@tes.com", ects: 4 , courses: [] },
  ];

  courses = [
    { id: '1', course_name: 'Introduction to Programming', professor: 'Dr. Mark Spencer', ects: 6, student_id: '1' },
    { id: '2', course_name: 'Advanced Databases', professor: 'Prof. Ana Kovač', ects: 5, student_id: '1' },
    { id: '3', course_name: 'Web Development Fundamentals', professor: 'Dr. Nikola Horvat', ects: 4, student_id: '1' },
    { id: '4', course_name: 'Algorithms and Data Structures', professor: 'Prof. Elena Petrović', ects: 7, student_id: '1' },
  ];

  addStudent(student: any) {
    this.data.push(student);
  }

  getStudents() {
    return this.data;
  }

  deleteStudent(studentId: string) {
    this.data = this.data.filter(student => student.id !== studentId);
  }

  getCourses(studentId: string) {
    return this.courses.filter(course => course.student_id === studentId);
  }

  getAllCourses() {
    return this.courses;
  }
}
