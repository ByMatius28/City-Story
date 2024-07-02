import { Injectable } from '@angular/core';
import { RoleDealer2 } from '../models/role-dealers';
@Injectable({
  providedIn: 'root'
})
export class RoleDealer2Service {
  private roleDealer2: RoleDealer2;

  constructor() {
    this.roleDealer2 = new RoleDealer2();
  }

  getRoleDealer2(): RoleDealer2 {
    return this.roleDealer2;
  }
}
