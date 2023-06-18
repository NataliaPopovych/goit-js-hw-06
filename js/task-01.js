const catEl = document.querySelector('#categories');
const catAllEl = [...catEl.children];
console.log('Number of categories: ', catAllEl.length);

catAllEl.forEach(element => {
  const categoryName = element.querySelector('h2').textContent;
  const elementsCount = element.querySelectorAll('ul > li').length;
  console.log("Category: ", categoryName);
  console.log('Elements: ', elementsCount);
});