import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private dataSrv: DataService) { }

  ngOnInit() {
    console.log('dataSrv from part1:' + this.dataSrv.myData);
  }

}
