import React, {useCallback} from 'react'
import {TextInput} from '../UIkit'

const MessageField = (props) => {
  const {username, setText, text} = props;

  const inputText = useCallback((e) => {
    setText(e.target.value);
  }, [setText])

  return (
    <TextInput
      fullWidth={true}
      label={'メッセージを入力'}
      type={'text'}
      multiline={false}
      required={true}
      rows={1}
      variant="outlined"
      value={text}
      onChange={inputText}
    />
  )
}

export default MessageField