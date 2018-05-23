const postsReducerDefaultState = [];

export default (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        action.post
      ]

    case 'REMOVE_POST':
      return state.filter(({ id }) => id !== action.id)
  
    default:
      return state
  }
}