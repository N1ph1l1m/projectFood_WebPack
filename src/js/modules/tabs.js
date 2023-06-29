function tabs(tabsSelector,tabContentSelector, tabsParentSelector,activeClass) {
  const tabs = document.querySelectorAll(tabsSelector),
    calcChooseParent = document.querySelector(".calculating__field"),
    calcChooseItem = document.querySelectorAll(".calculating__choose-item"),
    calcChooseItemPhysActivity = document.querySelectorAll(
      ".calculating__choose-itemPhysActivity"
    ),
    tabsContent = document.querySelectorAll(tabContentSelector),
    calcChooseParentPhysActivity = document.querySelector(
      ".calculating__choose_physActivity"
    ),
    tabsParent = document.querySelector(tabsParentSelector);

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
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

export default tabs;
