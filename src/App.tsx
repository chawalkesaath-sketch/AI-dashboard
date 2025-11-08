import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  MessageCircle,
  Play,
  TrendingUp,
  Award,
  Briefcase,
  GraduationCap,
  Target,
  Zap,
  Users,
  BarChart3,
  ExternalLink,
  Download,
  Search,
  Star,
} from 'lucide-react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
} from 'recharts';
import './App.css';

// Sample candidate data - Replace with real data
const candidateData = {
  name: 'Alex Johnson',
  title: 'Senior Full Stack Engineer',
  location: 'San Francisco, CA',
  email: 'alex.johnson@email.com',
  phone: '+1 (555) 123-4567',
  linkedin: 'https://linkedin.com/in/alexjohnson',
  github: 'https://github.com/alexjohnson',
  verified: true,
  photoUrl: 'https://via.placeholder.com/200',
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  bio: "Passionate about building scalable systems and mentoring teams. I thrive in fast-paced environments where I can make a real impact through clean code and innovative solutions.",
  passions: ['Open Source', 'AI/ML', 'Team Leadership', 'System Design'],
  careerGoals: 'Lead a team of engineers in building cutting-edge AI products that solve real-world problems.',
  whatMakesHappy: 'Solving complex problems, mentoring junior developers, and seeing users love what I build.',
};

const skills = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Language' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'Python', level: 85, category: 'Language' },
  { name: 'AWS', level: 80, category: 'Cloud' },
  { name: 'System Design', level: 92, category: 'Architecture' },
  { name: 'MongoDB', level: 78, category: 'Database' },
  { name: 'Docker', level: 85, category: 'DevOps' },
];

const radarData = [
  { skill: 'Frontend', value: 95 },
  { skill: 'Backend', value: 88 },
  { skill: 'DevOps', value: 80 },
  { skill: 'Architecture', value: 92 },
  { skill: 'Leadership', value: 85 },
  { skill: 'Communication', value: 90 },
];

const achievements = [
  { title: 'Increased System Performance', metric: '40% faster', icon: Zap },
  { title: 'Team Leadership', metric: 'Led 12 engineers', icon: Users },
  { title: 'Cost Optimization', metric: 'Saved $200K/year', icon: TrendingUp },
  { title: 'Open Source', metric: '5K+ GitHub stars', icon: Star },
];

const skillGaps = [
  { skill: 'Kubernetes', current: 60, target: 90, course: 'Advanced K8s on Udemy' },
  { skill: 'GraphQL', current: 70, target: 95, course: 'GraphQL Mastery' },
  { skill: 'Rust', current: 40, target: 80, course: 'Rust Programming' },
];

const transferrableSkills = [
  'Problem Solving',
  'Technical Leadership',
  'Agile/Scrum',
  'Code Review',
  'Mentorship',
  'Cross-functional Collaboration',
  'Technical Writing',
  'Public Speaking',
];

const jobRecommendations = [
  {
    title: 'Staff Engineer',
    company: 'Meta',
    match: 95,
    location: 'Remote',
    salary: '$200K - $280K',
  },
  {
    title: 'Principal Engineer',
    company: 'Google',
    match: 92,
    location: 'Mountain View, CA',
    salary: '$220K - $300K',
  },
  {
    title: 'Engineering Manager',
    company: 'Netflix',
    match: 88,
    location: 'Los Gatos, CA',
    salary: '$190K - $270K',
  },
];

const careerPath = [
  { role: 'Next: Staff/Principal Engineer', probability: 85 },
  { role: 'Alternative: Engineering Manager', probability: 75 },
  { role: 'Future: VP of Engineering', probability: 60 },
];

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    period: '2020 - Present',
    achievements: [
      'Led migration of monolith to microservices, reducing deployment time by 60%',
      'Architected real-time analytics platform processing 10M+ events/day',
      'Mentored 5 junior engineers, 3 promoted to mid-level roles',
      'Reduced AWS costs by $150K annually through optimization',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'StartupXYZ',
    period: '2017 - 2020',
    achievements: [
      'Built core product features used by 500K+ users',
      'Improved API response time by 45% through caching strategies',
      'Implemented CI/CD pipeline reducing release cycles from weeks to days',
    ],
  },
];

const careerGrowth = [
  { year: '2017', level: 3, title: 'Junior Engineer' },
  { year: '2018', level: 5, title: 'Software Engineer' },
  { year: '2020', level: 7, title: 'Senior Engineer' },
  { year: '2022', level: 8, title: 'Senior Engineer II' },
  { year: '2024', level: 9, title: 'Staff Engineer (Target)' },
];

const education = [
  {
    degree: 'B.S. Computer Science',
    school: 'Stanford University',
    year: '2017',
    verified: true,
  },
  {
    degree: 'AWS Solutions Architect',
    school: 'Amazon Web Services',
    year: '2021',
    verified: true,
  },
  {
    degree: 'Kubernetes Administrator (CKA)',
    school: 'CNCF',
    year: '2022',
    verified: true,
  },
];

function App() {
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ role: string; text: string }>>([
    { role: 'ai', text: `Hi! I'm ${candidateData.name}'s AI Twin. Ask me anything about their experience, skills, or career goals!` },
  ]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    setChatMessages([...chatMessages, { role: 'user', text: chatInput }]);

    // Simulate AI response
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: `That's a great question! Based on ${candidateData.name}'s profile, they have extensive experience in that area. Would you like to know more specific details?`,
        },
      ]);
    }, 1000);

    setChatInput('');
  };

  return (
    <div className="app">
      {/* Header */}
      <motion.header
        className="header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="header-content">
            <div className="header-left">
              <h1>{candidateData.name}</h1>
              <p className="title">{candidateData.title}</p>
              <div className="header-meta">
                <span className="location">
                  <MapPin size={16} />
                  {candidateData.location}
                </span>
                {candidateData.verified && (
                  <span className="verified-badge">
                    <ShieldCheck size={16} />
                    Verified
                  </span>
                )}
              </div>
            </div>
            <div className="header-right">
              <div className="contact-links">
                <a href={candidateData.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <Linkedin size={20} />
                </a>
                <a href={candidateData.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <Github size={20} />
                </a>
                <a href={`mailto:${candidateData.email}`} className="icon-link">
                  <Mail size={20} />
                </a>
                <a href={`tel:${candidateData.phone}`} className="icon-link">
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* AI Twin Chatbot */}
      <section className="section grid-bg">
        <div className="container">
          <motion.div
            className="ai-twin-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <MessageCircle size={32} className="section-icon" />
              <h2>Talk to My AI Twin</h2>
              <p className="section-subtitle">
                Ask me anything about my experience, skills, and career goals!
              </p>
            </div>
            <div className="chat-container card">
              <div className="chat-messages">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`chat-message ${msg.role}`}>
                    <div className="message-content">{msg.text}</div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleChatSubmit} className="chat-input-form">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask about experience, skills, projects..."
                  className="chat-input"
                />
                <button type="submit" className="btn-primary">
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profile Photo with Floating Skills */}
      <section className="section">
        <div className="container">
          <motion.div
            className="profile-showcase"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="profile-photo-container">
              <div className="profile-photo glow-border">
                <img src={candidateData.photoUrl} alt={candidateData.name} />
              </div>
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  className="floating-skill"
                  style={{
                    '--angle': `${(360 / skills.length) * idx}deg`,
                    '--distance': '200px',
                  } as React.CSSProperties}
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: idx * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="skill-badge">
                    {skill.name}
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Video */}
      <section className="section">
        <div className="container">
          <motion.div
            className="intro-video-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <Play size={32} className="section-icon" />
              <h2>Watch My Introduction</h2>
            </div>
            <div className="video-container card">
              <iframe
                width="100%"
                height="500"
                src={candidateData.videoUrl}
                title="Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* More Than Skills - Personal Section */}
      <section className="section grid-bg">
        <div className="container">
          <motion.div
            className="personal-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <Target size={32} className="section-icon" />
              <h2>More Than a List of Skills</h2>
            </div>
            <div className="personal-grid">
              <div className="personal-card card">
                <h3>What Makes Me Happy</h3>
                <p>{candidateData.whatMakesHappy}</p>
              </div>
              <div className="personal-card card">
                <h3>Career Goals</h3>
                <p>{candidateData.careerGoals}</p>
              </div>
              <div className="personal-card card">
                <h3>Passionate About</h3>
                <div className="passion-tags">
                  {candidateData.passions.map((passion) => (
                    <span key={passion} className="passion-tag">
                      {passion}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="section">
        <div className="container">
          <motion.div
            className="achievements-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <Award size={32} className="section-icon" />
              <h2>Key Achievements</h2>
            </div>
            <div className="achievements-grid">
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={achievement.title}
                  className="achievement-card card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <achievement.icon size={40} className="achievement-icon" />
                  <h3>{achievement.title}</h3>
                  <p className="achievement-metric">{achievement.metric}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Radar Graph */}
      <section className="section grid-bg">
        <div className="container">
          <motion.div
            className="skills-radar-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <BarChart3 size={32} className="section-icon" />
              <h2>Skills Profile</h2>
            </div>
            <div className="radar-container card">
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#00f3ff" strokeOpacity={0.3} />
                  <PolarAngleAxis dataKey="skill" stroke="#00f3ff" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#00f3ff" />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="#00f3ff"
                    fill="#00f3ff"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skill Gap Analysis */}
      <section className="section">
        <div className="container">
          <motion.div
            className="skill-gap-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <TrendingUp size={32} className="section-icon" />
              <h2>Skill Gap Analysis</h2>
            </div>
            <div className="skill-gaps">
              {skillGaps.map((gap, idx) => (
                <motion.div
                  key={gap.skill}
                  className="skill-gap-card card"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="skill-gap-header">
                    <h3>{gap.skill}</h3>
                    <span className="gap-percentage">
                      {gap.current}% → {gap.target}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-current" style={{ width: `${gap.current}%` }}></div>
                    <div className="progress-target" style={{ width: `${gap.target}%` }}></div>
                  </div>
                  <div className="skill-gap-footer">
                    <span className="course-name">{gap.course}</span>
                    <button className="btn-outline btn-small">
                      Learn Now <ExternalLink size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transferrable Skills */}
      <section className="section grid-bg">
        <div className="container">
          <motion.div
            className="transferrable-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <Zap size={32} className="section-icon" />
              <h2>Transferrable Skills</h2>
            </div>
            <div className="transferrable-grid">
              {transferrableSkills.map((skill, idx) => (
                <motion.div
                  key={skill}
                  className="transferrable-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Job Recommendations */}
      <section className="section">
        <div className="container">
          <motion.div
            className="job-recommendations-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <Target size={32} className="section-icon" />
              <h2>AI-Powered Job Recommendations</h2>
            </div>
            <div className="recommendations-grid">
              {jobRecommendations.map((job, idx) => (
                <motion.div
                  key={job.title}
                  className="job-card card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="job-match">
                    <span className="match-score">{job.match}% Match</span>
                  </div>
                  <h3>{job.title}</h3>
                  <p className="company">{job.company}</p>
                  <div className="job-details">
                    <span className="job-location">{job.location}</span>
                    <span className="job-salary">{job.salary}</span>
                  </div>
                  <button className="btn-primary btn-full">Apply Now</button>
                </motion.div>
              ))}
            </div>
            <div className="career-path-section">
              <h3>Potential Career Paths</h3>
              <div className="career-paths">
                {careerPath.map((path, idx) => (
                  <div key={path.role} className="career-path-item card">
                    <span className="path-role">{path.role}</span>
                    <div className="path-probability">
                      <div className="probability-bar" style={{ width: `${path.probability}%` }}></div>
                      <span className="probability-text">{path.probability}% likely</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Experience */}
      <section className="section grid-bg">
        <div className="container">
          <motion.div
            className="experience-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <Briefcase size={32} className="section-icon" />
              <h2>Detailed Experience</h2>
            </div>
            <div className="experience-timeline">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.company}
                  className="experience-item card"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <div className="experience-header">
                    <div>
                      <h3>{exp.title}</h3>
                      <p className="company">{exp.company}</p>
                    </div>
                    <span className="period">{exp.period}</span>
                  </div>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, aidx) => (
                      <li key={aidx}>{achievement}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Growth Trajectory */}
      <section className="section">
        <div className="container">
          <motion.div
            className="career-growth-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <TrendingUp size={32} className="section-icon" />
              <h2>Career Growth Trajectory</h2>
            </div>
            <div className="growth-chart card">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={careerGrowth}>
                  <defs>
                    <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00f3ff" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#00f3ff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#00f3ff" strokeOpacity={0.1} />
                  <XAxis dataKey="year" stroke="#00f3ff" />
                  <YAxis stroke="#00f3ff" />
                  <Tooltip
                    contentStyle={{
                      background: '#0a0a0a',
                      border: '1px solid #00f3ff',
                      borderRadius: '8px',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="level"
                    stroke="#00f3ff"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorGrowth)"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <div className="growth-milestones">
                {careerGrowth.map((milestone) => (
                  <div key={milestone.year} className="milestone">
                    <span className="milestone-year">{milestone.year}</span>
                    <span className="milestone-title">{milestone.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="section grid-bg">
        <div className="container">
          <motion.div
            className="education-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <GraduationCap size={32} className="section-icon" />
              <h2>Education & Certifications</h2>
            </div>
            <div className="education-grid">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  className="education-card card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="education-header">
                    <h3>{edu.degree}</h3>
                    {edu.verified && (
                      <span className="verified-badge">
                        <ShieldCheck size={14} />
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="school">{edu.school}</p>
                  <p className="year">{edu.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recruiter Tools */}
      <section className="section">
        <div className="container">
          <motion.div
            className="recruiter-tools-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <Users size={32} className="section-icon" />
              <h2>For Recruiters</h2>
            </div>
            <div className="recruiter-tools">
              <button className="recruiter-btn card">
                <Search size={24} />
                <div>
                  <h3>Quick 6-Second Scan</h3>
                  <p>Get instant profile summary</p>
                </div>
              </button>
              <button className="recruiter-btn card">
                <Target size={24} />
                <div>
                  <h3>Match to JD</h3>
                  <p>Upload job description for match score</p>
                </div>
              </button>
              <button className="recruiter-btn card">
                <Users size={24} />
                <div>
                  <h3>Compare Candidates</h3>
                  <p>See how they stack up</p>
                </div>
              </button>
              <button className="recruiter-btn card">
                <BarChart3 size={24} />
                <div>
                  <h3>Reputation & Proof-of-Work</h3>
                  <p>View verified achievements graph</p>
                </div>
              </button>
              <button className="recruiter-btn card">
                <Download size={24} />
                <div>
                  <h3>Download Profile</h3>
                  <p>Get PDF report</p>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>AI-Powered Candidate Dashboard | Built with React & TypeScript</p>
          <p className="footer-note">Data is dynamically generated and can be customized</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
