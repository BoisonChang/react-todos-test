// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import react from 'react'
import styled from 'styled-components'
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from './constants/style'

// eslint-disable-next-line
const titleStyle = {
  color: 'red',
  textAlign: 'center'
}

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border: 1px solid black;
  & + & {
    margin-top: 12px; 
  }
`

const TodoContent = styled.div`
  color: ${props => props.theme.colors.red_300 };
  font-size: 12px;

  ${props => props.size === 'XL' && `
  
  `}

  ${props => props.$isDone && `
    text-decoration: line-through;
  `}
`

const TodoButtonWrapper = styled.div``

const Button = styled.button`
  padding: 4px;
  color: black;
  font-size: 20px;

  ${MEDIA_QUERY_MD} {
    font-size: 16px;
  }
  ${MEDIA_QUERY_LG} {
    font-size: 12px;
  }

  &:hover {
    color: red;
  }

  & + & {
    margin-left: 4px; 
  }
`

const RedButton = styled(Button)`
  color: red;  
`


const TitleWrapper = styled.h2`
  display: flex;
  color: blue;

  &:hover {
    color: red;
  }
  
  span {
    color: yellow;
  }
`
// eslint-disable-next-line
const Description = styled.p`
  color: red;
  padding: 20px;
  border: 1px solid black;
`
// eslint-disable-next-line
function Title({ size }) {
  return (
    <TitleWrapper>hello<span>yooo</span></TitleWrapper>
  )
}

export default function TodoItem ({ className, size, todo, handleDeleteTodo, handleTogglerIsDone }) {
    const handleTogglerClick = () => {
        handleTogglerIsDone(todo.id)
    }
    const handleDeleteClick = () => {
        handleDeleteTodo(todo.id)
    }

    return (
        <TodoItemWrapper className={className} data-todo-id={todo.id}>
            <TodoContent $isDone={todo.isDone} size={size}>{todo.content}</TodoContent>
            <TodoButtonWrapper>
                <Button onClick={handleTogglerClick}>
                    {todo.isDone ? '未完成' : '已完成'}
                </Button>
                <RedButton onClick={() => {
                    handleDeleteClick(todo.id)
                 }}>刪除</RedButton>
            </TodoButtonWrapper>
        </TodoItemWrapper>
  )
}