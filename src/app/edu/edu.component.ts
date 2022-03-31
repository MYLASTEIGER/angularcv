import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {

  education = [
    {
      name: "Max Technical Training",
      address: "Mason, OH",
      field: "Coding Bootcamp",
      date: "2022"
      
          },
    {
      name: "Aveda Fredrics Institute",
      address: "West Chester, OH",
      field: "Cosmetology",
      date: "2013-2014"
      
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
