// eslint.config.js
import nextEslint from '@next/eslint-plugin-next';

export default [
  {
    ignores: [
      '**/acernityui/*',
      '**/ParticleBackground.tsx',
      '**/Navbar.tsx',
      '**/HeroSection.tsx',
      'node_modules/'
    ]
  },
  ...nextEslint.configs['recommended']
];