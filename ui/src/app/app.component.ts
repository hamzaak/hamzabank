import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { MenuItem } from './menu-item';
import { ApiService } from './api.service';
import { ModuleDirective } from './module.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NHB | National Hamza Bank';

  menuItems: MenuItem[] = [];

  @ViewChild(ModuleDirective, {static: true}) moduleHost: ModuleDirective;
 
  constructor(private api: ApiService,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.getMenuItems()
  }
  
  getMenuItems() {
    this.api.getMenuItems()
      .subscribe(resp => {
        console.log(resp);
        for (const data of resp.body) {
          this.menuItems.push(data);
        }
    });
  }

  async loadComponent(menuItem: MenuItem) {
   
    const viewContainerRef = this.moduleHost.viewContainerRef;
    viewContainerRef.clear();

    const cmpName = menuItem.componentId.toLowerCase();
    const cmpObj = await import('./' + cmpName + '/' + cmpName + '.component');
    const cmpInstance = cmpObj[menuItem.componentId + 'Component'];
    
    viewContainerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(cmpInstance)
    );
  }
}
