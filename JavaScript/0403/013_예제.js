// http://test.api.weniv.co.kr/mall
// STEP 1
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => console.log(data));

// STEP 2
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) =>
    data.forEach((item) => {
      console.log(item);
    })
  );

// STEP 3
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) =>
    data.forEach((item) => {
      console.log(item.thumbnailImg);
      console.log(item.productName);
      console.log(item.price);
    })
  );

// STEP 4
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) =>
    data.forEach((item) => {
      console.log(`http://test.api.weniv.co.kr/${item.thumbnailImg}`);
      console.log(item.productName);
      console.log(item.price);
    })
  );

// STEP 5
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    const main = document.createElement("main");
    data.forEach((item) => {
      const productCard = document.createElement("article");
      const productimg = document.createElement("img");
      const productName = document.createElement("h2");
      const productPrice = document.createElement("p");

      productName.textContent = item.productName;
      productPrice.textContent = item.price;
      productimg.setAttribute(
        "src",
        `http://test.api.weniv.co.kr/${item.thumbnailImg}`
      );
      // productimg.attributes
      productCard.appendChild(productimg);
      productCard.appendChild(productName);
      productCard.appendChild(productPrice);

      main.appendChild(productCard);
    });
    document.body.appendChild(main);
  });
