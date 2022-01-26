document.querySelector('.content').onclick = e => {
  // console.log(e.target); // to get the element
  // console.log(e.target.tagName); // to get the element tag name alone
  e.target.style.color = "red";
};