// change theme
document.getElementById("theme-mode").addEventListener("click", function () {
  if (document.body.classList.contains("dark-mode")) {
    document.getElementById("theme-mode").innerHTML = '<img src="./images/sun.png" alt="light-mode" title="Chế độ sáng">';
  } else {
    document.getElementById("theme-mode").innerHTML = '<img src="./images/moon.png" alt="dark-mode" title="Chế độ tối">';
  }
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
});

// scroll show btn back to top
window.onscroll = function () {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("back-to-top").classList.add("active");
  } else {
    document.getElementById("back-to-top").classList.remove("active");
  }
};
document.getElementById("back-to-top").addEventListener("click", function () {
  window.scrollTo(0, 0);
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
});

// user action desktop
let username = document.getElementsByClassName("username")[0];
if (username) {
  username.addEventListener("click", function () {
    document.getElementsByClassName("header-user__action")[0].classList.toggle("active");
  });
}
document.addEventListener("click", function (e) {
  let classObject = e.target.getAttribute("class");
  if (
    classObject != "header-user__info" &&
    classObject != "username" &&
    // classObject != "btn-logout" &&
    // classObject != "btn-change-password" &&
    classObject != "header-user__action"
  ) {
    document.getElementsByClassName("header-user__action")[0].classList.remove("active");
  }
});

// show menu mobile
document.getElementById("showMenu").addEventListener("click", function () {
  document.getElementById("overLayMenu").classList.add("active");
  document.getElementsByClassName("menu-mobile-content")[0].classList.add("active");
  document.body.style.overflow = "hidden";
});
// hide menu mobile
function closeMenu(id) {
  document.getElementById(id).addEventListener("click", function () {
    document.getElementById("overLayMenu").classList.remove("active");
    document.getElementsByClassName("menu-mobile-content")[0].classList.remove("active");
    document.getElementsByClassName("sub-menu-mobile")[0].classList.remove("active");
    document.body.style.overflow = "unset";
  });
}
closeMenu("closeMenu");
closeMenu("overLayMenu");

// sub menu mobile
document.getElementsByClassName("list-category-mobile")[0].addEventListener("click", function () {
  document.getElementsByClassName("sub-menu-mobile")[0].classList.toggle("active");
});

// get height menu mobile => set height ul
let heightMenu = document.getElementsByClassName("menu-mobile-content")[0];
if (heightMenu) heightMenu = heightMenu.offsetHeight;
else heightMenu = 0;

let heightMainLogo = document.getElementsByClassName("main-logo")[0];
if (heightMainLogo) heightMainLogo = heightMainLogo.offsetHeight;
else heightMainLogo = 0;

let heightUserAction = document.getElementsByClassName("user-action")[0];
if (heightUserAction) heightUserAction = heightUserAction.offsetHeight;
else heightUserAction = 0;

let heightInfoUser = document.getElementsByClassName("infomation-user")[0];
if (heightInfoUser) heightInfoUser = heightInfoUser.offsetHeight;
else heightInfoUser = 0;

let heightUl = heightMenu - (heightMainLogo + heightUserAction + heightInfoUser);
document.getElementById("menuMobileUl").style.height = `${heightUl}px`;

// show modal
function showModal(btn, modalShow, modalHide) {
  let btnAction = document.getElementsByClassName(btn);
  if (btnAction) {
    for (let i = 0; i < btnAction.length; i++) {
      btnAction[i].addEventListener("click", function () {
        document.getElementById(modalShow).classList.add("active");
        modalHide.forEach((idModal) => {
          document.getElementById(idModal).classList.remove("active"); // hide modal register
        });
        document.getElementById("overLayModal").classList.add("active");
        document.body.style.overflow = "hidden";
        // hide menu mobile
        document.getElementById("overLayMenu").classList.remove("active");
        document.getElementsByClassName("menu-mobile-content")[0].classList.remove("active");
        document.getElementsByClassName("sub-menu-mobile")[0].classList.remove("active");
      });
    }
  }
}
showModal("btn-login", "modalLogin", ["modalRegister", "modalForgotPassword"]); // show modal login
showModal("btn-register", "modalRegister", ["modalLogin", "modalForgotPassword"]); // show modal register
showModal("btn-forgot-password", "modalForgotPassword", ["modalLogin", "modalRegister"]); // show modal forgot password
showModal("btn-change-password", "modalChangePassword", ["modalLogin", "modalRegister", "modalForgotPassword"]); // show modal change password

// close modal
function removeClassModal() {
  document.getElementById("modalLogin").classList.remove("active");
  document.getElementById("modalRegister").classList.remove("active");
  document.getElementById("modalForgotPassword").classList.remove("active");
  document.getElementById("modalChangePassword").classList.remove("active");
  document.getElementById("overLayModal").classList.remove("active");
  document.body.style.overflow = "unset";
}
function closeModal(element, nameAttr) {
  if (nameAttr == "is_id") {
    document.getElementById(element).addEventListener("click", function () {
      removeClassModal();
    });
  } else if (nameAttr == "is_class") {
    let btnCloseModal = document.getElementsByClassName(element);
    if (btnCloseModal) {
      for (let i = 0; i < btnCloseModal.length; i++) {
        btnCloseModal[i].addEventListener("click", function () {
          removeClassModal();
        });
      }
    }
  }
}
closeModal("overLayModal", "is_id");
closeModal("btn-close-modal", "is_class");

// action modal forgot password
function actionPassword(btn, boxHide, boxNotif) {
  let btnAction = document.getElementsByClassName(btn);
  if (btnAction) {
    btnAction[0].addEventListener("click", function () {
      document.getElementsByClassName(boxHide)[0].classList.remove("active");
      document.getElementsByClassName(boxNotif)[0].classList.add("active");
    });
  }
}
actionPassword("btn-action-get-password", "box-content-forgot-password", "notification-forgot-password");
actionPassword("btn-action-change-password", "box-content-change-password", "notification-change-password");
