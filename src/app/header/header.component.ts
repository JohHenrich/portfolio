import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }


  /**
   * executes click function on the checkbox that controls the menu to hide sidebar menu
   */
  hideSidebarMenu() {
    document.getElementById('openSidebarMenu').click();
  }


  /**
 * Toggles the menuOpen flag to control the state of the menu.
 */
  openMenu() {
    if (!this.menuOpen) {
      this.menuOpen = true;
    } else {
      this.menuOpen = false;
    }
  }
}
