export const selectComments = (comments, entity) => {
  if (entity.commentIds) {
    return entity.commentIds.reduce((acc, id) => {
      if (comments[id]) {
        acc.push(comments[id])
      }

      return acc
    }, [])
  } else {
    return [];
  }
}

export const selectCommentAuthors = (users, comments) => {
  const ids = comments.map(comm => comm.userId)

  return ids.reduce((users, id) => {
    if (users[id]) {
      users[id] = users[id]
    }

    return users
  }, {});

  // return ids.reduce((acc, id) => {
  //   if (users[id]) {
  //     acc.push({[id]: users[id]})
  //   }
  //
  //   return acc
  // }, []);
}
