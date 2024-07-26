import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get users
 *     tags:
 *       - users
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of users
 */
export const GET: RequestHandler = async ({ url }) => {
	const limit = Number(url.searchParams.get('limit') ?? '10');
	const offset = Number(url.searchParams.get('offset') ?? '0');
	// limit와 offset을 사용하여 사용자 목록을 조회하는 로직
	return json({ users: [], limit, offset });
};

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created user
 */
export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const { name, email } = body;
	// name과 email을 사용하여 새 사용자를 생성하는 로직
	return json({ id: 'new-id', name, email }, { status: 201 });
};
