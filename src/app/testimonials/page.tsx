import { Metadata } from 'next';
import TestimonialsPage from './TestimonialsPage';

export const metadata: Metadata = {
  title: 'Aaruchudar Reviews & Testimonials | Human Intelligence Training Results',
  description:
    'Read testimonials and success stories from students and professionals who improved their Human Intelligence and cognitive performance with Aaruchudar.',
  keywords: [
  "Aaruchudar Testimonials",
  "Human Intelligence Training Reviews",
  "Cognitive Training Success Stories",
  "Student Feedback Aaruchudar",
  "Brain Training Results",
]
};

export default function Page() {
  return <TestimonialsPage />;
}
