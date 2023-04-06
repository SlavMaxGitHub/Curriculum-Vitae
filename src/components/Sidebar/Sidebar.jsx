/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Logo from "./Logo/Logo";

const Sidebar = (props) => {
  let state = props.value;
  return (
    <section className="sidebar">
      <Logo />

      <div className="sidebar__contacts sidebar-div">
        <h2 className="sidebar__contacts-title title">
          {state ? "Contacts" : "Kontakt"}
        </h2>
        <ul className="sidebar__contacts-list list">
          <li className="sidebar__contacts-list-element">
            {state ? "mobile: " : "telefon: "}
            <a
              className="sidebar__contacts-list-element-link link"
              href="phoneto:530 786 287"
            >
              +48 530 786 287
            </a>
          </li>
          <li className="sidebar__contacts-list-element">
            e-mail:
            <a
              className="sidebar__contacts-list-element-link link"
              href="mailto:cinek1454@wp.pl"
            >
              cinek1454@wp.pl
            </a>
          </li>
          <li className="sidebar__contacts-list-element">
            {state ? "location: " : "lokalizacja: "}
            <a
              className="sidebar__contacts-list-element-link link"
              href="https://www.google.com/maps/place/%C5%9Awidnica/@50.8407062,16.4576068,13z/data=!3m1!4b1!4m5!3m4!1s0x470e4d36a731e551:0x7c72a14dac6c836e!8m2!3d50.8498434!4d16.475679"
            >
              Świdnica
            </a>
          </li>
          <li className="sidebar__contacts-list-element">
            GitHub:
            <a
              className="sidebar__contacts-list-element-link link"
              href="https://github.com/SlavMaxGitHub"
            >
              {state ? "link" : "link"}
            </a>
          </li>
        </ul>
      </div>

      <div className="sidebar__skills sidebar-div">
        <h2 className="sidebar__skills-title title">
          {state ? "Skills" : "Umiejętności"}
        </h2>
        <ul className="sidebar__skills-list list">
          <li className="sidebar__skills-list-element">HTML5</li>
          <li className="sidebar__skills-list-element">CSS3 / Sass&BEM</li>
          <li className="sidebar__skills-list-element">JavaScript</li>
          <li className="sidebar__skills-list-element">GIT</li>
          <li className="sidebar__skills-list-element">React</li>
          <li className="sidebar__skills-list-element">Bootstrap</li>
          <li className="sidebar__skills-list-element">API</li>
          <li className="sidebar__skills-list-element">NPM</li>
          <li className="sidebar__skills-list-element">Webpack4</li>
          <li className="sidebar__skills-list-element">
            Wordpress / Elementor
          </li>
          <li className="sidebar__skills-list-element">
            {state ? "English: " : "Angielski: "} B1
          </li>
          <li className="sidebar__skills-list-element">
            {state ? "Polish (Native)" : "Polski (Ojczysty)"}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;