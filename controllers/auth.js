exports.getLogin = (req, res, next) => {
  //   const isLoggedIn = req.get("Cookie").split("=")[1];
  // console.log(req.session.isLoggedIn);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  // User.findById("63b82849b65083437da8d86c")
  // .then((user) => {
  // res.setHeader("Set-Cookie", "loggedIn=true");   //for cookie
  req.session.isLoggedIn = true; //using session here.
  // req.session.user = user;
  res.redirect("/");
  // })
  // .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
