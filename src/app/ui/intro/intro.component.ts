import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

 ngOnInit(){
  $(document).ready(function(){
    $('<img/>').attr('src','../assets/img/sam.jpg').on('load', function() {
      $(this).remove();  //clean
      $('#hero-image').css('background-image', 'url(../assets/img/sam.jpg');
      $('#hero-image').addClass('add-fade');
    });
  });
 }

}
