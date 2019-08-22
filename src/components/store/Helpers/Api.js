
const baseUrl = 'https://banka-challenge-3.herokuapp.com/api/v1';

export const signupUrl = () => {
  const url = `${baseUrl}/auth/signup`;
  return url;
};

export const signinUrl = () => {
  const url = `${baseUrl}/auth/login`;
  return url;
};

export const postAccountUrl = () => {
  const url = `${baseUrl}/accounts`;
  return url;
};

export const getAccountUrl = () => {
  const email = localStorage.getItem('email');
  const url = `${baseUrl}/user/${email}/accounts`;
  return url;
};
