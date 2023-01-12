import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent implements OnInit {

  skills = [
    {
      img: 'typescript.png',
      name: 'TypeScript',
    },
    {
      img: 'angular.png',
      name: 'Angular',
    },
    {
      img: 'material.png',
      name: 'Material Design',
    },
    {
      img: 'Bootstrap.png',
      name: 'Bootstrap',
    },
    {
      img: 'javascript.png',
      name: 'JavaScript',
    },
    {
      img: 'Group 205.png',
      name: 'CSS/HTML',
    },
    {
      img: 'scrum.png',
      name: 'SCRUM',
    },
    {
      img: 'Git-Icon-1788C 2.png',
      name: 'Git',
    },
    {
      img: 'Group 20.png',
      name: 'design-thinking', 
    },
    {
      img: 'icons8-rest-api-80 2.png',
      name: 'Rest API',
    },
    {
      img: 'icons8-test-lab-96 2.png',
      name: 'test-automation',
    },
    {
      img: 'icons8-database-52 2.png',
      name: 'databases',
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
