import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  reviews = [
    {
      name: 'Prajakta Jagtap',
      review: 'I really enjoyed the fitness course with siddhi Mam🌟 It was super helpful, motivating, and easy to follow. Your way of teaching is amazing and made every session fun. Thank you for such a great experience! 💪 And one more thing she’s really very caring person.',
      rating: 5,
      image: 'assets/images/prajakta-jagtap.jpeg' 
    },
    {
      name: 'Lalit Ruke',
      review: 'Overall, I found this course very useful and engaging. The instructor did a great job of explaining concepts in a way that was easy to understand.She is Very Passionate Teacher and very knowledgeable. I learned a lot from the practical exercises and theory. The course met my expectations and provided me with valuable knowledge and skills. The course material were well organized and easy to follow.',
      rating: 4,
      image: 'assets/images/lalit.jpeg'
    },
    {
      name: 'Tushar Kadam',
      review: 'I have really enjoyed the training courses with siddhi ma\'am I felt very welcome and relaxed during the time I progress in my knowledge and skills and the teaching really enhanced this..tysm mam 😊',
      rating: 5,
      image: 'assets/images/tushar.jpeg'
    }

  ];


}
