import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css'],
})
export class AdditemComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  btnAdd = () => {
    //Need to add a new service to do post request to backend and call to service here
    this.router.navigate(['']);
  };
  btnBack = () => {
    this.router.navigate(['']);
  };
}
