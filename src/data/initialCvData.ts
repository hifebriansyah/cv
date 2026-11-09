import { CvPageData } from '../types/cv';

const dot = (a: string, b: string) => `${a}.${b}`;

export const INITIAL_CV_PAGES: CvPageData[] = [
  // =========================================================================
  // 1. cv-1 — Front Cover
  // =========================================================================
  {
    id: 'cv-1',
    originalFile: dot('cv-1', 'png'),
    kind: 'cover-front',
    hideFooterNumber: true,
    lockedStructural: true,
    title: 'hf',
  },

  // =========================================================================
  // 2. cv-2 — Terminal Spread Left (Hello + TOC 1..12)
  // =========================================================================
  {
    id: 'cv-2',
    originalFile: dot('cv-2', 'png'),
    kind: 'toc-left',
    hideFooterNumber: true,
    lockedStructural: true,
    terminalCommand: dot('> ./start', 'sh'),
    cursiveHero: 'Hello',
    tocGroups: [
      {
        range: '[ 1, 4 ]',
        items: [
          '< profile />',
          '< soft-skill />',
          '< language-skill />',
          '< role-based-skill />',
          '< practical-skill />',
        ],
      },
      {
        range: '[ 5, 8 ]',
        items: [
          '< work-experience />',
          '< internship-exp />',
          '< contract-exp />',
        ],
      },
      {
        range: '[ 9, 12 ]',
        items: [
          '< education />',
          '< award />',
          '< organization />',
          '< certification />',
          '< course />',
          '< document />',
        ],
      },
    ],
  },

  // =========================================================================
  // 3. cv-3 — Terminal Spread Right (World + TOC 13..26)
  // =========================================================================
  {
    id: 'cv-3',
    originalFile: dot('cv-3', 'png'),
    kind: 'toc-right',
    hideFooterNumber: true,
    lockedStructural: true,
    cursiveHero: 'World',
    tocGroups: [
      {
        range: '[ 13, 22 ]',
        items: [
          '< software-portfolio />',
          '< pwa-portfolio />',
          '< other-software-portfolio />',
          '< logo-design-portfolio />',
          '< ai-persona-portfolio />',
          '< investment-portfolio />',
          '< unsorted-portfolio />',
          '< asset-portfolio />',
          '< property-portfolio />',
          '< ai-art-portfolio />',
        ],
      },
      {
        range: '[ 23, 26 ]',
        items: [
          '< slices-of-my-life />',
          '< contact-reference />',
          '< contact-info />',
        ],
      },
    ],
  },

  // =========================================================================
  // 4. cv-4 — Page 1: Profile, Soft Skill, Language, Role Based Skill
  // =========================================================================
  {
    id: 'cv-4',
    originalFile: dot('cv-4', 'png'),
    kind: 'profile',
    profileData: {
      fullName: 'FEBRIANSYAH',
      credentials: ', PSM, PSPO, ISM.',
      tagline: 'IT ENTHUSIAST',
      experienceYears: '15+ years experience',
      photo: {
        id: 'profile-portrait',
        label: 'Febriansyah Portrait',
        sublabel: '2480×3508 Profile Photo',
        badgeText: 'PHOTO',
        bgColor: '#34495E',
        textColor: '#FFFFFF',
        shape: 'portrait',
      },
      contacts: [
        { icon: 'phone', value: '+62-898-9090-112' },
        { icon: 'mail', value: dot('hifebriansyah@gmail', 'com') },
        { icon: 'globe', value: dot('hifebriansyah', 'com') },
      ],
      softSkills: [
        { name: 'Public Speaking', percent: 88 },
        { name: 'Leadership', percent: 74 },
        { name: 'Decision Making', percent: 82 },
        { name: 'Communication', percent: 88 },
        { name: 'Time Management', percent: 88 },
      ],
      languages: [
        { name: 'English', percent: 88 },
        { name: 'Indonesia', percent: 95 },
      ],
      bioParagraphs: [
        "Hi I'm Febriansyah! I've been in love with programming since junior high school. My strong points are in Website, API and PWA development.",
        "I'm also certified as a Professional Scrum Master & Professional IT Engineer!",
      ],
      roleSkills: [
        { title: 'Managerial', color: '#7FB2D5', percent: 84 },
        { title: 'Software Engineer', color: '#85C1E9', percent: 82 },
        { title: 'Project Manager', color: '#E09F70', percent: 72 },
        { title: 'UI / UX Designer', color: '#EC9792', percent: 60 },
        { title: 'QA/QC', color: '#76D7C4', percent: 70 },
        { title: 'Devops', color: '#82E0AA', percent: 68 },
      ],
    },
  },

  // =========================================================================
  // 5. cv-5 — Page 2: Practical Skill (1/3)
  // =========================================================================
  {
    id: 'cv-5',
    originalFile: dot('cv-5', 'png'),
    kind: 'practical-skill',
    title: 'PRACTICAL SKILL (1/3)',
    skillGroups: [
      {
        category: 'Backend Programming',
        items: [
          {
            name: 'PHP',
            level: 'Expert',
            underlined: true,
            logo: { id: 'sk-php', label: 'php', bgColor: '#4F5B93', textColor: '#FFFFFF', accentColor: '#4F5B93' },
          },
          {
            name: 'GO Lang',
            level: 'Novice',
            logo: { id: 'sk-go', label: 'GO', bgColor: '#FFFFFF', textColor: '#00ADD8', accentColor: '#7FD5EA' },
          },
          {
            name: 'Java',
            level: 'Advanced',
            logo: { id: 'sk-java', label: 'Java', bgColor: '#FFFFFF', textColor: '#E76F00', accentColor: '#5382A1' },
          },
          {
            name: 'Python',
            level: 'Advanced',
            logo: { id: 'sk-python', label: 'python', bgColor: '#FFFFFF', textColor: '#3776AB', accentColor: '#99B8D0' },
          },
          {
            name: 'Ruby',
            level: 'Novice',
            logo: { id: 'sk-ruby', label: 'Ruby', bgColor: '#FFFFFF', textColor: '#CC342D', accentColor: '#F1948A' },
          },
          {
            name: 'Node JS',
            level: 'Novice',
            logo: { id: 'sk-node', label: 'node', bgColor: '#FFFFFF', textColor: '#339933', accentColor: '#A9DFBF' },
          },
        ],
      },
      {
        category: 'Frontend Programming',
        items: [
          {
            name: dot('Vue', 'js'),
            level: 'Advanced',
            logo: { id: 'sk-vue', label: dot('Vue', 'js'), bgColor: '#FFFFFF', textColor: '#4FC08D', accentColor: '#76D7C4' },
          },
          {
            name: 'CSS 3',
            level: 'Expert',
            underlined: true,
            logo: { id: 'sk-css3', label: 'CSS 3', bgColor: '#FFFFFF', textColor: '#264DE4', accentColor: '#8592E8' },
          },
          {
            name: 'jQuery',
            level: 'Advanced',
            logo: { id: 'sk-jquery', label: 'jQuery', bgColor: '#FFFFFF', textColor: '#0769AD', accentColor: '#7FB3D5' },
          },
          {
            name: 'React JS',
            level: 'Advanced',
            logo: { id: 'sk-react', label: 'React JS', bgColor: '#FFFFFF', textColor: '#00D8FF', accentColor: '#85C1E9' },
          },
          {
            name: 'Javascript',
            level: 'Expert',
            underlined: true,
            logo: { id: 'sk-js', label: 'JS', bgColor: '#FFFFFF', textColor: '#D4AC0D', accentColor: '#F5CBA7' },
          },
          {
            name: 'HTML 5',
            level: 'Expert',
            underlined: true,
            logo: { id: 'sk-html5', label: 'HTML 5', bgColor: '#FFFFFF', textColor: '#E34F26', accentColor: '#F5B7B1' },
          },
        ],
      },
      {
        category: 'Framework Programming',
        items: [
          {
            name: 'GIN',
            level: 'Novice',
            logo: { id: 'sk-gin', label: 'GIN', bgColor: '#FFFFFF', textColor: '#007ACC', accentColor: '#85C1E9' },
          },
          {
            name: 'Zend',
            level: 'Advanced',
            logo: { id: 'sk-zend', label: 'ZF', bgColor: '#FFFFFF', textColor: '#68B604', accentColor: '#A9DFBF' },
          },
          {
            name: 'Code Igniter',
            level: 'Advanced',
            logo: { id: 'sk-ci', label: 'CI', bgColor: '#FFFFFF', textColor: '#EF4223', accentColor: '#F5B7B1' },
          },
          {
            name: 'Laravel',
            level: 'Advanced',
            logo: { id: 'sk-laravel', label: 'Laravel', bgColor: '#FFFFFF', textColor: '#FF2D20', accentColor: '#F1948A' },
          },
          {
            name: 'Yii',
            level: 'Advanced',
            logo: { id: 'sk-yii', label: 'yii', bgColor: '#1B3647', textColor: '#FFFFFF', accentColor: '#1B3647' },
          },
          {
            name: 'Express JS',
            level: 'Novice',
            logo: { id: 'sk-express', label: 'express', bgColor: '#FFFFFF', textColor: '#555555', accentColor: '#BDC3C7' },
          },
          {
            name: 'Angular JS',
            level: 'Advanced',
            logo: { id: 'sk-angular', label: 'A', bgColor: '#FFFFFF', textColor: '#DD0031', accentColor: '#F1948A' },
          },
          {
            name: 'Alpine JS',
            level: 'Advanced',
            logo: { id: 'sk-alpine', label: dot('Alpine', 'js'), bgColor: '#FFFFFF', textColor: '#2D3446', accentColor: '#BDC3C7' },
          },
          {
            name: 'Lumen',
            level: 'Advanced',
            logo: { id: 'sk-lumen', label: 'Lumen', bgColor: '#E74430', textColor: '#FFFFFF', accentColor: '#E74430' },
          },
          {
            name: 'Slim PHP',
            level: 'Advanced',
            logo: { id: 'sk-slim', label: 'Slim', bgColor: '#FFFFFF', textColor: '#719E40', accentColor: '#A9DFBF' },
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 6. cv-6 — Page 3: Practical Skill (2/3)
  // =========================================================================
  {
    id: 'cv-6',
    originalFile: dot('cv-6', 'png'),
    kind: 'practical-skill',
    title: 'PRACTICAL SKILL (2/3)',
    skillGroups: [
      {
        category: 'Database',
        items: [
          {
            name: 'MySQL',
            level: 'Advanced',
            logo: { id: 'sk-mysql', label: 'MySQL', bgColor: '#FFFFFF', textColor: '#00758F', accentColor: '#85C1E9' },
          },
          {
            name: 'Redis',
            level: 'Expert',
            underlined: true,
            logo: { id: 'sk-redis', label: 'redis', bgColor: '#FFFFFF', textColor: '#D82C20', accentColor: '#F1948A' },
          },
          {
            name: 'Maria DB',
            level: 'Advanced',
            logo: { id: 'sk-mariadb', label: 'MariaDB', bgColor: '#FFFFFF', textColor: '#003545', accentColor: '#85929E' },
          },
          {
            name: 'Microsoft SQL',
            level: 'Advanced',
            logo: { id: 'sk-mssql', label: 'SQL Server', bgColor: '#FFFFFF', textColor: '#CC2927', accentColor: '#F1948A' },
          },
          {
            name: 'PostgreSQL',
            level: 'Advanced',
            logo: { id: 'sk-pg', label: 'PostgreSQL', bgColor: '#FFFFFF', textColor: '#336791', accentColor: '#85C1E9' },
          },
          {
            name: 'Mongo DB',
            level: 'Novice',
            logo: { id: 'sk-mongo', label: 'MongoDB', bgColor: '#0B212D', textColor: '#4DB33D', accentColor: '#0B212D' },
          },
          {
            name: 'Cassandra',
            level: 'Novice',
            logo: { id: 'sk-cassandra', label: 'CASSANDRA', bgColor: '#1D749B', textColor: '#FFFFFF', accentColor: '#1D749B' },
          },
          {
            name: 'Oracle',
            level: 'Novice',
            logo: { id: 'sk-oracle', label: 'ORACLE', bgColor: '#FFFFFF', textColor: '#F80000', accentColor: '#F1948A' },
          },
          {
            name: 'Open QM',
            level: 'Advanced',
            logo: { id: 'sk-openqm', label: 'Open QM', bgColor: '#FFFFFF', textColor: '#4A4E69', accentColor: '#ABB2B9' },
          },
          {
            name: 'Spanner',
            level: 'Advanced',
            logo: { id: 'sk-spanner', label: 'Spanner', bgColor: '#FFFFFF', textColor: '#4285F4', accentColor: '#85C1E9' },
          },
          {
            name: 'APCu',
            level: 'Expert',
            underlined: true,
            logo: { id: 'sk-apcu', label: 'APCu', bgColor: '#5B7BA6', textColor: '#FFFFFF', accentColor: '#5B7BA6' },
          },
        ],
      },
      {
        category: 'QA/QC',
        items: [
          {
            name: 'JMeter',
            level: 'Novice',
            logo: { id: 'sk-jmeter', label: 'JMeter', bgColor: '#FFFFFF', textColor: '#D22128', accentColor: '#F5B7B1' },
          },
          {
            name: 'Cypress',
            level: 'Novice',
            logo: { id: 'sk-cypress', label: 'cypress', bgColor: '#FFFFFF', textColor: '#17202C', accentColor: '#76D7C4' },
          },
          {
            name: 'Postman',
            level: 'Expert',
            underlined: true,
            logo: { id: 'sk-postman', label: 'POSTMAN', bgColor: '#FFFFFF', textColor: '#FF6C37', accentColor: '#F5CBA7' },
          },
          {
            name: 'Playwright',
            level: 'Advanced',
            logo: { id: 'sk-playwright', label: 'Playwright', bgColor: '#2B363C', textColor: '#45BA4B', accentColor: '#2B363C' },
          },
          {
            name: 'Insomnia',
            level: 'Expert',
            underlined: true,
            logo: { id: 'sk-insomnia', label: 'Insomnia', bgColor: '#FFFFFF', textColor: '#5849BE', accentColor: '#BB8FCE' },
          },
        ],
      },
      {
        category: 'Design & UI/UX',
        items: [
          {
            name: 'Figma',
            level: 'Advanced',
            logo: { id: 'sk-figma', label: 'Figma', bgColor: '#FFFFFF', textColor: '#F24E1E', accentColor: '#ABB2B9' },
          },
          {
            name: 'Adobe XD',
            level: 'Advanced',
            logo: { id: 'sk-xd', label: 'Xd', bgColor: '#470137', textColor: '#FF61F6', accentColor: '#470137' },
          },
          {
            name: 'SketchUp',
            level: 'Advanced',
            logo: { id: 'sk-sketchup', label: 'SketchUp', bgColor: '#FFFFFF', textColor: '#005F9E', accentColor: '#85929E' },
          },
          {
            name: 'Tinkercad',
            level: 'Advanced',
            logo: { id: 'sk-tinkercad', label: 'TINKERCAD', bgColor: '#FFFFFF', textColor: '#2ECC71', accentColor: '#A9DFBF' },
          },
          {
            name: 'Sketch App',
            level: 'Advanced',
            logo: { id: 'sk-sketch', label: 'Sketch', bgColor: '#FFFFFF', textColor: '#FDB300', accentColor: '#F5CBA7' },
          },
          {
            name: 'Canva',
            level: 'Novice',
            logo: { id: 'sk-canva', label: 'Canva', bgColor: '#FFFFFF', textColor: '#00C4CC', accentColor: '#76D7C4' },
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 7. cv-7 — Page 4: Practical Skill (3/3)
  // =========================================================================
  {
    id: 'cv-7',
    originalFile: dot('cv-7', 'png'),
    kind: 'practical-skill',
    title: 'PRACTICAL SKILL (3/3)',
    skillGroups: [
      {
        category: 'Devops',
        items: [
          {
            name: 'Jenkins',
            level: 'Advanced',
            logo: { id: 'sk-jenkins', label: 'Jenkins', bgColor: '#FFFFFF', textColor: '#D33833', accentColor: '#ABB2B9' },
          },
          {
            name: 'Ubuntu',
            level: 'Advanced',
            logo: { id: 'sk-ubuntu', label: 'ubuntu', bgColor: '#FFFFFF', textColor: '#E95420', accentColor: '#F5CBA7' },
          },
          {
            name: 'Git',
            level: 'Expert',
            underlined: true,
            logo: { id: 'sk-git', label: 'git', bgColor: '#FFFFFF', textColor: '#F05032', accentColor: '#F5B7B1' },
          },
          {
            name: 'cPanel',
            level: 'Advanced',
            logo: { id: 'sk-cpanel', label: 'cPanel', bgColor: '#FFFFFF', textColor: '#FF6C2C', accentColor: '#F5CBA7' },
          },
          {
            name: 'Digital Ocean',
            level: 'Advanced',
            logo: { id: 'sk-do', label: 'DigitalOcean', bgColor: '#FFFFFF', textColor: '#0080FF', accentColor: '#85C1E9' },
          },
          {
            name: 'Google Cloud',
            level: 'Novice',
            logo: { id: 'sk-gcp', label: 'Google Cloud', bgColor: '#FFFFFF', textColor: '#4285F4', accentColor: '#F9E79F' },
          },
          {
            name: 'Github',
            level: 'Expert',
            underlined: true,
            logo: { id: 'sk-github', label: 'GitHub', bgColor: '#FFFFFF', textColor: '#181717', accentColor: '#ABB2B9' },
          },
          {
            name: 'Gitlab',
            level: 'Expert',
            underlined: true,
            logo: { id: 'sk-gitlab', label: 'GitLab', bgColor: '#30354E', textColor: '#FC6D26', accentColor: '#30354E' },
          },
          {
            name: 'Cloud Flare',
            level: 'Advanced',
            logo: { id: 'sk-cloudflare', label: 'CLOUDFLARE', bgColor: '#FFFFFF', textColor: '#F38020', accentColor: '#F5CBA7' },
          },
          {
            name: 'Docker',
            level: 'Novice',
            underlined: true,
            logo: { id: 'sk-docker', label: 'docker', bgColor: '#FFFFFF', textColor: '#2496ED', accentColor: '#85C1E9' },
          },
          {
            name: 'Apache Server',
            level: 'Advanced',
            logo: { id: 'sk-apache', label: 'APACHE', bgColor: '#FFFFFF', textColor: '#D22128', accentColor: '#F5B7B1' },
          },
          {
            name: 'Bash',
            level: 'Advanced',
            logo: { id: 'sk-bash', label: 'BASH', bgColor: '#FFFFFF', textColor: '#293138', accentColor: '#ABB2B9' },
          },
        ],
      },
      {
        category: 'Project Management',
        items: [
          {
            name: 'Jira',
            level: 'Expert',
            underlined: true,
            logo: { id: 'sk-jira', label: 'Jira', bgColor: '#FFFFFF', textColor: '#0052CC', accentColor: '#85C1E9' },
          },
          {
            name: 'Trello',
            level: 'Expert',
            underlined: true,
            logo: { id: 'sk-trello', label: 'Trello', bgColor: '#FFFFFF', textColor: '#0079BF', accentColor: '#85C1E9' },
          },
          {
            name: 'Google Suite',
            level: 'Advanced',
            logo: { id: 'sk-gsuite', label: 'G Suite', bgColor: '#FFFFFF', textColor: '#4285F4', accentColor: '#A9DFBF' },
          },
          {
            name: 'Asana',
            level: 'Novice',
            logo: { id: 'sk-asana', label: 'asana', bgColor: '#FFFFFF', textColor: '#F06A6A', accentColor: '#F5B7B1' },
          },
          {
            name: 'Pivotal Tracker',
            level: 'Advanced',
            logo: { id: 'sk-pivotal', label: 'Pivotal', bgColor: '#FFFFFF', textColor: '#E67E22', accentColor: '#F5CBA7' },
          },
        ],
      },
      {
        category: 'AI Tools',
        items: [
          {
            name: 'Chat GPT',
            level: 'Advanced',
            logo: { id: 'sk-chatgpt', label: 'ChatGPT', bgColor: '#FFFFFF', textColor: '#10A37F', accentColor: '#ABB2B9' },
          },
          {
            name: dot('Leonardo', 'Ai'),
            level: 'Novice',
            logo: { id: 'sk-leonardo', label: dot('Leonardo', 'Ai'), bgColor: '#0D0D12', textColor: '#FFFFFF', accentColor: '#0D0D12' },
          },
          {
            name: 'Antigravity',
            level: 'Advanced',
            logo: { id: 'sk-antigravity', label: 'Antigravity', bgColor: '#FFFFFF', textColor: '#2563EB', accentColor: '#85C1E9' },
          },
          {
            name: 'Claude Code',
            level: 'Advanced',
            logo: { id: 'sk-claude', label: 'Claude', bgColor: '#FFFFFF', textColor: '#D97757', accentColor: '#F5CBA7' },
          },
          {
            name: 'Suno',
            level: 'Advanced',
            logo: { id: 'sk-suno', label: 'SUNO', bgColor: '#FF4E1A', textColor: '#FFFFFF', accentColor: '#FF4E1A' },
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 8. cv-8 — Page 5: Work Experience (1/3)
  // =========================================================================
  {
    id: 'cv-8',
    originalFile: dot('cv-8', 'png'),
    kind: 'experience',
    experienceSections: [
      {
        heading: 'WORK EXPERIENCE (1/3)',
        items: [
          {
            companyOrRole: 'PT. Enam Dua Teknologi',
            period: 'Nov 2019 - Present · 6+ yrs',
            logo: {
              id: 'exp-62',
              label: '62',
              bgColor: '#D90416',
              textColor: '#FFFFFF',
            },
            tags: [
              { label: '#managerial', color: 'blue' },
              { label: '#software-engineer', color: 'blue' },
              { label: '#pm', color: 'orange' },
              { label: '#ux-designer', color: 'red' },
              { label: '#qa-qc', color: 'green' },
              { label: '#devops', color: 'green' },
              { label: '#php', color: 'gray' },
              { label: '#golang', color: 'blue' },
              { label: '#node-js', color: 'green' },
              { label: '#mysql', color: 'blue' },
              { label: '#jira', color: 'blue' },
              { label: '#python', color: 'blue' },
              { label: '#redis', color: 'red' },
              { label: '...more', color: 'red' },
            ],
            subRoles: [
              { title: 'Commissioner & Beneficial Owner', period: 'Jan 2025 - Present' },
              { title: 'CTO', period: 'Nov 2022 - Jan 2025' },
              { title: 'Head of IT', period: 'Nov 2019 - Oct 2021' },
            ],
            responsibilitiesIntro:
              'Do everything necessary, to ensure product delivery to customer such as',
            ResponsibilitiesNumbered: true,
            responsibilities: [
              'Recruit and build engineering, qa and devops team',
              'Set up development and production server',
              'Implement CI/CD using jenkins',
              'Implement changes and steps to increase team productivity',
              'Ensuring a good relationship between team and others 3rd party team',
              'Help communicate the stakeholders expectation to the team',
              'Codes Front End Codes Back End',
            ],
            achievementIntro:
              'Become the shareholder of the company due My achievements such as',
            achievementsNumbered: true,
            achievements: [
              'Grow the company from less than 10 employee to almost 80 at the peak',
              'Grow the company revenue to almost 500%',
              'Grow and produce talent from new recruitment',
            ],
          },
          {
            companyOrRole: 'Software Engineer',
            subtitle: `PT Indodax Nasional Indonesia | ${dot('Indodax', 'com')}`,
            period: 'Nov 2021 - Oct 2022 · 1 yr',
            logo: {
              id: 'exp-indodax',
              label: 'INDODAX',
              bgColor: '#1381B8',
              textColor: '#FFFFFF',
            },
            tags: [
              { label: '#software-engineer', color: 'blue' },
              { label: '#jira', color: 'blue' },
              { label: '#pivotal-tracker', color: 'orange' },
              { label: '#gitlab', color: 'gray' },
              { label: '#google-cloud', color: 'orange' },
              { label: '#php', color: 'gray' },
              { label: '#golang', color: 'blue' },
              { label: '#code-igniter', color: 'orange' },
              { label: '#mysql', color: 'blue' },
              { label: '#spanner', color: 'blue' },
              { label: '#google-workspace', color: 'orange' },
            ],
            responsibilities: [
              'Complete tasks assigned by the company, including back-end development with PHP, JS, CSS, Golang, and MySQL, developing algorithms, conducting code reviews, debugging, and fixing development and production bugs.',
            ],
            achievementsNumbered: true,
            achievements: [
              'Becomes one of the cool kids who developed new trade engine',
              'Becomes PIC of institution program and wrote the public open api documentation',
              'Become the sole contributor of 2fa micro service called "safeya"',
              'Promoted to become "core engine team"',
              'Offered to fill managerial position',
            ],
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 9. cv-9 — Page 6: Work Experience (2/3)
  // =========================================================================
  {
    id: 'cv-9',
    originalFile: dot('cv-9', 'png'),
    kind: 'experience',
    experienceSections: [
      {
        heading: 'WORK EXPERIENCE (2/3)',
        items: [
          {
            companyOrRole: 'Software Engineer',
            subtitle: `PT. Tunas Sukses Mandiri | ${dot('Nusatrip', 'com')}`,
            period: 'Jul 2016 - Nov 2019 · 3 yrs 5 mos',
            logo: {
              id: 'exp-nusatrip',
              label: 'NusaTrip',
              bgColor: '#0066B3',
              textColor: '#F37021',
              shape: 'circle',
            },
            tags: [
              { label: '#software-engineer', color: 'blue' },
              { label: '#jquery', color: 'blue' },
              { label: '#gitlab', color: 'gray' },
              { label: '#mysql', color: 'blue' },
              { label: '#php', color: 'gray' },
              { label: '#zend', color: 'green' },
              { label: '#redis', color: 'red' },
              { label: '#javascript', color: 'orange' },
              { label: '#postman', color: 'orange' },
              { label: '#jira', color: 'blue' },
            ],
            responsibilities: [
              'Complete tasks including coding with PHP Zend, Bash, MySQL, Redis, jQuery, and CSS, defining requirements with the product owner, estimating story points with the team, creating unit tests, reviewing merge requests, and deploying to staging.',
            ],
            achievementsNumbered: true,
            achievements: [
              'Top contributor to the finance system and currency engine used for over 5 yrs.',
              'Improved flight engine performance by 3x.',
              'Get promoted.',
            ],
          },
          {
            companyOrRole: 'PT. Allega Tunas Karsa',
            period: 'Jul 2014 - Jul 2016 · 2 yrs 1 mo',
            logo: {
              id: 'exp-allega',
              label: 'ALLEGA',
              bgColor: '#EAECEE',
              textColor: '#004A8F',
            },
            tags: [
              { label: '#software-engineer', color: 'blue' },
              { label: '#managerial', color: 'blue' },
              { label: '#qa-qc', color: 'green' },
              { label: '#jquery', color: 'blue' },
              { label: '#redis', color: 'red' },
              { label: '#trello', color: 'blue' },
              { label: '#gitlab', color: 'gray' },
              { label: '#mysql', color: 'blue' },
              { label: '#php', color: 'gray' },
              { label: '#js', color: 'orange' },
              { label: '#yii', color: 'gray' },
              { label: '#angular', color: 'red' },
              { label: '#laravel', color: 'red' },
              { label: '#postman', color: 'orange' },
              { label: '#javascript', color: 'orange' },
              { label: '#bash', color: 'gray' },
            ],
            subRoles: [
              { title: 'Lead Software Engineer', period: 'Nov 2019 - Oct 2021', underlined: true },
              { title: 'Senior Software Engineer', period: 'Nov 2019 - Oct 2021', underlined: true },
            ],
            responsibilities: [
              'Complete tasks including coding with PHP Yii2 and Laravel, setting up development and production servers, defining and assigning tasks, monitoring team progress, supervising UAT, and maintaining client communication.',
            ],
            achievementIntro:
              'Become the shareholder of the subsidiary company due My achievements such as',
            achievementsNumbered: true,
            achievements: [
              'Grow company valuation to almost 300%',
              'Reduce employee turnover significantly',
            ],
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 10. cv-10 — Page 7: Work Experience (3/3)
  // =========================================================================
  {
    id: 'cv-10',
    originalFile: dot('cv-10', 'png'),
    kind: 'experience',
    experienceSections: [
      {
        heading: 'WORK EXPERIENCE (3/3)',
        items: [
          {
            companyOrRole: 'PT. IES Nusantara',
            period: 'Jul 2012 - Jul 2014 · 3 yrs 1 mo',
            logo: {
              id: 'exp-ies',
              label: 'IES',
              sublabel: 'Infolab',
              bgColor: '#004B8D',
              textColor: '#FFFFFF',
            },
            tags: [
              { label: '#software-engineer', color: 'blue' },
              { label: '#managerial', color: 'blue' },
              { label: '#devops', color: 'green' },
              { label: '#mysql', color: 'blue' },
              { label: '#php', color: 'gray' },
              { label: '#open-qm', color: 'gray' },
              { label: '#javascript', color: 'orange' },
              { label: '#trello', color: 'blue' },
              { label: '#bash', color: 'gray' },
              { label: '#jquery', color: 'blue' },
              { label: '#github', color: 'gray' },
            ],
            subRoles: [
              { title: 'Lead Software Engineer', period: 'Jul 2012 - Jul 2014', underlined: true },
              { title: 'Software Engineer', period: 'Jul 2011 - June 2012' },
            ],
            responsibilities: [
              'Lead and collaborate with outsourced developers to create applications required by clients based on the analysis of PT. IES Nusantara.',
            ],
            achievementsNumbered: true,
            achievements: [
              'Promoted to lead software engineer from a previous role as a junior software engineer',
              'Create Internal Tools eg: helpdesk, HRIS, BI System that has been used more than 5 yrs',
            ],
          },
          {
            companyOrRole: 'PHP Engineer',
            subtitle: 'MB Solutions',
            period: 'May 2010 - May 2011 · 1 yr 1 mo',
            logo: {
              id: 'exp-mbs',
              label: 'MB SOLUTIONS',
              bgColor: '#EAECEE',
              textColor: '#566573',
            },
            tags: [
              { label: '#software-engineer', color: 'blue' },
              { label: '#devops', color: 'green' },
              { label: '#javascript', color: 'orange' },
              { label: '#mysql', color: 'blue' },
              { label: '#php', color: 'gray' },
              { label: '#bash', color: 'gray' },
            ],
            responsibilities: [
              'Develop web-based academic system using PHP, MySQL, CSS, and JavaScript. Designed to streamline academic processes such as managing users, courses, enrollments, and performance evaluations in an educational environment. The system is built to support various roles, including administrators, teachers, and students, each with distinct functionalities to ensure seamless interaction and task management.',
            ],
            achievements: ['Become Top Contributor for the academic module'],
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 11. cv-11 — Page 8: Internship Experience & Contract Experience
  // =========================================================================
  {
    id: 'cv-11',
    originalFile: dot('cv-11', 'png'),
    kind: 'experience',
    experienceSections: [
      {
        heading: 'INTERNSHIP EXPERIENCE',
        items: [
          {
            companyOrRole: 'Internship - PHP Engineer',
            subtitle: 'Universitas Nasional',
            period: 'Jan 2011 - Apr 2011 · 4 mos',
            logo: {
              id: 'exp-unas',
              label: 'UNAS',
              bgColor: '#009B4D',
              textColor: '#FFFFFF',
            },
            tags: [
              { label: '#software-engineer', color: 'blue' },
              { label: '#javascript', color: 'orange' },
              { label: '#php', color: 'gray' },
              { label: '#postgres-sql', color: 'gray' },
            ],
            responsibilities: [
              'Develop a comprehensive web-based SIPPM (Sistem Informasi Penelitian dan Pengabdian Masyarakat) to streamline research and community service activities. The system will facilitate efficient data management, proposal submission, progress tracking, and reporting for researchers and community service practitioners.',
            ],
            achievementsNumbered: true,
            achievements: [
              'Complete all responsibilities before the end of the internship period',
              'Create SIPPM system that has been used more than 5 years',
            ],
          },
          {
            companyOrRole: 'Internship - Database Engineer',
            subtitle: 'PT. Madani Intelsys Data',
            period: 'Feb 2010 - May 2010 · 4 mos',
            logo: {
              id: 'exp-madani',
              label: 'MADANI',
              bgColor: '#EBF5FB',
              textColor: '#1E8449',
              shape: 'circle',
            },
            tags: [
              { label: '#software-engineer', color: 'blue' },
              { label: '#microsoft-sql', color: 'red' },
            ],
            responsibilities: [
              'Create several query components required for the core banking system.',
            ],
            achievements: [
              'Complete all responsibilities before the end of the internship period.',
            ],
          },
        ],
      },
      {
        heading: 'CONTRACT EXPERIENCE',
        items: [
          {
            companyOrRole: 'Ad Interim Head of IT',
            subtitle: `PT. Amigo Inti Indonesia | ${dot('Friendchised', 'com')}`,
            period: 'Jun 2021 - Oct 2021 · 5 mos',
            logo: {
              id: 'exp-friendchised',
              label: 'FRIENDCH/SED',
              bgColor: '#F4F6F6',
              textColor: '#2C3E50',
            },
            tags: [
              { label: '#software-engineer', color: 'blue' },
              { label: '#managerial', color: 'blue' },
              { label: '#devops', color: 'green' },
              { label: '#mysql', color: 'blue' },
              { label: '#php', color: 'gray' },
            ],
            responsibilities: ['Temporarily fill the vacant position of Head of IT.'],
            achievements: [
              'Complete all responsibilities before the end of the contract period.',
            ],
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 12. cv-12 — Page 9: Education
  // =========================================================================
  {
    id: 'cv-12',
    originalFile: dot('cv-12', 'png'),
    kind: 'timeline-single',
    timelineColumns: [
      {
        pillLabel: 'EDUCATION',
        pillColor: '#148800',
        lineColor: '#148800',
        side: 'center',
        nodes: [
          {
            title: 'Universitas Bina Nusantara (Binus)',
            subtitle: "Bachelor's degree, Information Systems, 3.55",
            period: '2017 - 2019',
            dotColor: '#2E86C1',
            logo: {
              id: 'edu-binus',
              label: 'BINUS UNIVERSITY',
              bgColor: '#FFFFFF',
              textColor: '#0072BC',
            },
          },
          {
            title: 'Politeknik Negeri Jakarta (PNJ)',
            subtitle: 'Diploma, Telematika, 3.51',
            period: '2008 - 2011',
            dotColor: '#45818E',
            logo: {
              id: 'edu-pnj',
              label: 'PNJ',
              bgColor: '#FFFFFF',
              textColor: '#1F618D',
            },
          },
          {
            title: 'SMA Negeri 25',
            subtitle: 'Senior High School',
            period: '2005 - 2008',
            dotColor: '#38761D',
            logo: {
              id: 'edu-sma25',
              label: 'SMA 25',
              bgColor: '#2874A6',
              textColor: '#FFFFFF',
            },
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 13. cv-13 — Page 10: Award & Org
  // =========================================================================
  {
    id: 'cv-13',
    originalFile: dot('cv-13', 'png'),
    kind: 'timeline-dual',
    timelineColumns: [
      {
        pillLabel: 'AWARD',
        pillColor: '#8E44AD',
        lineColor: '#8E44AD',
        side: 'left',
        nodes: [
          {
            title: 'Best Graduated Student',
            subtitle: 'CEP-CCIT Fakultas Teknik Universitas Indonesia',
            period: 'Jan 2011',
            underlined: true,
            dotColor: '#F1C40F',
            logo: {
              id: 'aw-ccit',
              label: 'CEP-CCIT',
              bgColor: '#FFFFFF',
              textColor: '#D4AC0D',
            },
          },
          {
            title: '2nd Best of Web Design Competition',
            subtitle: 'Politeknik Negeri Jakarta',
            period: 'Jul 2010',
            dotColor: '#45818E',
            logo: {
              id: 'aw-pnj',
              label: 'PNJ',
              bgColor: '#FFFFFF',
              textColor: '#1F618D',
            },
          },
          {
            title: '2nd Best Youth Scientific Creation Competition',
            subtitle: 'Pemerintah DKI',
            period: 'Jan 2007',
            dotColor: '#1B4F72',
            logo: {
              id: 'aw-dki1',
              label: 'JAYA RAYA',
              bgColor: '#FFFFFF',
              textColor: '#1B4F72',
            },
          },
          {
            title: '3rd Best Public Speaking Competition',
            subtitle: 'Pemerintah DKI',
            period: 'Jan 2006',
            underlined: true,
            dotColor: '#1B4F72',
            logo: {
              id: 'aw-dki2',
              label: 'JAYA RAYA',
              bgColor: '#FFFFFF',
              textColor: '#1B4F72',
            },
          },
        ],
      },
      {
        pillLabel: 'ORG',
        pillColor: '#5D6D7E',
        lineColor: '#5D6D7E',
        side: 'right',
        nodes: [
          {
            title: 'Himpunan Mahasiswa Elektro, Pengurus',
            subtitle: 'Politeknik Negeri Jakarta',
            period: 'Jan 2008 - Jan 2009',
            dotColor: '#45818E',
            logo: {
              id: 'org-pnj',
              label: 'PNJ',
              bgColor: '#FFFFFF',
              textColor: '#1F618D',
            },
          },
          {
            title: 'Karya Ilmiah Remaja, Ketua Apresiasi Teknologi',
            subtitle: 'SMA Negeri 25',
            period: 'Jan 2007 - Jan 2008',
            underlined: true,
            dotColor: '#58D68D',
            logo: {
              id: 'org-sma25-1',
              label: 'SMA 25',
              bgColor: '#2874A6',
              textColor: '#FFFFFF',
            },
          },
          {
            title: 'OSIS, Pengurus',
            subtitle: 'SMA Negeri 25',
            period: 'Jan 2005 - Jan 2006',
            dotColor: '#58D68D',
            logo: {
              id: 'org-sma25-2',
              label: 'SMA 25',
              bgColor: '#2874A6',
              textColor: '#FFFFFF',
            },
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 14. cv-14 — Page 11: Certification & Course
  // =========================================================================
  {
    id: 'cv-14',
    originalFile: dot('cv-14', 'png'),
    kind: 'timeline-dual',
    timelineColumns: [
      {
        pillLabel: 'CERTIFICATION',
        pillColor: '#D35400',
        lineColor: '#D35400',
        side: 'left',
        nodes: [
          {
            title: 'Professional Scrum Product Owner I',
            subtitle: dot('Scrum', 'org'),
            period: 'Issued Jan 2019',
            dotColor: '#2980B9',
            logo: {
              id: 'cert-pspo',
              label: dot('Scrum', 'org'),
              bgColor: '#FFFFFF',
              textColor: '#1F618D',
            },
          },
          {
            title: 'Professional Scrum Master I',
            subtitle: dot('Scrum', 'org'),
            period: 'Issued Dec 2018',
            dotColor: '#2980B9',
            logo: {
              id: 'cert-psm',
              label: dot('Scrum', 'org'),
              bgColor: '#FFFFFF',
              textColor: '#1F618D',
            },
          },
          {
            title: 'Indonesia Scrum Master I',
            subtitle: 'Ekipa',
            period: 'Issued Dec 2018',
            dotColor: '#58D68D',
            logo: {
              id: 'cert-ekipa',
              label: 'ekipa',
              bgColor: '#FFFFFF',
              textColor: '#27AE60',
            },
          },
          {
            title: 'Professional IT Engineer',
            subtitle: 'CEP-CCIT FTUI',
            period: 'Issued Jul 2010',
            dotColor: '#F1C40F',
            logo: {
              id: 'cert-ccit',
              label: 'CEP-CCIT',
              bgColor: '#FFFFFF',
              textColor: '#D4AC0D',
            },
          },
        ],
      },
      {
        pillLabel: 'COURSE',
        pillColor: '#3498DB',
        lineColor: '#3498DB',
        side: 'right',
        nodes: [
          {
            title: 'Foundation of Project Management',
            subtitle: 'Google',
            period: 'Issued Jun 2021',
            dotColor: '#E74C3C',
            logo: {
              id: 'crs-google',
              label: 'G',
              bgColor: '#FFFFFF',
              textColor: '#4285F4',
            },
          },
          {
            title: 'Agile Planning for Software Product',
            subtitle: 'University of Alberta',
            period: 'Issued Jan 2019',
            dotColor: '#F1C40F',
            logo: {
              id: 'crs-alberta',
              label: 'ALBERTA',
              bgColor: '#FFFFFF',
              textColor: '#1E8449',
            },
          },
          {
            title: 'PSPO Preparation Course',
            subtitle: 'Volkerdon',
            period: 'Issued Dec 2018',
            dotColor: '#6C3483',
            logo: {
              id: 'crs-volkerdon',
              label: 'volkerdon',
              bgColor: '#FFFFFF',
              textColor: '#6C3483',
            },
          },
          {
            title: 'PSM Preparation Course',
            subtitle: 'Pashun Consulting',
            period: 'Issued Dec 2018',
            dotColor: '#76D7C4',
            logo: {
              id: 'crs-pashun',
              label: 'Pashun',
              bgColor: '#FFFFFF',
              textColor: '#45B39D',
            },
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 15. cv-15 — Page 12: Document
  // =========================================================================
  {
    id: 'cv-15',
    originalFile: dot('cv-15', 'png'),
    kind: 'documents',
    title: 'DOCUMENT',
    subtitle:
      "Here are a few samples from my documents, such as certificates. If you're curious or would like to see more, feel free to let me know—I'd be happy to share my other documents as well!",
    certificateItems: [
      {
        issuer: dot('Scrum', 'org'),
        badgeCode: 'PSPO I',
        title: 'PROFESSIONAL SCRUM PRODUCT OWNER I',
        recipient: 'Muhammad Febriansyah',
        description:
          'has demonstrated a fundamental level of product ownership, proving an intermediate understanding of the Scrum Framework and how to apply it to maximize the value delivered with a product.',
        date: 'January 3, 2019',
        signerName: 'Ken Schwaber',
        signerTitle: `founder ${dot('Scrum', 'org')}`,
        borderColor: '#689F38',
        accentColor: '#689F38',
        placeholder: { id: 'doc-pspo', label: 'PSPO I Certificate', bgColor: '#F1F8E9', textColor: '#33691E' },
      },
      {
        issuer: dot('Scrum', 'org'),
        badgeCode: 'PSM I',
        title: 'PROFESSIONAL SCRUM MASTER I',
        recipient: 'Muhammad Febriansyah',
        description:
          'has demonstrated a fundamental level of Scrum mastery, including the concepts of applying Scrum, and proven an understanding of Scrum as described in the Scrum Guide.',
        date: 'December 6, 2018',
        signerName: 'Ken Schwaber',
        signerTitle: `founder ${dot('Scrum', 'org')}`,
        borderColor: '#2E86C1',
        accentColor: '#1B4F72',
        placeholder: { id: 'doc-psm', label: 'PSM I Certificate', bgColor: '#EBF5FB', textColor: '#1B4F72' },
      },
      {
        issuer: 'Google · Coursera',
        badgeCode: 'COURSE',
        title: 'Foundations of Project Management',
        recipient: 'Muhammad Febriansyah',
        description:
          'an online non-credit course authorized by Google and offered through Coursera',
        date: 'Jun 2, 2021',
        signerName: 'Google',
        signerTitle: 'Coursera Certificate',
        borderColor: '#D5D8DC',
        accentColor: '#4285F4',
        placeholder: { id: 'doc-google', label: 'Google PM Certificate', bgColor: '#FFFFFF', textColor: '#333333' },
      },
      {
        issuer: 'UNIVERSITY OF ALBERTA · Coursera',
        badgeCode: 'COURSE',
        title: 'Agile Planning for Software Products',
        recipient: 'Muhammad Febriansyah',
        description:
          'an online non-credit course authorized by University of Alberta and offered through Coursera',
        date: '01/09/2019',
        signerName: 'Kenny Wong',
        signerTitle: 'Associate Professor, Computing Science',
        borderColor: '#D5D8DC',
        accentColor: '#1E8449',
        placeholder: { id: 'doc-alberta', label: 'U of Alberta Certificate', bgColor: '#FFFFFF', textColor: '#1E8449' },
      },
      {
        issuer: 'CEP-CCIT FACULTY OF ENGINEERING UNIVERSITY OF INDONESIA',
        badgeCode: 'FTUI',
        title: 'PROFESSIONAL CERTIFICATE in INFORMATION TECHNOLOGY',
        recipient: 'Muhammad Febriansyah',
        description:
          'Having fulfilled all the requirements and having passed all the examinations of 2 years professional programme',
        date: 'July 2010',
        signerName: 'Prof. Dr. Ir. Bambang Sugiarto, M.Eng.',
        signerTitle: 'Dean & Director',
        borderColor: '#F9E79F',
        accentColor: '#B7950B',
        placeholder: { id: 'doc-ftui', label: 'CEP-CCIT FTUI Certificate', bgColor: '#FEF9E7', textColor: '#7D6608' },
      },
      {
        issuer: 'ekipa',
        badgeCode: 'ISM 1',
        title: 'Certificate of Achievement — Certified Indonesia Scrum Master I',
        recipient: 'Muhammad Febriansyah',
        description:
          'Is awarded the designation Certified Indonesia Scrum Master I for completing requirements for the certification.',
        date: 'Sat 15th Dec 2018',
        signerName: 'Hugo Messer',
        signerTitle: 'Founder of Ekipa',
        borderColor: '#3498DB',
        accentColor: '#0088CC',
        placeholder: { id: 'doc-ekipa', label: 'Ekipa ISM 1 Certificate Stack', bgColor: '#EBF5FB', textColor: '#0088CC' },
      },
    ],
  },

  // =========================================================================
  // 16. cv-16 — Page 13: Software Portfolio
  // =========================================================================
  {
    id: 'cv-16',
    originalFile: dot('cv-16', 'png'),
    kind: 'portfolio-zigzag',
    title: 'SOFTWARE PORTFOLIO',
    subtitle:
      'Here are some projects that I was highly involved in, from planning, design, development, and testing, to the release and usage by the end users.',
    zigzagProjects: [
      {
        title: 'MSLearns Biometric System',
        description:
          'A project for MSGlow subsidiary, featuring Raffi Ahmad and other famous YouTubers. This web application allows admins to manage content and parameters for the website, as well as the Android and iOS apps.',
        align: 'left',
        preview: {
          id: 'pf-mslearns',
          label: 'MSLearns Dashboard UI',
          sublabel: 'Biometric Analytics & Indonesian Map Screens',
          bgColor: '#F8F9F9',
          textColor: '#2E86C1',
          shape: 'landscape',
        },
      },
      {
        title: 'Panasonic Hospitality TV',
        description:
          'A project for Panasonic Indonesia, planned to be implemented in several Indonesian hotels. This Android TV application allows users to access hotel information and order facilities from their remote TV, while admins can manage the content based on their hotel.',
        align: 'right',
        preview: {
          id: 'pf-panasonic',
          label: 'Rozy Hotel Smart TV Launcher',
          sublabel: 'Hello, MR. Sauvignon · 10:27 · 29°C',
          bgColor: '#0B2850',
          textColor: '#FFFFFF',
          shape: 'landscape',
        },
      },
      {
        title: 'Hush Puppies Sure Win Prize',
        description:
          'A project for Hush Puppies Asia. This web application allows users to receive randomized prizes on a daily basis, while admins can define the list of prizes, including the probability of each prize being selected.',
        align: 'left',
        preview: {
          id: 'pf-hushpuppies',
          label: 'Hush Puppies SURE WIN GAME',
          sublabel: 'Festive Red Envelopes & Admin Probability Matrix',
          bgColor: '#E91E63',
          textColor: '#FFE082',
          shape: 'landscape',
        },
      },
    ],
  },

  // =========================================================================
  // 17. cv-17 — Page 14: PWA Portfolio
  // =========================================================================
  {
    id: 'cv-17',
    originalFile: dot('cv-17', 'png'),
    kind: 'portfolio-zigzag',
    title: 'PWA PORTFOLIO',
    subtitle:
      "Since I'm still improving my mobile app development skills, I chose to use a Progressive Web App (PWA) to ensure compatibility across Android, iOS, Windows, and Mac, offering a more accessible solution, providing a seamless experience without the complexities of native app development.",
    zigzagProjects: [
      {
        title: 'Hana Terrazzo “AR” Catalogue',
        description:
          'A project for Hana Terrazzo. The catalog allows users to view all collections of Hana Terrazzo through images or even 3D Augmented Reality.',
        align: 'left',
        preview: {
          id: 'pf-hanaterrazzo',
          label: 'Hana Terrazzo 3D / AR Catalog',
          sublabel: 'Featured Terrazzo Products & 3D Viewer',
          bgColor: '#F4F6F6',
          textColor: '#566573',
          shape: 'landscape',
        },
      },
      {
        title: 'AZ Finance Tracker',
        description:
          'A project for AZ Finance. It allows AZ members to track their assets and project their capital gains.',
        align: 'right',
        preview: {
          id: 'pf-azfinance',
          label: 'AZ Finance Mobile PWA',
          sublabel: 'AMERTA TEKNOLOGI · IDR 100.275.000',
          bgColor: '#12102E',
          textColor: '#8B5CF6',
          shape: 'landscape',
        },
      },
      {
        title: 'Xu Yuan “AI” Assistant',
        description:
          'A proof of concept project for Xu Yuan Class. The goal is to enhance class operations by using an AI assistant that can read images and pronounce Chinese characters within them, allowing students to test their pronunciation.',
        align: 'left',
        preview: {
          id: 'pf-xuyuan',
          label: 'XU YUAN CLASS AI Assistant',
          sublabel: 'Nǐ yǒu qiānbǐ ma? · Chinese OCR & Voice Chat',
          bgColor: '#EBF5FB',
          textColor: '#0284C7',
          shape: 'landscape',
        },
      },
    ],
  },

  // =========================================================================
  // 18. cv-18 — Page 15: Logo Design Portfolio
  // =========================================================================
  {
    id: 'cv-18',
    originalFile: dot('cv-18', 'png'),
    kind: 'logo-portfolio',
    title: 'LOGO DESIGN PORTFOLIO',
    subtitle:
      'In my free time, whenever inspiration strikes and I find myself in the right mood, I enjoy immersing myself in logo design, channeling creativity into crafting unique and visually appealing designs.',
    logoSections: [
      {
        heading: 'Present Logo',
        cards: [
          {
            name: dot('Hifebriansyah', 'com'),
            period: 'ca. 2018',
            swatches: ['#1DA1F2', '#F5E6D8'],
            logo: {
              id: 'lg-hf',
              label: 'hf',
              bgColor: '#F5E6D8',
              textColor: '#1DA1F2',
            },
          },
          {
            name: 'AZ Finance',
            period: 'ca. 2022',
            swatches: ['#5B2EFF'],
            logo: {
              id: 'lg-az',
              label: 'AZ Finance',
              bgColor: '#5B2EFF',
              textColor: '#FFFFFF',
            },
          },
          {
            name: 'Hana Terrazzo',
            period: 'ca. 2024',
            swatches: ['#707070', '#A0A0A0', '#D0D0D0'],
            logo: {
              id: 'lg-hana',
              label: 'Hana Terrazzo',
              bgColor: '#FAFAFA',
              textColor: '#888888',
            },
          },
        ],
      },
      {
        heading: 'Legacy Logo',
        cards: [
          {
            name: dot('Securhat', 'com'),
            period: '2014-2016',
            swatches: ['#FA1E75'],
            logo: {
              id: 'lg-securhat',
              label: 'SECURHAT',
              bgColor: '#FA1E75',
              textColor: '#FFFFFF',
            },
          },
          {
            name: 'PT. Enam Dua Teknologi',
            period: '2019 - 2022',
            swatches: ['#EF4444'],
            logo: {
              id: 'lg-62tek',
              label: '62 Teknologi',
              bgColor: '#FAFAFA',
              textColor: '#EF4444',
            },
          },
          {
            name: 'Hoki Kuda API',
            period: '2023 - 2024',
            swatches: ['#EF4444', '#881337', '#FBBF24', '#F97316', '#333333'],
            logo: {
              id: 'lg-kudaapi',
              label: 'KUDA API',
              bgColor: '#363636',
              textColor: '#F97316',
            },
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 19. cv-19 — Page 16: AI Persona Portfolio
  // =========================================================================
  {
    id: 'cv-19',
    originalFile: dot('cv-19', 'png'),
    kind: 'ai-persona',
    title: 'AI PERSONA PORTFOLIO',
    subtitle:
      'I got the chances of creating consistent personas using AI. We can chat with each persona, and each one has its own personality, so they give different responses.',
    personas: [
      {
        name: 'Yuna Fiyina',
        ringColor: '#C87A98',
        userPrompt: 'Hi Yuna aku lagi lapar nih',
        botReply:
          'Hai! Kalau lapar, ayo cari makan enak. Mau makan apa? Nasi goreng atau bubur ayam mungkin? 😊',
        mainAvatar: { id: 'ai-yuna-main', label: 'Yuna Center', bgColor: '#D988A6', textColor: '#FFFFFF', shape: 'circle' },
        leftAvatar: { id: 'ai-yuna-left', label: 'Yuna L', bgColor: '#C87A98', textColor: '#FFFFFF', shape: 'circle' },
        rightAvatar: { id: 'ai-yuna-right', label: 'Yuna R', bgColor: '#C87A98', textColor: '#FFFFFF', shape: 'circle' },
      },
      {
        name: 'Luna Aisha',
        ringColor: '#DEC464',
        userPrompt: 'Hi Luna aku lagi lapar nih',
        botReply:
          'Hai! Kalau lapar, enaknya makan apa nih? Kalau aku sih lagi kepikiran sushi atau chicken teriyaki, tapi Babagi Resto and Bar juga nggak kalah enak loh! Kamu ada tempat makan favorit nggak?',
        mainAvatar: { id: 'ai-luna-main', label: 'Luna Center', bgColor: '#DEC464', textColor: '#FFFFFF', shape: 'circle' },
        leftAvatar: { id: 'ai-luna-left', label: 'Luna L', bgColor: '#C9AD4F', textColor: '#FFFFFF', shape: 'circle' },
        rightAvatar: { id: 'ai-luna-right', label: 'Luna R', bgColor: '#C9AD4F', textColor: '#FFFFFF', shape: 'circle' },
      },
      {
        name: 'Inara Risyah',
        ringColor: '#69825A',
        userPrompt: 'Hi Inara aku lagi lapar nih',
        botReply: 'Wah, lapar ya? Kamu pengen makan apa?',
        mainAvatar: { id: 'ai-inara-main', label: 'Inara Center', bgColor: '#69825A', textColor: '#FFFFFF', shape: 'circle' },
        leftAvatar: { id: 'ai-inara-left', label: 'Inara L', bgColor: '#556B47', textColor: '#FFFFFF', shape: 'circle' },
        rightAvatar: { id: 'ai-inara-right', label: 'Inara R', bgColor: '#556B47', textColor: '#FFFFFF', shape: 'circle' },
      },
    ],
  },

  // =========================================================================
  // 20. cv-20 — Page 17: Business Investment Portfolio
  // =========================================================================
  {
    id: 'cv-20',
    originalFile: dot('cv-20', 'png'),
    kind: 'investment-portfolio',
    title: 'BUSINESS INVESTMENT PORTFOLIO',
    subtitle:
      'I recognize that one way to build wealth is through business. However, since I lack the skills to run a business or manage a specific type of business, I choose to invest in businesses instead.',
    investmentSections: [
      {
        heading: 'Passive Owner Investment',
        items: [
          {
            name: 'Devin and Partners',
            category: 'Digital Agencies',
            period: 'ca. 2022',
            logo: { id: 'inv-dnp', label: 'd&p', bgColor: '#2B2B2B', textColor: '#F59E0B' },
          },
          {
            name: 'Hoki Kuda Api',
            category: 'F & B',
            period: 'ca. 2023',
            logo: { id: 'inv-kuda', label: 'Kuda Api', bgColor: '#FFFFFF', textColor: '#B45309' },
          },
          {
            name: 'Fasal Fragrances',
            category: 'Cosmetic',
            period: 'ca. 2024',
            logo: { id: 'inv-fasal', label: 'FASAL', bgColor: '#363636', textColor: '#FFFFFF' },
          },
          {
            name: 'Bianco Living',
            category: 'Home Decor',
            period: 'ca. 2024',
            logo: { id: 'inv-bianco', label: 'BIANCO', bgColor: '#F3F4F6', textColor: '#1F2937' },
          },
          {
            name: 'Gaia Terrazzo',
            category: 'Sanitary',
            period: 'ca. 2024',
            logo: { id: 'inv-gaia', label: 'GAIA', bgColor: '#FFFFFF', textColor: '#78716C' },
          },
        ],
      },
      {
        heading: 'Beneficial Owner Investment',
        items: [
          {
            name: '62 Teknologi',
            category: 'Tech',
            period: 'ca. 2019',
            logo: { id: 'inv-62', label: '62', bgColor: '#DC2626', textColor: '#FFFFFF' },
          },
          {
            name: 'Diurnal Project',
            category: 'Architecture',
            period: 'ca. 2023',
            logo: { id: 'inv-diurnal', label: 'CD', bgColor: '#A3A3A3', textColor: '#FFFFFF' },
          },
          {
            name: 'Alva Billiard',
            category: '\u00A0',
            period: 'ca. 2024',
            logo: { id: 'inv-alva', label: 'ALVA', bgColor: '#FFFFFF', textColor: '#0D9488' },
          },
        ],
      },
      {
        heading: 'Legacy Investment',
        items: [
          {
            name: 'iCodea',
            badgeNote: 'Sport',
            category: 'Tech',
            period: '2012-2014',
            logo: { id: 'inv-icodea', label: 'iCodea', bgColor: '#FFFFFF', textColor: '#EA580C' },
          },
          {
            name: 'NoMad',
            category: 'Entertainment',
            period: '2015 - 2016',
            logo: { id: 'inv-nomad', label: 'NoMad', bgColor: '#DC2626', textColor: '#FFFFFF' },
          },
          {
            name: 'Kawan IT',
            category: 'Outsourcing',
            period: '2021 - 2022',
            logo: { id: 'inv-kawanit', label: 'K-IT', bgColor: '#FFFFFF', textColor: '#0284C7' },
          },
          {
            name: 'AZ Finance',
            category: 'Finance',
            period: '2022 - 2023',
            logo: { id: 'inv-az', label: 'Z', bgColor: '#FFFFFF', textColor: '#5B2EFF' },
          },
          {
            name: 'AM Nusaindo',
            category: 'Property',
            period: '2023 - 2024',
            logo: { id: 'inv-am', label: 'AM', bgColor: '#FFFFFF', textColor: '#D97706' },
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 21. cv-21 — Page 18: Unsorted Portfolio
  // =========================================================================
  {
    id: 'cv-21',
    originalFile: dot('cv-21', 'png'),
    kind: 'unsorted-diagram',
    title: 'UNSORTED PORTFOLIO',
    subtitle:
      "There's so much I've done that hasn't been well-documented, so this is all I've been able to gather. I've accomplished a lot more than what's listed here, but this is the best I could compile for now.",
    unsortedBoxes: [
      {
        id: 'web-apps',
        title: 'WEB APPS',
        items: [
          '1. Property Management System',
          '2. Micro Funding System',
          '3. Helpdesk System',
          '4. SIPPM UNAS',
          '5. Academic Sistem',
          '6. Daytama Document Management System',
          '7. Mskids Biometric system',
          '8. Nusatrip consolidation system',
        ],
      },
      {
        id: 'mobile-apps',
        title: 'ANDROID / iOS APPS',
        items: [
          '1. Daytama Mobile',
          '2. Securhat Mobile',
          '3. Andakara Property Mobile',
          '4. Bizdir Mobile',
          '5. Nomad Mobile',
        ],
      },
      {
        id: 'rest-api',
        title: 'REST API',
        items: [
          '1. api for foodenak android & ios app',
          '2. api for nomad android & ios app',
          '3. api for nusatrip android & ios app',
          '4. api for biometric Indonesia android, ios & web app',
          '5. api for Panasonic android tv app',
          `6. api for ${dot('scrum', 'id')} web app`,
          '7. api for warehousing android app',
        ],
      },
      {
        id: 'website',
        title: 'WEBSITE',
        items: [
          `1. ${dot('AndakaraProperty', 'com')}`,
          `2. ${dot('Caricuan', 'com')}`,
          `3. ${dot('Danamikro', 'com')}`,
          `3. ${dot('Icodea', 'com')}`,
          `4. ${dot('Kamikonsul', 'com')}`,
          `5. ${dot('GrahaBuanaProperty', 'com')}`,
          `6. ${dot('IES-Nusantara', 'com')}`,
          `7. ${dot('Securhat', 'com')}`,
          `8. ${dot('FoodEnak', 'com')}`,
          `9. ${dot('62teknologi', 'com')}`,
        ],
      },
      {
        id: 'personal-web',
        title: 'MY PERSONAL WEB',
        items: [
          `1. ${dot('febri', 'id')}`,
          `2. ${dot('scrum', 'id')} (WIP)`,
        ],
      },
      {
        id: 'mail-server',
        title: 'MAIL SERVER',
        items: [
          '1. MFIT Solutions',
          '2. PT. CB Mandiri',
          '3. Toko Pesan Sparepart',
          '4. Lippo Mall Puri',
          '5. PT. Masindo Bangun Bersama',
        ],
      },
      {
        id: 'wordpress',
        title: 'WORDPRESS',
        items: [
          `1. ${dot('Mestifarah', 'com')}`,
          `2. ${dot('Mylittleusagi', 'com')}`,
          `3. ${dot('Primagraphology', 'com')}`,
          `4. ${dot('Suchesdian', 'com')}`,
          `5. ${dot('Bizdir', 'id')}`,
          `6. ${dot('Nomad', 'id')}`,
        ],
      },
      {
        id: 'android-tv',
        title: 'ANDROID TV APPS',
        items: ['1. Panasonic Hospitality Launcher'],
      },
    ],
  },

  // =========================================================================
  // 22. cv-22 — Page 19: Asset Portfolio
  // =========================================================================
  {
    id: 'cv-22',
    originalFile: dot('cv-22', 'png'),
    kind: 'asset-portfolio',
    title: 'ASSET PORTFOLIO',
    subtitle:
      'Collecting professional equipment assets can be very useful, as they enhance my work production, improve efficiency, and contribute to achieving higher quality results in my field.',
    assetData: {
      equipmentList: ['Macbook Pro', 'High Spec PC', 'Design Monitor', 'Mirrorless'],
      equipmentPhotos: [
        { id: 'eq-macbook', label: 'Macbook Pro', bgColor: '#334155', textColor: '#FFFFFF', shape: 'portrait' },
        { id: 'eq-pc', label: 'COUGAR High Spec PC', bgColor: '#475569', textColor: '#FFFFFF', shape: 'portrait' },
        { id: 'eq-monitor', label: 'Xiaomi Design Monitor', bgColor: '#64748B', textColor: '#FFFFFF', shape: 'portrait' },
        { id: 'eq-sony', label: 'SONY Mirrorless Camera', bgColor: '#78716C', textColor: '#FFFFFF', shape: 'portrait' },
      ],
      deviceList: ['Fold Device', 'Android Device', 'iOS Device'],
      devicePhotos: [
        { id: 'dev-fold', label: 'Galaxy Fold Device', bgColor: '#1E293B', textColor: '#FFFFFF', shape: 'portrait' },
        { id: 'dev-ios', label: 'Apple iPhone Pro', bgColor: '#475569', textColor: '#FFFFFF', shape: 'portrait' },
        { id: 'dev-android', label: 'Samsung Galaxy S Ultra', bgColor: '#0F172A', textColor: '#FFFFFF', shape: 'portrait' },
      ],
    },
  },

  // =========================================================================
  // 23. cv-23 — Page 20: Property Portfolio
  // =========================================================================
  {
    id: 'cv-23',
    originalFile: dot('cv-23', 'png'),
    kind: 'property-portfolio',
    title: 'PROPERTY PORTFOLIO',
    subtitle:
      'I believe that building wealth can be achieved by strategically acquiring property assets, as these investments tend to appreciate in value and provide long-term financial stability.',
    propertyData: {
      regions: [
        { id: 'reg-depok', label: 'depok', sublabel: 'friendly city', bgColor: '#FFFFFF', textColor: '#1E293B' },
        { id: 'reg-tangerang', label: 'Tangerang', sublabel: 'KABUPATEN', bgColor: '#FFFFFF', textColor: '#9D174D' },
        { id: 'reg-bekasi', label: 'Bekasi', sublabel: 'Kabupaten', bgColor: '#FFFFFF', textColor: '#0F4C81' },
        { id: 'reg-bogor', label: 'Bogor', sublabel: 'Kabupaten', bgColor: '#FFFFFF', textColor: '#A8A29E' },
      ],
      listings: [
        {
          handle: '@Depok_City',
          lines: [
            '3 story house - 109 sqm · 145 sqm',
            '2 story house - 103 sqm · 72 sqm',
            '2 story house - 58 sqm · 45 sqm',
          ],
        },
        {
          handle: '@Tangerang_Regency',
          lines: ['House - 72 sqm · ±45 sqm'],
        },
        {
          handle: '@Bekasi_Regency',
          lines: ['Shophouse ±100 sqm · 36 sqm', 'Kiosk ±36 sqm · ±36 sqm'],
        },
        {
          handle: '@Bogor_Regency',
          lines: ['±400 sqm of land', 'Planned to be foodcourt area'],
        },
      ],
      featuredHandle: '@Tangerang_Selatan_City',
      featuredName: 'Collins Boulevard',
      featuredSpec: '2 story small office - 85 sqm',
      featuredPhoto: {
        id: 'prop-collins',
        label: 'Collins Boulevard High-Rise Render',
        sublabel: 'Tangerang Selatan Office & Apartment Towers',
        bgColor: '#38BDF8',
        textColor: '#FFFFFF',
        shape: 'landscape',
      },
    },
  },

  // =========================================================================
  // 24. cv-24 — Page 21: AI Art Portfolio Spread (Left)
  // =========================================================================
  {
    id: 'cv-24',
    originalFile: dot('cv-24', 'png'),
    kind: 'ai-art-left',
    hideFooterNumber: true,
    aiArtData: {
      artPlaceholder: {
        id: 'ai-art-left-img',
        label: 'AI Art Spread (Left Page)',
        sublabel: 'Anime Girl Walking Down Country Road at Golden Hour',
        bgColor: '#60A5FA',
        textColor: '#FFFFFF',
        shape: 'full',
      },
    },
  },

  // =========================================================================
  // 25. cv-25 — Page 22: AI Art Portfolio Spread (Right)
  // =========================================================================
  {
    id: 'cv-25',
    originalFile: dot('cv-25', 'png'),
    kind: 'ai-art-right',
    hideFooterNumber: true,
    aiArtData: {
      artPlaceholder: {
        id: 'ai-art-right-img',
        label: 'AI Art Spread (Right Page)',
        sublabel: 'Sunset Meadow & Warm Clouds Panorama',
        bgColor: '#F59E0B',
        textColor: '#FFFFFF',
        shape: 'full',
      },
      captionTitle: 'AI ART PORTFOLIO',
      captionSubtitle: 'Loved the imperfections · Feel so authentically AI-like',
    },
  },

  // =========================================================================
  // 26. cv-26 — Page 23: Slices of My Life (1/2)
  // =========================================================================
  {
    id: 'cv-26',
    originalFile: dot('cv-26', 'png'),
    kind: 'slices-of-life',
    title: 'SLICES OF MY LIFE',
    subtitle:
      "I'm passionate about my job and find immense satisfaction in the work I do, but occasionally, I recognize the importance of taking time outside of my working hours to connect with my partners, clients, and family, strengthening our relationships and fostering collaboration.",
    slicesItems: [
      {
        caption:
          'Wearing DnP shirt for the first time with my partner Devin hidayat, the owner of devin and partner (DnP).',
        date: '-- Nov 2023',
        layout: 'wide-left',
        photo: {
          id: 'slice-dnp',
          label: 'With Devin Hidayat (DnP)',
          sublabel: 'Wearing DnP shirt · Nov 2023',
          bgColor: '#94A3B8',
          textColor: '#FFFFFF',
        },
      },
      {
        caption:
          'As an investor, I spent the night at the office with the owners of Diurnal Project, Jonathan Biwono and Naufal Risky.',
        date: '-- Feb 2024',
        layout: 'tall-left',
        photo: {
          id: 'slice-diurnal',
          label: 'With Diurnal Project Owners',
          sublabel: 'Klinik Pratama Dentania Bintaro · Feb 2024',
          bgColor: '#64748B',
          textColor: '#FFFFFF',
        },
      },
      {
        caption:
          "Chinese Poker (Capsa) session with Godfrey Kumala, the owner of Fasal Fragrance, one of the companies I've invested in.",
        date: '-- Jun 2024',
        layout: 'wide-right',
        photo: {
          id: 'slice-capsa',
          label: 'Capsa Session with Godfrey Kumala',
          sublabel: 'Fasal Fragrance · Jun 2024',
          bgColor: '#334155',
          textColor: '#FFFFFF',
        },
      },
    ],
  },

  // =========================================================================
  // 27. cv-27 — Page 24: Slices of My Life (2/2)
  // =========================================================================
  {
    id: 'cv-27',
    originalFile: dot('cv-27', 'png'),
    kind: 'slices-of-life',
    slicesItems: [
      {
        caption:
          'Joined a fun run with Christine Santoso, the owner of Purinusa Group and also my client at DnP.',
        date: '-- Nov 2023',
        layout: 'square-left',
        photo: {
          id: 'slice-funrun',
          label: 'Fun Run with Christine Santoso',
          sublabel: 'Purinusa Group · Nov 2023',
          bgColor: '#475569',
          textColor: '#FFFFFF',
        },
      },
      {
        caption: 'Yay, enjoying nature with my family!',
        date: '-- Dec 2023',
        layout: 'square-right',
        photo: {
          id: 'slice-family',
          label: 'Nature Trip with Family',
          sublabel: 'Family Portrait · Dec 2023',
          bgColor: '#65A30D',
          textColor: '#FFFFFF',
        },
      },
      {
        caption: "Owh, last but not least..\nI'm a proud tumor survivor!",
        date: '-- Aug 2020',
        layout: 'pill-bottom',
        photo: {
          id: 'slice-survivor',
          label: 'Hospital Recovery Portrait',
          sublabel: 'Proud Tumor Survivor · Aug 2020',
          bgColor: '#78716C',
          textColor: '#FFFFFF',
        },
      },
    ],
  },

  // =========================================================================
  // 28. cv-28 — Page 25: Contact Reference
  // =========================================================================
  {
    id: 'cv-28',
    originalFile: dot('cv-28', 'png'),
    kind: 'contact-reference',
    title: 'CONTACT REFERENCE',
    subtitle:
      'Here are individuals you can ask for references regarding my attitude, performance and work ethic.\nPhone numbers can be provided upon request but are not listed here to protect their privacy.',
    referenceGroups: [
      {
        heading: 'Current Job',
        people: [
          {
            name: 'Indra Fahlevy',
            role: 'CEO',
            relation: 'My Superior',
            companyLogo: { id: 'ref-lg-62-1', label: '62', bgColor: '#D90416', textColor: '#FFFFFF' },
            avatar: { id: 'ref-av-indra', label: 'Indra Fahlevy', bgColor: '#475569', textColor: '#FFFFFF' },
          },
          {
            name: 'Azani Zarhidam Ramsan',
            role: 'Principal Software Engineer',
            relation: 'My Peer',
            companyLogo: { id: 'ref-lg-62-2', label: '62', bgColor: '#D90416', textColor: '#FFFFFF' },
            avatar: { id: 'ref-av-azani', label: 'Azani Z R', bgColor: '#334155', textColor: '#FFFFFF' },
          },
        ],
      },
      {
        heading: 'Previous Job',
        people: [
          {
            name: 'Muhammad Naufal Abiyyu',
            role: 'Specialist Software Engineer',
            relation: `Was My Superior at ${dot('Indodax', 'com')}`,
            companyLogo: { id: 'ref-lg-indodax', label: 'X', bgColor: '#1381B8', textColor: '#FFFFFF' },
            avatar: { id: 'ref-av-naufal', label: 'M Naufal Abiyyu', bgColor: '#1E40AF', textColor: '#FFFFFF' },
          },
          {
            name: 'Putra Kisdarlianto',
            role: 'Senior Software Engineer',
            relation: `Was My Superior at ${dot('Nusatrip', 'com')}`,
            companyLogo: { id: 'ref-lg-nusatrip', label: 'NT', bgColor: '#0066B3', textColor: '#F37021' },
            avatar: { id: 'ref-av-putra', label: 'Putra K', bgColor: '#292524', textColor: '#FFFFFF' },
          },
          {
            name: 'Wawan Kurniawan',
            role: 'Software Development Manager',
            relation: 'Was My Peer at PT. IES Nusantara',
            companyLogo: { id: 'ref-lg-ies', label: 'IES', bgColor: '#004B8D', textColor: '#FFFFFF' },
            avatar: { id: 'ref-av-wawan', label: 'Wawan K', bgColor: '#57534E', textColor: '#FFFFFF' },
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 29. cv-29 — Page 26: Contact Info (Phone Mockup + QR)
  // =========================================================================
  {
    id: 'cv-29',
    originalFile: dot('cv-29', 'png'),
    kind: 'contact-info',
    title: 'CONTACT INFO',
    subtitle:
      "Please don't hesitate to reach out to me whenever you'd like. I'm genuinely excited about the opportunity to connect and collaborate with you. Looking forward to hearing from you soon!",
    contactQrData: {
      name: 'Febriansyah, PSM, PSPO, ISM.',
      certificationLine: 'IT Engineer Certified!',
      avatar: {
        id: 'qr-avatar',
        label: 'Febriansyah & Wife',
        bgColor: '#B45309',
        textColor: '#FFFFFF',
        shape: 'circle',
      },
      qrPlaceholder: {
        id: 'qr-whatsapp',
        label: 'WhatsApp QR Code',
        sublabel: '+62-898-9090-112',
        bgColor: '#FFFFFF',
        textColor: '#333333',
        shape: 'square',
      },
      links: [
        { icon: 'phone', value: '+62-898-9090-112' },
        { icon: 'mail', value: dot('hifebriansyah@gmail', 'com') },
        { icon: 'globe', value: dot('hifebriansyah', 'com') },
        { icon: 'linkedin', value: `${dot('linkedin', 'com')}/in/muhammad-febriansyah` },
      ],
    },
  },

  // =========================================================================
  // 30. cv-30 — Closing Spread Left ("Thank")
  // =========================================================================
  {
    id: 'cv-30',
    originalFile: dot('cv-30', 'png'),
    kind: 'thank-you-left',
    hideFooterNumber: true,
    lockedStructural: true,
    cursiveHero: 'Thank',
  },

  // =========================================================================
  // 31. cv-31 — Closing Spread Right ("You..!")
  // =========================================================================
  {
    id: 'cv-31',
    originalFile: dot('cv-31', 'png'),
    kind: 'thank-you-right',
    hideFooterNumber: true,
    lockedStructural: true,
    cursiveHero: 'You..!',
  },

  // =========================================================================
  // 32. cv-32 — Back Cover (Solid Cream)
  // =========================================================================
  {
    id: 'cv-32',
    originalFile: dot('cv-32', 'png'),
    kind: 'cover-back',
    hideFooterNumber: true,
    lockedStructural: true,
  },
];

/**
 * Helper to generate a 4-page batch when the user clicks "+ Add 4 Pages" in Edit Mode.
 * Enforces the physical saddle-stitch rule: 1 folded A3 sheet = 4 A4 sides.
 */
export function createFourNewPagesBatch(existingCount: number): CvPageData[] {
  const timestamp = Date.now();
  const baseNum = existingCount - 5;
  return [0, 1, 2, 3].map((offset) => {
    const contentPageNum = baseNum + offset;
    return {
      id: `custom-${timestamp}-${offset + 1}`,
      kind: 'custom-section',
      title: `ADDITIONAL PORTFOLIO (${offset + 1}/4)`,
      subtitle:
        'Added as part of a 4-page saddle-stitch signature block. Click any text or placeholder image in Edit Mode to customize.',
      customBlocks: [
        {
          heading: `Featured Project / Milestone #${contentPageNum}-A`,
          subheading: '2025 - Present · Lead Architect & Contributor',
          body: 'Describe the architecture, business impact, and technical stack for this milestone. You can edit this text inline or upload a custom visual asset on the right.',
          tags: ['#architecture', '#react', '#cloudflare', '#full-stack'],
          placeholder: {
            id: `custom-img-${timestamp}-${offset}-1`,
            label: `Project Preview ${contentPageNum}-A`,
            sublabel: 'Click in Edit Mode to upload asset',
            bgColor: '#F1F5F9',
            textColor: '#334155',
            shape: 'landscape',
          },
        },
        {
          heading: `Featured Project / Milestone #${contentPageNum}-B`,
          subheading: '2024 - 2025 · Product & Systems Engineering',
          body: 'Add key deliverables, metrics, or team achievements here. Keeping pages in multiples of 4 ensures zero blank sides when folded into an A4 booklet.',
          tags: ['#typescript', '#tailwind', '#devops', '#scrum'],
          placeholder: {
            id: `custom-img-${timestamp}-${offset}-2`,
            label: `Project Preview ${contentPageNum}-B`,
            sublabel: 'Click in Edit Mode to upload asset',
            bgColor: '#FEF3C7',
            textColor: '#92400E',
            shape: 'landscape',
          },
        },
      ],
    };
  });
}
