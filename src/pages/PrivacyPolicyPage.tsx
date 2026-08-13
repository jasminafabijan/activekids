import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const CONTACT_EMAIL = 'info@kiddokompas.rs'
const LAST_UPDATED = '12. avgust 2026.'

const PrivacyPolicyPage = () => {
  return (
    <div className="page-shell legal-page">
      <Navbar />

      <article className="legal-inner">
        <header className="legal-header">
          <p className="legal-eyebrow">KiddoKompas</p>
          <h1 className="legal-title">Politika privatnosti</h1>
          <p className="legal-updated">Poslednje ažuriranje: {LAST_UPDATED}</p>
        </header>

        <div className="legal-body">
          <p>
            Ova Politika privatnosti objašnjava koje podatke KiddoKompas prikuplja, u koje
            svrhe ih koristi i koja prava imate u vezi sa svojim ličnim podacima. Sajtom
            upravlja Jasmina Fabijan (
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            ).
          </p>

          <h2>1. Šta je KiddoKompas</h2>
          <p>
            KiddoKompas je informativni katalog škola, klubova i aktivnosti za decu.
            Sajt nije sistem za upis — ne posredujemo u ugovorima između roditelja i
            organizatora, niti naplaćujemo članarine u ime škola.
          </p>

          <h2>2. Koje podatke obrađujemo</h2>
          <p>U zavisnosti od načina korišćenja sajta, možemo obrađivati:</p>
          <ul>
            <li>
              <strong>Podatke koje nam dobrovoljno pošaljete</strong> — npr. kada
              predložite aktivnost putem forme, emaila ili Vibera (ime ili naziv
              organizacije, kontakt telefon/email, adresa, opis aktivnosti i slično).
            </li>
            <li>
              <strong>Javne podatke o školama i klubovima</strong> — naziv, adresa,
              uzrast, opis, telefon, email, veb-sajt i profili na društvenim mrežama,
              koje objavljujemo u katalogu radi informisanja roditelja.
            </li>
            <li>
              <strong>Fotografije</strong> — ako nam šaljete fotografiju za prikaz
              aktivnosti, potrebno je da imate pravo da tu fotografiju pošaljete i
              dozvolite njeno korišćenje na sajtu. Posebno obratite pažnju da ne
              šaljete fotografije dece ili drugih osoba bez odgovarajuće saglasnosti.
            </li>
          </ul>
          <p>
            KiddoKompas trenutno ne zahteva kreiranje korisničkog naloga, ne koristi
            Google Analytics niti slične alate za praćenje posetilaca, i ne prikuplja
            podatke o deci radi profilisanja ili marketinga.
          </p>

          <h2>3. Svrha obrade</h2>
          <p>Podatke obrađujemo kako bismo:</p>
          <ul>
            <li>održavali i unapređivali katalog aktivnosti,</li>
            <li>odgovorili na predloge i upite koje nam pošaljete,</li>
            <li>proverili i ažurirali informacije o školama i klubovima,</li>
            <li>ispunili zakonske obaveze, ako postoje.</li>
          </ul>

          <h2>4. Pravni osnov</h2>
          <p>
            Obrada se zasniva na: (a) vašem pristanku ili zahtevu kada nam dobrovoljno
            pošaljete podatke; (b) legitimnom interesu da vodimo informativni katalog; i
            (c) zakonskim obavezama, kada je to primenljivo.
          </p>

          <h2>5. Kome delimo podatke</h2>
          <p>
            Lične podatke ne prodajemo, ne iznajmljujemo i ne delimo ih u marketinške svrhe.
            Podatke možemo deliti samo kada je to potrebno za rad sajta, obradu predloga ili
            komunikaciju sa vama.
            </p>

            <p>
            Za prijem i obradu predloga možemo koristiti spoljne servise kao što su Google Forms,
            Google Sheets, Gmail/Google Workspace i Viber. Kada koristite te servise, na obradu
            podataka mogu se primenjivati i njihove politike privatnosti.
            </p>

            <p>
            Sajt može koristiti i tehničke servise neophodne za njegovo funkcionisanje, kao što su
            hosting, DNS, zaštita sajta, slanje emailova ili osnovna tehnička obrada podataka.
            Ti servisi mogu obrađivati samo one podatke koji su potrebni za pružanje konkretne
            usluge.
            </p>

            <p>
            Javni kontakt podaci škola, klubova i organizatora objavljuju se u katalogu kako bi
            roditelji mogli da pronađu osnovne informacije i kontaktiraju organizatore direktno.
            </p>

            <p>
            Ako kliknete na spoljne linkove, kao što su Google mape, Instagram, Facebook,
            Viber, sajtovi škola ili drugi eksterni servisi, za obradu podataka na tim servisima
            važe njihove politike privatnosti.
            </p>

          <h2>6. Kolačići i analitika</h2>
          <p>
            Sajt trenutno ne postavlja kolačiće i ne koristi alate analitike (uključujući
            Google Analytics) niti slične tehnologije za praćenje posetilaca. Ako se to
            ubuduće promeni, ova politika biće ažurirana pre uvođenja takvih alata.
          </p>

          <h2>7. Čuvanje podataka</h2>
          <p>
            Podatke čuvamo onoliko dugo koliko je potrebno za svrhu zbog koje su
            prikupljeni (npr. dok je škola u katalogu, dok traje razmena povodom
            predloga, ili dok postoji zakonska obaveza čuvanja). Nakon toga ih brišemo
            ili anonimizujemo, u razumnoj meri tehnički izvodljivom.
          </p>

          <h2>8. Vaša prava</h2>
          <p>
            U skladu sa važećim propisima o zaštiti podataka o ličnosti, možete
            zatražiti uvid, ispravku, brisanje, ograničenje obrade ili prenos podataka,
            kao i uložiti prigovor na obradu zasnovanu na legitimnom interesu. Ako ste
            dali pristanak, možete ga povući u bilo kom trenutku, bez uticaja na
            zakonitost obrade pre povlačenja.
          </p>
          <p>
            Za ostvarivanje prava pišite na{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Potrudićemo se da
            odgovorimo u razumnom roku.
          </p>

          <h2>9. Tačnost podataka u katalogu</h2>
          <p>
            Informacije o školama i klubovima su informativnog karaktera i mogu se
            menjati. Termine, cene, uzrast i slobodna mesta uvek proverite direktno sa
            organizatorom. Ako primetite netačan podatak, javite nam — rado ćemo ga
            ispraviti.
          </p>

          <h2>10. Izmene politike</h2>
          <p>
            Ovu politiku možemo povremeno ažurirati. Nova verzija važi od dana
            objavljivanja na ovoj stranici, uz navedeni datum poslednje izmene.
          </p>

          <h2>11. Kontakt</h2>
          <p>
            Za pitanja o privatnosti i obradi podataka: {' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            <br />Više o projektu možete pročitati na stranici{' '}
            <Link to="/o-nama">O nama</Link>.
          </p>
        </div>
      </article>
    </div>
  )
}

export default PrivacyPolicyPage
