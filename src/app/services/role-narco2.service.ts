import { Injectable } from '@angular/core';
import { RoleNarco2 } from '../models/role-narco';

@Injectable({
  providedIn: 'root'
})
export class RoleNarco2Service {
  private roleNarco2: RoleNarco2;

  constructor() {
    this.roleNarco2 = new RoleNarco2();
  }

  getRoleNarco2(): RoleNarco2 {
    return this.roleNarco2;
  }
}
