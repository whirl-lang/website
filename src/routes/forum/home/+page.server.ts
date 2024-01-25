import { auth } from "../../../../server/lucia";
import { fail, redirect } from "@sveltejs/kit";

import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
	if (!event.locals.session) {
        console.log('redirect');
		return redirect(304, "/forum/login");
	}
    return {
        // use to display posts
        posts: []
    }
};

export const actions: Actions = {
	default: async (event) => {
		if (!event.locals.session) {
            // use to create posts
			throw fail(401);
		}
		// ...
	}
};