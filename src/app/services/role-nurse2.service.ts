import { Injectable } from '@angular/core';
import { RoleNurse2 } from '../models/role-nurse';

@Injectable({
  providedIn: 'root'
})
export class RoleTeacher2Service {
  private roleNurse2: RoleNurse2;

  constructor() {
    this.roleNurse2 = new RoleNurse2
    
  }

  getRoleNurse2(): RoleNurse2 {
    return this.roleNurse2;
  }
}
