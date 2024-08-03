import { Global } from "@emotion/react"

const Fonts = () => (
    <Global
      styles={`
        @font-face {
            font-family: 'space-grotesk';
            font-style: normal;
            font-weight: normal;
            font-display: swap;
            src: url('../assets/fonts/SpaceGrotesk-VariableFont_wght.ttf') format('truetype');
        }
      `}
    />
)

export default Fonts