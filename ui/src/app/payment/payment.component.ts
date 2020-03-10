import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  item: MenuItem

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getMenuItem(3)
      .subscribe(resp => {
        console.log(resp);
        this.item = resp.body;
    });
  }

}
