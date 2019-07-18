import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tacos',
  templateUrl: './tacos.page.html',
  styleUrls: ['./tacos.page.scss'],
})
export class TacosPage implements OnInit {

  search = false;
add = false;  
  constructor() { }

  ngOnInit() {
  }

}
