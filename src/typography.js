import Typography from "typography"

const headerOpacity = 0.9

// const inputFontStyles = { 
//   fontFamily: "Input",
//   letterSpacing: '-0.066em;',
//   fontWeight: 500
// }

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.2,
  headerWeight: 700,
  scaleRatio: 2,
  headerFontFamily: [
    "Verlag Condensed",
  ],
  bodyFontFamily: [
    "Verlag",
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1': {
      opacity: headerOpacity,
      marginBottom: rhythm(.5),
      marginTop: rhythm(1.5),
    },
    'h2': {
      opacity: headerOpacity,
      marginBottom: rhythm(.5),
      marginTop: rhythm(1.5),
      letterSpacing: '0.01em',
    },
    'h4': {
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      fontWeight: 300,
      fontSize: '0.8em',
      margin: '1rem 0',
    },
    'a, a *': {
      color: 'inherit'
    },
    'p>a, *.link': {
      color: '#777',
      textDecoration: 'none',
      borderBottom: '2px solid ' + 'yellow'
    },
    'p>a': {
      fontSize: '0.95em'
    },
    'p>a:hover, *.link:hover': {
      background: 'yellow',
      color: '#444',
      border: '4px solid ' + 'yellow',
      borderRadius: '4px',
      position: 'relative',
      left: '-4px'
    }
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
