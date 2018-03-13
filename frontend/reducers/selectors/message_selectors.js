export const selectComments = (comments, message) => {
  return message.commentIds.reduce((acc, id) => {
    if (comments[id]) {
      acc.push(comments[id])
    }

    return acc
  }, [])
}
