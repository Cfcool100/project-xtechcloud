import '@babel/polyfill';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', async () => {
  try {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /Le marketing numérique/i })).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('link', { name: /Services/i }));

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /Nos services/i })).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('link', { name: /Blog/i }));

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /Articles du blog/i })).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('link', { name: /Contact/i }));

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /Formulaire de contact/i })).toBeInTheDocument();
    });
  } catch (error) {
    console.log(error);
  }
});

test('renders service card', async () => {
  try {
    render(
      <MemoryRouter initialEntries={['/services']}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /Nos services/i })).toBeInTheDocument();
    });

    expect(screen.getByRole('heading', { name: /Stratégie de CRM/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Stratégie digitale/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Automatisation/i })).toBeInTheDocument();
  } catch (error) {
    console.log(error);
  }
});
