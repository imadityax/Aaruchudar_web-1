import { Metadata } from 'next';
import PrivacyPage from './PrivacyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Aaruchudar Consultancy',
  description:
    'Read Aaruchudar Consultancy’s privacy policy explaining how user data is collected, used and protected.',
  keywords: [
  "Privacy Policy Aaruchudar",
  "Data Protection Policy",
  "User Data Privacy",
  "Information Security Policy",
  "GDPR Compliance India",
]

};

export default function Page() {
  return <PrivacyPage />;
}
