import { useState } from 'react'
import jasminaWebp from '../assets/images/jasmina.webp'
import jasminaJpeg from '../assets/images/jasmina.jpeg'
import AddActivityModal from '../components/AddActivityModal'
import Navbar from '../components/Navbar'

const AboutPage = () => {
  const [isAddActivityOpen, setIsAddActivityOpen] = useState(false)

  return (
    <div className="page-shell about-page">
      <Navbar />

      <div className="about-inner">
        <header className="about-intro">
          <div className="about-intro-media">
            <span className="about-intro-blob about-intro-blob--peach" />
            <span className="about-intro-blob about-intro-blob--mint" />
            <picture>
              <source srcSet={jasminaWebp} type="image/webp" />
              <img
                src={jasminaJpeg}
                alt="Jasmina Fabijan"
                className="about-intro-photo"
                width={420}
                height={520}
              />
            </picture>
          </div>

          <div className="about-intro-copy">
            <p className="about-eyebrow">Zdravo</p>
            <h1 className="about-title">Drago mi je što ste ovde.</h1>
            <p className="about-name">Jasmina Fabijan</p>
            <p className="about-role">Mama dve devojčice i autorka KiddoKompasa</p>
          </div>
        </header>

        <div className="about-body">
          <p>
            KiddoKompas je nastao iz jedne sasvim praktične roditeljske potrebe: da se na jednom mestu lakše pronađu aktivnosti za decu u vašem gradu.
          </p>
          <p>
            Dok sam tražila aktivnosti za svoje devojčice, nedostajalo mi je jedno mesto koje bi olakšalo početak potrage — da mogu brzo da vidim koje aktivnosti su opcija, gde se održavaju i kojem uzrastu su namenjene.
          </p>

          <blockquote className="about-quote">
            Kada su informacije pregledne, i izbor postaje lakši.
          </blockquote>

          <p>
            Pošto je izrada web sajtova moj posao, odlučila sam da napravim upravo takvo mesto — za sebe i za sve roditelje koji traže aktivnosti za svoju decu.
          </p>

          <aside className="about-notice" role="note">
            <span className="about-notice-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.75" />
                <path
                  d="M12 10.5v6"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="7.25" r="1.1" fill="currentColor" />
              </svg>
            </span>
            <p>
              KiddoKompas je katalog škola i klubova — ne sistem za upis. Cene, termine
              i detaljnije informacije proverite kontaktirajući školu, klub ili organizatora.
            </p>
          </aside>
        </div>
      </div>

      <section className="about-cta" aria-labelledby="about-cta-title">
        <div className="about-cta-inner">
          <h2 id="about-cta-title" className="about-cta-title">
            Znate školu ili klub koji nije na listi?
          </h2>
          <p className="about-cta-text">
            Ako vodite aktivnost za decu ili znate za školu, klub ili radionicu koju bi trebalo dodati, javite mi se.
          </p>
          <button
            type="button"
            className="btn btn-primary about-cta-button"
            onClick={() => setIsAddActivityOpen(true)}
          >
            Predložite aktivnost
          </button>
        </div>
      </section>

      <AddActivityModal
        isOpen={isAddActivityOpen}
        onClose={() => setIsAddActivityOpen(false)}
      />
    </div>
  )
}

export default AboutPage
