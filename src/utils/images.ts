import type { ImageMetadata } from 'astro';

const allImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

export function resolveImage(path: string): ImageMetadata {
  const fullPath = `/src/assets/${path}`;
  const image = allImages[fullPath];
  if (!image) {
    throw new Error(`Image not found: ${path}`);
  }
  return image.default;
}