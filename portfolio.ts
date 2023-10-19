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
  Family,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Solana Education',
  title: "Hello, I'm Solana Education",
  description:
    "Please bring future technology into training",
  resumeLink:
    'https://solana-education.vercel.app/posts',
};

export const openSource = {
  githubUserName: 'minhhaufpt',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://solana-education.vercel.app',
  github: 'https://github.com/minhhaufpt',
  instagram: 'https://www.instagram.com/haunguyen.vn.2k3/',
  facebook: 'https://www.facebook.com/profile.php?id=100037362923065',
  linkedin: '',
  twitter: '',
};

export const skillsSection: SkillsSectionType = {
  title: 'What technology do I have?',
  subTitle: '',
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
        emoji('⚡ Smart data processing with ChatGPT'),
      ],
      softwareSkills: [
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

export const FamilyMember: Family[] = [
  {
    name: '',
    role : "Người Bà", 
    lottieAnimationFile: '/lottie/grandmother.json', 
    wish: 'Bà là người sinh thành của đấng sinh thành vì thế không thể nào phủ nhận sự kính trọng của cháu đối với bà. Nếu bà có nghe được những lời này của cháu. Cháu rất mong nghe được bà gọi "cháu ngoan của bà". Cháu xin lỗi vì đã không trưởng thành nhanh hơn để bà bớt phải lo lắng. Nếu bà có thể lắng nghe được lời cháu nói thì cháu xin chúc bà có một ngày thật vui vẻ và mãi bên cháu. "Còn nếu ...", cháu mong bà ở nơi xa vẫn sẽ nhớ đến đứa cháu của bà.'
  },
  {
    name: '',
    role : "Người Mẹ", 
    lottieAnimationFile: '/lottie/mother.json', 
    wish: 'Người Mẹ là một chức trách thiên liêng và vô cùng cao quý. Con xin cảm ơn ân dưỡng dục, cảm ơn vì những đánh đổi của mẹ dành cho con. Con xin lỗi vì những lỗi lầm của con làm mẹ phải buồn. Ngày 20/10 chính là ngày mà con ghi nhớ những công ơn đó của mẹ. Con xin kính chúc mẹ một ngày 20-10 tràn đầy niềm vui và hạnh phúc. Mẹ là người phụ nữ tuyệt vời nhất trong cuộc đời con. Con yêu mẹ nhiều lắm !!!'
  },
   {
    name: '', 
     role : "Chị gái", 
    lottieAnimationFile: '/lottie/sister.json', 
    wish: 'Nếu không có mẹ bên cạnh thì người luôn chở che, dạy bảo em chính là chị. Cảm ơn vì đã bỏ qua những sai lầm của em, cảm ơn vì luôn ở bên cạnh và hỗ trợ em trong mọi thử thách. Chúc cho chị gái có một ngày đầy niềm vui và hạnh phúc, như tình cảm mà em dành cho chị gái vậy, luôn ấm áp và không bao giờ phai mờ.'
  },
   {
    name: '', 
     role : "Em gái", 
    lottieAnimationFile: '/lottie/youngsister.json', 
    wish: 'Chưa bao giờ cảm giác làm anh làm chị là dễ dàng cả. Nhưng với trách nhiệm được đặt lên vai anh chị thì chưa bao giờ anh chị không lo nghĩ cho người em của mình, cho nên cố gắng trưởng thành và ngoan ngoãn hơn nhé.Em luôn là niềm tự hào và niềm vui trong cuộc sống của con. Chúc em gái có một ngày đặc biệt, tràn đầy tiếng cười và vui tươi và anh chị vẫn luôn dõi theo bước chân của em.'
  },
  {
    name: '', 
     role : "Bạn gái", 
    lottieAnimationFile: '/lottie/heart1.json', 
    wish: 'Anh không biết chúng ta có thể ở bên cạnh bao lâu nữa nhưng anh vẫn mong chúng ta sẽ đến với nhau vào một ngày không xa. Anh muốn gửi lời chúc đặc biệt đến người yêu của mình. Em là ngọn lửa ấm áp trong cuộc đời anh, luôn đem lại niềm vui và hạnh phúc không ngừng. Chúc người yêu của anh có một ngày đáng nhớ, nhiều niềm vui và mãi mãi là tình yêu của anh.'
  },
  {
    name: '', 
     role : "Bạn bè nữ", 
    lottieAnimationFile: '/lottie/friend.json', 
    wish: 'Với vị trí là những người bạn, chắc chúng ta không cần nói nhiều nhỉ. Chúng ta vốn quá hiểu nhau nên mình sẽ nói ngắn ngọn. Mình luôn luôn trân trọng các bạn. Mình mong các bạn có một ngày thật đáng nhớ, chúc các bạn luôn tươi trẻ, hồn nhiên, đáng yêu như lúc chúng ta gặp nhau và chúng ta mãi mãi sẽ là những người bạn của nhau.'
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
];

export const member: MemberType[] = [
   {
    role: 'Full-stack Developer',
    name: 'PS24488 - Nguyễn Minh Hậu',
    avatar: '/img/icons/common/nguyenminhhau.png',
    date: '09/2023',
    desc: '',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: '',
    feedback:
      '',
  },
];



// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Solana Education',
  description:
    'Internship Project',
  author: 'Nguyễn Minh Hậu',
  image: 'https://avatars.githubusercontent.com/u/91709592?s=96&v=4',
  url: 'https://solana-ai-avatar.vercel.app',
  keywords: [
    'Solana',
    'AI',
    'Education',
    'Solana Education',
  ],
};
