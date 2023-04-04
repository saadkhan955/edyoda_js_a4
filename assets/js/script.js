// ---------------- Request Data On Card Click To Display Product Page -------

function getProductDetail() {
// Get Product Details
  $.get(
    "https://5d76bf96515d1a0014085cf9.mockapi.io/product/1",
    function (data) {
      var productDetail = data;
      name = productDetail.name;
      imageSrc = productDetail.preview;
      brand = productDetail.brand;
      price = productDetail.price;
      description = productDetail.description;
      photo0 = productDetail.photos[0];
      photo1 = productDetail.photos[1];
      photo2 = productDetail.photos[2];
      photo3 = productDetail.photos[3];
      photo4 = productDetail.photos[4];
      photo5 = productDetail.photos[5];

      createProductPage(
        imageSrc,
        name,
        brand,
        price,
        description,
        photo0,
        photo1,
        photo2,
        photo3,
        photo4,
        photo5
      );
    }
  );
}
getProductDetail();

// ---------------- Create Product Page i.e Inserting Information -------

function createProductPage(
  imageSrc,
  name,
  brand,
  price,
  description,
  img0,
  img1,
  img2,
  img3,
  img4,
  img5
) {
  // Product Image
  var productImg = document.getElementById("productImg");
  productImg.src = imageSrc;

  // Product Name
  var productName = document.getElementById("name");
  productName.innerHTML = name;

  // Product Brand
  var productBrand = document.getElementById("brand");
  productBrand.innerHTML = brand;

  // Product Price
  var productPrice = document.getElementById("price");
  productPrice.innerHTML = price;

  // Product Description
  var productDescription = document.getElementById("description");
  productDescription.innerHTML = description;

  // Product Preview Image 0
  var photo0 = document.getElementById("img0");
  photo0.src = img0;

  // Product Preview Image 1
  var photo1 = document.getElementById("img1");
  photo1.src = img1;

  // Product Preview Image 2
  var photo2 = document.getElementById("img2");
  photo2.src = img2;

  // Product Preview Image 3
  var photo3 = document.getElementById("img3");
  photo3.src = img3;

  // Product Preview Image 4
  var photo4 = document.getElementById("img4");
  photo4.src = img4;

  // Product Preview Image 5
  var photo5 = document.getElementById("img5");
  photo5.src = img5;

  // ---------------- Change Preview Image OnClick -------
  function changeImage() {
    // Photo 0
    photo0.addEventListener("click", function () {
      productImg.src = img0;
    });

    // Photo 1
    photo1.addEventListener("click", function () {
      productImg.src = img1;
    });
    // Photo 2
    photo2.addEventListener("click", function () {
      productImg.src = img2;
    });

    // Photo 3
    photo3.addEventListener("click", function () {
      productImg.src = img3;
    });

    // Photo 4
    photo4.addEventListener("click", function () {
      productImg.src = img4;
    });

    // Photo 5
    photo5.addEventListener("click", function () {
      productImg.src = img5;
    });

    // Toggle Active Class
    $(document).on("click", ".previewImg img", function () {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
  }
  changeImage();
}