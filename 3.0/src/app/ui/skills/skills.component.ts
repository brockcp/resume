import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    AOS.init();
  }
  faGithub = faGithub;

}
