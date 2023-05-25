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
     'description_top': 'A currency clculator based on Java and RESTful API.',
     'description': 'The tool allows users to convert the value of one currency into another currency based on current exchange rates',
     'link': 'https://johannes-henrich.developerakademie.net/currencyAPI/index.html',
     'git_link': 'https://github.com/JohHenrich/currencyAPI' },

    { 'name': 'RingofFire',
    'type': 'Angular',
    'description_top': 'A popular drinking game as multi-user-app based on Angular and Firebase.',
    'description': 'A drinking game with various rules and challenges, based on the cards they draw.',
    'link': 'https://ringoffire-fe6d5.web.app',
    'git_link': 'https://github.com/JohHenrich/ringOfFire' },

    { 'name': 'TicTacToe',
    'type': 'JavaScript',
    'description_top':'Tic tac toe is a kids game based on Java',
    'description': 'Tic tac toe is a two-player game played on a 3x3 grid where players try to get three in a row.',
    'link': 'https://johannes-henrich.developerakademie.net/tictactoe/index.html',
    'git_link': 'https://github.com/JohHenrich/tictactoe' },

    { 'name': 'Portfolio',
    'type': 'Angular',
    'description_top':'Angular based Webpage.',
    'description': 'A collection of relevant documents and materials that showcase my skills, qualifications, and experience',
    'link': 'https://johannes-henrich.developerakademie.net/portfolio/index.html',
    'git_link': 'https://github.com/JohHenrich/portfolio' }

  ]

  
  constructor() { }


  ngOnInit(): void {
  }


   /**
   * the clicked project type is active, all others as inactive
   * @param i - index of the selected type 
   */
  selectBtn(i_selected: number) {
    for (let i = 0; i < this.types.length; i++) {
      this.types[i].selected = (i_selected == i);
    }
  }


   /**
   * filters the projects that match to the clicked type
   * @param i - index of project
   * @returns boolean - true, if project is matching to the active type
   */
  showProjects(i: number) {
    let activeType = this.types.find(type => type.selected);
    if (activeType?.type == 'All') {
      return true;
    } else {
      return activeType?.type == this.projects[i].type;
    }
  }
}
