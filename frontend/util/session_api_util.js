export const signup = (user) => {
  return $.ajax({
    method: "POST",
    url: `api/users`,
    data: { user }
  })
};

export const login = (user) => {
  return $.ajax({
    method: "POST",
    url: `api/session/`
  })
};

export const logout = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api.session/`,
    data: { id }
  })
};
