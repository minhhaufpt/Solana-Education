import dynamic from 'next/dynamic';
const NavigationPlush = dynamic(
  () => import('../../components/NavigationPlush')
);
const StudentEducation = dynamic(
  () => import('../../containers/StudentEducation')
);
import SEO from '../../components/SEO';
import FooterCard from '../../components/FooterCard';
import StudentEducationAbout from '../../containers/StudentEducationAbout';

export default function EducationStudent() {
  return (
    <div>
      <SEO />
      <NavigationPlush />
      <StudentEducation />
      <StudentEducationAbout />
      <FooterCard />
    </div>
  );
}
