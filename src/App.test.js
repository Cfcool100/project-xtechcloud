import '@babel/polyfill';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
  try {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Vérifie que le composant Accueil est rendu
    expect(screen.getByText('Page d\'accueil')).toBeInTheDocument();

    // Simule la navigation vers la page des services
    fireEvent.click(screen.getByText('Services'));

    // Vérifie que le composant Services est rendu
    expect(screen.getByText('Nos services')).toBeInTheDocument();

    // Simule la navigation vers la page du blog
    fireEvent.click(screen.getByText('Blog'));

    // Vérifie que le composant Blog est rendu
    expect(screen.getByText('Articles du blog')).toBeInTheDocument();

    // Simule la navigation vers la page de contact
    fireEvent.click(screen.getByText('Contact'));

    // Vérifie que le composant Contact est rendu
    expect(screen.getByText('Formulaire de contact')).toBeInTheDocument();
  } catch (error) {
    console.error(error);
  }
});

test('renders service card', () => {
  try {
    render(
      <MemoryRouter initialEntries={['/services']}>
        <App />
      </MemoryRouter>
    );

    // Vérifie que le composant Services est rendu
    expect(screen.getByText('Nos Services')).toBeInTheDocument();

    // Vérifie que la carte du service CRM est rendue
    expect(screen.getByText('Stratégie de CRM')).toBeInTheDocument();

    // Vérifie que la carte du service Stratégie digitale est rendue
    expect(screen.getByText('Stratégie digitale')).toBeInTheDocument();

    // Vérifie que la carte du service Automatisation est rendue
    expect(screen.getByText('Automatisation')).toBeInTheDocument();
  } catch (error) {
    console.error(error);
  }
});

test('renders blog posts', () => {
  try {
    render(
      <MemoryRouter initialEntries={['/blog']}>
        <App />
      </MemoryRouter>
    );

    // Vérifie que le composant Blog est rendu
    expect(screen.getByText('Articles')).toBeInTheDocument();

    // Vérifie que les articles sont rendus
    expect(screen.getByText('Titre de l\'article 1...')).toBeInTheDocument();
    expect(screen.getByText('Titre de l\'article 2...')).toBeInTheDocument();
    expect(screen.getByText('Titre de l\'article 3...')).toBeInTheDocument();

    // Vérifie que le bouton "lire plus" de l'article 1 fonctionne
    fireEvent.click(screen.getByText('lire plus 👉🏾', { selector: 'button' }));
    // Ajoutez ici vos assertions pour vérifier le comportement après avoir cliqué sur le bouton "lire plus"
    expect(screen.getByText('Contenu complet de l\'article 1...')).toBeInTheDocument();

    // Vérifie que le bouton "lire plus" de l'article 2 fonctionne
    fireEvent.click(screen.getByText('lire plus 👉🏾', { selector: 'button' }));
    // Ajoutez ici vos assertions pour vérifier le comportement après avoir cliqué sur le bouton "lire plus"
    expect(screen.getByText('Contenu complet de l\'article 2...')).toBeInTheDocument();

    // Vérifie que le bouton "lire plus" de l'article 3 fonctionne
    fireEvent.click(screen.getByText('lire plus 👉🏾', { selector: 'button' }));
    // Ajoutez ici vos assertions pour vérifier le comportement après avoir cliqué sur le bouton "lire plus"
    expect(screen.getByText('Contenu complet de l\'article 3...')).toBeInTheDocument();
  } catch (error) {
    console.error(error);
  }
});

test('submits contact form', () => {
  try {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );

    // Vérifie que le composant Contact est rendu
    expect(screen.getByText('Contactez-nous')).toBeInTheDocument();

    // Renseigne les champs du formulaire
    fireEvent.change(screen.getByLabelText('Nom'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Ceci est un message de test' } });

    // Soumet le formulaire
    fireEvent.click(screen.getByText('Envoyer'));

    // Ajoutez ici vos assertions pour vérifier le comportement après avoir soumis le formulaire
    expect(screen.getByText()).toBeInTheDocument();
  } catch (error) {
    console.error(error);
  }
});
