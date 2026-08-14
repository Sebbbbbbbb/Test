export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({ ok: true, worker: "phone-app-test" });
    }

    if (url.pathname === "/secret-check") {
      return Response.json({
        ok: true,
        secretConfigured: Boolean(env.TEST_SECRET),
        secretLength: env.TEST_SECRET ? env.TEST_SECRET.length : 0
      });
    }

    return new Response("Cloudflare Worker deployed from GitHub test repo", {
      headers: { "content-type": "text/plain; charset=utf-8" }
    });
  }
};
