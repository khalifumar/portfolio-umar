// 作品集数据（双语）。5 大板块 → 点击展开作品详情。
// 纯数据驱动：增删板块 / 作品只改本文件，Works.jsx 仅负责渲染。
//
// 板块字段：
//   id        唯一标识（用于 framer layoutId 共享元素动画）
//   no        编号 '01'…'05'
//   title     板块标题
//   tagline   索引行右侧一句话
//   items[]   扁平作品列表：{ name, meta?, tags?, link? }
//             点击 item 弹出全屏详情，可补充可选媒体/文案字段：
//             { image?, video?, year?, desc? }（缺省时媒体用占位、简介回退 meta/标签）
//   groups[]  分组作品（与 items 二选一）：{ heading, items: string[] }
//   awards[]  奖项 chip（可选）
//   footer    底部技术/备注一行（可选）

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

const DATA_SECTIONS: WorkSection[] = [
  {
    id: 'analytics',
    no: '01',
    title: 'Data Analytics & Apps',
    tagline: 'Interactive Dashboards & Business Solutions',
    items: [
      {
        name: 'Business Analytics & Reporting Suite',
        meta: 'SQL · Data Modeling · PostgreSQL · KPI Tracking',
        tags: ['SQL', 'Data Modeling', 'PostgreSQL', 'KPI Tracking'],
        slug: 'business-analytics-suite',
        link: 'https://erp-business-jvvp.vercel.app/delivery',
      },
      {
        name: '5-Min Price Ready Sales Engine',
        meta: 'Python · Streamlit · Ollama LLM · RapidFuzz',
        tags: ['Python', 'Streamlit', 'Local LLM', 'RapidFuzz'],
        slug: 'price-ready-sales-engine',
        link: 'https://price-recomendation-digipack.streamlit.app/',
      },
      {
        name: 'American Store Sales Analysis',
        meta: 'Excel · Power Query · 9,900+ Records · Pivot Charts',
        tags: ['Excel', 'Power Query', 'EDA', 'Visualization'],
        slug: 'american-store-sales',
        link: 'https://docs.google.com/spreadsheets/d/1jBAnm88E4H5awOuClOx4durt5jT1TdIW/edit?usp=sharing&ouid=102605852571636193557&rtpof=true&sd=true',
      },
      {
        name: 'Rental Bikes Analysis',
        meta: 'Python · Streamlit · Pandas · Time-Series EDA',
        tags: ['Python', 'Streamlit', 'Pandas', 'Seaborn'],
        slug: 'rental-bikes-analysis',
        link: 'https://z3j3xngsyo86xqdozax7ww.streamlit.app/',
      },
      {
        name: 'The Sumatra Poverty Paradox',
        meta: 'Looker Studio · SQL · Socioeconomic Policy Research',
        tags: ['Looker Studio', 'SQL', 'Excel', 'Policy Analytics'],
        slug: 'sumatra-poverty-paradox',
        link: 'https://datastudio.google.com/reporting/6ccab171-1221-4362-9ec4-ff64758df286',
      },
    ],
    awards: ['Samsung Solve for Tomorrow Semifinalist', 'Best Execution Confidence'],
    footer: 'Python · Streamlit · SQL · Excel Power Query · Looker Studio · Pandas',
  },
  {
    id: 'skills',
    no: '02',
    title: 'Core Technical Stack',
    tagline: 'Analytics, Data Engineering & BI',
    groups: [
      {
        heading: 'Data Analytics & Exploratory Research',
        items: [
          'Advanced Data Wrangling & Pipeline Data Cleaning',
          'Exploratory Data Analysis (EDA) & Statistical Hypothesis Testing',
          'Business Acumen & Strategic Decision-Making Frameworks',
          'Stakeholder Communication & Executive Storytelling',
        ],
      },
      {
        heading: 'Python & Streamlit Ecosystem',
        items: [
          'Streamlit Interactive Web Application Development',
          'Pandas & NumPy Vectorized Data Manipulation',
          'Matplotlib & Seaborn Statistical Data Visualizations',
          'Automated Web Scraping & Data Extraction Pipelines',
        ],
      },
      {
        heading: 'Relational Database & Data Engineering',
        items: [
          'Structured Query Language (SQL) Advanced Querying & CTEs',
          'PostgreSQL & Supabase Architecture Design',
          'Google Cloud Platform (GCP) Data Tooling',
          'Apache Airflow & Kafka Fundamentals for ETL Orchestration',
        ],
      },
      {
        heading: 'Spreadsheet & Business Intelligence (BI)',
        items: [
          'Microsoft Excel (Power Query, Power Pivot, Data Modeling, What-If Analysis)',
          'Excel VBA & Macro Process Automation',
          'Power BI Interactive Multi-Dimensional Dashboards & Data Blending',
          'Looker Studio Spatial & Time-Series Reporting Dashboards',
        ],
      },
    ],
    footer: 'Python · SQL · Streamlit · Excel VBA · Power BI · Looker Studio · PostgreSQL',
  },
  {
    id: 'training',
    no: '03',
    title: 'Training & Leadership',
    tagline: 'Mentorship & Tech Advocacy',
    items: [
      {
        name: 'Corporate Excel & Analytics Training',
        meta: 'Assistant Corporate Trainee at MySkill Academy',
        tags: ['Corporate Training', 'Excel Mentorship', 'Curriculum Delivery'],
        slug: 'corporate-training',
      },
      {
        name: 'Google Student Ambassador Initiatives',
        meta: 'Campus Advocacy & Developer Workshops',
        tags: ['Community Leadership', 'Google Cloud', 'Workshops'],
        slug: 'google-ambassador',
      },
      {
        name: 'Bridging Campus and Career 2025',
        meta: 'Official Seminar Moderator & Panel Lead',
        tags: ['Moderator', 'Public Speaking', 'Career Transition'],
        slug: 'seminar-moderator',
      },
    ],
    footer: 'Mentorship · Corporate Training · Community Leadership · Public Speaking',
  },
  {
    id: 'credentials',
    no: '04',
    title: 'Academic & Accreditations',
    tagline: 'Binus University · GPA 3.71 / 4.00',
    items: [
      {
        name: 'Samsung Solve for Tomorrow 2025',
        meta: 'National Semifinalist — Samsung Indonesia',
        tags: ['National Competition', 'Innovation', 'STEM'],
        slug: 'samsung-solve',
      },
      {
        name: 'Youth Microfound Business Plan Competition',
        meta: 'Awarded Best Execution Confidence — DPMPTSP Blitar',
        tags: ['Business Plan', 'First Winner', 'Strategic Execution'],
        slug: 'youth-microfound',
      },
      {
        name: '100% Academic Merit Scholarship',
        meta: 'Study Success Potential Test (TPKS) Winner',
        tags: ['Scholarship', 'Academic Excellence', 'Binus University'],
        slug: 'tpks-scholarship',
      },
      {
        name: 'Professional Data Science & SQL Certifications',
        meta: 'Dicoding Academy & MySkill Specializations',
        tags: ['Data Science', 'SQL Certified', 'Bootcamp Graduate'],
        slug: 'data-certifications',
      },
    ],
    footer: 'Computer Science · 3.71 GPA · Merit Scholar · Certified Data Analyst',
  },
]

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  zh: {
    title: 'Works & Stack',
    closeLabel: 'Close',
    openLabel: 'View Details',
    hint: 'Scroll to explore',
    awardsLabel: 'Key Honors',
    visitLabel: 'Live Project',
    detailPlaceholder: 'Project Overview',
    phImageLabel: 'Interactive Preview',
    phButtonLabel: 'Launch App',
    countLabel: (n) => `${n} projects`,
    sections: DATA_SECTIONS,
  },
  en: {
    title: 'Works & Stack',
    closeLabel: 'Close',
    openLabel: 'View Details',
    hint: 'Scroll to explore',
    awardsLabel: 'Key Honors',
    visitLabel: 'Live Project',
    detailPlaceholder: 'Project Overview',
    phImageLabel: 'Interactive Preview',
    phButtonLabel: 'Launch App',
    countLabel: (n) => `${n} projects`,
    sections: DATA_SECTIONS,
  },
}

// 板块配图（横向画廊每张卡片左侧的整高封面）。放到 public/works/covers/ 下。
export const SECTION_COVERS: Record<string, string> = {
  analytics: `${import.meta.env.BASE_URL}works/covers/ad.jpg`,
  skills: `${import.meta.env.BASE_URL}works/covers/maker.jpg`,
  training: `${import.meta.env.BASE_URL}works/covers/product.jpg`,
  credentials: `${import.meta.env.BASE_URL}works/covers/graphics.jpg`,
}

// 统计一个板块的作品数（items 或 groups 求和），用于索引行 hover 显示
export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
