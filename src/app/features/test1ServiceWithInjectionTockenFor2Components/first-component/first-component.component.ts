import { Component } from '@angular/core';
import { API_URL, SomeGeneralDataServiceService } from '../../../core/services/SomeGeneralDataService/some-general-data-service.service';

@Component({
  selector: 'app-first-component',
  providers: [
    { provide: API_URL, useValue: 'Data from First Component' }, 
    SomeGeneralDataServiceService
  ],
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss'
})
export class FirstComponentComponent {
   
  constructor(private someGeneralDataServiceService: SomeGeneralDataServiceService) { 
    this.data = this.someGeneralDataServiceService.getData();
  }

  data: string = "";
}
