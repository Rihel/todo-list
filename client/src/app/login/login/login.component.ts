import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/service/auth.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { NzMessageService } from 'ng-zorro-antd'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    account: ['', Validators.required],
    password: ['', Validators.required]
  })
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private msgService: NzMessageService
  ) {}
  get account() {
    return this.form.get('account')
  }
  get password() {
    return this.form.get('password')
  }
  ngOnInit() {}
  validate() {
    for (const key in this.form.controls) {
      this.form.get(key).markAsDirty()
      this.form.get(key).updateValueAndValidity()
    }
  }
  goRegister() {
    this.router.navigate(['register'])
  }
  submit() {
    this.validate()
    if (this.form.valid) {
      const data = this.form.value
      this.authService.login(data).subscribe(res => {
        if (res.code === 0) {
          this.msgService.success('登录成功')
          localStorage.setItem('username', this.form.get('account').value)
          localStorage.setItem('token', res.data.token)
          this.router.navigate(['admin/todoList'])
        }
      })
    }
  }
}
