# AI-Powered Candidate Dashboard

A futuristic, interactive dashboard for showcasing candidate profiles with AI-powered insights. Built with React, TypeScript, and modern web technologies.

## Features

### 1. Header Section
- Candidate name, title, and location
- LinkedIn, GitHub, email, and phone contact links
- Verified badge

### 2. AI Twin Chatbot
- Interactive chat interface
- Ask questions about experience, skills, and career goals
- Real-time responses

### 3. Profile Showcase
- Professional headshot with glowing border
- Animated floating skills badges
- Dynamic skill visualization

### 4. Introduction Video
- Embedded video player
- Showcase candidate personality and communication skills

### 5. Personal Insights
- What makes them happy
- Career goals and aspirations
- Passionate interests

### 6. Key Achievements
- Visual achievement cards
- Quantifiable metrics and impact
- Icon-based representation

### 7. Skills Radar Graph
- Interactive radar chart
- Multi-dimensional skill visualization
- Frontend, Backend, DevOps, Architecture, Leadership, Communication

### 8. Skill Gap Analysis
- Current vs target skill levels
- Progress bars with visual indicators
- "Learn Now" buttons with course recommendations

### 9. Transferrable Skills
- Soft skills and cross-functional abilities
- Interactive hover effects
- Modern tag-based layout

### 10. AI Job Recommendations
- Match percentage for each role
- Salary ranges and locations
- Career path predictions with probability scores

### 11. Detailed Experience
- Timeline of work history
- Bullet points with measurable results
- Company and duration information

### 12. Career Growth Trajectory
- Visual area chart showing career progression
- Milestone markers with titles
- Future target positions

### 13. Education & Certifications
- Degrees and certifications with verified badges
- Institution names and graduation years
- Visual card-based layout

### 14. Recruiter Tools
- **Quick 6-Second Scan**: Instant profile summary
- **Match to JD**: Upload job description for match scoring
- **Compare Candidates**: Side-by-side comparison
- **Reputation & Proof-of-Work**: Verified achievements graph
- **Download Profile**: PDF export functionality

## Design

### Color Scheme
- **Primary Background**: Pure black (#000000)
- **Neo Blue**: #00f3ff (Cyan/Electric Blue)
- **Accents**:
  - Success Green: #00ff88
  - Warning Orange: #ffaa00
  - Danger Red: #ff0055

### Typography
- **Headings**: Orbitron (futuristic, tech-inspired)
- **Body**: Rajdhani (clean, modern)

### Effects
- Glowing borders and shadows
- Smooth animations with Framer Motion
- Backdrop blur effects
- Gradient backgrounds
- Hover transformations

## Tech Stack

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Framer Motion**: Animation library
- **Recharts**: Data visualization and charts
- **Lucide React**: Beautiful icon library

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the dashboard.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Candidate Data

Edit the data objects in `src/App.tsx`:

- `candidateData`: Personal information, contact details, bio
- `skills`: Technical skills with proficiency levels
- `radarData`: Radar chart skill categories
- `achievements`: Key accomplishments and metrics
- `skillGaps`: Skills to improve with target levels
- `transferrableSkills`: Soft skills and cross-functional abilities
- `jobRecommendations`: AI-suggested job matches
- `careerPath`: Predicted career trajectory
- `experiences`: Work history with achievements
- `careerGrowth`: Career progression data
- `education`: Degrees and certifications

### Styling

All styles are in:
- `src/index.css`: Global styles, theme variables, animations
- `src/App.css`: Component-specific styles

### Color Theme

Update CSS variables in `src/index.css`:

```css
:root {
  --neo-blue: #00f3ff;
  --neo-blue-dark: #0099ff;
  --bg-primary: #000000;
  /* ... more variables */
}
```

## Features in Detail

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Adaptive layouts for all screen sizes

### Animations
- Scroll-triggered animations
- Floating skill badges
- Smooth transitions
- Hover effects

### Interactive Elements
- Chat interface
- Clickable skill tags
- Hoverable cards
- Button interactions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Connect to real AI backend for chatbot
- Implement actual recruiter tool functionality
- Add PDF export feature
- Integrate with LinkedIn/GitHub APIs
- Real-time data updates
- Multi-language support
- Dark/Light theme toggle (currently neo-dark theme)

## License

MIT

## Author

Built with React, TypeScript, and modern web technologies.
