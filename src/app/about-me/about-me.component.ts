import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  public sections = [
    {
      'title': 'MY JOURNEY BEGAN',
      'text': ' started my IT journey learning IT specialist for application management where I learned the basics of software development. ',
      'img': "walk-line.png"
    },

    {
      'title': 'THE PASSION',
      'text': 'Later I worked for years in IT and developed CAD macros with C++ and Microsoft Office macros with VBA.',
      'img': "heart-line.png"
    },

    {
      'title': 'MY SEARCH',
      'text': 'As my university studies as a mechanical engineer did not match my interest in coding and software, I decided to quit college and re-enter the software development career.',
      'img': "search-line.png"
    },
    {
      'title': 'NEW CHALLENGES',
      'text': ' I am looking forward to building on my experience and starting my career in IT in a junior developer position.',
      'img': "flight-takeoff-line.png"
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
