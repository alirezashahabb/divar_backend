/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Auth module and Router
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SendOPT:
 *       type: object
 *       required:
 *         - mobile
 *       properties:
 *         mobile:
 *           type: string
 */

/**
 * @swagger
 * /auth/send-otp:
 *   post:
 *     summary: Login with OTP in this endpoint
 *     tags:
 *       - Auth
 *     requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/SendOPT'
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SendOPT'
 *     responses:
 *       '200':
 *         description: success
 */
