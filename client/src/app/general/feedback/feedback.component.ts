import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { map, filter, switchMap } from 'rxjs/operators'
import { merge, of } from 'rxjs'
import { AuthService } from 'src/app/service/auth.service'
import { VerifyEmail } from 'src/app/data/verifyEmail'
import { NzMessageService } from 'ng-zorro-antd'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  status: string = 'success'
  type: string
  token: string
  title: string
  message: string

  query$ = this.route.queryParams

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private messageService: NzMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.query$.subscribe(res => {
      switch (res.type) {
        case 'verifyEmail':
          this.verifyHandler(res)
          break
        case 'register':
          this.registerHandler(res)
          break
      }
    })
  }
  registerHandler(val) {
    if (val.status === 'success') {
      this.title = '注册成功'
      this.message = '恭喜你，注册成功！验证邮箱的邮件已发送，请快去验证吧。'
    }
  }
  verifyHandler(val: any) {
    this.authService.verifyEmail(val as VerifyEmail).subscribe(res => {
      if (res.code === 0) {
        this.messageService.success(res.message)
        this.router.navigate(['login'])
      } else {
        switch (res.code) {
          case 1004:
          case 1003:
            this.router.navigate(['login'])
            break
          case 1005:
            this.message = res.message
            this.status = 'error'
            break
        }
      }
    })
  }
}
