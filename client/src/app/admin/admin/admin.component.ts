import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd'
import { timer } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private username: string = localStorage.getItem('username')
  constructor(
    private messageService: NzMessageService,
    private router: Router
  ) {}

  ngOnInit() {}

  logout() {
    timer(300).subscribe(() => {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      this.messageService.success('退出成功')
      this.router.navigate(['login'])
    })
  }
}
