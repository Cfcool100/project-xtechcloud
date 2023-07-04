module.exports = {
  // Indique les chemins des fichiers de test
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js'
  ],

  preset: "@vue/cli-plugin-unit-jest",
  
  // Spécifie les dossiers à exclure des tests
  testPathIgnorePatterns: [
    '/node_modules/(?!axios)'
  ],
  
  // Définit un module de transpilation si nécessaire (par exemple, Babel)
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
  
  // Ajoutez d'autres options de configuration selon vos besoins
};

