const passvalueliked = async (username, email, password, passwordConfirm) => {
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
    // await axios({
    //   method: "DELETE",
    //   url: "/api/v1/users/signup",
    //   data: {
    //     email,
    //   },
    // });
    var full_url = window.location.pathname;
    var url_array = full_url.split("/");
    var deal = url_array[url_array.length - 3];
    // console.log(deal);
    var user = url_array[url_array.length - 1];
    // console.log(user);
    const result = await axios({
      method: "POST",

      url: "/api/v1/likedDeal",
      data: {
        deal,
        user,
      },
    });
    if (result.data.status === "success") {
      // alert("sign up successful");
      showAlert("success", "Signup successful");
      window.setTimeout(() => {
        location.assign("/");
      }, 800);
    }
  } catch (err) {
    showAlert("error", "Something went wrong. Please try again later");
  }
};

document.getElementById("addToWishlist").addEventListener("click", (e) => {
  e.preventDefault();
  passvalueliked();
});
