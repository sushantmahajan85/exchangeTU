const passvaluec = async (data) => {
  const hideAlert = () => {
    const el = document.querySelector(".alerts");
    if (el) {
      el.parentElement.removeChild(el);
    }
  };

  const showAlert = (type, msg) => {
    hideAlert();

    const markup = `<div class="alerts alert--${type}">${msg}</div>`;
    document.querySelector("body").insertAdjacentHTML("afterbegin", markup);

    window.setTimeout(hideAlert, 5000);
  };
  try {
    const result = await axios({
      method: "POST",
      url: "/api/v1/deals",
      data,
      //   dealName,
      //   affiliateLink,
      //   category,
      //   company,
      //   mrp,
      //   dealPrice,
    });
    if (result.data.status === "success") {
      // alert("deal created");
      showAlert("success", "Deal successfully Created");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

document.getElementById("newDealForm").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Hello!");
  const form = new FormData();
  form.append("dealName", document.getElementById("pname").value);
  form.append("dealPrice", document.getElementById("sprice").value);
  form.append("mrp", document.getElementById("price").value);
  form.append("category", document.getElementById("category").value);
  form.append("hostelName", document.getElementById("hname").value);
  form.append("duration", document.getElementById("duration").value);
  form.append("description", document.getElementById("description").value);
  // form.append(
  //   "categorySelect",
  //   document.getElementById("categorySelect").value
  // );
  if (document.getElementById("img").files[0]) {
    form.append("titleImg", document.getElementById("img").files[0]);
  }
  // if (document.getElementById("corousel1").files[0]) {
  //   form.append("corouselImgs", document.getElementById("corousel1").files[0]);
  // }
  // if (document.getElementById("corousel2").files[0]) {
  //   form.append("corouselImgs", document.getElementById("corousel2").files[0]);
  // }
  // if (document.getElementById("corousel3").files[0]) {
  //   form.append("corouselImgs", document.getElementById("corousel3").files[0]);
  // }
  // if (document.getElementById("corousel4").files[0]) {
  //   form.append("corouselImgs", document.getElementById("corousel4").files[0]);
  // }

  // form.append("corousel", document.getElementById("corousel").files[0]);
  // form.append("tags", document.getElementById("tags").value);
  // if (document.getElementById("tags").value) {
  //   var tags = JSON.parse(document.getElementById("tags").value);
  //   for (var key in tags) {
  //     form.append("tags", tags[key].value);
  //   }
  // }

  // console.log(document.getElementById("photo").files[0]);
  // passvaluec(form);

  // const dealName = document.getElementById("dealName").value;
  // const affiliateLink = document.getElementById("link").value;
  // const category = document.getElementById("category").value;
  // // const company = document.getElementById("company").value;
  // const mrp = document.getElementById("percent").value;
  // const dealPrice = document.getElementById("fprice").value;
  passvaluec(form);
});
