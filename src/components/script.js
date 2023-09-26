const script = () => {
  console.log("hello - test script");

  // Pierwsza lista
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
      showMoreButton1.textContent = "Zwiń";
    } else {
      listElements1.forEach((element, index) => {
        if (index >= 5) {
          element.style.display = "none";
        }
      });
      showMoreButton1.textContent = "Zobacz więcej";
    }
    isExpanded1 = !isExpanded1;
  });

  // Druga lista
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
      showMoreButton2.textContent = "Zwiń";
    } else {
      listElements2.forEach((element, index) => {
        if (index >= 5) {
          element.style.display = "none";
        }
      });
      showMoreButton2.textContent = "Zobacz więcej";
    }
    isExpanded2 = !isExpanded2;
  });
};

export default script;
