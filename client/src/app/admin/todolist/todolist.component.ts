import { Component, OnInit } from '@angular/core'
import { TodoService } from 'src/app/service/todo.service'
import { PagerQuery } from 'src/app/data/pagerQuery'
import { Todo } from 'src/app/data/todo'
import { NzModalService, NzMessageService } from 'ng-zorro-antd'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  constructor(
    private todoService: TodoService,
    private modalService: NzModalService,
    private messageService: NzMessageService
  ) {}
  visible = false
  newTodoName: string = ''
  currentTodo: Todo = {} as Todo
  todoList: Todo[] = []
  loading: boolean = false
  pager: PagerQuery = {
    page: 1,
    pageSize: 10,
    total: 0
  }

  ngOnInit() {
    this.getData()
  }
  pageSizeChange(pageSize: number) {
    this.pager.pageSize = pageSize
    this.getData()
  }
  pageChange(page: number) {
    this.pager.page = page
    this.getData()
  }
  getData() {
    this.loading = true
    setTimeout(() => {
      this.todoService.getTodolist(this.pager).subscribe(res => {
        this.loading = false
        if (res.code === 0) {
          this.todoList = res.data.docs
          this.pager.total = res.data.total
        }
      })
    }, 1000)
  }
  openModal(todo: Todo) {
    this.visible = true
    this.currentTodo = Object.assign({}, todo)
  }
  closeModal() {
    this.visible = false
    this.currentTodo = {} as Todo
  }
  updateTodo() {
    this.todoService
      .updateTodo(this.currentTodo.id, {
        name: this.currentTodo.name
      })
      .subscribe(res => {
        if (res.code === 0) {
          this.closeModal()
          this.getData()
        }
      })
  }

  completeTodo(id: number) {
    this.modalService.confirm({
      nzTitle: `提示`,
      nzContent: '确认完成了吗？',
      nzOnOk: () => {
        this.todoService.completeTodo(id).subscribe(res => {
          if (res.code === 0) {
            this.getData()
          }
        })
      }
    })
  }

  deleteTodo(id: number) {
    this.modalService.confirm({
      nzTitle: `警告`,
      nzContent: '确定删除该任务？',
      nzOnOk: () => {
        this.todoService.deleteTodo(id).subscribe(res => {
          if (res.data) {
            this.getData()
          }
        })
      }
    })
  }

  addTodo(e: KeyboardEvent) {
    if (e.keyCode === 13) {
      if (!this.newTodoName) {
        this.messageService.error('任务名称不能为空')
        return
      }
      this.todoService
        .addTodo({
          name: this.newTodoName
        })
        .subscribe(res => {
          if (res.data) {
            this.getData()
            this.newTodoName = ''
          }
        })
    }
  }
}
