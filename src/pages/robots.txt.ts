import type { APIRoute } from "astro";
import { ENVIRONMENT } from "astro:env/client";

export const GET: APIRoute = () => {
  const isProd = ENVIRONMENT === "production";
  const allowed = `User-agent: *\nAllow: /`;
  const disallowed = `User-agent: *\nDisallow: /`;
  const result = isProd ? allowed : disallowed;
  return new Response(result);
};
