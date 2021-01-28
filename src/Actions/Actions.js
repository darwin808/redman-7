export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const addpeople = (e) => {
  return {
    type: "ADD_PEOPLE",
    payload: e,
  };
};

export const deletepeople = (id) => {
  return {
    type: "DELETE_PEOPLE",
    payload: id,
  };
};

export const updatepeople = ({ edit, idholder }) => {
  return {
    type: "UPDATE_PEOPLE",
    payload: { edit, idholder },
  };
};
