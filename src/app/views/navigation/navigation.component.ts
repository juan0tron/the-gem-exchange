// Angular
import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// 3rd Party
import { SwalComponent } from '@toverux/ngx-sweetalert2';

// Services
import { GemExchangeAPI } from 'app/services/api.service';

@Component({
  selector:    'navigation',
  templateUrl: './navigation.template.html',
  providers:   []
})
export class NavigationComponent {

  @ViewChild('loginComponent') private loginComponent: SwalComponent;

  public router_sub:any;
  public user_id:string;

  constructor(
    public  api:    GemExchangeAPI,
    private route:  ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(){
    this.user_id = localStorage.getItem("user_id");
    this.router.events.subscribe(
      data => {
        if(data['url'] === '/login'){
          this.loginComponent.show();
        }
      }
    );
  }
}
