import React from "react";

const Content = (props) => {
  const state = props.value;
  return (
    <section className="content">
      <div className="content__about content-div">
        <h1 className="content__about-name">Marcin Gizka</h1>
        <p className="content__about-text">
          {props.value
            ? "I currently work in the commercial industry, but my interests focus on IT. I am constantly developing my Front-End skills with new issues and topics. Learning to program gives me joy and satisfaction. I am a quick learner and I am looking for a job where I can develop and gain experience to turn them into the best results."
            : "Obecnie pracuję w branży handlowej, ale moje zainteresowania koncentrują się na IT i programowaniu. Stale rozwijam swoje umiejętności Front-Endowe o nowe zagadnienia i tematy. Nauka programowania sprawia mi radość i satysfakcję. Szybko się uczę i szukam pracy, pozwalającej na rozwój i zdobywanie nowych doświadczeń, które to będę mógł przekuwać na lepsze wyniki w pracy."}
        </p>
      </div>

      <div className="content__projects content-div">
        <h2 className="content__projects-title title">
          {state ? "My Projects" : "Moje Projekty"}
        </h2>
        <ol className="content__projects-list list">
          <li className="content__projects-list-element">
            {state
              ? "Portfolio with HTML/CSS/JS :"
              : "Portfolio zbudowane w HTML/CSS/JS :"}
            <a href="https://robionezpasja.netlify.app/">
              {state ? "link" : "link"}
            </a>
          </li>
          <li className="content__projects-list-element">
            {state
              ? "Event site with Wordpress :"
              : "Strona wydarzenia zbudowana w Wordpress :"}
            <a href="https://jarmarksredniowieczny.pl/">
              {state ? "link" : "link"}
            </a>
          </li>
        </ol>
      </div>

      <div className="content__work-exp content-div">
        <h2 className="content__work-exp-title title">
          {state ? "Work Experience" : "Doświadczenie zawodowe"}
        </h2>
        <div className="content__work-exp__aksa">
          <h3 className="content__work-exp__aksa-title">
            <a className="content__work-exp__aksa-link" href="http://aksa.pl/">
              - Aksa Sp. z o.o.
            </a>
          </h3>
          <p className="content__work-exp__aksa-info">
            {state ? "Sales Specialist /" : "Specjalista do spraw sprzedaży /"}
            <span className="content__work-exp__aksa-date">
              {state ? "August 2017 - up to now" : "Sierpień 2017 - obecnie"}
            </span>
          </p>
        </div>
      </div>

      <div className="content__education content-div">
        <h2 className="content__education-title title">
          {state ? "Education" : "Edukacja"}
        </h2>
        <div className="content__education__school">
          <h3 className="content__education__school-title">
            <a
              className="content__education__school-link"
              href="https://www.kasprowiczanie.com/"
            >
              - I LO im. Jana Kasprowicza
            </a>
          </h3>
          <p className="content__education__school-info">
            {state
              ? "Humanistic and Social Profile /"
              : "Profil Humanistyczno - Społeczny /"}
            <span className="content__education__school-date">
              {state ? "August 2012 - May 2015" : "Wrzesień 2012 - Maj 2015"}
            </span>
          </p>
        </div>
      </div>

      <div className="data-processing">
        <p className="rodo">
          {state
            ? "I hereby give consent for my personal data included in the applicatio to be processed for the purposes of the recruitment process in accordance with Art. 6 paragraph 1 letter a of the Regulation of the European Parliament and of the Council (EU) 2016/679 of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)."
            : "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO))."}
        </p>
      </div>
    </section>
  );
};

export default Content;
