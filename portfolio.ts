import emoji from 'react-easy-emoji';
import {
  EducationType,
  MemberType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  KeyFeatureType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Solavar AI',
  title: "Hello, I'm Solavar AI",
  description:
    "Solavar AI is a powerful artificial intelligence (AI) application that transforms your ideas, descriptions, and images into impressive avatar images. You don't need to be an artist or have graphic design skills because Solavar AI does all the work for you.",
  resumeLink:
    'https://solana-ai-avatar.vercel.app/',
};

export const openSource = {
  githubUserName: 'minhhaufpt',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://solana-ai-avatar.vercel.app',
  github: 'https://github.com/minhhaufpt',
  instagram: 'https://www.instagram.com/haunguyen.vn.2k3/',
  facebook: 'https://www.facebook.com/profile.php?id=100037362923065',
  linkedin: '',
  twitter: '',
};

export const skillsSection: SkillsSectionType = {
  title: 'What technology do I have?',
  subTitle: 'CREATE SEPARATE AVATAR',
  data: [
    {
      title: 'Information Security',
      lottieAnimationFile: '/lottie/AI/security.json',
      skills: [
        emoji('⚡ Advanced technology'),
        emoji('⚡ Information is absolutely confidential'),
        emoji('⚡ Do not provide any information to third parties'),
      ],
      softwareSkills: [
        {
          skillName: 'Security',
          iconifyTag: 'icon-park:message-security',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'AI',
          iconifyTag: 'eos-icons:ai',
        },
      ],
    },
    {
      title: 'Platform AI',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json',
      skills: [
        emoji('⚡ Generate AI images'),
        emoji('⚡ Fast and convenient'),
        emoji('⚡ Smart data processing with ChatGPT'),
      ],
      softwareSkills: [
        {
          skillName: 'Imaginen AI',
          iconifyTag: 'cryptocurrency-color:aion',
        },
        {
          skillName: 'ChatGPT',
          iconifyTag: 'ri:openai-fill',
        },

      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Solana Platform'),
        emoji('⚡ Payment with CandyPay'),
        emoji('⚡ Payment is transparent, fast, safe'),
      ],
      softwareSkills: [
        {
          skillName: 'Solana',
          iconifyTag: 'formkit:solana',
        },
        {
          skillName: 'Metamask',
          iconifyTag: 'logos:metamask-icon',
        },
        {
          skillName: 'Security',
          iconifyTag: 'icon-park:blockchain',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Exactly', 
    progressPercentage: '80', 
  },
  {
    Stack: 'Pretty',
    progressPercentage: '70',
  },
  {
    Stack: 'Individual',
    progressPercentage: '90',
  },
];

export const KeyFeatureInfo: KeyFeatureType[] = [
  {
    title: 'Automatic Avatar Creation',
    desc: '',
    descBullets: [
      'Just provide a brief description of your character or scene, and AvatarAI will craft a unique avatar based on it.',
    ],
  },
  {
    title: 'Customization',
    desc: '',
    descBullets: [
      'You can customize avatars by changing colors, backgrounds, or other features to reflect your personality.',
    ],
  },
  {
    title: 'Design Multiple Avatar Types',
    desc: '',
    descBullets: [
      'Create avatars from novels, movies, video games, and various other genres to suit your purposes.',
    ],
  },
  {
    title: 'Multi-Language Support',
    desc: '',
    descBullets: [
      'AvatarAI supports multiple languages, making it easy for you to create avatars wherever you are in the world.',
    ],
  },
];

export const member: MemberType[] = [
   {
    role: 'Full-stack Developer',
    name: 'PS24488 - Nguyễn Minh Hậu',
    avatar: '/img/icons/common/nguyenminhhau.png',
    date: '09/2023',
    desc: '',
  },
   {
    role: 'Front-End Developer',
    name: 'PS19944 - Nguyễn Quốc Huy',
    avatar: '/img/icons/common/nguyenquochuy.png',
    date: '09/2023',
    desc: '',
  },
   {
    role: 'Back-End Developer',
    name: 'PS20032 - Đặng Hoàng Nam',
    avatar: '/img/icons/common/danghoangnam.png',
    date: '09/2023',
    desc: '',
  },
   {
    role: 'Back-End Developer',
    name: 'PS19642 - Bùi Tô Việt Thắng',
    avatar: '/img/icons/common/buitovietthang.png',
    date: '09/2023',
    desc: '',
  },
   {
    role: 'Back-End Developer',
    name: 'PS20817 - Đặng Ngọc Sơn',
    avatar: '/img/icons/common/dangngocson.png',
    date: '09/2023',
    desc: '',
  },
   {
    role: 'Back-End Developer',
    name: 'PS21565 - Nguyễn Tiến Đạt',
    avatar: '/img/icons/common/nguyentiendat.png',
    date: '09/2023',
    desc: '',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Solavar AI',
  description:
    'Internship Project',
  author: 'Nguyễn Minh Hậu',
  image: 'https://avatars.githubusercontent.com/u/91709592?s=96&v=4',
  url: 'https://solana-ai-avatar.vercel.app',
  keywords: [
    'Solana',
    'AI',
    'Avatar',
    'Solavar',
    'Solavar AI',
  ],
};
