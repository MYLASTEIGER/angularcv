import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css']
})
export class WorkExpComponent implements OnInit {

  workHistory = [
    {
      name: "Max Technical Training",
      address: "Mason, OH",
      date: "2019-2022",
      experience: [
        "Operations Assistant/Registrar","Customer Service Specialist", "First Impressions"
      ]
          },
    {
      name: "Aveda Fredrics Institute",
      address: "West Chester, OH",
      date: "2018-2019",
      experience: [
      "Guest Care Team"
    ]
        },
    {
     name: "Trinity Salon & Spa",
      address: "Mason, OH",
      date: "2015-2017",
      experience: [
      "Stylist"
    ]
        }
]

  constructor() { }

  ngOnInit(): void {
  }
   



}
