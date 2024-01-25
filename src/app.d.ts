// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import('lucia').AuthRequest;
			session: import('lucia').Session;		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}
declare global {
	namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		type DatabaseUserAttributes = {
			username: string
		};
	}
}

export {};
