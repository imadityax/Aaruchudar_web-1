import { Metadata } from 'next';
import QuizPage from './QuizPage';

export const metadata: Metadata = {
  title: 'Human Intelligence Quiz | Cognitive Skill Assessment – Aaruchudar',
  description:
    'Take Aaruchudar’s Human Intelligence quiz to assess your cognitive skills, focus, memory and brain performance using neuroscience-based evaluation.',
  keywords: [
    "Human Intelligence Quiz",
    "Cognitive Skills Assessment",
    "Brain Performance Test",
    "Intelligence Self Assessment",
    "Mental Agility Test",
  ]

};

export default function Page() {
  return <QuizPage />;
}
