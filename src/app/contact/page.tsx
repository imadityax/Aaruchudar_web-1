import { Metadata } from 'next';
import ContactPage from './ContactPage';

export const metadata: Metadata = {
  title:
"Human Intelligence Courses | Cognitive & Neuroscience Training – Aaruchudar",
  description:
    "Explore Aaruchudar’s Human Intelligence courses designed to enhance cognitive skills, focus, memory and problem-solving using neuroscience-based learning programs.",
  keywords: [
    //Primary
    "Contact Human Intelligence Experts",

    //Secondary
    "Cognitive Training Consultation",
    "Neuroscience Coaching Contact",
    "Brain Performance Support",
    "Aaruchudar Contact",
    "Human Intelligence Help"
  ],
};


export default function Page() {
  return <ContactPage />;
}
