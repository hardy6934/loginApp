import { Component } from '@angular/core';
import { API_URL, SomeGeneralDataServiceService } from '../../../core/services/SomeGeneralDataService/some-general-data-service.service';

@Component({
  selector: 'app-second-component',
  providers: [
      { provide: API_URL, useValue: 'Data from Second Component' }, 
      SomeGeneralDataServiceService
    ],
  imports: [],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.scss'
})
export class SecondComponentComponent {
  constructor(private someGeneralDataServiceService: SomeGeneralDataServiceService) { 
    this.data = this.someGeneralDataServiceService.getData();
  }

  data: string = "";
}
