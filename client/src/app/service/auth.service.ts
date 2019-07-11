import { Injectable } from '@angular/core'
import { BaseService } from './base.service'
import { User } from '../data/user'
import { VerifyEmail } from '../data/verifyEmail'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private baseService: BaseService) {}
  register(data: User) {
    return this.baseService.post<User, any>('/auth/register', data)
  }

  login(data: User) {
    return this.baseService.post<User, { token: string }>('/auth/login', data)
  }

  verifyEmail(data: VerifyEmail) {
    return this.baseService.post<VerifyEmail, boolean | string>(
      '/auth/verifyEmail',
      data
    )
  }
}
