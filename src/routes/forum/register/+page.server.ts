import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";

import type { Actions } from "./$types";

export const actions: Actions = {
  default: async ({ request, locals }: any) => {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    console.log(username, password);

    if (
      typeof username !== "string" ||
      username.length < 4 ||
      username.length > 31
    ) {
      return fail(400, {
        message: "Invalid username",
      });
    }
    if (
      typeof password !== "string" ||
      password.length < 6 ||
      password.length > 255
    ) {
      return fail(400, {
        message: "Invalid password",
      });
    }
    try {
      const user = await auth.createUser({
        key: {
          providerId: "username",
          providerUserId: username.toLocaleLowerCase(),
          password,
        },
        attributes: {
          username,
        },
      });
      const session = await auth.createSession({
        userId: user.userId,
        attributes: {},
      });
      locals.auth.setSession(session);
    } catch (e) {
      if (e instanceof Error && e.message === "23505") {
        return fail(400, {
          message: "Username already exists",
        });
      }
      return fail(500, {
        message: (e as Error).message,
      });
    }
    return redirect(302, "/forum");
  },
};
