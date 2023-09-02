let currentToken;
let currentApiKey;

/**
 * @param {string} username
 */
function login(username) {
  return new Promise((resolve, reject) => {
    try {
      currentToken = ~~[Math.random() * 12345678];

      setTimeout(() => resolve({ username, token: currentToken }), 200);
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

    setTimeout(() => resolve({ api_key: currentApiKey }), 200);
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

const { token } = login("ian");
const { api_key } = getUser(token);

console.info(getNumbers(api_key));
