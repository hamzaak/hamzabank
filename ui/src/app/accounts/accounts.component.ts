import { Component, OnInit, Type } from '@angular/core';
import { ApiService } from '../api.service';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  item: MenuItem

  constructor(private api: ApiService) { 
  }

  ngOnInit(): void {
    this.api.getMenuItem(1)
      .subscribe(resp => {
        console.log(resp);
        this.item = resp.body;
    });
  }


}
