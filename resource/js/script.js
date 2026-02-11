const dd = console.log;
const path = v => location.pathname.includes(v);
const ls = localStorage;

const Script = {
  init() {
    loading();
  }
}

let msgIndex = 0;
let charIndex = 0;
const typing = [
  "LEARNING HTML,CSS,JS...",
  "MASTERING PHP...",
  "WEB-LOG START!"
];

// 로딩 애니메이션
function loading() {
  if (charIndex < typing[msgIndex].length) {
    $(".loading .typing").append(typing[msgIndex][charIndex]);

    charIndex++;

    setTimeout(() => {
      loading()
    }, 60);
  } else {
    setTimeout(() => {
      if (msgIndex < typing.length - 1) {
        $(".loading .typing").empty();

        charIndex = 0;
        msgIndex++;

        loading();
      } else {
        setTimeout(() => {
          $(".loading").fadeOut(500);
        }, 500);
      }
    }, 800);
  }
}

$(() => Script.init());


// Web Logic Section (작동 원리: "The Art of Logic")

// UI/UX Concept Section (디자인 철학: "User Experience")

// Credits & Resources (New!) (참고 자료: "Inspiration")

// Quiz Challenge Section (참여: "Knowledge Test")