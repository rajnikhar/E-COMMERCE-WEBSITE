document.addEventListener("DOMContentLoaded", function () {
  var searchForm = document.getElementById("searchForm");
  var searchInput = document.getElementById("searchInput");
  var searchResults = document.getElementById("searchResults");

  var products = [
    {
      category: "shirts",
      name: "MEN BLUE SUPER SLIM FIT FORMAL FULL SLEEVES FORMAL SHIRT",
      image: "img/products/shop/p1/1.avif",
      link: "p1.html",
    },
    {
      category: "shirts",
      name: "MEN NAVY SLIM FIT FORMAL SHIRT",
      image: "img/products/shop/p2/1.avif",
      link: "p2.html",
    },
    {
      category: "shirts",
      name: "MEN PINK SUPER SLIM FIT FORMAL FULL SLEEVES FORMAL SHIRT",
      image: "img/products/shop/p3/1.avif",
      link: "p3.html",
    },
    {
      category: "shirts",
      name: "MEN GREY REGULAR FIT FORMAL FULL SLEEVES FORMAL SHIRT",
      image: "img/products/shop/p4/1.avif",
      link: "p4.html",
    },
    {
      category: "accessories",
      name: "MEN BLUE PRINT TIE",
      image: "img/products/shop/p5/1.jpg",
      link: "p5.html",
    },
    {
      category: "accessories",
      name: "MEN BROWN SOLID GENUINE LEATHER BELT",
      image: "img/products/shop/p6/1.avif",
      link: "p6.html",
    },
    {
      category: "accessories",
      name: "MEN GREY TEXTURED DUFFEL BAG",
      image: "img/products/shop/p7/1.avif",
      link: "p7.html",
    },
    {
      category: "accessories",
      name: "MEN BLACK SOLID LEATHER WALLET",
      image: "img/products/shop/p8/1.avif",
      link: "p8.html",
    },
    {
      category: "jackets",
      name: "MEN WHITE SOLID CASUAL JACKET",
      image: "img/products/shop/p9/1.avif",
      link: "p9.html",
    },
    {
      category: "jackets",
      name: "MEN BLACK PATTERNED CASUAL JACKET",
      image: "img/products/shop/p10/1.avif",
      link: "p10.html",
    },
    {
      category: "jackets",
      name: "MEN GREY PRINT CASUAL JACKET",
      image: "img/products/shop/p11/1.avif",
      link: "p11.html",
    },
    {
      category: "jacket",
      name: "MEN BLACK SOLID CASUAL JACKET",
      image: "img/products/shop/p12/1.avif",
      link: "p12.html",
    },
    {
      category: "tshirts",
      name: "MEN RED SOLID CREW NECK ROUND NECK T-SHIRTS",
      image: "img/products/shop/p13/1.avif",
      link: "p13.html",
    },
    {
      category: "tshirts",
      name: "MEN BLACK SOLID POLO NECK POLO T-SHIRTS",
      image: "img/products/shop/p14/1.avif",
      link: "p14.html",
    },
    {
      category: "tshirts",
      name: "MEN RED SOLID POLO NECK POLO T-SHIRTS",
      image: "img/products/shop/p15/1.avif",
      link: "p15.html",
    },
    {
      category: "tshirts",
      name: "MEN YELLOW SOLID CREW NECK ROUND NECK T-SHIRTS",
      image: "img/products/shop/p16/1.avif",
      link: "p16.html",
    },
    {
      category: "trousers",
      name: "MEN BLACK SOLID SUPER SLIM FIT FORMAL TROUSERS",
      image: "img/products/shop/p17/1.avif",
      link: "p17.html",
    },
    {
      category: "trousers",
      name: "MEN GREY SOLID SLIM FIT FORMAL TROUSERS",
      image: "img/products/shop/p18/1.avif",
      link: "p18.html",
    },
    {
      category: "trousers",
      name: "MEN BLACK SOLID SLIM FIT FORMAL TROUSERS",
      image: "img/products/shop/p19/1.avif",
      link: "p19.html",
    },
    {
      category: "trousers",
      name: "MEN NAVY SOLID SUPER SLIM FIT FORMAL TROUSERS",
      image: "img/products/shop/p20/1.avif",
      link: "p20.html",
    },
    {
      category: "jeans",
      name: "MEN BROWN DARK WASH SLIM TAPERED JEANS",
      image: "img/products/shop/p21/1.avif",
      link: "p21.html",
    },
    {
      category: "jeans",
      name: "MEN BLUE MID WASH SLIM TAPERED JEANS",
      image: "img/products/shop/p22/1.avif",
      link: "p22.html",
    },
    {
      category: "jeans",
      name: "MEN NAVY DARK WASH SLIM TAPERED JEANS",
      image: "img/products/shop/p23/1.avif",
      link: "p23.html",
    },
    {
      category: "jeans",
      name: "MEN NAVY SOLID SUPER SLIM FIT FORMAL TROUSERS",
      image: "img/products/shop/p24/1.avif",
      link: "p24.html",
    },
  ];

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm !== "") {
      var filteredProducts = products.filter(function (product) {
        return (
          product.category.toLowerCase() === searchTerm ||
          product.name.toLowerCase().includes(searchTerm)
        );
      });

      displaySearchResults(filteredProducts);
    } else {
      hideSearchResults();
    }
  });

  function displaySearchResults(products) {
    searchResults.innerHTML = "";
    products.forEach(function (product) {
      var item = document.createElement("div");
      item.classList.add("searchItem");

      var image = document.createElement("img");
      image.src = product.image;
      image.alt = product.name;
      image.width = 70;

      var name = document.createElement("span");
      name.textContent = product.name;

      item.appendChild(image);
      item.appendChild(name);

      item.addEventListener("click", function () {
        window.location.href = product.link;
      });

      searchResults.appendChild(item);
    });

    searchResults.classList.remove("hidden");
  }

  function hideSearchResults() {
    searchResults.innerHTML = "";
    searchResults.classList.add("hidden");
  }

  document.addEventListener("click", function (event) {
    if (!searchForm.contains(event.target)) {
      hideSearchResults();
    }
  });

  searchForm.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
