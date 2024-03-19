import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");

function getEmotionsArray(cats) {
  const newArray = [];

  for (let cat of catsData) {
    for (let emotion of cat.emotionTags) newArray.push(emotion);
  }
  return newArray;
}

function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);
  let string = "";
  for (let emotion of emotions) {
    string += `<p>${emotion}</p>`;
  }
  emotionRadios.innerHTML = string;
}

renderEmotionsRadios(catsData);
