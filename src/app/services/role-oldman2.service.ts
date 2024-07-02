import { Injectable } from '@angular/core';
import { RoleOldMan2 } from '../models/role-oldman';
@Injectable({
  providedIn: 'root'
})
export class RoleOldMan2Service {
  private roleOldMan2: RoleOldMan2;

  constructor() {
    this.roleOldMan2 = new RoleOldMan2
   

    }
  getRoleTeen2(): RoleOldMan2 {
    return this.roleOldMan2;
  }
}
