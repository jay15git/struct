import {
  FileCode2,
  FileJson,
  FileText,
  FileType2,
  FileBadge2,
  FileImage,
  FileIcon,
  ChevronRight,
  ChevronDown,
  Terminal,
  Settings,
  Database,
  Hash,
  Layout,
  Puzzle,
  FileBox,
  Binary,
  Archive,
  Book,
} from 'lucide-react';
import type { ElementType } from 'react';

export const extensionMap: Record<string, ElementType> = {
  // JavaScript & TypeScript
  ts: FileCode2,
  tsx: FileCode2,
  js: FileCode2,
  jsx: FileCode2,
  mjs: FileCode2,
  cjs: FileCode2,

  // Styles
  css: FileType2,
  scss: FileType2,
  sass: FileType2,
  less: FileType2,
  styl: FileType2,

  // Data
  json: FileJson,
  json5: FileJson,
  yaml: FileText,
  yml: FileText,
  xml: FileText,
  toml: Settings,

  // Web
  html: Layout,
  htm: Layout,
  php: FileCode2,
  blade: Layout,

  // Documents
  md: Book,
  mdx: Book,
  txt: FileText,
  pdf: FileText,

  // Python
  py: FileCode2,
  pyc: Binary,
  pyd: Binary,

  // Java & Kotlin
  java: FileCode2,
  jar: Archive,
  class: Binary,
  kt: FileCode2,
  kts: FileCode2,

  // C & C++
  c: FileCode2,
  cpp: FileCode2,
  h: FileCode2,
  hpp: FileCode2,
  cc: FileCode2,
  hh: FileCode2,

  // Rust & Go
  rs: FileCode2,
  go: FileCode2,

  // Ruby & Rails
  rb: FileCode2,
  erb: Layout,
  rake: Settings,

  // Swift & Objective-C
  swift: FileCode2,
  m: FileCode2,
  mm: FileCode2,

  // Shell & Config
  sh: Terminal,
  bash: Terminal,
  zsh: Terminal,
  env: Settings,
  gitignore: Settings,
  dockerfile: FileBox,
  editorconfig: Settings,

  // Database
  sql: Database,
  psql: Database,
  sqlite: Database,

  // Images
  png: FileImage,
  jpg: FileImage,
  jpeg: FileImage,
  gif: FileImage,
  svg: FileImage,
  ico: FileImage,
  webp: FileImage,

  // Archives
  zip: Archive,
  tar: Archive,
  gz: Archive,
  rar: Archive,
  '7z': Archive,

  // Misc
  exe: Binary,
  dll: Binary,
  so: Binary,
  bin: Binary,
  lock: FileBadge2,
};

export function getFileIcon(name: string): ElementType {
  const parts = name.split('.');
  if (parts.length === 1) return FileIcon;
  
  const extension = parts.pop()?.toLowerCase() || '';
  
  // Check exact mapping
  if (extensionMap[extension]) return extensionMap[extension];

  // Logic for common filename-based icons (even if no extension)
  if (name.toLowerCase().includes('config')) return Settings;
  if (name.toLowerCase().includes('readme')) return Book;
  if (name.toLowerCase().includes('license')) return FileBadge2;

  return FileIcon;
}
