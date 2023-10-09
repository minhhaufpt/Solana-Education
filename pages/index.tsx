import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import('../components/Navigation'));
const Greetings = dynamic(() => import('../containers/Greetings'));
const Skills = dynamic(() => import('../containers/Skills'));
const Proficiency = dynamic(() => import('../containers/Proficiency'));
const KeyFeatures = dynamic(() => import('../containers/KeyFeatures'));
const Members = dynamic(() => import('../containers/Members'));
const Feedbacks = dynamic(() => import('../containers/Feedbacks'));
import { openSource, showContactUs } from '../portfolio';
import SEO from '../components/SEO';
import Contact from '../components/ContactUs';
import FooterCard from '../components/FooterCard';
import { GithubUserType } from '../types';
import Test from '../components/Test';

export default function Home({
  githubProfileData,
}: {
  githubProfileData: any;
}) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <KeyFeatures />
      <Members />
      <Feedbacks />
      {showContactUs ? <Contact /> : null}
      <FooterCard />
    </div>
  );
}

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());
  return {
    props: { githubProfileData },
  };
}
