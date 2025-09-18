export type UnoTheme = 'sage'|'french'|'teal'|'evergreen'|'indigo'|'terracotta';
const KEY = 'uno-theme';
const DEFAULT: UnoTheme = 'evergreen';

export function getTheme(): UnoTheme {
  const qs = new URLSearchParams(window.location.search).get('theme') as UnoTheme|null;
  if (qs) return qs;
  return (localStorage.getItem(KEY) as UnoTheme) || DEFAULT;
}

export function setTheme(theme: UnoTheme){
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(KEY, theme);
}

export function initTheme(){
  setTheme(getTheme());
}