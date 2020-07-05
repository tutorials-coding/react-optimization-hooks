import React, { useState, memo } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './TodoForm.css'

function TodoFormInner({ onSubmit }) {
  const [text, setText] = useState('')
  const handleChange = (text) => {
    setText(text)
  }
  const handleSubmit = () => {
    onSubmit(text)
  }

  return (
    <div className="todo-form__form-container">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Text</Form.Label>
          <Form.Control
            as="input"
            type="text"
            placeholder="Please enter what to do"
            value={text}
            onChange={(event) => handleChange(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export const TodoForm = memo(TodoFormInner)
