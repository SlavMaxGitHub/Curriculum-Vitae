import React, { useEffect, useState } from "react";

const ModifiedDate = (props) => {
  let state = props.value;
  const [daysPassed, setDaysPassed] = useState(0);

  useEffect(() => {
    const spanElement = document.querySelector(".modified-date span");
    const date = spanElement.textContent; // Pobranie daty z spana
    const formattedDate = date.split(".").reverse().join("-"); // Przekształcenie formatu daty na DD-MM-RRRR

    const today = new Date();
    const modifiedDate = new Date(formattedDate);
    const timeDiff = today.getTime() - modifiedDate.getTime();
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Obliczenie liczby dni

    setDaysPassed(days); // Ustawienie liczby dni w stanie komponentu
  }, []);

  return (
    <div className="modified-date">
      <p>
        {state ? "Last updated: " : "Ostatnia aktualizacja: "}
        <span>03.02.2024</span>
        {daysPassed} {state ? "days ago " : "dni temu "}
      </p>
    </div>
  );
};

export default ModifiedDate;
