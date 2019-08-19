export const createAccount = (account) => {
  return (dispatch, getState) => {
    // make async call
    dispatch({ type: 'CREATE_ACCOUNT', account });
  };
};
