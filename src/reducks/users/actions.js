export const LOGIN = "LOGIN"
export const loginAction = (userState) => {
  return {
    type: "LOGIN",
    payload: {
      isSignedIn: true,
      role: userState.role,
      id: userState.id,
      username: userState.username
    }
  }
}

export const LOGOUT = "LOGOUT"
export const logoutAction = () => {
  return {
    type: "LOGOUT",
    payload: {
      isSignedIn: false,
      role: "",
      id: "",
      username: ""
    }
  }
}