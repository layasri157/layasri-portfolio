import "./index.css";

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#hero" className="nav-logo">👨‍💻 LP</a>
          <ul className="nav-links">
            <li><a href="#hero" className="nav-link">🏠 Home</a></li>
            <li><a href="#skills" className="nav-link">⚡ Skills</a></li>
            <li><a href="#projects" className="nav-link">🚀 Projects</a></li>
            <li><a href="#contact" className="nav-link">📧 Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero - PERFECT LAYOUT */}
      <section id="hero" className="hero">
        <div className="hero-left">
          <p className="hero-tag">Full‑Stack Developer</p>
          <h1 className="hero-title">Layasri Pusapati</h1>
          <p className="hero-subtitle">
            Builds end‑to‑end apps from <span>Python/Django</span> backends and{" "}
            <span>React</span> frontends to deployed ML systems like{" "}
            <span>MyWasteSorter</span> and <span>VTravelBuddy</span>.
            <br/><br/>
            <span>CS Undergraduate</span> from Hyderabad with hands-on experience in full-stack development, 
            computer vision, and audio visualization. Passionate about creating impactful AI solutions and 
            scalable web applications. 🚀
          </p>
          <div className="hero-buttons">
            <a
              href="https://github.com/layasri157"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              📂 GitHub Profile
            </a>
            <a href="#projects" className="btn btn-outline">
              👀 View Projects
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-right-content">
            {/* Profile Photo - LINKEDIN PHOTO ✅ */}
            <div className="hero-photo-container">
  <img 
    src="https://avatars.githubusercontent.com/u/142712788?v=5" 
    alt="Layasri Pusapati" 
    className="profile-photo"
  />
</div>

            
            {/* Current Focus Card */}
            <div className="hero-card">
              <p className="hero-card-title">Current Focus 🎯</p>
              <ul>
                <li>Building full‑stack apps with Django & React, ML projects</li>
                <li>Improving UI/UX with Tailwind CSS ✨</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills 💻</h2>
        <p className="section-intro">
          Technologies and tools used across projects.
        </p>
        <div className="skills-grid">
          <div className="skill-group">
            <h3>Frontend 🎨</h3>
            <div className="skill-tags">
              <span>React</span>
              <span>Tailwind CSS</span>
              <span>Streamlit</span>
              <span>HTML/CSS/JS</span>
              <span>Canvas API</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Backend ⚙️</h3>
            <div className="skill-tags">
              <span>Python</span>
              <span>Django</span>
              <span>FastAPI</span>
              <span>SQLite/Postgres</span>
            </div>
          </div>
          <div className="skill-group">
  <h3>ML & AI 🧠</h3>
  <div className="skill-tags">
    <span>FastAI</span>
    <span>ONNX Runtime</span>
    <span>Computer Vision</span>
    <span>Scikit-learn</span>
  </div>
</div>

          <div className="skill-group">
            <h3>DevOps ☁️</h3>
            <div className="skill-tags">
              <span>Git/GitHub</span>
              <span>Render</span>
              <span>Railway</span>
              <span>Vercel</span>
              <span>Web Audio API</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects 🚀</h2>
        <p className="section-intro">
          Recent projects combining full‑stack development with machine learning and creative coding.
        </p>
        <div className="projects-grid">
          <article className="project-card">
            <h3>MyWasteSorter ♻️</h3>
            <p className="project-tagline">
              AI‑powered waste classification using FastAI CNN exported to ONNX, deployed with Streamlit.
            </p>
            <ul className="project-bullets">
              <li>Classifies images into 6 waste categories with confidence scores.</li>
              <li>ONNX Runtime for lightweight, cross‑platform inference.</li>
              <li>Trained on custom waste dataset with data augmentation.</li>
            </ul>
            <div className="project-links">
              <a href="https://mywastesorter-gkcr8wvpmbhocyildhgrft.streamlit.app/" target="_blank" rel="noreferrer">🔗 Live demo</a>
              <a href="https://github.com/layasri157/MyWasteSorter" target="_blank" rel="noreferrer">📁 Source code</a>
            </div>
            <div className="project-tags">
              <span>Python</span><span>Streamlit</span><span>FastAI</span><span>ONNX</span><span>Computer Vision</span>
            </div>
          </article>

          <article className="project-card">
            <h3>Hexagon Music Visualizer 🎵</h3>
            <p className="project-tagline">
              Audio-reactive hexagon music visualizer using Web Audio API and Canvas.
            </p>
            <ul className="project-bullets">
              <li>Real-time audio frequency analysis with Web Audio API.</li>
              <li>Dynamic hexagon patterns that react to music beats.</li>
              <li>Pure vanilla JavaScript with HTML5 Canvas rendering.</li>
            </ul>
            <div className="project-links">
              <a href="https://layasri157.github.io/hexagon-music-visualizer/" target="_blank" rel="noreferrer">🔗 Live demo</a>
              <a href="https://github.com/layasri157/hexagon-music-visualizer" target="_blank" rel="noreferrer">📁 Source code</a>
            </div>
            <div className="project-tags">
              <span>JavaScript</span><span>Web Audio API</span><span>Canvas</span><span>Audio Visualization</span>
            </div>
          </article>

          <article className="project-card">
            <h3>VTravelBuddy 🚗</h3>
            <p className="project-tagline">
              Full‑stack ride sharing platform with Django backend and Tailwind UI, deployed on Render.
            </p>
            <ul className="project-bullets">
              <li>Post rides, search rides, user authentication, admin panel.</li>
              <li>Mobile‑friendly responsive design with Tailwind CSS.</li>
              <li>SQLite in dev, Postgres in production.</li>
            </ul>
            <div className="project-links">
              <a href="https://vtravelbuddy.onrender.com" target="_blank" rel="noreferrer">🔗 Live site</a>
              <a href="https://github.com/layasri157/vtravelbuddy" target="_blank" rel="noreferrer">📁 Source code</a>
            </div>
            <div className="project-tags">
              <span>Django</span><span>Tailwind CSS</span><span>SQLite</span><span>Postgres</span><span>Render</span>
            </div>
          </article>

          <article className="project-card">
            <h3>Portfolio 🌐</h3>
            <p className="project-tagline">
              Modern React portfolio built with Vite, fully responsive with glassmorphism effects.
            </p>
            <ul className="project-bullets">
              <li>Clean, modern design with backdrop blur and hover animations.</li>
              <li>Fully responsive across mobile, tablet, and desktop.</li>
              <li>Fast loading with Vite + optimized CSS Grid layouts.</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/layasri157/layasri-portfolio" target="_blank" rel="noreferrer">📁 Source code</a>
            </div>
            <div className="project-tags">
              <span>React</span><span>Vite</span><span>CSS Grid</span><span>Responsive Design</span>
            </div>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Get In Touch 📬</h2>
        <p className="section-intro">
          Open to internships and full‑time roles in full‑stack development, applied ML, and creative coding projects.
        </p>
        <div className="contact-grid">
          <div className="contact-card">
            <h3 className="contact-card-title">✉️ Email</h3>
            <p><a href="mailto:layasripusapati@gmail.com" className="contact-link">layasripusapati@gmail.com</a></p>
          </div>
          <div className="contact-card">
            <h3 className="contact-card-title">💼 LinkedIn</h3>
            <p><a href="https://www.linkedin.com/in/layasri-pusapati-2b773b250/" target="_blank" rel="noreferrer" className="contact-link">Layasri Pusapati</a></p>
          </div>
          <div className="contact-card">
            <h3 className="contact-card-title">🐙 GitHub</h3>
            <p><a href="https://github.com/layasri157" target="_blank" rel="noreferrer" className="contact-link">layasri157</a></p>
          </div>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Layasri Pusapati. Built with React + Vite. ✨
      </footer>
    </div>
  );
}

export default App;
