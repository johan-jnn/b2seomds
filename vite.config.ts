import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit(),
    SvelteKitPWA({
      strategies: 'generateSW',
      minify: true,
      srcDir: './src',
      workbox: {
        globPatterns: [
          'client/**/*.{js,html,webp,svg,woff2,css,json,webmanifest}',
          'prerendered/**/*.html'
        ]
      },
      manifest: {
        name: 'B2SEOMDS : Votre agence web de référence !',
        short_name: 'B2SEOMDS',
        description:
          'Chez b2seomds, nous concevons des interfaces web sur mesure pour des entreprises de toutes tailles. Que ce soit pour des marques de renom ou de nombreuses associations engagées dans des missions variées.',
        categories: ['digital', 'web', 'developpement', 'b2seomds'],
        theme_color: '#197CAE',
        background_color: '#0D141F',
        lang: 'fr',
        id: '/',
        screenshots: [
          {
            src: 'pwa/screenshots/homepage.png',
            form_factor: 'wide',
            sizes: '1920x1080',
            type: 'image/png'
          },
          {
            src: 'pwa/screenshots/blog.png',
            form_factor: 'wide',
            sizes: '1920x1080',
            type: 'image/png'
          },
          {
            src: 'pwa/screenshots/article.png',
            form_factor: 'wide',
            sizes: '1920x1080',
            type: 'image/png'
          },
          {
            src: 'pwa/screenshots/m-homepage.png',
            form_factor: 'narrow',
            sizes: '398x863',
            type: 'image/png'
          }
        ],
        icons: [
          {
            src: 'pwa/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ]
});
