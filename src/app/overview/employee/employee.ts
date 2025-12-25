import { Component } from '@angular/core';
import { StudentsComponent } from "../students/students.component";
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [StudentsComponent, MenuModule, BadgeModule, AvatarModule, RippleModule, ButtonModule, MenubarModule, InputTextModule, CommonModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  get_all_employee: any = [];

  constructor() { }




}
