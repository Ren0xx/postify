/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");
import million from "million/compiler";
/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
};
const millionConfig = {
    auto: true,
};
//export default config;
export default million.next(config, millionConfig);
