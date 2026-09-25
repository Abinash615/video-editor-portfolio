import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.12,
      }
    )

    elements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">

        <div className="logo">
          Abinash Rc
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">

          <a href="#work">
            Work
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </nav>


      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>

        <a href="#work" onClick={closeMenu}>
          Work
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

      </div>


      {/* Hero Section */}
      <section className="hero">

        <p className="eyebrow">
          VIDEO EDITOR
        </p>

        <h1>
          I edit videos that
          <span> keep people watching.</span>
        </h1>

        <p className="hero-text">
          Short-form video editor creating engaging Reels, podcast clips,
          educational content and social media videos for creators and brands.
        </p>

        <div className="hero-buttons">

          <a
            href="#work"
            className="button primary"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="button secondary"
          >
            Let's Work Together
          </a>

        </div>

      </section>


      {/* Work Section */}
      <section
        className="section"
        id="work"
      >

        <div className="section-heading reveal">

          <p className="eyebrow">
            SELECTED WORKS
          </p>

          <h2>
            My Editing Work
          </h2>

        </div>


        <div className="work-grid">

          {/* Women's Day */}
          <div className="work-card reveal">

            <div className="video-container">

              <video
                src="/videos/womens-day.mp4"
                controls
                playsInline
                preload="metadata"
              />

            </div>

            <h3>
              Women's Day Campaign
            </h3>

            <p>
              Creative Editing · Storytelling · Social Media
            </p>

          </div>


          {/* Doctor */}
          <div className="work-card reveal">

            <div className="video-container">

              <video
                src="/videos/doctor-backpain.mp4"
                controls
                playsInline
                preload="metadata"
              />

            </div>

            <h3>
              Doctor — Educational Reel
            </h3>

            <p>
              Captions · B-roll · Educational Content · Sound Design
            </p>

          </div>


          {/* Podcast */}
          <div className="work-card reveal">

            <div className="video-container">

              <video
                src="/videos/podcast.mp4"
                controls
                playsInline
                preload="metadata"
              />

            </div>

            <h3>
              Podcast Short
            </h3>

            <p>
              Storytelling · Captions · Pacing · B-roll
            </p>

          </div>


          {/* Fitness */}
          <div className="work-card reveal">

            <div className="video-container">

              <video
                src="/videos/fitness.mp4"
                controls
                playsInline
                preload="metadata"
              />

            </div>

            <h3>
              Fitness Reel
            </h3>

            <p>
              Fast Cuts · Music · Captions · Visual Effects
            </p>

          </div>

        </div>

      </section>


      {/* Services */}
      <section
        className="section"
        id="services"
      >

        <div className="section-heading reveal">

          <p className="eyebrow">
            WHAT I DO
          </p>

          <h2>
            Editing Services
          </h2>

        </div>


        <div className="services-grid">

          <div className="service reveal">

            <span>
              01
            </span>

            <h3>
              Instagram Reels
            </h3>

            <p>
              Engaging short-form videos designed for social media.
            </p>

          </div>


          <div className="service reveal">

            <span>
              02
            </span>

            <h3>
              Podcast Clips
            </h3>

            <p>
              Turning long conversations into attention-grabbing clips.
            </p>

          </div>


          <div className="service reveal">

            <span>
              03
            </span>

            <h3>
              Talking-Head Videos
            </h3>

            <p>
              Clean editing, captions, B-roll and strong pacing.
            </p>

          </div>


          <div className="service reveal">

            <span>
              04
            </span>

            <h3>
              Educational Content
            </h3>

            <p>
              Clear and engaging edits for professionals and creators.
            </p>

          </div>

        </div>

      </section>


      {/* Tools */}
      <section className="tools-section reveal">

        <p className="eyebrow">
          TOOLS I USE
        </p>

        <div className="tools">

          <div>
            CapCut
          </div>

          <div>
            DaVinci Resolve
          </div>

        </div>

      </section>


      {/* About */}
      <section
        className="section about"
        id="about"
      >

        <div className="section-heading reveal">

          <p className="eyebrow">
            ABOUT ME
          </p>

          <h2>
            Hi, I'm Abinash.
          </h2>

        </div>

        <p className="about-text reveal">
          I'm a short-form video editor focused on creating engaging content
          for social media. I work with Reels, podcast clips, educational
          videos and fitness content, with a focus on clean visuals, strong
          pacing, captions, B-roll and sound design.
        </p>

      </section>


      {/* Contact */}
      <section
        className="contact"
        id="contact"
      >

        <div className="reveal">

          <p className="eyebrow">
            HAVE A PROJECT?
          </p>

          <h2>
            Let's create something
            <br />
            great together.
          </h2>

          <div className="contact-buttons">

            <a
              href="mailto:abinashrc0@gmail.com"
              className="button primary"
            >
              Email Me
            </a>

            <a
              href="https://wa.me/919778195461"
              className="button secondary"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/cutwithabi/"
              className="button secondary"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer>

        <p>
          © 2026 Abinash Rc
        </p>

        <p>
          Video Editor
        </p>

      </footer>

    </div>
  )
}

export default App