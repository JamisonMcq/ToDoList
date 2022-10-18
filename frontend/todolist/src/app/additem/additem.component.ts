import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdditemService } from '../service/additem.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css'],
})
export class AdditemComponent implements OnInit {
  addItemForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    doBy: new FormControl(''),
  });

  constructor(private router: Router, private addService: AdditemService) {}

  ngOnInit(): void {}

  btnAdd = () => {
    // if (
    //   !this.addItemForm.get('title')!.value ||
    //   !this.addItemForm.get('description')!.value ||
    //   !this.addItemForm.get('doBy')!.value
    // ) {
    //   alert('Please Enter the Requrired Fields');
    //   return;
    // }
    // this.addItemForm.setValue(this.addItemForm.get('title')!.value);

    this.addService
      .addItem(
        this.addItemForm.get('title')!.value as string,
        this.addItemForm.get('description')!.value as string,
        this.addItemForm.get('doBy')!.value as string
      )
      .subscribe(
        () => {
          this.addItemForm.reset();
          this.router.navigate(['']);
        },
        (err: any) => console.log(err)
      );

    console.log(this.addItemForm.value);
    this.addItemForm.reset();
  };
  btnBack = () => {
    this.router.navigate(['']);
  };
}
