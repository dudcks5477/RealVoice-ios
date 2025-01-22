const {google} = require("googleapis");
const path = require("path");

async function getAccessToken() {
  const keyFilePath = path.join(__dirname, "config", "serviceAccountKey.json");
  const auth = new google.auth.GoogleAuth({
    keyFile: keyFilePath,
    scopes: ["https://www.googleapis.com/auth/firebase.messaging"],
  });

  const accessToken = await auth.getAccessToken();
  console.log("Access Token:", accessToken);
  return accessToken;
}

getAccessToken();