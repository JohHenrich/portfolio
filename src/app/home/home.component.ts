//import { Component, OnInit } from '@angular/core';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Aos from 'aos';
import { InViewPortService } from '../in-view-port.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('homeTabSwitch') homeTabSwitch : ElementRef; //export var to service for menu conditional CSS class

  constructor(
    public inViewPortService: InViewPortService
    ) { }

  ngAfterViewInit(): void {
    //this.inViewPortService.homeTabSwitch = this.homeTabSwitch.nativeElement;
  }

  /**
   * This function loads the functions init if website loads 
   */
  ngOnInit(): void {
    Aos.init();
  }

}

