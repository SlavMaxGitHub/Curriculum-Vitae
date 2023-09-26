import React, { useEffect } from "react";

const Content = (props) => {
  const state = props.value;
  useEffect(() => {
    const script = () => {
      const showMoreButton1 = document.getElementById("showMore1");
      const listElements1 = document.querySelectorAll(".proj-li");
      let isExpanded1 = false;

      showMoreButton1.addEventListener("click", () => {
        if (!isExpanded1) {
          listElements1.forEach((element, index) => {
            if (index >= 5) {
              element.style.display = "list-item";
            }
          });
          showMoreButton1.textContent = state ? "Hide" : "Zwiń";
        } else {
          listElements1.forEach((element, index) => {
            if (index >= 5) {
              element.style.display = "none";
            }
          });
          showMoreButton1.textContent = state
            ? "See more..."
            : "Zobacz więcej...";
        }
        isExpanded1 = !isExpanded1;
      });

      const showMoreButton2 = document.getElementById("showMore2");
      const listElements2 = document.querySelectorAll(".cours-li");
      let isExpanded2 = false;

      showMoreButton2.addEventListener("click", () => {
        if (!isExpanded2) {
          listElements2.forEach((element, index) => {
            if (index >= 5) {
              element.style.display = "list-item";
            }
          });
          showMoreButton2.textContent = state ? "Hide" : "Zwiń";
        } else {
          listElements2.forEach((element, index) => {
            if (index >= 5) {
              element.style.display = "none";
            }
          });
          showMoreButton2.textContent = state
            ? "See more..."
            : "Zobacz więcej...";
        }
        isExpanded2 = !isExpanded2;
      });
    };
    script();
  }, [state]);
  return (
    <section className="content">
      <div className="content__about content-div">
        <h1 className="content__about-name">Marcin Gizka</h1>
        <p className="content__about-text">
          {props.value
            ? "Currently, I am working in the sales industry, but concurrently, I am engaged as a Junior Wordpress Developer. My interests My interests focus on IT and programming, particularly in Front-End development. I actively expand my knowledge of new technologies and tools to create visually appealing and responsive websites. I am ambitious, a fast learner, and actively seeking a position that allows for professional growth and acquiring new experiences in the programming domain."
            : "Obecnie pracuję w branży handlowej, jednak równolegle angażuję się jako Junior Wordpress Developer. Moje zainteresowania skupiają się na dziedzinie IT i programowaniu, szczególnie w obszarze Front-Endu. Aktywnie poszerzam swoją wiedzę o nowe technologie i narzędzia, aby tworzyć estetyczne i responsywne strony internetowe. Jestem ambitny, szybko się uczę i poszukuję stanowiska, które umożliwi mi rozwój zawodowy oraz zdobywanie nowych doświadczeń w obszarze programowania."}
        </p>
      </div>

      <div className="content__projects content-div ">
        <h2 className="content__projects-title title">
          {state ? "My Projects" : "Moje Projekty"}
        </h2>
        <ol className="content__projects-list list">
          <li className="content__projects-list-element proj-li">
            {state
              ? "Website built in HTML/CSS/JS/PHP code and implemented in Wordpress: "
              : "Strona internetowa zbudowana w kodzie HTML/CSS/JS/PHP i wdrożona do Wordpressa: "}
            <a
              href="https://atobos.jbeghnzeab.cfolks.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {state ? "link" : "link"}
            </a>
          </li>
          <li className="content__projects-list-element proj-li">
            {state
              ? "Landingpage built in HTML/CSS/JS/PHP code and implemented in Wordpress: "
              : "Landingpage zbudowany w kodzie HTML/CSS/JS/PHP i wdrożony do Wordpressa: "}
            <a
              href="http://au.mokosz.eu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {state ? "link" : "link"}
            </a>
          </li>

          <li className="content__projects-list-element proj-li">
            {state
              ? "'Team of experts' subpage written in HTML/CSS/JS and implemented to an existing website in Wordpress: "
              : "Podstrona 'Zespół ekspertów' napisana w HTML/CSS/JS i wdrożona do istniejącej strony w Wordpressie: "}
            <a
              href="https://wmh.agency/zespol-ekspertow/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {state ? "link" : "link"}
            </a>
          </li>
          <li className="content__projects-list-element proj-li">
            {state
              ? "Portfolio with HTML/CSS/JS/React according to customer's design: "
              : "Portfolio zbudowane w HTML/CSS/JS/React według projektu klienta: "}
            <a
              href="https://robionezpasja.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {state ? "link" : "link"}
            </a>
          </li>
          <li className="content__projects-list-element proj-li">
            {state
              ? "Martial arts academy website. Built using Wordpress: "
              : "Strona internetowa akademii sztuk walki. Zbudowana w Wordpress :"}
            <a
              href="https://akademiaperun.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {state ? "link" : "link"}
            </a>
          </li>
          <li className="content__projects-list-element proj-li">
            {state
              ? "Website of a cultural event organized by reenactors. Built using Wordpress: "
              : "Strona wydarzenia kulturalnego, organizowanego przez rekonstruktorów. Zbudowana przy użyciu Wordpress: "}
            <a
              href="https://jarmarksredniowieczny.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {state ? "link" : "link"}
            </a>
          </li>
        </ol>
        <button id="showMore1">
          {state ? " See more... " : "Zobacz więcej..."}
        </button>
      </div>

      <div className="content__projects content-div">
        <h2 className="content__projects-title title">
          {state ? "Courses" : "Kursy"}
        </h2>
        <ol className="content__projects-list list">
          <li className="content__projects-list-element cours-li">
            {state
              ? "React from scratch by Samuraj Programowania: "
              : "React od podstaw od Samuraj Programowania: "}
            <a
              href="https://www.udemy.com/course/kurs-react-od-podstaw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {state ? "link" : "link"}
            </a>
          </li>

          <li className="content__projects-list-element cours-li">
            {state
              ? "Introduction to Git and GitHub by Samuraj Programowania: "
              : "Wprowadzenie do Git i GitHub od Samuraj Programowania: "}
            <a
              href="https://www.udemy.com/course/kurs-git-i-github-od-podstaw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {state ? "link" : "link"}
            </a>
          </li>

          <li className="content__projects-list-element cours-li">
            {state
              ? "Advanced Projects in CSS and JavaScript by Samuraj Programowania: "
              : "Zaawansowane Projekty w CSS i JavaScript od Samuraj Programowania: "}
            <a
              href="https://www.udemy.com/course/zaawansowane-projekty-w-css-i-javascript/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {state ? "link" : "link"}
            </a>
          </li>

          <li className="content__projects-list-element cours-li">
            {state
              ? "Programming in JavaScript by Samuraj Programowania: "
              : "Programowanie w JavaScript od Samuraj Programowania: "}
            <a
              href="https://www.udemy.com/course/kurs-programowanie-w-javascript/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {state ? "link" : "link"}
            </a>
          </li>

          <li className="content__projects-list-element cours-li">
            {state
              ? "Front-End Intermediate in 15 days by Samuraj Programowania: "
              : "Front-End Średniozaawansowany w 15 dni  od Samuraj Programowania: "}
            <a
              href="https://websamuraj.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {state ? "link" : "link"}
            </a>
          </li>

          <li className="content__projects-list-element cours-li">
            {state
              ? "Web Developer from scratch in 15 days by Samuraj Programowania: "
              : "Web Developer od podstaw w 15 dni od Samuraj Programowania: "}
            <a
              href="https://websamuraj.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {state ? "link" : "link"}
            </a>
          </li>

          <li className="content__projects-list-element cours-li">
            {state
              ? " WordPress course by Dariusz Pichalski: "
              : "Kurs Word Press od Dariusz Pichalski: "}
            <a
              href="https://www.udemy.com/course/kurs-wordpress-woocommerce-z-certyfikatem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {state ? "link" : "link"}
            </a>
          </li>
        </ol>
        <button id="showMore2">
          {state ? " See more... " : "Zobacz więcej..."}
        </button>
      </div>

      <div className="content__work-exp content-div">
        <h2 className="content__work-exp-title title">
          {state ? "Work Experience" : "Doświadczenie zawodowe"}
        </h2>
        <div className="content__work-exp__aksa">
          <h3 className="content__work-exp__aksa-title">
            <a
              className="content__work-exp__aksa-link"
              href="https://coolbrand.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              - Coolbrand.
            </a>
          </h3>
          <p className="content__work-exp__aksa-info">
            {state
              ? "Junior Wordpress Developer /"
              : "Junior Wordpress Developer /"}
            <span className="content__work-exp__aksa-date">
              {state ? "May 2023 - up to now" : "Maj 2023 - obecnie"}
            </span>
          </p>
        </div>

        <div className="content__work-exp__aksa">
          <h3 className="content__work-exp__aksa-title">
            <a
              className="content__work-exp__aksa-link"
              href="http://aksa.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
              target="_blank"
              rel="noopener noreferrer"
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
