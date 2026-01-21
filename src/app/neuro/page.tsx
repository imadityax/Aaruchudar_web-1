import { Metadata } from 'next';
import NeuroLens_Bands from './NeuroLens_Bands';

export const metadata: Metadata = {
  title: 'Neuro Band & Neuro Lens | Human Intelligence Neurotechnology – Aaruchudar',
  description:
    'Discover Neuro Band and Neuro Lens technologies used by Aaruchudar for Human Intelligence training, focus measurement and neuroscience-based cognitive development.',
  keywords: [
  "Neuro Band",
  "Neuro Lens",
  "Human Intelligence Neurotechnology",
  "Brain Monitoring Devices",
  "Cognitive Performance Technology",
  "Neurofeedback Training Tools",
]

};

export default function Page() {
  return <NeuroLens_Bands />;
}
