import { Component, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,
    CardModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    InputTextModule,
    ButtonModule,
    PasswordModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  checked1 = signal<boolean>(true);
  data: any = {};
  password_length = false;
  password_username = false;



  onLogin() {
    console.log(this.data);
  }

  checkPassword() {
    if (this.data.password) {
      if (this.data.password.length <= 0) {
        this.password_length = false;
      }
      else {
        this.password_length = true;
      }
    }
    else
    {
      this.password_length = false;
    }
  }

  checkUsername() {
    if (this.data.username) {
      if (this.data.username.length <= 0) {
        this.password_username = false;
      }
      else {
        this.password_username = true;
      }
    }
    else
    {
      this.password_username = false;
    }
  }


  checkInput() {
    if (this.password_length === true && this.password_username === true) {
      return true;
    }
    else
    {
      return false;
    }
  }
}
