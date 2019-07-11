import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { NzMessageService } from 'ng-zorro-antd'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  form: FormGroup = this.fb.group({
    isNotify: [''],
    time: ['']
  })
  constructor(
    private fb: FormBuilder,
    private messageService: NzMessageService
  ) {}

  ngOnInit() {}
}
