import { Injectable } from '@angular/core';
import { RoleDoctor1 } from '../models/role-doctor';

@Injectable({
  providedIn: 'root'
})
export class RoleDoctor1Service {
  private roleDoctor1: RoleDoctor1;

  constructor() {
    this.roleDoctor1 = new RoleDoctor1();
  }

  getRoleDoctor1(): RoleDoctor1 {
    return this.roleDoctor1;
  }
}
