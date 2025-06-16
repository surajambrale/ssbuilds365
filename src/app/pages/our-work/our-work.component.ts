import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-work.component.html',
  styleUrl: './our-work.component.scss'
})
export class OurWorkComponent {
  students = [
    {
      photo: '/assets/images/grouppic.jpeg',
      certificate: '/assets/images/sample-certificate.jpg',
      name: 'Group Photo',
      course: 'Suspension Training Certification',
      experience: '“This course pushed my limits and made me stronger mentally and physically. Amazing experience!”'
    },
    // {
    //   photo: '/assets/images/dummyimg.jpeg',
    //   certificate: '/assets/images/sample-certificate.jpg',
    //   name: 'Aarav Mehta',
    //   course: 'Suspension Training Certification',
    //   experience: '“This course pushed my limits and made me stronger mentally and physically. Amazing experience!”'
    // },
    // {
    //   photo: '/assets/images/dummyimg.jpeg',
    //   certificate: '/assets/images/sample-certificate.jpg',
    //   name: 'Aarav Mehta',
    //   course: 'Suspension Training Certification',
    //   experience: '“This course pushed my limits and made me stronger mentally and physically. Amazing experience!”'
    // },
  ];

  isModalOpen = false;
  selectedImage: string = '';

  openModal(image: string) {
    console.log("Clicked:", image);
    this.selectedImage = image;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedImage = '';
  }
}
