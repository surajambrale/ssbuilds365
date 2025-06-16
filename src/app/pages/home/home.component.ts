import { Component } from '@angular/core';
import { OurCoachesComponent } from '../our-coaches/our-coaches.component';
import { JoinFormComponent } from '../join-form/join-form.component'; // form component import
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OurCoachesComponent, JoinFormComponent,CommonModule,HttpClientModule], // form ko bhi import karo
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  formVisible: boolean = false;

  showForm() {
    this.formVisible = true;
  }

  hideForm() {
    this.formVisible = false;
  }
}
