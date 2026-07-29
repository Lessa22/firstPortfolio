export const profile = {
  name: 'ANDRIATAHIANA Sandratra Josiah',
  github: 'https://github.com/Lessa22',
  email: 'andriatahianasandratra@gmail.com',
  phones: ['0334712561', '0383123328'],
}

export const aboutFacts = [
  { labelKey: 'about_fact_full_name', valueKey: null },
  { labelKey: 'about_fact_birthday', valueKey: 'profile_birthday' },
  { labelKey: 'about_fact_current_city', valueKey: 'profile_city' },
  { labelKey: 'about_fact_looking_for_internship', valueKey: 'profile_internship_city' },
  { labelKey: 'about_fact_internship_duration', valueKey: 'profile_internship_duration' },
  { labelKey: 'about_fact_university', valueKey: 'profile_university' },
  { labelKey: 'about_fact_degree', valueKey: 'profile_degree' },
  { labelKey: 'about_fact_study_period', valueKey: 'profile_study_period' },
  { labelKey: 'about_fact_previous_study', valueKey: 'profile_previous_study' },
]

export const aboutStoryKeys = ['about_story_one', 'about_story_two']

export const professionalProfileKeys = ['profile_story_one', 'profile_story_two', 'profile_story_three']

export const languagesSkills = [
  { name: 'Java', levelKey: 'skill_level_advanced', value: 90 }, { name: 'C#', levelKey: 'skill_level_advanced', value: 88 }, { name: 'PHP', levelKey: 'skill_level_advanced', value: 87 }, { name: 'JavaScript', levelKey: 'skill_level_advanced', value: 86 }, { name: 'HTML', levelKey: 'skill_level_advanced', value: 92 }, { name: 'CSS', levelKey: 'skill_level_advanced', value: 88 }, { name: 'SQL', levelKey: 'skill_level_advanced', value: 90 }, { name: 'Python', levelKey: 'skill_level_intermediate', value: 65 }, { name: 'C', levelKey: 'skill_level_intermediate', value: 62 }, { name: 'C++', levelKey: 'skill_level_intermediate', value: 60 },
]

export const databases = ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite']

export const operatingSystems = [
  { name: 'Ubuntu Linux', note: true },
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
    titleKey: 'project_bloom_title',
    image: icon,
    taglineKey: 'project_bloom_tagline', descriptionKey: 'project_bloom_description', features: ['project_bloom_feature_one', 'project_bloom_feature_two', 'project_bloom_feature_three', 'project_bloom_feature_four'],
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Room', 'Claude AI API'],
    status: 'done',
    github: profile.github,
    demo: '',
  },
  {
    titleKey: 'project_crypto_title',
    image: cryptoplatform,
    taglineKey: 'project_crypto_tagline', descriptionKey: 'project_crypto_description', features: ['project_crypto_feature_one', 'project_crypto_feature_two', 'project_crypto_feature_three'],
    tech: ['React', 'JavaScript', 'Binance API'],
    status: 'done',
    github: profile.github,
    demo: '',
  },
  {
    titleKey: 'project_personal_title',
    image: personalSoftwareProject,
    taglineKey: 'project_personal_tagline', descriptionKey: 'project_personal_description', features: ['project_personal_feature_one', 'project_personal_feature_two', 'project_personal_feature_three'], tech: ['project_personal_tech'], status: 'progress',
    github: profile.github,
    demo: '',
  },
]

export const experience = [
  {
    roleKey: 'experience_development_role', periodKey: 'experience_since_2023', items: ['experience_development_one', 'experience_development_two', 'experience_development_three'],
  },
  {
    roleKey: 'experience_maintenance_role', periodKey: 'experience_since_2023', items: ['experience_maintenance_one', 'experience_maintenance_two', 'experience_maintenance_three', 'experience_maintenance_four', 'experience_maintenance_five'],
  },
]

export const education = [
  {
    school: 'Université Adventiste Zurcher', degreeKey: 'education_zurcher_degree',
    period: '2021 - 2027',
  },
  {
    school: 'CNTEMAD',
    degreeKey: 'education_cntemad_degree',
    period: '2021 - 2022',
  },
]

export const spokenLanguages = [
  { nameKey: 'language_malagasy', levelKey: 'language_level_native', value: 100 }, { nameKey: 'language_french', levelKey: 'language_level_good', value: 80 }, { nameKey: 'language_english', levelKey: 'language_level_intermediate', value: 60 },
]

export const qualities = ['quality_curious', 'quality_autonomous', 'quality_problem_solver', 'quality_analytical_thinking', 'quality_serious', 'quality_fast_learner']

export const interests = ['interest_software', 'interest_games', 'interest_basketball', 'interest_automobiles']

export const drivingLicense = ['A', 'B', 'C', 'D']

export const contactPositionKeys = ['contact_position_web', 'contact_position_software', 'contact_position_any']

export const stats = [
  { labelKey: 'stat_years_coding', value: 4, suffix: '+' }, { labelKey: 'stat_languages_mastered', value: 10, suffix: '' }, { labelKey: 'stat_projects_shipped', value: 3, suffix: '' }, { labelKey: 'stat_months_available', value: 3, suffix: '' },
]
