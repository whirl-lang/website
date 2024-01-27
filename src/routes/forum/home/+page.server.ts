import { auth } from "../../../../server/lucia";
import { PrismaClient, Prisma } from "@prisma/client";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

const prisma = new PrismaClient();

export const load: PageServerLoad = async (event) => {
  if (!event.locals.session) {
    console.log("redirect");
    return redirect(304, "/forum/login");
  }
  return {
    // use to display posts
    posts: prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      include: { author: true },
    }),
  };
};

export const actions: Actions = {
  createPost: async (event) => {
    if (!event.locals.session) {
      // use to create posts
      throw fail(401);
    }
    // ...
  },
  logout: async ({ locals }) => {
    const session = await locals.auth.validate();
    if (!session) return fail(401);
    await auth.invalidateSession(session.sessionId); // invalidate session
    locals.auth.setSession(null); // remove cookie
    console.log("redirect1");
    return redirect(303, "/forum/login");
  },
};
