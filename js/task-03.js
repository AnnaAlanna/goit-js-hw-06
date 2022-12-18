const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery");

const markup = images
  .map(({url, alt}) => `<li class='gallery_item'><img class='gallery_image' src = ${url} alt = ${alt} width = 150px height=90px></li>`)
  .join("");

console.log(markup);
list.insertAdjacentHTML("beforeend", markup);

list.classList.add('js-gallery');
list.style.display = 'flex';
list.style.height = '100%';
list.style.width = '100%';
list.style.justifyContent = 'space-between';
list.style.gap = '20px';
