import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

/**
 * @swagger
 * tags:
 *   - name: users
 *     description:
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags:
 *       - users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User details
 */
export const GET: RequestHandler = async ({ params }) => {
	const { id } = params;
	// id를 사용하여 사용자 정보를 조회하는 로직
	return json({ id, name: `User ${id}` });
};
