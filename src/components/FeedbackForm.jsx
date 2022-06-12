import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

function FeedbackForm() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    setText(e.target.value)

    if(text === ''){
      setMessage(null)
      setBtnDisabled(true)
    }
    else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at leat 10 characters')
      setBtnDisabled(true)
    }
    else {
      setMessage(null)
      setBtnDisabled(false)
    }
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* todo: rating select component */}
        <div className='input-group'>
          <input
            onChange={ handleTextChange }
            type='text'
            placeholder='Write a review' 
            value={ text }
          />
          <Button type='submit' version='secondary' isDisabled={ btnDisabled }>Send</Button>
        </div>
        { message && <div className='message'> { message }</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
