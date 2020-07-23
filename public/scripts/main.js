$(document).ready(function () {
  const itemList = [
    { fileName: "topselling-09", description: "Long red dress" },
    { fileName: "topselling-10", description: "Pinstripe wide trousers" },
    { fileName: "topselling-11", description: "B&W polkadot dress" },
    {
      fileName: "topselling-12",
      description: "Sheer sleeved blouse",
    },
    { fileName: "topselling-13", description: "White collared blouse" },
    { fileName: "topselling-14", description: "Long deep blue skirt" },
    { fileName: "topselling-15", description: "Burgundy sweater" },
  ];
  $(".load-more").click(function (e) {
    for (let i = 0; i < 4; i++) {
      let item = itemList.shift();
      $("#top-selling-products .product-list")
        .append(`<div class="col-6 col-md-3">
      <span class="store-buttons">
        <button class="btn btn-light rounded-circle px-2 py-1 mr-2" type="button">
          <span class="icon-shopping-bag"></span>
        </button>
        <button class="btn btn-light rounded-circle px-2 py-1" type="button"><span
            class="icon-heart"></span></button>
      </span>
      <img class="img-fluid" src="./img/${item.fileName}.jpg">
      <div class="description d-flex flex-row justify-content-between">
        <span class="item-name">${item.description}</span>
        <span class="price">$35.00</span>
      </div>
    </div>`);
    }
  });

  $(".add-to-cart").click(function (e) {
    let cartQuantity = parseInt($(".cart-quantity").attr('data-cart-quantity'), 10)
    cartQuantity++
    $(".cart-quantity").attr("data-cart-quantity", cartQuantity);
  });
});
