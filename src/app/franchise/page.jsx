// next/src/app/franchise1/page.jsx
import React from 'react';
import AaruchudarFranchise from './AaruchudarFranchise';
import { Metadata } from 'next'; 


export const metadata = {
  title: "Aaruchudar Franchise Opportunities | Join as a Human Intelligence Partner",
description:
  "Explore franchise opportunities with Aaruchudar Consultancy. Join us as a Human Intelligence partner and bring neuroscience-based cognitive development programs to your community.",
keywords: [
  //Primary
  "Aaruchudar Franchise",
  "Human Intelligence Franchise",
  "Cognitive Development Franchise",
  "Neuroscience Training Franchise",
  //Secondary
  "Franchise Opportunities",
  "Business Partnership",
  "Cognitive Skills Training",
  "Brain Performance Programs",
  "Neuroscience Coaching",  
  "Educational Franchise",
],
};




export default function FranchisePage() {
  return <AaruchudarFranchise />;
}