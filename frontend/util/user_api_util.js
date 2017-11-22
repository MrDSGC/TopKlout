export const signup = (user) => {
  return $.ajax({
    method: "POST",
    url: `api/users`,
    data: { user }
  )};
};

export const patchUser = (user) => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${user.id}`,
    data: {user}
  });
};
