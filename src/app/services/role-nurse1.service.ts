import { Injectable } from '@angular/core';
import { RoleNurse1 } from '../models/role-nurse';

@Injectable({
  providedIn: 'root'
})
export class RoleNurse1Service {
  private roleNurse1: RoleNurse1

  constructor() {
    this.roleNurse1 = new RoleNurse1();
  }

  getRoleNurse1(): RoleNurse1 {
    return this.roleNurse1;
  }
}
