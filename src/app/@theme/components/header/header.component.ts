import { Component, Input, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';
import { User } from '../../../user.model';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() position = 'normal';
  user: any;
  userMenu: any[];
  srcImage = "assets/T15-logo.png";

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserService 
  ) {}

  ngOnInit() {
    this.userMenu = [{ title: 'Logout' }];
    this.userService.userSubject.subscribe((u:User)=>{
      this.user = u;
    });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  onMenuClick(event) {
    if (event.title === 'Logout') {
      this.userService.logout(this.user.token);
    }
  }

  logOut(){
    this.userService.logout(this.user.token);
  }

}
