import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { DataService } from '../../data-service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class StudentsComponent {
  data: any[] = [];
  columns_courses = [
    { field: 'id', header: '# ID' },
    { field: 'course_name', header: 'Course name' },
    { field: 'professor', header: 'Professor' },
    { field: 'ects', header: 'ECTS' }
  ];

  columns = [
    { field: 'id', header: '# ID' },
    { field: 'first_name', header: 'First name' },
    { field: 'last_name', header: 'Last name' },
    { field: 'email', header: 'Email' },
    { field: 'ects', header: 'ECTS' }
  ];

  constructor(private dataService: DataService) {
    this.data = this.dataService.getStudents();
    this.data.forEach(student => {
      student.courses = this.dataService.getCourses(student.id);
    });
  }
}
