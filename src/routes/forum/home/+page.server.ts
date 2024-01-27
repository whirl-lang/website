import { auth } from "$lib/server/lucia";
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
  create: async ({ locals, request }) => {
    console.log("done");
    if (locals.session) {
      // use to create posts
      const formData = await request.formData();
      const title = formData.get("title")?.toString();
      const body = formData.get("body")?.toString();
      if (!title) {
        return fail(400, {
          message: "Invalid title",
        });
      }
      if (!body) {
        return fail(400, {
          message: "Invalid body",
        });
      }
      console.log("createpost");
      const createpost = await prisma.post.create({
        data: {
          title,
          body,
          authorId: locals.session.user.userId,
        },
        select: {
          id: true,
        },
      });
      return redirect(303, "/forum/home");
    } // ...
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
