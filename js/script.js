let btnThemeMode = document.getElementById("theme-mode");
if (btnThemeMode) {
  // load theme from localStorage
  let theme = localStorage.getItem("theme");
  if (theme) {
    if (theme === "light") {
      btnThemeMode.innerHTML = '<img src="./images/sun.png" alt="light-mode" title="Chế độ sáng">';
      document.body.setAttribute("class", "light-mode");
    } else if (theme === "dark") {
      btnThemeMode.innerHTML = '<img src="./images/moon.png" alt="dark-mode" title="Chế độ tối">';
      document.body.setAttribute("class", "dark-mode");
    }
  } else {
    btnThemeMode.innerHTML = '<img src="./images/sun.png" alt="light-mode" title="Chế độ sáng">';
    document.body.setAttribute("class", "light-mode");
  }
  // change theme
  btnThemeMode.addEventListener("click", function () {
    if (document.body.classList.contains("dark-mode")) {
      btnThemeMode.innerHTML = '<img src="./images/sun.png" alt="light-mode" title="Chế độ sáng">';
      localStorage.setItem("theme", "light");
    } else {
      btnThemeMode.innerHTML = '<img src="./images/moon.png" alt="dark-mode" title="Chế độ tối">';
      localStorage.setItem("theme", "dark");
    }
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
  });
}

// scroll show btn back to top
let btnBackToTop = document.getElementById("back-to-top");
if (btnBackToTop) {
  window.onscroll = function () {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      btnBackToTop.classList.add("active");
    } else {
      btnBackToTop.classList.remove("active");
    }
  };
  btnBackToTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  });
}

// user action desktop
let username = document.getElementsByClassName("username")[0];
if (username) {
  username.addEventListener("click", function () {
    document.getElementsByClassName("header-user__action")[0].classList.toggle("active");
  });
}
document.addEventListener("click", function (e) {
  // let classObject = e.target.closest(".header-user__info");
  // if (classObject === null) {
  //   if (document.getElementsByClassName("header-user__action")[0]) {
  //     document.getElementsByClassName("header-user__action")[0].classList.remove("active");
  //   }
  // }
  let classObject = e.target.getAttribute("class");
  if (
    classObject != "header-user__info" &&
    classObject != "username" &&
    // classObject != "btn-logout" &&
    // classObject != "btn-change-password" &&
    classObject != "header-user__action"
  ) {
    if (document.getElementsByClassName("header-user__action")[0]) {
      document.getElementsByClassName("header-user__action")[0].classList.remove("active");
    }
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
function showModal(btn, modal_show, modal_hide) {
  let btnAction = document.getElementsByClassName(btn);
  let modalShow = document.getElementById(modal_show);
  if (btnAction && modalShow) {
    for (let i = 0; i < btnAction.length; i++) {
      btnAction[i].addEventListener("click", function () {
        modalShow.classList.add("active");
        modal_hide.forEach((idModal) => {
          let modalHide = document.getElementById(idModal);
          if (modalHide) {
            modalHide.classList.remove("active"); // hide modal register
          }
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
showModal("btn-login", "modalLogin", ["modalRegister", "modalForgotPassword", "modalChangePassword", "modalListChapter"]); // show modal login
showModal("btn-register", "modalRegister", ["modalLogin", "modalForgotPassword", "modalChangePassword", "modalListChapter"]); // show modal register
showModal("btn-forgot-password", "modalForgotPassword", [
  "modalLogin",
  "modalRegister",
  "modalChangePassword",
  "modalListChapter",
]); // show modal forgot password
showModal("btn-change-password", "modalChangePassword", [
  "modalLogin",
  "modalRegister",
  "modalForgotPassword",
  "modalListChapter",
]); // show modal change password
showModal("btn-show-list-chapte", "modalListChapter", [
  "modalLogin",
  "modalRegister",
  "modalForgotPassword",
  "modalChangePassword",
]); // show modal change password

// close modal
function removeClassModal() {
  let modalLogin = document.getElementById("modalLogin");
  if (modalLogin) modalLogin.classList.remove("active");

  let modalRegister = document.getElementById("modalRegister");
  if (modalRegister) modalRegister.classList.remove("active");

  let modalForgotPassword = document.getElementById("modalForgotPassword");
  if (modalForgotPassword) modalForgotPassword.classList.remove("active");

  let modalChangePassword = document.getElementById("modalChangePassword");
  if (modalChangePassword) modalChangePassword.classList.remove("active");

  let modalListChapter = document.getElementById("modalListChapter");
  if (modalListChapter) modalListChapter.classList.remove("active");

  let overLayModal = document.getElementById("overLayModal");
  if (overLayModal) overLayModal.classList.remove("active");

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
function actionPassword(btn, box_hide, box_notif) {
  let btnAction = document.getElementsByClassName(btn)[0];
  if (btnAction) {
    let boxHide = document.getElementsByClassName(box_hide)[0];
    let boxNotif = document.getElementsByClassName(box_notif)[0];
    btnAction.addEventListener("click", function () {
      if (boxHide) boxHide.classList.remove("active");
      if (boxNotif) boxNotif.classList.add("active");
    });
  }
}
actionPassword("btn-action-get-password", "box-content-forgot-password", "notification-forgot-password");
actionPassword("btn-action-change-password", "box-content-change-password", "notification-change-password");

// show more description
let seeMoreDes = document.getElementsByClassName("see-more-des")[0];
if (seeMoreDes) {
  seeMoreDes.addEventListener("click", function () {
    let boxDesc = document.getElementsByClassName("description-story")[0];
    if (boxDesc) {
      if (boxDesc.classList.contains("active")) {
        seeMoreDes.innerHTML = "Xem thêm";
      } else {
        seeMoreDes.innerHTML = "Ẩn bớt";
      }
      boxDesc.classList.toggle("active");
    }
  });
}

// comment
let comment = {
  htmlComment: function (name, content, seconds, minutes, hours, date, month, year) {
    return `
      <div class="list-comment__main">
        <div class="d-flex">
          <div class="avatar"><img src="./images/meme.jpg" alt=""></div>
          <div class="detail-comment">
            <div class="box-content">
              <div class="box-content__user-name">${name}</div>
              <div class="box-content__content">${content}</div>
            </div>
            <div class="action">
              <div class="action__show-reply">Trả lời</div>
              <div class="send-time">${hours}:${minutes}:${seconds} - ${date}/${month}/${year}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="list-comment__reply">
        <div class="box-replying">
          <div class="avatar"><img src="./images/meme.jpg" alt=""></div>
          <div class="box-replying__form">
            <input type="text" placeholder="Viết phản hồi...">
            <button type="button" class="send-reply">Gửi</button>
          </div>
        </div>
      </div>
    `;
  },
  htmlReplyComment: function (content, seconds, minutes, hours, date, month, year) {
    return `
      <div class="d-flex">
        <div class="avatar"><img src="./images/meme.jpg" alt=""></div>
        <div class="detail-comment">
          <div class="box-content">
            <div class="box-content__user-name">User</div>
            <div class="box-content__content">${content}</div>
          </div>
          <div class="action">
            <div class="action__show-reply">Trả lời</div>
            <div class="send-time">${hours}:${minutes}:${seconds} - ${date}/${month}/${year}</div>
          </div>
        </div>
      </div>
    `;
  },
  post: function () {
    let btnSendCmt = document.getElementById("btn-send-comment");
    if (btnSendCmt) {
      btnSendCmt.addEventListener("click", function () {
        let name = btnSendCmt.closest(".form-comment").querySelector("#input-name").value;
        let content = btnSendCmt.closest(".form-comment").querySelector("#input-content").value;
        if (name == "" || content == "") {
          if (name == "") alert("Bạn chưa nhập tên.");
          if (content == "") alert("Bạn chưa nhập nội dung bình luận.");
        } else {
          let now = new Date();
          let hours = now.getHours();
          let minutes = now.getMinutes();
          let seconds = now.getSeconds();
          let date = now.getDate();
          let month = now.getMonth() + 1;
          let year = now.getFullYear();
          let newElement = document.createElement("div");
          let setAttr = document.createAttribute("class");
          setAttr.value = "list-comment__item";
          newElement.setAttributeNode(setAttr);
          newElement.innerHTML = comment.htmlComment(name, content, seconds, minutes, hours, date, month, year);
          btnSendCmt.closest(".comment-story").querySelector(".list-comment").appendChild(newElement);
          btnSendCmt.closest(".form-comment").querySelector("#input-name").value = "";
          btnSendCmt.closest(".form-comment").querySelector("#input-content").value = "";
          comment.showBoxReply();
        }
      });
    }
  },
  enterPost: function () {
    let inputName = document.getElementById("input-name");
    let inputContent = document.getElementById("input-content");
    let postCmt = (boxInput) => {
      boxInput.addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
          e.stopPropagation();
          e.preventDefault();
          let name = inputName.value;
          let content = inputContent.value;
          if (name == "" || content == "") {
            if (name == "") alert("Bạn chưa nhập tên.");
            if (content == "") alert("Bạn chưa nhập nội dung bình luận.");
          } else {
            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            let date = now.getDate();
            let month = now.getMonth() + 1;
            let year = now.getFullYear();
            let newElement = document.createElement("div");
            let setAttr = document.createAttribute("class");
            setAttr.value = "list-comment__item";
            newElement.setAttributeNode(setAttr);
            newElement.innerHTML = comment.htmlComment(name, content, seconds, minutes, hours, date, month, year);
            boxInput.closest(".comment-story").querySelector(".list-comment").appendChild(newElement);
            boxInput.closest(".form-comment").querySelector("#input-name").value = "";
            boxInput.closest(".form-comment").querySelector("#input-content").value = "";
            comment.showBoxReply();
            comment.reply();
            comment.enterReply();
          }
        }
      });
    };
    postCmt(inputName);
    postCmt(inputContent);
  },
  showBoxReply: function () {
    let btnShowReply = document.getElementsByClassName("action__show-reply");
    if (btnShowReply) {
      for (let i = 0; i < btnShowReply.length; i++) {
        btnShowReply[i].addEventListener("click", function () {
          let boxReplying = document.getElementsByClassName("box-replying");
          if (boxReplying) {
            for (let j = 0; j < boxReplying.length; j++) {
              boxReplying[j].classList.remove("active");
            }
          }
          let replyToName = btnShowReply[i].closest(".detail-comment").querySelector(".box-content__user-name").textContent;
          btnShowReply[i]
            .closest(".list-comment__item")
            .querySelector(".list-comment__reply .box-replying")
            .classList.add("active");
          btnShowReply[i]
            .closest(".list-comment__item")
            .querySelector(".list-comment__reply .box-replying input").value = `@${replyToName} `;
          btnShowReply[i].closest(".list-comment__item").querySelector(".list-comment__reply .box-replying input").focus();
          btnShowReply[i]
            .closest(".list-comment__item")
            .querySelector(".list-comment__reply .box-replying .send-reply")
            .setAttribute("data-name", replyToName);
        });
      }
    }
  },
  reply: function () {
    let btnSendReply = document.getElementsByClassName("send-reply");
    if (btnSendReply) {
      for (let i = 0; i < btnSendReply.length; i++) {
        btnSendReply[i].addEventListener("click", function () {
          let now = new Date();
          let hours = now.getHours();
          let minutes = now.getMinutes();
          let seconds = now.getSeconds();
          let date = now.getDate();
          let month = now.getMonth() + 1;
          let year = now.getFullYear();
          let replyTo = btnSendReply[i].getAttribute("data-name");
          let box = btnSendReply[i].closest(".box-replying");
          let content = btnSendReply[i].closest(".box-replying__form").querySelector("input").value;
          btnSendReply[i].closest(".box-replying__form").querySelector("input").value = "";
          content = content.replace(`@${replyTo}`, `<b>${replyTo}</b>`);
          box.classList.remove("active");
          let newElement = document.createElement("div");
          let setAttr = document.createAttribute("class");
          setAttr.value = "list-comment__reply-item";
          newElement.setAttributeNode(setAttr);
          newElement.innerHTML = comment.htmlReplyComment(content, seconds, minutes, hours, date, month, year);
          box.before(newElement);
          comment.showBoxReply();
        });
      }
    }
  },
  enterReply: function () {
    let boxReplyForm = document.getElementsByClassName("box-replying__form");
    if (boxReplyForm) {
      for (let i = 0; i < boxReplyForm.length; i++) {
        let input = boxReplyForm[i].querySelector("input");
        if (input) {
          input.addEventListener("keyup", function (e) {
            if (e.keyCode === 13) {
              e.preventDefault();
              let now = new Date();
              let hours = now.getHours();
              let minutes = now.getMinutes();
              let seconds = now.getSeconds();
              let date = now.getDate();
              let month = now.getMonth() + 1;
              let year = now.getFullYear();
              let replyTo = boxReplyForm[i].querySelector("button").getAttribute("data-name");
              let box = boxReplyForm[i].closest(".box-replying");
              let content = input.value;
              input.value = "";
              content = content.replace(`@${replyTo}`, `<b>${replyTo}</b>`);
              box.classList.remove("active");
              let newElement = document.createElement("div");
              let setAttr = document.createAttribute("class");
              setAttr.value = "list-comment__reply-item";
              newElement.setAttributeNode(setAttr);
              newElement.innerHTML = comment.htmlReplyComment(content, seconds, minutes, hours, date, month, year);
              box.before(newElement);
              comment.showBoxReply();
            }
          });
        }
      }
    }
  },
};
comment.post();
comment.enterPost();
comment.showBoxReply();
comment.reply();
comment.enterReply();

// load color-text and font-size current
let styleContentChapter = "";
let textColorCurrent = localStorage.getItem("text-color");
let fontSizeCurrent = localStorage.getItem("font-size");
if (textColorCurrent !== null) {
  styleContentChapter += `color: ${textColorCurrent};`;
  let percentColor = textColorCurrent.slice(-2, -1);
  if (document.getElementById("value-text-color")) {
    if (parseInt(percentColor) === 1) percentColor = 10;
    document.getElementById("value-text-color").innerHTML = `${percentColor}0%`;
  }
  if (document.getElementById("change-text-color")) {
    document.getElementById("change-text-color").value = percentColor;
  }
}
if (fontSizeCurrent !== null) {
  styleContentChapter += `font-size: ${fontSizeCurrent}px;`;
  if (document.getElementById("value-font-size-text")) {
    document.getElementById("value-font-size-text").innerHTML = `${fontSizeCurrent}px`;
  }
  if (document.getElementById("change-font-size-text")) {
    document.getElementById("change-font-size-text").value = fontSizeCurrent;
  }
}
if (document.getElementsByClassName("content-chapter")[0]) {
  document.getElementsByClassName("content-chapter")[0].setAttribute("style", styleContentChapter);
}

// setting
let setting = document.getElementById("settings");
if (setting) {
  // show box setting
  let btnShowSetting = document.getElementById("btn-show-setting");
  if (btnShowSetting) {
    btnShowSetting.addEventListener("click", function () {
      setting.querySelector(".list-config").classList.toggle("active");
    });
  }
  // hide box setting
  document.addEventListener("click", function (e) {
    let classObject = e.target.closest("#settings");
    if (classObject === null) {
      setting.querySelector(".list-config").classList.remove("active");
    }
  });
  // range color text
  let colorLightMode = `rgba(5, 5, 5, `; //rgba(5, 5, 5, 1)
  let backgroundLightMode = `rgba(240, 242, 245, `; //rgba(240, 242, 245, 1)
  let colorDarkMode = `rgba(250, 250, 250, `; //rgba(193, 193, 193, 1)
  let backgroundDarkMode = `rgba(24, 25, 26, `; //rgba(24, 25, 26, 1)
  let rangeTextColor = document.getElementById("change-text-color");
  // let valueTextColor = document.getElementById("value-text-color");
  if (rangeTextColor) {
    rangeTextColor.addEventListener("change", function () {
      let color = "";
      let themeCurrent = document.body.getAttribute("class");
      if (themeCurrent) {
        if (themeCurrent == "light-mode") {
          color = `${colorLightMode}${rangeTextColor.value / 10})`;
        } else if (themeCurrent == "dark-mode") {
          color = `${colorDarkMode}${rangeTextColor.value / 10})`;
        }
        // valueTextColor.innerHTML = `${rangeTextColor.value}0%`;
        if (document.getElementsByClassName("content-chapter")[0]) {
          localStorage.setItem("text-color", color);
          let styleCurrent = "";
          if (fontSizeCurrent !== null) styleCurrent += `font-size: ${fontSizeCurrent}px;`;
          document.getElementsByClassName("content-chapter")[0].setAttribute("style", `${styleCurrent}color: ${color};`);
        }
      }
    });
  }
  let rangeFontSizeText = document.getElementById("change-font-size-text");
  // let valueFontSizeText = document.getElementById("value-font-size-text");
  if (rangeFontSizeText) {
    rangeFontSizeText.addEventListener("change", function () {
      // valueFontSizeText.innerHTML = `${rangeFontSizeText.value}px`;
      if (document.getElementsByClassName("content-chapter")[0]) {
        localStorage.setItem("font-size", rangeFontSizeText.value);
        let styleCurrent = "";
        if (textColorCurrent !== null) styleCurrent += `color: ${textColorCurrent};`;
        document
          .getElementsByClassName("content-chapter")[0]
          .setAttribute("style", `${styleCurrent}font-size: ${rangeFontSizeText.value}px;`);
      }
    });
  }
}
