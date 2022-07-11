'use strict';

async function requestData(url) {
  const response = await fetch(url); // asynchronous
  const data = await response.json(); // asynchronous

  return new Promise((resolve, reject) => {
    if (response.ok) {
      try {
        resolve(data);
      } catch (error) {
        reject(error.message);
      }
    }
  });
}

function renderImage(data) {
  const errorElement = document.getElementsByTagName('h1');
  errorElement.textContent = '';
  const imageElement = document.createElement('img');
  imageElement.src = data;
  imageElement.alt = 'comic box';
  document.body.appendChild(imageElement);
}

function renderError(error) {
  const imageElement = document.getElementsByTagName('img');
  imageElement.src = '';

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
