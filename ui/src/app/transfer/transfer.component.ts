import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  item: MenuItem;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getMenuItem(2)
      .subscribe(resp => {
        console.log(resp);
        this.item = resp.body;
    });
  }

}
