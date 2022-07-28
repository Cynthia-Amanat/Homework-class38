'use strict';

async function requestData(url) {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error('HTTP ERROR');
}

function renderImage(data) {
  const imageElement = document.createElement('img');
  imageElement.src = data;
  imageElement.alt = data;
  document.body.appendChild(imageElement);
}

function renderError(error) {
  const errorElement = document.createElement('h1');
  errorElement.textContent = error.message;
  document.body.appendChild(errorElement);
}

async function main() {
  try {
    const comicRequest = await requestData(`https://xkcd.now.sh/?comic=latest`);
    renderImage(comicRequest.img);
  } catch (error) {
    renderError(error);
  }
}
window.addEventListener('load', main);
