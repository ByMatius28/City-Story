import { Injectable } from '@angular/core';
import { RoleFireFighter2 } from '../models/role-FireFighter';

@Injectable({
  providedIn: 'root'
})
export class RoleFireFighter2Service {
  private roleFireFighter2: RoleFireFighter2;
  
  constructor() {
    this.roleFireFighter2 = new RoleFireFighter2();
   }



  getRoleFireFighter2(): RoleFireFighter2{
    return this.roleFireFighter2;
  }
}
