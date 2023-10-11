import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import('../../components/Navigation'));
const Post = dynamic(() => import('../../containers/Post'));
import SEO from '../../components/SEO';

import FooterCard from '../../components/FooterCard';

export default function getPromt() {
  return (
    <div>
      <SEO />
      <Navigation />
      <Post />
      <FooterCard />
    </div>
  );
}
