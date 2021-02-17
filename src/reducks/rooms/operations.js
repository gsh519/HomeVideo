import { db, FirebaseTimeStamp } from "../../firebase"
import {push} from 'connected-react-router'

export const setRoom = (roomName, password) => {
  return async (dispatch) => {
    if (roomName === "" || password === "") {
      return false
    }
    const timestamp = FirebaseTimeStamp.now();

    const data = {
      roomName: roomName,
      password: password,
      updated_at: timestamp,
    }

    const ref = db.collection('rooms').doc();
    const id = ref.id
    data.id = id
    data.created_at = timestamp

    return db.collection('rooms').doc(id).set(data)
              .then(() => {
                dispatch(push('/room/' + id))
              }).catch((error) => {
                throw new Error(error)
              })
  }
}

export const enterRoom = (roomId, password) => {
  return async (dispatch) => {
    //validation
    if (roomId === "" || password === "") {
      return false
    }

    const id = roomId
    return db.collection('rooms').doc(id).get()
              .then((doc) => {
                const data = doc.data();
                if (roomId === data.id && password === data.password) {
                  dispatch(push('/room/' + data.id))
                }
              }).catch(() => {
                console.log('エラー')
                alert('エラーです')
              })
  }
}