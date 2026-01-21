import { Metadata } from 'next';
import PrivacyPage from './PrivacyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Aaruchudar Pvt Ltd',
  description:
    'Read Aaruchudar privacy policy explaining how user data is collected, used and protected.',
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
