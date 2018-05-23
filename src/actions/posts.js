import uuid from 'uuid';

export const addPost = (
  {
    title = '',
    body = '',
    createdAt = 0
  } = {}
) => ({
  type: 'ADD POST',
  post: {
    id: uuid(),
    title,
    body,
    createdAt
  }
});

export const removePost = ({ id } = {}) => ({
  type: 'REMOVE POST',
  id
})
