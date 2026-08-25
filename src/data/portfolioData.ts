export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type?: string;
  description: string;
}

export interface EducationItem {
  level: 'tertiary' | 'secondary';
  degree: string;
  institution: string;
  period: string;
}

export interface ToolCategory {
  category: string;
  tools: string[];
}

export const LUISA_PROFILE = {
  name: 'Maria Luisa M. Plaza',
  shortName: 'Luisa',
  tagline: '2+ years in digital marketing',
  headline: 'DIGITAL MARKETER & CONTENT SPECIALIST',
  phone: '+63 9279152995',
  email: 'luisaaplazaa@gmail.com',
  location: 'Manila, Philippines',
  
  objective:
    'STEM graduate currently pursuing a Bachelor of Science in Accounting Information Systems, with a strong analytical foundation and experience in digital marketing, content creation, and visual media. Skilled in written and spoken English communication, creating engaging image and video content for digital campaigns, and applying data-driven thinking to solve business problems. Adaptable, quick to learn, and committed to continuously developing new skills that contribute to organizational success.',

  industries: [
    'Public Affairs',
    'Beauty & Skincare',
    'Recruitment'
  ],

  workExperiences: [
    {
      period: '2025 Aug – 2025 Oct',
      type: 'Project-based',
      role: 'Social Media Manager',
      company: 'Aerio Partners',
      location: 'United States',
      description:
        'Oversee end-to-end social media operations for the company, founder, and co-founder, from content ideation and creation to scheduling, publishing, audience engagement, and community management across various digital platforms.'
    },
    {
      period: '2025 Jun – 2025 Aug',
      type: 'Project-based',
      role: 'Social Media Manager',
      company: 'WR Advisory Group',
      location: 'Ortigas',
      description:
        'Managed social media content and performance by posting videos and photos across key platforms, including Facebook, Instagram, X (Twitter), and TikTok.'
    },
    {
      period: '2022 May – 2023 Aug',
      type: 'Full-time',
      role: 'Social Media Coordinator',
      company: 'Support Shepherd',
      location: 'US-based',
      description:
        'Develop, implement, and manage company’s social media strategy. Timely respond to social media audiences. Post contents on TikTok, Facebook, and LinkedIn daily. Handle, plan, and independently create content for TikTok.'
    },
    {
      period: '2022 Feb – 2022 May',
      type: 'Contract',
      role: 'Virtual Assistant',
      company: 'MMML Recruitment Services',
      location: 'Manila',
      description:
        'Assisting with booking and scheduling passport appointments for Overseas Filipino Workers (OFWs), verifying personal information, and ensuring accurate and timely submission of requirements.'
    },
    {
      period: '2021 Aug – 2022 Feb',
      type: 'Contract',
      role: 'ESL Tutor',
      company: 'Jiji English',
      location: 'Beijing-based',
      description:
        'Responsible for teaching English to Chinese students, including both minors and adult learners. Provides engaging and age-appropriate lessons focused on developing students’ speaking, listening, reading, and writing skills.'
    }
  ] as ExperienceItem[],

  education: [
    {
      level: 'tertiary',
      degree: 'Bachelor of Science in Accounting Information Systems',
      institution: 'Mapúa University – Makati',
      period: '2023 – Present'
    },
    {
      level: 'tertiary',
      degree: 'Bachelor of Science in Architecture',
      institution: 'University of the Philippines',
      period: '2021 – 2022'
    },
    {
      level: 'secondary',
      degree: 'Senior High School - Science, Technology, Engineering, and Mathematics (STEM) Strand',
      institution: 'St. Paul University Manila',
      period: '2019 – 2021'
    }
  ] as EducationItem[],

  skills: [
    'Numerical',
    'Critical Thinking',
    'Communication',
    'Creativity and Visualization',
    'Media and Information Literacy'
  ],

  expertise: [
    'Social Media Analytics',
    'Content Creation',
    'Content Specialist',
    'Community Management',
    'Graphic Design',
    'Digital Marketing',
    'Paid Ads Manager',
    'Organic Growth',
    'Accounting',
    'Information Systems'
  ],

  toolCategories: [
    {
      category: 'Digital Marketing Software',
      tools: ['Meta Business Suite', 'Hootsuite', 'HubSpot', 'Publer']
    },
    {
      category: 'Workspace & Project Management',
      tools: ['Notion', 'Trello', 'Slack', 'Airtable']
    },
    {
      category: 'Productivity Suites',
      tools: ['Microsoft Office 365', 'Google Workspace (G Suite)']
    },
    {
      category: 'Design & Visual Media',
      tools: ['Canva', 'Adobe Creative Suite']
    }
  ] as ToolCategory[],

  socialPlatforms: [
    {
      name: 'Facebook',
      handle: '@luisaplazamarketing',
      role: 'Community Building & Paid Ads',
      description: 'Managing brand communities, scheduled publishing, and Meta Business Suite ad campaigns.'
    },
    {
      name: 'Instagram',
      handle: '@luisaplazamarketing',
      role: 'Visual Identity & Reels',
      description: 'Curating grid aesthetics, story engagement funnels, and high-retention short-form Reels.'
    },
    {
      name: 'TikTok',
      handle: '@luisaplaza',
      role: 'Viral Video & Trend Strategy',
      description: 'End-to-end TikTok video creation, trend capitalization, hook optimization, and organic reach.'
    },
    {
      name: 'X (Twitter)',
      handle: '@luisaplaza',
      role: 'Real-Time Engagement & PR',
      description: 'Real-time brand commentary, community interactions, public affairs broadcasting, and audience listening.'
    },
    {
      name: 'LinkedIn',
      handle: 'Maria Luisa Plaza',
      role: 'Professional Branding & B2B',
      description: 'Thought leadership copywriting, corporate updates, talent acquisition branding, and B2B engagement.'
    },
    {
      name: 'YouTube',
      handle: '@luisaplazamedia',
      role: 'Long-Form Video & Shorts',
      description: 'Optimizing titles, descriptions, custom thumbnails, YouTube Shorts, and audience retention.'
    }
  ]
};

