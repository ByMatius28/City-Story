import { Injectable } from '@angular/core';
import { RoleDoctor2 } from '../models/role-doctor';

@Injectable({
  providedIn: 'root'
})
export class RoleDoctor2Service {
  private roleDoctor2: RoleDoctor2;
  constructor() {
    this.roleDoctor2 = new RoleDoctor2();
  }

  getRoleDoctor2(): RoleDoctor2 {
    return this.roleDoctor2;
  }
}
