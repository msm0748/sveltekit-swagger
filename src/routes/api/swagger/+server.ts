import { json } from '@sveltejs/kit';
import type { RequestHandler } from '../swagger/$types';
import { swaggerSpec } from '$lib/swagger';

export const GET: RequestHandler = async () => {
	return json(swaggerSpec);
};
