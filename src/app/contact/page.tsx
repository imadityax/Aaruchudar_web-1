import { Metadata } from 'next';
import ContactPage from './ContactPage';

export const metadata: Metadata = {
  title:
"Human Intelligence Courses | Cognitive & Neuroscience Training – Aaruchudar",
  description:
    "Get in touch with Aaruchudar Consultancy for Human Intelligence training, neuroscience-based cognitive development programs and brain-performance solutions.",
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
