// 액션 생성 함수
export const addNumber = () => {
  return { type: "ADD" };
};

export const substractNumber = () => {
  return { type: "SUBSTRACT" };
};

// 초기 상태
const initialState = {
  stock: 5,
  goods: 1,
};

// 리듀서 함수
const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      if (state.stock < 1) {
        return { ...state, stock: 0, goods: state.goods };
      } else {
        return { ...state, stock: state.stock - 1, goods: state.goods + 1 };
      }
    case "SUBSTRACT":
      if (state.goods < 1) {
        return { ...state, stock: state.stock, goods: 0 };
      } else {
        return { ...state, stock: state.stock + 1, goods: state.goods - 1 };
      }
    default:
      return state;
  }
};

export default goodsReducer;
