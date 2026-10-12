import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userForm: FormGroup
  UserData:any
  constructor(private _formBuilder: FormBuilder, private api: DashboardService, private formBilder: FormBuilder, private router: Router) {
    this.userForm = this._formBuilder.group({
      mobile: ['', Validators.required],
      password: ['', [Validators.required]], // Adjust regex if needed
    });
  }
  get Email() {
    return this.userForm.get('mobile')
  }

  get Password() {
    return this.userForm.get('password')
  }

  login() {
    const { mobile, password } = this.userForm.value

    const loginObj = {
      mobile: mobile || "",
      password: password || ""
    }


    this.api.post('/user/login', loginObj).subscribe({
      next: (res: any) => {
        this.UserData = res
        // const decodedToken = jwtDecode(res.result.token);
        localStorage.setItem('token', res.result.token);
        // localStorage.setItem('user', JSON.stringify(decodedToken));
        console.log('User logged in successfully:');
        // this.tostService.success("تم تسجيل الدخول بنجاج")
        this.router.navigate(['admin-login/orders'])
      },
      error: (msg:any) => {
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Oops...',
        //   text: 'Incorrect Infromation Try Again',
        // })
        console.log(msg)
      }

    })
  }
}
