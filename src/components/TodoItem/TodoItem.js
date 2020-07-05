import React, { memo } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import './TodoItem.css'

function TodoItemInner({
  text,
  isComplete,
  onToggleCheck,
  onDeleteClick,
  onTextUpdate,
}) {
  const handleIsCompleteChange = (event) => {
    onToggleCheck(event.target.value)
  }

  const handleTextChange = (event) => {
    onTextUpdate(event.target.value)
  }

  const handleDelete = () => {
    onDeleteClick()
  }

  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Row>
            <Col xs={1}>
              <Form.Check
                checked={isComplete}
                onChange={handleIsCompleteChange}
              />
            </Col>
            <Col xs={8}>
              <Form.Control
                type="text"
                value={text}
                onChange={handleTextChange}
              />
            </Col>
            <Col xs={3}>
              <Button type="button" onClick={handleDelete}>
                Remove
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  )
}

export const TodoItem = memo(TodoItemInner)
