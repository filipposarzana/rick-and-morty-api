export const fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif'

export type TextAlign = 'center' | 'left' | 'right'

export type FontSize = 40 | 34 | 26 | 20 | 16.5 | 15 | 12

export type LineHeight = 50 | 40 | 36 | 30 | 25 | 19 | 16

export type FontWeight = 400 | 500 | 700

export type FontStyle = 'normal' | 'italic'

export type TypographyFlavour = {
  fontSize: FontSize
  fontWeight: FontWeight
  lineHeight: LineHeight
}

export type TypographyKind = 'bodyL' | 'bodyM' | 'bodyS' | 'headingL' | 'headingM' | 'headingS'

export const typographyFlavours: { [key in TypographyKind]: TypographyFlavour } = {
  bodyL: {
    fontSize: 16.5,
    fontWeight: 700,
    lineHeight: 25,
  },
  bodyM: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 19,
  },
  bodyS: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16,
  },
  headingL: {
    fontSize: 40,
    fontWeight: 700,
    lineHeight: 50,
  },
  headingM: {
    fontSize: 34,
    fontWeight: 700,
    lineHeight: 40,
  },
  headingS: {
    fontSize: 26,
    fontWeight: 500,
    lineHeight: 30,
  },
}
