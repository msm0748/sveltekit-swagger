<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let SwaggerUI: any;

	onMount(async () => {
		if (browser) {
			const swaggerModule = await import('swagger-ui-dist/swagger-ui-bundle.js');
			SwaggerUI = swaggerModule.default;

			SwaggerUI({
				url: '/api/swagger.json',
				dom_id: '#swagger-ui'
			});
		}
	});
</script>

<svelte:head>
	{#if browser}
		<link rel="stylesheet" href="/node_modules/swagger-ui-dist/swagger-ui.css" />
	{/if}
</svelte:head>

<div id="swagger-ui"></div>
