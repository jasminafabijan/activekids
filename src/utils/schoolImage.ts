/** True when the URL is a WebP asset (Vite hashed paths keep the extension). */
export const isWebpSrc = (src: string) => /\.webp(?:$|\?)/i.test(src)
