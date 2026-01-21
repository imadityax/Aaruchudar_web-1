import { Metadata } from 'next';
import ProductPage from './ProductPage';

export const metadata: Metadata = {
  title: 'Neuro Band & Neuro Lens Products | Brain Performance Tools – Aaruchudar',
  description:
    'Explore Aaruchudar’s Neuro Band and Neuro Lens products designed for Human Intelligence training, cognitive performance analysis and focus improvement.',
  keywords: [
  "Human Intelligence Products",
  "Cognitive Training Products",
  "Neuroscience Learning Tools",
  "Brain Performance Systems",
  "Neuro Band",
  "Neuro Lens",
]

};

export default function Page() {
  return <ProductPage />;
}
