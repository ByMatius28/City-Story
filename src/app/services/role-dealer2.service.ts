import { Injectable } from '@angular/core';
import { RoleDealer1 } from '../models/role-dealers';

@Injectable({
  providedIn: 'root'
})
export class RoleDealer1Service {
  private roleDealer1: RoleDealer1;

  constructor() {
    this.roleDealer1 = new RoleDealer1();
  }

  getRoleDealer1(): RoleDealer1 {
    return this.roleDealer1;
  }
}
