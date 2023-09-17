const URL = 'http://localhost:8080';

export const GET_USER = (token, login) => {
  return {
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    url: `${URL}/users/login/${login}`,
  };
};

export const GET_TOKEN = (body) => {
  return {
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
    url: `${URL}/auth/login`,
  };
};

export const POST_USER = (body) => {
  console.log(body);
  console.log(JSON.stringify(body));
  return {
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
    url: `${URL}/users/nodata`,
  };
};

export const TOKEN_POST = (body) => {
  return {
    url: `${URL}/auth/login`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};
