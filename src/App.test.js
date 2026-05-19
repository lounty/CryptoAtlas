// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoAtlas title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoAtlas/i);
    expect(titleElement).toBeInTheDocument();
});
