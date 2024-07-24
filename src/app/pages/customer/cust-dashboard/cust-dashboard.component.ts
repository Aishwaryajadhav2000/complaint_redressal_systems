import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CustHeadingComponent } from '../cust-heading/cust-heading.component';

@Component({
  selector: 'app-cust-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, CustHeadingComponent],
  templateUrl: './cust-dashboard.component.html',
  styleUrl: './cust-dashboard.component.css'
})
export class CustDashboardComponent {

}
