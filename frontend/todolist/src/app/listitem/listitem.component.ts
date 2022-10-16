import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../service/list-service.service';
import { ListItem } from '../model/list-item';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})
export class ListitemComponent implements OnInit {
  listitem: ListItem[] | undefined;
  constructor(private listService: ListServiceService) { }

  ngOnInit(): void {
    this.listService.getList().subscribe((data: ListItem[]) => {
      console.log(data);
      this.listitem = data;
      });
    }
}
