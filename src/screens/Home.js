import React, { memo } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import './Home.css'
import { TodoListContainer, TodoFormContainer } from '../components'

const HomeInner = () => {
  return (
    <>
      <div className="d-flex justify-content-center home__title-container">
        Todo App with useReducer
      </div>
      <Row>
        <Col>
          <div className="home__todolist-container">
            <TodoListContainer />
          </div>
        </Col>
        <Col>
          <div className="home__todoform-container">
            <TodoFormContainer />
          </div>
        </Col>
      </Row>
    </>
  )
}

export const Home = memo(HomeInner)
