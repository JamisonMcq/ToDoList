import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../service/list-service.service';
import { ListItem } from '../model/list-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css'],
})
export class ListitemComponent implements OnInit {
  listitem: ListItem[] | undefined;
  constructor(
    private listService: ListServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listService.getList().subscribe((data: ListItem[]) => {
      console.log(data);
      this.listitem = data;
    });
  }

  btnClick = () => {
    this.router.navigate(['add']);
  };
}
