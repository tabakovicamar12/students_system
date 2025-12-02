import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-register',
  imports: [FormsModule,
    CardModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    InputTextModule,
    ButtonModule,
    PasswordModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
  data: any = {};
  password_length = false;
  password_symbol = false;
  username_length = false;
  email_check = false;


  onRegister() {
    console.log(this.data);
  }

  checkPassword() {
    if (this.data.password) {
      if (this.data.password.length < 8) {
        this.password_length = false;
      }
      else {
        this.password_length = true;
      }

      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

      if (!pattern.test(this.data.password)) {
        this.password_symbol = false;
      } else {
        this.password_symbol = true;
      }
    }
    return false;
  }

  checkUsername() {
    if (this.data.username) {
      if (this.data.username.length <= 0) {
        this.username_length = false;
      }
      else {
        this.username_length = true;
      }
    }
    else {
      this.username_length = false;
    }
  }


  checkInput() {
    if (this.password_length === true && this.username_length === true && this.password_symbol === true && this.email_check === true) {
      return false;
    }
    else {
      return true;
    }
  }

  checkEmail() {
    if (this.data.email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!regex.test(this.data.email)) {
        this.email_check = false;
      } else {
        this.email_check = true;
      }
    }
    return false;
  }
}
