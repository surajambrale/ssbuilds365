import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-coaches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-coaches.component.html',
  styleUrl: './our-coaches.component.scss'
})
export class OurCoachesComponent {

  coaches = [
    {
      name: 'Siddhi Thakur',
      role: 'Founder',
      image: 'assets/images/sidhhi.jpg',
      specialization: 'Bachelor’s in Biochemistry <br> Masters in Human Movements',
      certification: '',
      bio: `Siddhi Thakur is an expert in human movement, known for her deep understanding of biomechanics and injury prevention. Her approach focuses on improving posture, mobility, and functional movement patterns to help clients move better, feel better, and perform at their best.`,
      social: {
        instagram: 'https://instagram.com/suraj',
        facebook: 'https://facebook.com/suraj'
      }
    },
    {
      name: 'Akshay Bhalekar',
      role: 'Co-Founder',
      image: 'assets/images/akshay.jpeg',
      specialization: 'Mumbai Shree Title Winner <br> Mr Maharashtra Silver Medalist <br> Mr India Silver Medalist',
      certification: '',
      bio: `🏆 Mumbai Shree Title Winner • Mr. Maharashtra Silver Medalist • Mr. India Silver Medalist. With a legacy carved in sweat and steel, he’s not just a bodybuilder — he’s a champion. From conquering the Mumbai Shree stage to earning national glory with Mr. Maharashtra and Mr. India silver medals, his journey reflects sheer dedication, discipline, and unmatched passion for fitness. A true icon for aspiring athletes.`,
      social: {
        instagram: 'https://instagram.com/anita',
        facebook: ''
      }
    }
  ];

  // Modal logic
  selectedCoach: any = null;

  openModal(coach: any) {
    this.selectedCoach = coach;
  }

  closeModal() {
    this.selectedCoach = null;
  }
}
