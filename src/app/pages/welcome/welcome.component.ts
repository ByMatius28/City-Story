import { Component, OnInit } from '@angular/core';
import { RolesComponent } from '../../roles/roles.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [RolesComponent
  ]

  
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
