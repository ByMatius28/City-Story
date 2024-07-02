import { Injectable } from '@angular/core';
import { RoleNarco1 } from '../models/role-narco';

@Injectable({
  providedIn: 'root'
})
export class RoleNarco1Service {
  private roleNarco1: RoleNarco1;

  constructor() {
    this.roleNarco1 = new RoleNarco1();
  }

  getRoleNarco1(): RoleNarco1 {
    return this.roleNarco1;
  }
}
