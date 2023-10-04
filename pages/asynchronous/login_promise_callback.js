let currentToken;
let currentApiKey;

/**
 * @param {string} username
 */
function login(username) {
  return new Promise((resolve, reject) => {
    try {
      currentToken = ~~[Math.random() * 12345678];

      return resolve({ username, token: currentToken });
    } catch (error) {
      return reject(error);
    }
  });
}

/**
 * @param {number} token
 */
function getUser(token) {
  return new Promise((resolve, reject) => {
    if (currentToken !== token) {
      return reject("Token is invalid.");
    }

    currentApiKey = ~~[Math.random() * 11235];

    return resolve({ api_key: currentApiKey });
  });
}

/**
 * @param {number} apiKey
 */
function getNumbers(apiKey) {
  if (currentApiKey !== apiKey) {
    throw new Error("Token is invalid.");
  }

  return [0, 1, 2, 3, 4, 5, 6];
}

login("ian").then(({ token }) =>
  getUser(token).then(({ api_key }) => console.info(getNumbers(api_key)))
);
