import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = 'Myla Steiger'
  email: string = "steiger.myla@gmail.com"
  phone: string = "513.293.8919"
  strengths: string = " Adaptablity | Empathy | Responsibility | Restorative | Context "
  technology1: string = " Angular | C# | .Net | Git/GitHub | SQL | Java | VisualStudio 2019 | .Net Core | CSS | HTML | SQL Server " 
  technology2: string = " Spring | ASP.Net | VisualStudio Code | TypeScript | JQuery | JSON | WebApi | REST | Agile\Scrum "
  technology3: string = " Entity Framework Core | Hibernate | MySQL | Maven | Eclipse | Bootstrap | JavaScript "


}
