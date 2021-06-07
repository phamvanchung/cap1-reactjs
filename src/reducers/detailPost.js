import * as Types from '../constants/postActionType';

const initialState = {}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_POSTS_BY_ID:
      return {
        ...state,
        singlePost: { ...state.singlePost, ...action.post }
      };

    default: return state;
  }
};

export default posts;