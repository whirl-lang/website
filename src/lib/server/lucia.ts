import { lucia } from 'lucia';
import { prisma } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { sveltekit } from 'lucia/middleware';
import { dev } from '$app/environment';

import fs from 'fs';

const client = new PrismaClient();

export const auth = lucia({
	adapter: prisma(client, {
		user: 'user',
		session: 'user_session',
		key: 'user_key'
	}),
	middleware: sveltekit(),
	env: dev ? 'DEV' : 'PROD',
	getUserAttributes: (data) => {
		return {
			username: data.username
		};
	}
});

export type Auth = typeof auth;