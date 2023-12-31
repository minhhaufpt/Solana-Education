import dynamic from 'next/dynamic';
const NavigationPlush = dynamic(
  () => import('../../components/NavigationPlush')
);
const HomeEducation = dynamic(() => import('../../containers/HomeEducation'));
import SEO from '../../components/SEO';
import FooterCard from '../../components/FooterCard';
import IntroEducation from '../../containers/IntroEducation';
export default function Education() {
  return (
    <div>
      <SEO />
      <NavigationPlush />
      <HomeEducation />
      <IntroEducation />
      <FooterCard />
    </div>
  );
}
