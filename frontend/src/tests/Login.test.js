import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import axios from 'axios';
import Login from '../components/Login';

jest.mock('axios');

test('renders login form and logs in successfully', async () => {
  const history = createMemoryHistory();
  history.push = jest.fn();

  axios.post.mockResolvedValue({ data: { success: true } });

  render(
    <Router history={history}>
      <Login />
    </Router>
  );

  fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'admin' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });

  fireEvent.click(screen.getByText(/login/i));

  expect(await screen.findByText(/login/i)).toBeInTheDocument();
  expect(history.push).toHaveBeenCalledWith('/dashboard');
});

test('shows alert on invalid credentials', async () => {
  global.alert = jest.fn();

  axios.post.mockRejectedValue({ response: { status: 401, data: { success: false } } });

  render(<Login />);

  fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'admin' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrongpassword' } });

  fireEvent.click(screen.getByText(/login/i));

  expect(await screen.findByText(/login/i)).toBeInTheDocument();
  expect(global.alert).toHaveBeenCalledWith('Invalid credentials');
});
