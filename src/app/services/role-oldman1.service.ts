import { Injectable } from '@angular/core';
import { RoleOldMan1 } from '../models/role-oldman';
@Injectable({
  providedIn: 'root'
})
export class RoleOldMan1Service {
  private roleOldMan1: RoleOldMan1;

  constructor() {
    this.roleOldMan1 = new RoleOldMan1
      
  }

  getRoleTeen1(): RoleOldMan1 {
    return this.roleOldMan1;
  }
}
