import React from "react";
import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'BeauSans';
        font-style: normal;
        font-weight: 400;
        src: url('assets/fonts/BT-BeauSans-Regular.ttf');
        font-display: swap;
      }
      @font-face {
        font-family: 'BeauSans Bold';
        font-style: normal;
        font-weight: 800;
        src: url('assets/fonts/BT-BeauSans-ExtraBold.ttf');
        font-display: swap;
      }
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: bold;
        src: url('assets/fonts/Poppins-Regular.ttf');
        font-display: swap;
      }
      @font-face {
        font-family: 'PoppinsExtraBold';
        font-style: normal;
        font-weight: bold;
        src: url('assets/fonts/Poppins-ExtraBold.ttf');
        font-display: swap;
      }
      @font-face {
        font-family: 'GoogleSans';
        font-style: normal;
        font-weight: normal;
        src: url('assets/fonts/GoogleSans-Medium.ttf');
        font-display: swap;
      }
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: normal;
        src: url('assets/fonts/Inter-Regular.otf') format('truetype');
        font-display: swap;
      }
      `}
  />
);

export default Fonts;
