import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/service/auth.service'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'

import { Router } from '@angular/router'
import { NzMessageService } from 'ng-zorro-antd'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group({
    username: [
      'admin',
      [Validators.required, Validators.minLength(5), Validators.max(16)]
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(5), Validators.max(16)]
    ],
    confirmPassword: ['', this.confirmValidator.bind(this)],
    email: ['13533797833@163.com', [Validators.required, Validators.email]]
  })
  showVerify: boolean = true
  verifyForm: FormGroup = this.fb.group({
    email: [''],
    verifyCode: ['', [Validators.required]]
  })
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private msgService: NzMessageService
  ) {}

  ngOnInit() {}

  validate() {
    for (const key in this.form.controls) {
      this.form.controls[key].markAsDirty()
      this.form.controls[key].updateValueAndValidity()
    }
  }
  confirmValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value) {
      return { error: true, required: true }
    } else if (control.value !== this.form.controls.password.value) {
      return { confirm: true, error: true }
    }
    return {}
  }
  goLogin() {
    this.router.navigate(['login'])
  }
  submit(e) {
    this.validate()
    if (this.form.valid) {
      const data = this.form.value
      this.authService.register(data).subscribe(res => {
        if (res.code === 0) {
          this.msgService.success('注册成功')
          // 跳转到反馈页面
          this.router.navigate(['general', 'feedback'], {
            queryParams: {
              type: 'register',
              status: 'success'
            }
          })
        }
      })
    }
  }
}
