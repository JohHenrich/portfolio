import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  hover: boolean = false;
  public types = [
    { 'type': 'All', 'selected': true },
    { 'type': 'Angular', 'selected': false },
    { 'type': 'JavaScript', 'selected': false }
  ];


  public projects = [
    { 'name': 'CurrencyConverter',
     'type': 'JavaScript',
     'description': 'A currency clculator based on RESTful Api',
     'link': 'https://johannes-henrich.developerakademie.net/currencyAPI/index.html',
     'git_link': '' },

    { 'name': 'RingofFire',
    'type': 'Angular',
    'description': 'A popular drinking game as multi-user-app based on Angular and Firebase.',
    'link': 'https://ringoffire-fe6d5.web.app',
    'git_link': '' },

    { 'name': 'TicTacToe',
    'type': 'JavaScript',
    'description': 'A popular kids game',
    'link': 'https://johannes-henrich.developerakademie.net/tictactoe/index.html',
    'git_link': '' },

    { 'name': 'Portfolio',
    'type': 'Angular',
    'description': 'Angular based Webpage',
    'link': 'https://johannes-henrich.developerakademie.net/portfolio/index.html',
    'git_link': '' }
  ]

  constructor() { }




  ngOnInit(): void {
  }

  selectBtn(i_selected: number) {
    for (let i = 0; i < this.types.length; i++) {
      this.types[i].selected = (i_selected == i);

    }
  }

  showProjects(i: number) {
    let activeType = this.types.find(type => type.selected);
    if (activeType?.type == 'All') {
      return true;
    } else {
      return activeType?.type == this.projects[i].type;
    }
  }
}
