<script lang="ts">
  import Footer from '$lib/components/footer.svelte';
  import Header from '$lib/components/header.svelte';
  import '$lib/scss/app.scss';
  import { onMount } from 'svelte';
  import { pwaInfo } from 'virtual:pwa-info';
  import { pwaAssetsHead } from 'virtual:pwa-assets/head';

  let webManifestLink = $state<string>();
  const { children } = $props();

  $effect(() => {
    webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '';
  });

  onMount(async () => {
    // register the PWA
    //? https://vite-pwa-org.netlify.app/frameworks/sveltekit#sveltekit-pwa-plugin-options
    if (!pwaInfo) return;

    const { registerSW } = await import('virtual:pwa-register');
    registerSW({
      immediate: true,
      onRegistered(r) {
        console.log(`SW Registered:`, r);

        // 5 minutes
        const updateCheckingInterval = 5 * 60 * 1000;
        if (r) {
          setInterval(() => {
            console.log('Checking for sw update...');
            r.update();
          }, updateCheckingInterval);

          console.info(`Will check for SW update each ${updateCheckingInterval} ms.`);
        }
      },
      onRegisterError(error) {
        console.log('SW registration error', error);
      }
    });
  });
</script>

<svelte:head>
  <link
    rel="preload"
    as="font"
    href="/fonts/notosans_variable.woff2"
    type="font/ttf"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    as="font"
    href="/fonts/notosans_variable_italic.woff2"
    type="font/ttf"
    crossorigin="anonymous"
  />
  <meta property="og:site_name" content="b2seomds" />

  <meta name="theme-color" content={pwaAssetsHead.themeColor?.content || '#197CAE'} />
  {#each pwaAssetsHead.links as link}
    <link {...link} />
  {/each}

  {@html webManifestLink?.replace('./', '/')}
</svelte:head>

<Header />

<main>
  {@render children()}
</main>

<Footer />
