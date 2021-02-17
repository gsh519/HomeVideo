import React, {useState} from 'react'
import _ from 'lodash';

const SearchBox = (props) => {
  const [keyword, setKeyword] = useState("");
  const { onSearchYoutube } = props;

  const handleChangeInput = (e) => {
    setKeyword(e.target.value)
    _debounce(e.target.value)
  }

  const _debounce = _.debounce(value => {
    onSearchYoutube(value)
  }, 200)

  return (
    <>
      <div>
        <input
          onChange={handleChangeInput}
          value={keyword}
        />
      </div>
    </>
  )
}

export default SearchBox