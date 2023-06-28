function tabs() {
  const tabs = document.querySelectorAll(".tabheader__item"),
    calcChooseParent = document.querySelector(".calculating__field"),
    calcChooseItem = document.querySelectorAll(".calculating__choose-item"),
    calcChooseItemPhysActivity = document.querySelectorAll(
      ".calculating__choose-itemPhysActivity"
    ),
    tabsContent = document.querySelectorAll(".tabcontent"),
    calcChooseParentPhysActivity = document.querySelector(
      ".calculating__choose_physActivity"
    ),
    tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  function hidecalcChoose() {
    calcChooseItem.forEach((item) => {
      item.classList.remove("calculating__choose-item_active");
    });
  }

  function showcalcChoose(i = 0) {
    calcChooseItem[i].classList.add("calculating__choose-item_active");
  }

  function hidecalcChooseActivity() {
    calcChooseItemPhysActivity.forEach((item) => {
      item.classList.remove("calculating__choose-item_active");
    });
  }

  function showcalcChooseActiviyt(i = 0) {
    calcChooseItemPhysActivity[i].classList.add(
      "calculating__choose-item_active"
    );
  }

  hidecalcChoose();
  hidecalcChooseActivity();
  showcalcChoose(0);
  showcalcChooseActiviyt(0);

  calcChooseParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("calculating__choose-item")) {
      calcChooseItem.forEach((item, i) => {
        if (target == item) {
          hidecalcChoose();
          showcalcChoose(i);
        }
      });
    }
  });

  calcChooseParentPhysActivity.addEventListener("click", (event) => {
    const target = event.target;

    if (
      target &&
      target.classList.contains("calculating__choose-itemPhysActivity")
    ) {
      calcChooseItemPhysActivity.forEach((item, i) => {
        if (target == item) {
          hidecalcChooseActivity();
          showcalcChooseActiviyt(i);
        }
      });
    }
  });
}

module.exports = tabs;
