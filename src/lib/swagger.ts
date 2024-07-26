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
