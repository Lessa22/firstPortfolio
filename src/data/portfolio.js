export const profile = {
  name: 'ANDRIATAHIANA Sandratra Josiah',
  roles: ['Software Engineering Student', 'Full Stack Developer'],
  intro:
    'I enjoy building modern web applications, desktop software and database-driven systems. My long-term dream is to create useful software and even video games that can impact people\u2019s lives.',
  birthday: '22 July 2002',
  city: 'Faratsiho, Vakinankaratra, Madagascar',
  internshipCity: 'Antananarivo',
  internshipDuration: '3 Months',
  university: 'Universit\u00e9 Adventiste Zurcher',
  degree: 'Bachelor in Software Engineering',
  studyPeriod: '2021 - 2027',
  previousStudy: 'CNTEMAD (Computer Science)',
  github: 'https://github.com/Lessa22',
  email: 'andriatahianasandratra@gmail.com',
  phones: ['0334712561', '0383123328'],
}

export const aboutFacts = [
  { label: 'Full Name', value: profile.name },
  { label: 'Birthday', value: profile.birthday },
  { label: 'Current City', value: profile.city },
  { label: 'Looking for Internship', value: profile.internshipCity },
  { label: 'Internship Duration', value: profile.internshipDuration },
  { label: 'University', value: profile.university },
  { label: 'Degree', value: profile.degree },
  { label: 'Study Period', value: profile.studyPeriod },
  { label: 'Previous Study', value: profile.previousStudy },
]

export const aboutStory = [
  'Before joining Universit\u00e9 Adventiste Zurcher, I spent one year studying Computer Science at CNTEMAD. That year gave me my first real contact with programming and confirmed the field I wanted to build my career in.',
  'Because of that year, my Bachelor in Software Engineering ends in 2027 instead of 2026. I do not see it as lost time: it is the year that made me choose software engineering on purpose, and not by accident.',
]

export const professionalProfile = [
  'I became passionate about software engineering through video games. Trying to understand how they were built pushed me to learn how software works, and I never stopped since.',
  'Today I work mainly on web development, databases and desktop applications. I like designing data models as much as I like building the interfaces that consume them.',
  'My goal is to create useful software \u2014 tools people actually keep using \u2014 and one day video games that people enjoy playing. I am looking for an internship where I can work on real projects and improve my engineering skills next to experienced developers.',
]

export const languagesSkills = [
  { name: 'Java', level: 'Advanced', value: 90 },
  { name: 'C#', level: 'Advanced', value: 88 },
  { name: 'PHP', level: 'Advanced', value: 87 },
  { name: 'JavaScript', level: 'Advanced', value: 86 },
  { name: 'HTML', level: 'Advanced', value: 92 },
  { name: 'CSS', level: 'Advanced', value: 88 },
  { name: 'SQL', level: 'Advanced', value: 90 },
  { name: 'Python', level: 'Intermediate', value: 65 },
  { name: 'C', level: 'Intermediate', value: 62 },
  { name: 'C++', level: 'Intermediate', value: 60 },
]

export const databases = ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite']

export const operatingSystems = [
  { name: 'Ubuntu Linux', note: 'Favorite' },
  { name: 'Windows', note: '' },
]

export const tools = [
  'VS Code',
  'Visual Studio',
  'IntelliJ IDEA',
  'Android Studio',
  'Git',
  'GitHub',
  'Postman',
  'XAMPP',
]

export const notFamiliar = ['Docker', 'Figma']

// Project screenshots: put your files in src/assets/projects/ then import them here.
// import bloomImage from '../assets/projects/bloom.png'
import cryptoplatform from '../assets/projects/cryptoPlatform.png'
import personalSoftwareProject from '../assets/projects/personal.png'
import icon from '../assets/projects/icon.png'
export const projects = [
  {
    title: 'Bloom',
    image: icon,
    tagline: 'Android application for plant recognition',
    description:
      'Bloom identifies plants from a photo and keeps a personal collection of every plant the user has scanned.',
    features: [
      'Plant identification',
      'Firebase Authentication',
      'Room Database',
      'Claude AI API',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Room', 'Claude AI API'],
    status: 'Completed',
    github: profile.github,
    demo: '',
  },
  {
    title: 'CryptoPlatform',
    image: cryptoplatform,
    tagline: 'Crypto trading simulator',
    description:
      'An educational trading simulator built with React. It uses real Binance market data so users can practise trading without risking real money.',
    features: ['Real Binance market data', 'Simulated portfolio', 'Educational project'],
    tech: ['React', 'JavaScript', 'Binance API'],
    status: 'Completed',
    github: profile.github,
    demo: '',
  },
  {
    title: 'Personal Software Project',
    image: personalSoftwareProject,
    tagline: 'Currently under development',
    description:
      'A personal software project focused on improving my software engineering skills, from architecture and data modelling to delivery.',
    features: ['Clean architecture', 'Database driven', 'Work in progress'],
    tech: ['To be announced'],
    status: 'In Progress',
    github: profile.github,
    demo: '',
  },
]

export const experience = [
  {
    role: 'Software Application Development',
    period: 'Since 2023',
    items: [
      'Web applications with PHP, JavaScript and React',
      'Desktop applications with Java and C#',
      'Relational and NoSQL database design',
    ],
  },
  {
    role: 'Computer Maintenance',
    period: 'Since 2023',
    items: [
      'Windows installation',
      'Linux installation',
      'Hardware diagnostics',
      'Computer repair',
      'Development environment setup',
    ],
  },
]

export const education = [
  {
    school: 'Universit\u00e9 Adventiste Zurcher',
    degree: 'Bachelor in Software Engineering',
    period: '2021 - 2027',
  },
  {
    school: 'CNTEMAD',
    degree: 'Computer Science',
    period: '2021 - 2022',
  },
]

export const spokenLanguages = [
  { name: 'Malagasy', level: 'Native', value: 100 },
  { name: 'French', level: 'Good', value: 80 },
  { name: 'English', level: 'Intermediate', value: 60 },
]

export const qualities = [
  'Curious',
  'Autonomous',
  'Problem Solver',
  'Analytical Thinking',
  'Serious',
  'Able to learn quickly',
]

export const qualitiesNote =
  'I am most productive when I work independently and own a problem from end to end. I also keep working on my teamwork skills, because the software I want to build is never written alone.'

export const interests = [
  'Software Development',
  'Video Games',
  'Basketball',
  'Automobiles',
]

export const drivingLicense = ['A', 'B', 'C', 'D']

export const contactPositions = [
  'Web Developer',
  'Software Developer',
  'Any Software Engineering opportunity',
]

export const stats = [
  { label: 'Years of coding', value: 4, suffix: '+' },
  { label: 'Languages mastered', value: 10, suffix: '' },
  { label: 'Projects shipped', value: 3, suffix: '' },
  { label: 'Months available', value: 3, suffix: '' },
]
