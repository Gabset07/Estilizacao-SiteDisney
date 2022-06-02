import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navItems=[
    {name:'feature films',path:'/feature-filmes'},
    {name:'short films',path:'/short-filmes',subItems:[
      {name:'theorical shorts', path:'/'},
      {name:'disney+', path:'/'},
      {name:'sparkshorts', path:'/'},
      {name:'car toons', path:'/'},
      {name:'toy store toons', path:'/'},
      {name:'home entertainment', path:'/'},
    ]},
    {name:'technology films',path:'/technology-films',subItems:[
      {name:'renderman', path:'/'},
      {name:'graphic techonologies', path:'/'},


    ]},
    {name:'careers films',path:'/careers-films',subItems:[
      {name:'career at pixar', path:'/'},
      {name:'interniships', path:'/'},
      {name:'life at pixar', path:'/'},
      {name:'events', path:'/'},

    ]},
    {name:'extras',path:'/extras',subItems:[
      {name:'art exibition', path:'/'},
      {name:'emotion exibition', path:'/'},
      {name:'the scienc behind pixar', path:'/'},
      {name:'pixar in concert', path:'/'},
      {name:'pixar in a box', path:'/'},

    ]},
    {name:'about',path:'/about',subItems:[
      {name:'contact us', path:'/'},
      {name:'leadership', path:'/'},
      {name:'inclusion and outreach', path:'/'},
      {name:'supplier diversity', path:'/'},
      {name:'coming soon', path:'/'},
      {name:'our story', path:'/'},
      {name:'company faqs', path:'/'},
    ]},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
