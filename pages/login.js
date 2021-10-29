const axios = require("axios");
//const fs = require('fs');
const loginData = {
  username: "admin",
  password: "admin",
};
axios
  .post(`${APP_BASE_URL}/wp-json/jwt-auth/v1/token`, loginData)
  .then((res) => {
    console.log(res.data);

    //localStorage.setItem('token', res.data.token);
    //localStorage.setItem('user_nicename', res.data.user_nicename);
    //localStorage.setItem('user_email', res.data.user_email);
    //localStorage.setItem('user_display_name', res.data.user_display_name);

    //fs.writeFile('credentials.json', res.data, 'utf8', function(err, data) {
    // if (err) throw err;
    // Do something here
    //   res.status(200).send("Basket was updated");

    // } );
  })
  .catch((err) => {
    console.log(err);
  });

//export default login
