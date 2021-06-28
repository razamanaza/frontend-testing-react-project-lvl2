import Todo from '@hexlet/react-todo-app-with-backend';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const state = {};

describe('When main page loads', () => {
  beforeEach(() => {
    render(Todo(state));
  });
  it('should render navbar', async () => {
    expect(screen.getByRole('navigation')).toHaveTextContent('Hexlet Todos');
  });
  it('task list should be empty', () => {
    expect(screen.getByText(/tasks list is empty/i)).toBeInTheDocument();
  });
});
