import {Component, HostListener, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if (windowScroll > 150) {
      $('.header_area').addClass('sticky slideInDown');
    } else {
      $('.header_area').removeClass('sticky slideInDown');
    }
  }

}
