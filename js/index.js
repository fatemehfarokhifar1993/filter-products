let menu = document.getElementById("menu");
let navlist = document.querySelector(".navlist");
const backdrop = document.querySelector(".backdrop");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navlist.classList.toggle("show");
  backdrop.style.display = "block";
});
window.addEventListener("scroll", () => {
  menu.classList.remove("fa-times");
  navlist.classList.remove("show");
  backdrop.style.display = "none";
});
backdrop.addEventListener("click", () => {
  menu.classList.remove("fa-times");
  navlist.classList.remove("show");
  backdrop.style.display = "none";
});

/* filter */

const productsDOM = document.querySelector(".products");
const searchInput = document.querySelector("#search");
const btns = document.querySelectorAll(".btn");
let allProductsdata = [];

const filters = {
  searchItems: "",
};
function renderproducts(products, filters) {
  const filteredProducts = products.filter((p) => {
    return p.title
      .toLowerCase()
      .trim()
      .includes(filters.searchItems.toLowerCase().trim());
  });
  productsDOM.innerHTML = "";
  filteredProducts.forEach((item) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <img src=${item.image} />
    <h2>${item.title}</h2>
    `;
    productsDOM.appendChild(productDiv);
  });
}
searchInput.addEventListener("input", (e) => {
  filters.searchItems = e.target.value;
  renderproducts(allProductsdata, filters);
});
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filters.searchItems = e.target.dataset.filter;
    renderproducts(allProductsdata, filters);
  });
});

import { productsData } from "./products.js";

document.addEventListener("DOMContentLoaded", () => {
  searchInput.value = "";
 /*  axios
    .get("http://localhost:3000/items")
    .then((res) => {
      allProductsdata = res.data;
      renderproducts(res.data, filters);
    })
    .catch((error) => console.log(error)); */
   allProductsdata = productsData;
   renderproducts(allProductsdata,filters);
});
