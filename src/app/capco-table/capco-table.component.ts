import { allData } from './../../assets/sampledata';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capco-table',
  templateUrl: './capco-table.component.html',
  styleUrls: ['./capco-table.component.css']
})
export class CapcoTableComponent implements OnInit {

  activePage:number = 1;  
  data = [];
  headers=[];
  recordsCount = 0;
  recordsToshow = 5;
  firstIndex = -1;
  lastIndex = -1;

  constructor() { }

  ngOnInit(): void {
    this.data = allData;
    this.headers = Object.keys(allData[0]);
    this.recordsCount = this.data.length;
    this.firstIndex = 0;
    this.lastIndex = 5;
  }

  displayActivePage(activePageNumber:number){  
    this.activePage = activePageNumber;
    this.firstIndex = (this.activePage - 1) * this.recordsToshow;
    this.lastIndex = (this.activePage) * this.recordsToshow;

    console.log("page", this.recordsToshow)  
  }

  changeDisplayCount(e){
    this.recordsToshow = e.target.value;
    this.firstIndex = 0;
    this.lastIndex = this.recordsToshow;
    this.activePage = 1;
    console.log(e);
  }

}
