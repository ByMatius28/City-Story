import { Injectable } from '@angular/core';
import { RolePolice2 } from '../models/role-police';

@Injectable({
  providedIn: 'root'
})
export class RolePolice2Service {
  private rolePolice2: RolePolice2

  constructor() {
    this.rolePolice2 = new RolePolice2();
  }

  getRolePolice2(): RolePolice2 {
    return this.rolePolice2;
  }
}



