/**
 * Shared utility functions and constants
 */

// Site configuration
export const SITE_URL = 'https://anyi667.xyz';
export const AUTHOR_NAME = 'AnYi';
export const TWITTER_HANDLE = '';
export const SITE_IMAGE_PATH = '';
export const SITE_IMAGE_DIMENSIONS = {
  width: 0,
  height: 0,
} as const;

// Canonical one-line bio, shared across page metadata, OpenGraph, and JSON-LD.
export const SITE_DESCRIPTION =
  'AnYi 的个人网站。';

// Image dimension constants
export const AVATAR_SIZE = {
  hero: 120,
  footer: 80,
  sidebar: 200,
} as const;

export const PROJECT_IMAGE = {
  width: 600,
  height: 400,
} as const;

// Skill competency
export const MAX_COMPETENCY = 5;

/**
 * Formats a date string to a human-readable format.
 * Parses as UTC to avoid timezone shifts.
 */
export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  // Parse as UTC to avoid timezone shifts
  const date = new Date(`${dateStr}T12:00:00`);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
