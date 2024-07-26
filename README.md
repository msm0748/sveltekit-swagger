# 스벨트킷에서 스웨거 사용법

공식문서 : [swagger](https://swagger.io/specification/)

## 스웨거 설치

```bash
npm i swagger-jsdoc swagger-ui-dist
npm i -D @types/swagger-jsdoc @types/swagger-ui-dist
```

## 설정

> vite.config.ts

```ts
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ['swagger-ui-dist/swagger-ui-bundle.js']
	},
	ssr: {
		noExternal: ['swagger-ui-dist']
	},
	resolve: {
		alias: {
			'swagger-ui-dist': 'swagger-ui-dist'
		}
	}
});
```

> lib/swagger.ts

```ts
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'SvelteKit API',
			version: '1.0.0',
			description: 'API documentation for SvelteKit project'
		}
	},
	apis: ['./src/routes/api/**/*.ts'] // API 라우트 파일 위치
};

export const swaggerSpec = swaggerJsdoc(options);
```

> routes/api/swagger.json/+server.ts

```ts
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { swaggerSpec } from '$lib/swagger';

export const GET: RequestHandler = async () => {
	return json(swaggerSpec);
};
```

> routes/api-docs/+page.svelte

```svelte
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
```
