import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import('../../components/Navigation'));
const Promt = dynamic(() => import('../../containers/Promt'));
import SEO from '../../components/SEO';

import FooterCard from '../../components/FooterCard';

export default function getPromt() {
  return (
    <div>
      <SEO />
      <Navigation />
      <Promt />
      <FooterCard />
    </div>
  );
}
