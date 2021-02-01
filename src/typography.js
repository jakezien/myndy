import Typography from "typography"

const headerOpacity = 1

// const inputFontStyles = { 
//   fontFamily: "Input",
//   letterSpacing: '-0.066em;',
//   fontWeight: 500
// }

const typography = new Typography({
  baseFontSize: "24px",
  baseLineHeight: 1.25,
  headerWeight: 700,
  scaleRatio: 2,
  headerFontFamily: [
    'Open Sans Condensed', 'sans-serif',
  ],
  bodyFontFamily: [
    'Commissioner', 'sans-serif'
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1': {
      opacity: headerOpacity,
      marginBottom: rhythm(1),
      marginTop: rhythm(1.5),
    },

    'h2': {
      opacity: headerOpacity,
      marginBottom: rhythm(.5),
      marginTop: rhythm(1.5),
      lineHeight: 1.1,
      fontFeatureSettings: `"kern" 1, "liga" 1;`
    },

    'h4': {
      letterSpacing: '0.25em',
      textTransform: 'uppercase',
      fontWeight: 300,
      fontSize: '0.8em',
      margin: '1rem 0',
      lineHeight: '1.5em'
    },

    'a, a *': {
      color: 'inherit'
    },

    'p': {
      fontSize: "0.9rem",
      marginBottom: '1rem',
      fontFeatureSettings: `"kern" 1, "liga" 1;`
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
