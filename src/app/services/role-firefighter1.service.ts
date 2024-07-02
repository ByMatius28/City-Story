import { Injectable } from '@angular/core';
import { RoleFireFighter1 } from '../models/role-FireFighter';

@Injectable({
  providedIn: 'root'
})
export class RoleFireFighter1Service {
  private roleFireFighter1: RoleFireFighter1;
  
  constructor() {
    this.roleFireFighter1 = new RoleFireFighter1();
   }



  getRoleFireFighter1(): RoleFireFighter1{
    return this.roleFireFighter1;
  }
}
