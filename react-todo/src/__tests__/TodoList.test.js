import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the TodoList component and initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
  });

  test('allows a user to add a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');
    
    fireEvent.change(input, { target: { value: 'Test New Todo' } });
    fireEvent.click(button);
    
    expect(screen.getByText('Test New Todo')).toBeInTheDocument();
  });

  test('allows a user to toggle a todo completion', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('allows a user to delete a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    const deleteButtons = screen.getAllByText('Delete');
    
    fireEvent.click(deleteButtons[0]);
    expect(todoItem).not.toBeInTheDocument();
  });
});