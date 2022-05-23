const limit = 1;
const btn = document.getElementById("button");
const factText = document.getElementById("fact");
const shareBtn = document.querySelector(".share");
const shareNav = document.querySelector(".share-box");
const shareIcon = document.querySelector(".shareicon");
const closeIcon = document.querySelector(".close");
const copyLink = document.querySelector(".copy");
const copyText = document.querySelector(".copy-text");
const closeShare = document.querySelector(".share-box .close");
closeShare.addEventListener("click", function () {
  shareNav.classList.toggle("active");
});
copyLink.addEventListener("click", function () {
  copyText.innerText = "Copied!";
  navigator.clipboard.writeText(factText.innerText);
});
shareBtn.addEventListener("click", function () {
  shareNav.classList.toggle("active");
  shareIcon.classList.toggle("miss");
  closeIcon.classList.toggle("show");
});
btn.addEventListener("click", generateFact);
const options = {
  method: "GET",
  url: "https://api.api-ninjas.com/v1/facts?limit=" + limit,
  headers: { "X-Api-Key": "JNAyiUWRNSm8p6LyA/0FHg==QF5A5weWuAdqkBAZ" },
};
function generateFact() {
  btn.innerText = "Loading...";
  fetch("https://api.api-ninjas.com/v1/facts?limit=" + limit, options)
    .then((response) => response.json())
    .then((response) => {
      factText.innerText = response[0].fact;
      btn.innerText = "More Facts";
    });
  shareNav.classList.remove("active");
  shareIcon.classList.remove("miss");
  closeIcon.classList.remove("show");
  copyText.innerText = "Copy text";
}
