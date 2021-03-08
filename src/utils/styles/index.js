import {
  BASE_FONT,
  MAX_WIDTH,
  MIN_WIDTH
} from './constants'

function getResponsiveFontSize(minFontSize, maxFontSize) {
  const minWidth = MIN_WIDTH / BASE_FONT
  const maxWidth = MAX_WIDTH / BASE_FONT

  const slope =
    (maxFontSize - minFontSize) / (maxWidth - minWidth)
  const yAxisIntersection = -minWidth * slope + minFontSize
  const scaler = `${yAxisIntersection.toFixed(4)}rem + ${(
    slope * 100
  ).toFixed(4)}vw`

  return `clamp(${minFontSize}rem, ${scaler}, ${maxFontSize}rem)`
}

export { getResponsiveFontSize }
