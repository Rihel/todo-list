import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('type') type: string = 'default'
  @Input('block') block: boolean
  @Input('route') route: any[] = []
  @Output('click') clickEvent: EventEmitter<any> = new EventEmitter()

  classes: { [key: string]: boolean } = {}

  constructor(private router: Router) {}

  ngOnInit() {
    this.classes = {
      'app-btn-block': this.block,
      'app-btn': true
    }
    this.classes[`app-btn-${this.type}`] = true
  }
  clickHandler(e: MouseEvent) {
    e.stopPropagation()
    this.clickEvent.emit()
    if (this.route.length) {
      this.router.navigate(this.route)
    }
  }
}
