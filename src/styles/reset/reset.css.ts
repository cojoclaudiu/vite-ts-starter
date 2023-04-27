import './normalize.css';

import { globalStyle } from '@vanilla-extract/css';

globalStyle(
  `html, body, h1, h2, h3, h4, h5, h6,
	a, p, span, em, small, strong, sub, sup,
	mark, del, ins, strike, abbr, dfn, blockquote,
	q, cite, code, pre, ol, ul, li, dl, dt,
	dd, div, section, article, main, aside, nav, header,
	hgroup, footer, img, figure, figcaption, address,
	time, audio, video, canvas, iframe, details, summary,
	fieldset, form, label, legend, table, caption,
	tbody, tfoot, thead, tr, th, td`,
  { margin: 0, padding: 0, border: 0 }
);

globalStyle('html', {
  fontSize: '62.5%',
  textRendering: 'optimizeLegibility',

  WebkitBoxSizing: 'border-box',
  MozBoxSizing: 'border-box',
  boxSizing: 'border-box',
});

globalStyle('body', {
  fontSize: '1.6rem',
  fontFamily: `Gentleman, Helvetica, Arial, sans-serif`,
  fontWeight: 'normal',
  fontSynthesis: 'none',
  lineHeight: 1.4,
});

globalStyle('html, body', {
  minHeight: '100vh',
  height: '100vh',
});

globalStyle('*', {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('a', {
  color: 'inherit',
});

globalStyle('article, aside, footer, header, nav, section, main', {
  display: 'block',
});

globalStyle('*, *:before, *:after', {
  WebkitBoxSizing: 'inherit',
  MozBoxSizing: 'inherit',
  boxSizing: 'inherit',
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

globalStyle('ol, ul', {
  listStyle: 'none',
});

globalStyle('img, video', {
  maxWidth: '100%',
});

globalStyle('img', {
  borderStyle: 'none',
});

globalStyle('blockquote, q', {
  quotes: 'none',
});

globalStyle('blockquote:after, blockquote:before, q:after, q:before', {
  content: '',
});

globalStyle('[hidden]', {
  display: ' none !important',
});

globalStyle('[disabled]', {
  cursor: 'not-allowed',
});

globalStyle(':focus:not(:focus-visible)', {
  outline: 'none',
});

globalStyle('button', {
  backgroundColor: 'transparent',
  border: 0,
  margin: 0,
  padding: 0,
});

globalStyle('a:link, a:visited, a:hover, a:active', {
  textDecoration: 'none',
});
