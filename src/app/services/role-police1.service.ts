import { Injectable } from '@angular/core';
import { RolePolice1 } from '../models/role-police';

@Injectable({
  providedIn: 'root'
})
export class RolePolice1Service {
  private rolePolice1: RolePolice1

  constructor() {
    this.rolePolice1 = new RolePolice1();
  }

  getRolePolice1(): RolePolice1 {
    return this.rolePolice1;
  }
}
