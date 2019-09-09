import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faFileDownload = faFileDownload;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  faDribbble = faDribbble;
  constructor() { }
  ngOnInit() { }

}
