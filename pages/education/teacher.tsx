import dynamic from 'next/dynamic';
const NavigationPlush = dynamic(
  () => import('../../components/NavigationPlush')
);
const TeacherEducation = dynamic(
  () => import('../../containers/TeacherEducation')
);
import SEO from '../../components/SEO';
import FooterCard from '../../components/FooterCard';
import TeacherEducationAbout from '../../containers/TeacherEducationAbout';

export default function EducationStudent() {
  return (
    <div>
      <SEO />
      <NavigationPlush />
      <TeacherEducation />
      <TeacherEducationAbout />
      <FooterCard />
    </div>
  );
}
