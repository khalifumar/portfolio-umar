import { motion } from 'framer-motion'
import { ZooopLogo } from './ZooopLogo'
import { SOCIAL_ICONS } from './SocialIcons'
import { FOCUS_POINTS } from '../data/focusPoints'

const SOCIAL_LINKS = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com',
  },
  {
    id: 'mail',
    label: 'Email',
    href: 'mailto:khalif.umar@binus.ac.id',
  },
]

// 履历数据（双语）。英文为译稿，可按需润色。
interface ResumeGroup {
  heading?: string
  logo?: string
  logoImg?: string
  sub?: string
  link?: string
  items?: string[]
  links?: { id: string; label: string; href: string }[]
}
interface CertItem {
  title: string
  issuer: string
  tag: string
}
interface CertCategory {
  title: string
  items: CertItem[]
}
interface ResumeEntry {
  period: string
  place: string
  link?: string
  role?: string
  logo?: { src: string; alt: string }
  points?: string[]
  certs?: CertCategory[]
  groups?: ResumeGroup[]
}
const RESUME_DATA: ResumeEntry[] = [
  {
    period: '2023 – 2027',
    place: 'Bina Nusantara University',
    link: 'https://binus.ac.id/',
    role: 'B.S. in Computer Science · GPA 3.71 / 4.00',
    points: [
      'Focus on Data Science, Business Intelligence, and Relational Database Engineering.',
      'Awarded 100% Scholarship for Academic Potential (TPKS).',
      'Actively involved in data mentorship, technical community organizing, and academic leadership.',
    ],
  },
  {
    period: 'Jun 2025 – Present',
    place: 'Digipack.id',
    link: 'https://www.digipack.id/',
    role: 'Data Analyst Intern',
    points: [
      'Designed a clean, three-tiered database structure to centralize product specifications and vendor bids.',
      'Tracked and validated multi-scenario profit margins (ensuring accurate currency conversions and logistics overhead allocations).',
      'Building automatic lookup formulas to dynamically fetch the "Best Price" across multiple active suppliers.',
      'Collaborated closely with cross-functional procurement and finance teams to streamline quotation workflows.',
    ],
  },
  {
    period: 'Jun 2025 – Present',
    place: 'MySkill Academy',
    link: 'https://myskill.id/',
    role: 'Assistant Corporate Trainee',
    points: [
      'Data Processing & Analytics: Advanced Microsoft Excel (Power Query, Power Pivot, Data Modeling, What-If Analysis, Dashboarding), Python (Pandas, NumPy, Matplotlib, Seaborn).',
      'Corporate & Technical Training: End-to-end facilitation, curriculum delivery, and hands-on mentoring for corporate clients and students.',
      'Data Engineering & Automation: Web scraping, data pipeline engineering, and process automation using Python and VBA/Macros.',
      'Community Leadership: Active contributor in tech communities and Campus Ambassador, advocating for continuous upskilling in data and tech.',
    ],
  },
  {
    period: 'Oct 2025 – Present',
    place: 'Google Student Ambassador',
    link: 'https://googlestudentambassador.id/',
    role: 'Content Creator & Tech Ambassador',
    points: [
      'Spearheaded digital content creation and community advocacy, educating students on Google Cloud, AI tools, and developer technologies.',
      'Hosted interactive workshops and technical sessions, driving engagement across multi-campus student developer networks.',
      'Analyzed audience reach and engagement metrics to optimize technical storytelling and community growth.',
    ],
  },
  {
    period: 'Jun 2026 – Aug 2026',
    place: 'PT Adhi Karya (Persero) Tbk',
    link: 'https://adhi.co.id/',
    role: 'IT Support Freelance',
    points: [
      'Delivered enterprise IT infrastructure support, hardware/software troubleshooting, and network reliability across operational sites.',
      'Maintained internal database records, inventory logging, and technical documentation to streamline department workflows.',
      'Assisted engineering teams with data entry verification, database queries, and system health monitoring.',
    ],
  },
  {
    period: 'Credentials & Recognition',
    place: 'Certifications & Achievements',
    role: 'National Competitions & Professional Specializations',
    certs: [
      {
        title: '🏆 National Honors & Competitions',
        items: [
          {
            title: 'Samsung Solve for Tomorrow 2025',
            issuer: 'Samsung Indonesia · Innovation & STEM',
            tag: 'Semifinalist',
          },
          {
            title: 'Youth Microfound National Business Plan Competition',
            issuer: 'DPMPTSP Blitar · Strategic Execution',
            tag: 'Best Execution',
          },
          {
            title: 'Study Success Potential Scholarship (TPKS)',
            issuer: 'Bina Nusantara University · Academic Merit',
            tag: '100% Scholarship',
          },
          {
            title: 'Bridging Campus and Career 2025',
            issuer: 'National Student & Career Transition Seminar',
            tag: 'Official Moderator',
          },
        ],
      },
      {
        title: '📜 Professional Data Accreditations',
        items: [
          {
            title: 'Data Analyst Bootcamp Specialization',
            issuer: 'Udemy · Jun 2025',
            tag: 'Certified Analyst',
          },
          {
            title: 'Kimia Farma Business Performance Analysis',
            issuer: 'MySkill Academy · Apr 2025',
            tag: 'Virtual Internship',
          },
          {
            title: 'Microsoft Excel for Advance',
            issuer: 'MySkill Academy · Apr 2026',
            tag: 'Advanced Excel',
          },
          {
            title: 'Data Science Specialization',
            issuer: 'Dicoding Academy · Feb 2026',
            tag: 'Data Science',
          },
          {
            title: 'Structured Query Language (SQL)',
            issuer: 'Dicoding Academy · Nov 2024',
            tag: 'SQL Specialist',
          },
        ],
      },
    ],
    groups: [
      {
        heading: 'Connect & Inquire',
        sub: 'Available for Data Analyst & Business Intelligence Opportunities',
        links: SOCIAL_LINKS,
      },
    ],
  },
]

const RESUME: Record<'en' | 'zh', { title: string; entries: ResumeEntry[] }> = {
  en: {
    title: 'Experience & Credentials',
    entries: RESUME_DATA,
  },
  zh: {
    title: 'Experience & Credentials',
    entries: RESUME_DATA,
  },
}

// 履历条目依次对应 glb 里的聚焦锚点（相机停靠点），顺序须与 entries 一致。
// 名单是唯一真源，见 data/focusPoints.ts（Scene.tsx 也从那里取）。
const POINT_ORDER = FOCUS_POINTS

const EASE = [0.22, 1, 0.36, 1]
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}
const itemV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

function Group({ group }: { group: ResumeGroup }) {
  const heading =
    group.logo === 'zooop' ? (
      <a
        className="zooop-logo-link"
        href={group.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ZOOOP"
      >
        <ZooopLogo className="zooop-logo" animated />
      </a>
    ) : group.link ? (
      <a className="about-link" href={group.link} target="_blank" rel="noopener noreferrer">
        {group.heading}
      </a>
    ) : (
      <span>{group.heading}</span>
    )

  return (
    <motion.div className="tl-group" variants={itemV}>
      <div className="tl-group-head">
        {group.logoImg && (
          <span className="tl-group-logo">
            <img src={group.logoImg} alt={group.heading || ''} loading="lazy" />
          </span>
        )}
        {heading}
        {group.sub && <span className="tl-group-sub">{group.sub}</span>}
      </div>
      {group.items && (
        <ul className="tl-points">
          {group.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      )}
      {group.links && (
        <div className="tl-logos">
          {group.links.map((l) => {
            const Icon = SOCIAL_ICONS[l.id as keyof typeof SOCIAL_ICONS]
            return (
              <a
                key={l.id}
                className="tl-logo"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                title={l.label}
              >
                <Icon />
              </a>
            )
          })}
        </div>
      )}
    </motion.div>
  )
}

function Entry({ entry, index }: { entry: ResumeEntry; index: number }) {
  return (
    <motion.div
      className="tl-entry"
      data-point={POINT_ORDER[index]}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
    >
      <motion.span className="tl-dot" variants={itemV} aria-hidden="true" />
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
          {entry.logo && (
            <span className="tl-logo-chip">
              <img src={entry.logo.src} alt={entry.logo.alt} loading="lazy" />
            </span>
          )}
          <h3 className="tl-place">
            {entry.link ? (
              <a
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tl-place-link"
              >
                {entry.place}
              </a>
            ) : (
              entry.place
            )}
          </h3>
        </motion.div>
        {entry.role && (
          <motion.div className="tl-role" variants={itemV}>
            {entry.role}
          </motion.div>
        )}
        {entry.link && (
          <motion.div variants={itemV}>
            <a
              href={entry.link}
              target="_blank"
              rel="noopener noreferrer"
              className="tl-link-btn"
            >
              Visit Website ↗
            </a>
          </motion.div>
        )}
        {entry.points && (
          <motion.ul className="tl-points" variants={itemV}>
            {entry.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </motion.ul>
        )}
        {entry.certs && (
          <motion.div className="cert-section" variants={itemV}>
            {entry.certs.map((cat, cIdx) => (
              <div key={cIdx} className="cert-group">
                <span className="cert-group-title">{cat.title}</span>
                <div className="cert-grid">
                  {cat.items.map((item, iIdx) => (
                    <div key={iIdx} className="cert-card">
                      <div className="cert-card-header">
                        <div>
                          <div className="cert-card-title">{item.title}</div>
                          <div className="cert-card-issuer">{item.issuer}</div>
                        </div>
                        <span className="cert-tag">{item.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
        {entry.groups && entry.groups.map((g, i) => <Group key={i} group={g} />)}
      </div>
    </motion.div>
  )
}

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  const data = RESUME[lang]
  return (
    <section className="resume" lang={lang}>
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {data.title}
      </motion.h2>
      <div className="timeline">
        {data.entries.map((e, i) => (
          <Entry key={i} entry={e} index={i} />
        ))}
      </div>
    </section>
  )
}
