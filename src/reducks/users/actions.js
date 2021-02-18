export const LOGIN = "LOGIN"
export const loginAction = (userState) => {
  return {
    type: "LOGIN",
    payload: {
      isSignedIn: true,
      role: userState.role,
      uid: userState.uid,
      username: userState.username,
      email: userState.email,
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