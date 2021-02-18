import {push} from 'connected-react-router'
import {auth, FirebaseTimeStamp, db} from '../../firebase/index'
import {loginAction, logoutAction} from './actions'

export const listenAuthState = () => {
  return async (dispatch) => {
    return auth.onAuthStateChanged(user => {
      if (user) {
        const uid = user.uid

        db.collection('users').doc(uid).get()
          .then(snapshot => {
            const data = snapshot.data()
            console.log(data)
            dispatch(loginAction({
              isSignedIn: true,
              role: data.role,
              uid: data.uid,
              username: data.username,
              email: data.email
            }))
            dispatch(push('/'))
          })
      } else {
        dispatch(push('/login'))
      }
    })
  }
}

export const login = (email, password) => {
  return async (dispatch) => {
    // validation
    if (email === "" || password === "") {
      alert('必須項目が未入力です。')
      return false
    }

    auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
          const user = result.user;

          if (user) {
            const uid = user.uid

            db.collection('users').doc(uid).get()
              .then(snapshot => {
                const data = snapshot.data()
                console.log(data)
                dispatch(loginAction({
                  isSignedIn: true,
                  role: data.role,
                  uid: data.uid,
                  username: data.username,
                  email: data.email,
                }))
                dispatch(push('/'))
              })
          }
        })
  }
}

export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    //validation
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      alert('必須項目が未入力です')
      return false
    }

    if (password !== confirmPassword) {
      alert('パスワードが一致しません')
      return false
    }

    return auth.createUserWithEmailAndPassword(email, password)
              .then(result => {
                console.log(result)
                const user = result.user;

                if (user) {
                  const uid = user.uid
                  const timestamp = FirebaseTimeStamp.now();

                  const userInitialData = {
                    created_at: timestamp,
                    email: email,
                    uid: uid,
                    updated_at: timestamp,
                    username: username,
                  }

                  db.collection('users').doc(uid).set(userInitialData)
                    .then(() => {
                      dispatch(push('/'))
                    }).catch(() => {
                      alert('エラーです')
                    })
                }
              })
  }
}

export const logout = () => {
  return async (dispatch) => {
    auth.signOut()
        .then(() => {
          dispatch(logoutAction())
          dispatch(push('/logout'))
        })
  }
}