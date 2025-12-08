import { Component, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../../auth-service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,
    ToastModule,
    CardModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    InputTextModule,
    ButtonModule,
    PasswordModule
  ],
  providers: [Router, MessageService],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  checked1 = signal<boolean>(true);
  data: any = {};
  password_length = false;
  check_email = false;

  constructor(private authServ: AuthService, private router: Router, private messageServ: MessageService) { }

  onLogin() {
    if (this.data) {
      this.authServ.login(this.data.email, this.data.password)
        .then((data) => {
          if (data) {
            this.messageServ.add({
              severity: 'success',
              summary: 'Login Successful',
              detail: 'Login Successful'
            });
            console.log(data);

            setTimeout(() => {
              this.router.navigate(['/overview']);
            }, 2000);
          }
        })
        .catch((err) => {
          this.messageServ.add({
            severity: 'error',
            summary: 'Error',
            detail: err.message || 'Something went wrong!'
          });
        });
    }
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
    else {
      this.password_length = false;
    }
  }

  checkEmail() {
    if (this.data.email) {
      if (this.data.email.length <= 0) {
        this.check_email = false;
      }
      else {
        this.check_email = true;
      }
    }
    else {
      this.check_email = false;
    }
  }


  checkInput() {
    if (this.password_length === true && this.check_email === true) {
      return false;
    }
    else {
      return true;
    }
  }
}
