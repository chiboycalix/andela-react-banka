/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
const initState = {
  accounts: [
    {
      id: 1,
      accountNumber: 236746484,
      type: 'savings',
      balance: 45000,
      status: 'dormant',
      owner: 1,
    },
    {
      id: 2,
      accountNumber: 236746484,
      type: 'current',
      balance: 45000,
      status: 'active',
      owner: 4,
    },
    {
      id: 3,
      accountNumber: 236746484,
      type: 'savings',
      balance: 45000,
      status: 'draft',
      owner: 3,
    },
  ],
};
const accountReducer = (state = initState, action) => {
  return state;
};

export default accountReducer;
