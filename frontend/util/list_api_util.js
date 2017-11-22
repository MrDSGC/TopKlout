
export const createItem = (listItem) => {
  return $.ajax({
    method: "POST",
    url: `api/lists/`,
    data: {listItem}
  })
}
