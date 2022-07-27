import { React } from '../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      svg: any;
      path: any;
      rect: any;
    }
  }
}
// className="animate__animated animate__zoomInDown animate__slow"
// className="animate__animated animate__pulse animate__delay-2s"

const ObsidianLogo = (props: any) => {
  return (
    <div id='logo' fill='#242424'>
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 536 395'
        // width='338'
        // height='287'
        // viewBox='0 0 338 287'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {/* <rect width="100%" height="100%" fill="#242424"/> */}
        <path className='animate__animated animate__fadeIn animate__delay-1s animate__slower' fill="#000000" d="M267 201c-12,3 -29,3 -41,-1 -6,-2 -15,-7 -18,-13 -7,-11 2,-25 7,-31 4,-5 12,-11 18,-15 30,-16 73,-11 91,21 7,14 9,37 11,53 1,14 3,41 3,55 0,0 -6,2 -13,6 -6,3 -16,6 -23,7 -5,1 -29,3 -33,2 0,-6 1,-24 1,-30 0,-14 0,-22 -1,-37 -2,-15 -2,-17 -2,-17z" />
        <path className='animate__animated animate__fadeIn animate__delay-1s animate__slower' fill="#ffffff" d="M246 159c-1,-7 7,-7 8,-2 1,5 -7,7 -8,2zm-20 -3c-1,-6 7,-7 8,-2 1,5 -7,6 -8,2zm47 43c1,7 2,8 3,17 1,14 1,24 0,39 0,6 -1,13 0,19 4,2 22,-1 27,-2 16,-3 24,7 27,5 2,-1 1,-10 1,-21 -1,-14 -2,-28 -3,-42 -2,-16 -3,-35 -11,-49 -8,-14 -18,-23 -33,-26 -18,-4 -34,0 -49,8 -6,3 -12,8 -17,13 -4,6 -8,16 -4,23 3,6 13,10 19,11 11,4 27,1 39,-2 2,-1 10,-4 11,-4 4,-1 7,4 1,7 -4,1 -7,3 -11,4z" />
        <path className='animate__animated animate__fadeIn animate__delay-1s animate__slower' fill="#000000" d="M246 159c1,5 9,3 8,-2 -1,-5 -9,-5 -8,2z" />
        <path className='animate__animated animate__fadeIn animate__delay-1s animate__slower' fill="#000000" d="M226 156c1,4 9,3 8,-2 -1,-5 -9,-4 -8,2z" />
        <path className='animate__animated animate__fadeIn animate__slow' fill="#e535ab" d="M243 334c-1,-1 -8,-5 -10,-6 -20,-12 -41,-23 -60,-35l-10 -6 0 -1 210 0 0 2c-1,1 -3,2 -5,3 -1,1 -3,2 -5,3l-30 17c-2,2 -38,23 -40,23 -1,-2 -6,-6 -10,-8 -9,-4 -20,-4 -29,0 -4,2 -9,5 -11,8zm-90 -81c1,-2 12,-20 14,-23 4,-8 8,-15 13,-23 17,-30 35,-61 52,-91 9,-15 18,-30 26,-45 9,1 11,1 20,0l105 181c-2,4 -6,5 -10,17l-210 0c-2,-8 -5,-12 -10,-16zm26 -155c17,-9 33,-19 50,-28l12 -7c1,-1 2,-2 2,-1 1,0 1,1 0,2 -3,5 -6,11 -9,16 -10,16 -19,33 -29,49 -9,16 -19,34 -28,50l-19 33c-3,5 -7,11 -10,16 -1,2 -8,16 -9,16l-1 0 0 -93c4,-1 7,-2 10,-4 9,-6 16,-17 16,-29 0,-5 -1,-7 -1,-10l16 -10zm193 20c0,15 11,29 26,33l0 93 -1 0c-1,0 -25,-44 -26,-46 -5,-7 -9,-15 -14,-22 -4,-8 -8,-16 -13,-23 -9,-15 -17,-31 -26,-46l-23 -40c-3,-4 -3,-4 -2,-5 1,0 8,4 10,5 3,2 7,4 10,6 7,4 13,8 20,12l30 17c2,1 3,2 5,3 2,1 4,2 5,3 0,1 -1,5 -1,10zm-137 -71l-80 46c-3,-1 -5,-4 -13,-8 -16,-6 -34,0 -43,15 -6,10 -6,22 -1,33 4,7 9,12 16,15 2,2 7,3 7,3l0 89c0,5 1,3 -3,5 -26,9 -31,43 -10,60 12,9 29,10 42,1 2,-2 3,-3 4,-4l40 23c7,4 14,7 20,11 4,2 18,10 21,12 -1,3 -2,4 -2,9 0,19 16,36 36,35 22,0 37,-20 33,-41 0,-1 -1,-3 -1,-4l10 -6c21,-12 43,-25 64,-37 2,-1 5,-3 6,-3 5,6 12,10 21,11 28,4 50,-27 34,-52 -3,-7 -9,-12 -17,-15 -5,-2 -4,2 -4,-12l0 -82c1,0 2,-1 4,-1 8,-3 15,-9 19,-17 10,-20 -2,-46 -26,-50 -6,-1 -13,0 -18,2 -9,4 -10,7 -13,8l-80 -46c1,-3 2,-5 2,-8 0,-3 0,-7 -1,-10 -6,-22 -31,-33 -50,-22 -9,4 -15,12 -18,22 -2,8 0,12 1,18z" />

        {/* <path
          d='M222.5 85.6417C229.679 85.0627 242.829 83.368 258 85.6417C308.339 93.1858 381.647 112.852 339 93.6415C319.254 84.747 288.946 81.7493 258 85.6417C201.966 92.6897 144 115.142 144 115.142C144 115.142 191.5 88.1417 222.5 85.6417Z'
          fill='#f7f7f7'
        />
        <path
          d='M169.572 109.753C169.572 109.753 174.5 127.642 167.5 144.142C163.5 153.57 171.556 170.537 163.5 174.142C144.5 182.642 169.137 136.642 163.5 130.642C157.863 124.642 169.572 109.753 169.572 109.753Z'
          fill='#f7f7f7'
        />
        <path
          d='M201.923 156.376C224.903 164.073 219.144 133.962 224.977 147.623C230.81 161.283 178.154 164.683 172.461 170.24C166.767 175.798 178.942 148.678 201.923 156.376Z'
          fill='#f7f7f7'
        />
        <path
          d='M170 176.642C157.876 186.642 169 224.142 178.124 224.892C187.249 225.642 195.5 228.142 175.5 216.142C155.5 204.142 182.124 166.642 170 176.642Z'
          fill='#f7f7f7'
        />
        <path
          d='M196.948 174.642C184.7 167.732 205.628 186.637 218 203.142C225.325 212.913 221.812 223.142 227.948 223.142C244.448 223.142 233.948 223.142 229.948 213.142C225.948 203.142 216.448 185.642 196.948 174.642Z'
          fill='#f7f7f7'
        />
        <path
          d='M284 160.642C278.554 150.755 260.149 162.295 234.344 150.374C219.5 143.517 288 155.142 288 155.142L326.411 174.477C326.411 174.477 289.446 170.528 284 160.642Z'
          fill='#f7f7f7'
        />
        <path
          d='M224.025 99.3429C219.525 83.3429 231.025 112.343 235.525 124.343C240.025 136.343 227.525 142.843 227.525 142.843C227.525 142.843 228.525 115.343 224.025 99.3429Z'
          fill='#f7f7f7'
        />
        <path
          d='M307.955 197.568C310.455 193.318 307.955 183.068 304.955 177.568C301.955 172.068 300.455 193.068 296.455 188.068C292.455 183.068 253.455 178.068 260.955 183.068C268.455 188.068 305.455 201.818 307.955 197.568Z'
          fill='#f7f7f7'
        /> */}
        {/* <path
          className='animate__animated animate__bounce animate__delay-2s'
          id='frontLeg'
          d='M331.5 174.142C331.5 174.142 366.51 200.142 370.01 202.642C373.51 205.142 381.51 217.642 381.51 217.642C381.51 217.642 365.01 222.142 364.51 217.642C364.01 213.142 360.674 194.142 351 194.142C341.326 194.142 331.5 174.142 331.5 174.142Z'
          fill='#f7f7f7'
        /> */}
        {/* <path
          className='animate__animated animate__headShake animate__slow animate__delay-1s'
          d='M319 103.142C315.5 95.6416 339.594 110.176 342.438 112.819C345.282 115.462 336.253 144.005 339.345 155.634C342.438 167.262 335.47 170.962 333.16 167.262C330.849 163.562 336.253 134.723 336.253 121.276C336.253 107.83 322.5 110.642 319 103.142Z'
          fill='#f7f7f7'
        /> */}
        {/* <path
          className='animate__animated animate__headShake animate__slow animate__delay-1s'
          d='M363.963 155.642C370.611 154.758 372.139 155.028 374 156.642C376.481 158.793 383 159.642 383 159.642C383 159.642 381.872 163.481 378.5 162.142C375.975 161.139 366.532 157.071 363.963 158.142C356.724 161.158 348.657 167.955 340.273 174.142C331.89 180.328 348.452 157.704 363.963 155.642Z'
          fill='#f7f7f7'
        /> */}
        {/* <path
          className='animate__animated animate__headShake animate__slow animate__delay-1s'
          d='M377.318 124.601C375.733 120.144 382.5 128.642 384.5 135.642C386.5 142.642 386.283 164.655 384.5 159.642C382.717 154.628 380.262 144.429 381.5 140.642C382.738 136.854 378.903 129.057 377.318 124.601Z'
          fill='#f7f7f7'
        /> */}
        {/* <path
          className='animate__animated animate__headShake animate__slow animate__delay-1s'
          d='M354.363 104.144C343.404 99.2721 357.5 109.642 357.5 122.142C360 106.464 372.662 117.384 377.68 119.111C397.694 125.998 371.5 114.642 366.5 109.642C361.5 104.642 368.99 110.646 354.363 104.144Z'
          fill='#f7f7f7'
        /> */}
        {/* <path
          className='animate__animated animate__headShake animate__slow animate__delay-1s'
          d='M374.5 127.142C376 127.642 375.5 132.142 374.5 132.142C373.5 132.142 368.5 127.142 368 126.142C367.5 125.142 373 126.642 374.5 127.142Z'
          fill='#f7f7f7'
        /> */}
        {/* <path
          className='animate__animated animate__headShake animate__slow animate__delay-1s'
          d='M370.5 85.6416C370.5 85.6416 362.5 89.6416 359 92.1416C355.5 94.6416 353.5 100.142 355.5 102.642C357.5 105.142 370.5 85.6416 370.5 85.6416Z'
          fill='#f7f7f7'
        /> */}
        {/* <path
          className='animate__animated animate__headShake animate__slow animate__delay-1s'
          d='M388 91.6415C388 91.6415 376 112.142 378 114.642C380 117.142 382.5 111.642 385 108.142C387.5 104.642 388 91.6415 388 91.6415Z'
          fill='#f7f7f7'
        /> */}
        <path
          className='animate__animated animate__fadeIn animate__delay-2s animate__slower'
          stroke= '#ffffff' stroke-width= '1px' stroke-linejoin= 'round'
          d='M155 258V290C155 293.573 153.853 296.347 151.56 298.32C149.32 300.24 145.933 301.2 141.4 301.2C136.92 301.2 133.533 300.24 131.24 298.32C128.947 296.347 127.8 293.573 127.8 290V258C127.8 254.427 128.92 251.68 131.16 249.76C133.453 247.787 136.84 246.8 141.32 246.8C145.853 246.8 149.267 247.787 151.56 249.76C153.853 251.68 155 254.427 155 258ZM149.4 290V258C149.4 253.733 146.733 251.6 141.4 251.6C136.067 251.6 133.4 253.733 133.4 258V290C133.4 294.267 136.067 296.4 141.4 296.4C146.733 296.4 149.4 294.267 149.4 290ZM169.781 248H181.861C186.021 248 189.168 248.987 191.301 250.96C193.488 252.933 194.581 255.68 194.581 259.2V264C194.581 268.533 192.688 271.44 188.901 272.72C193.221 273.893 195.381 276.853 195.381 281.6V288.8C195.381 292.373 194.315 295.147 192.181 297.12C190.048 299.04 186.875 300 182.661 300H169.781V248ZM189.781 288.8V281.6C189.781 279.573 189.168 277.947 187.941 276.72C186.715 275.44 184.955 274.8 182.661 274.8H175.381V295.2H182.661C187.408 295.2 189.781 293.067 189.781 288.8ZM188.981 264V259.2C188.981 257.173 188.368 255.6 187.141 254.48C185.915 253.36 184.155 252.8 181.861 252.8H175.381V270.8H181.861C184.208 270.8 185.968 270.187 187.141 268.96C188.368 267.733 188.981 266.08 188.981 264ZM235.612 290C235.612 297.467 231.105 301.2 222.092 301.2C213.079 301.2 208.572 297.467 208.572 290V283.2H214.172V290.32C214.172 292.24 214.839 293.733 216.172 294.8C217.505 295.867 219.479 296.4 222.092 296.4C224.705 296.4 226.679 295.867 228.012 294.8C229.345 293.733 230.012 292.293 230.012 290.48C230.012 288.613 229.799 287.147 229.372 286.08C228.999 284.96 228.199 283.787 226.972 282.56L212.892 268.8C211.239 267.147 210.092 265.547 209.452 264C208.865 262.4 208.572 260.4 208.572 258C208.572 254.427 209.665 251.68 211.852 249.76C214.092 247.787 217.452 246.8 221.932 246.8C230.519 246.8 234.812 250.533 234.812 258V264.8H229.212V257.68C229.212 255.76 228.572 254.267 227.292 253.2C226.065 252.133 224.199 251.6 221.692 251.6C219.185 251.6 217.292 252.133 216.012 253.2C214.785 254.267 214.172 255.733 214.172 257.6C214.172 259.467 214.359 260.933 214.732 262C215.105 263.067 215.932 264.187 217.212 265.36L231.532 279.12C233.079 280.827 234.145 282.48 234.732 284.08C235.319 285.627 235.612 287.6 235.612 290ZM255.616 300H250.016V248H255.616V300ZM284.458 300H271.578V248H284.458C288.618 248 291.765 248.987 293.898 250.96C296.085 252.933 297.178 255.68 297.178 259.2V288.8C297.178 292.373 296.111 295.147 293.978 297.12C291.845 299.04 288.671 300 284.458 300ZM291.578 288.8V259.2C291.578 257.173 290.965 255.6 289.738 254.48C288.511 253.36 286.751 252.8 284.458 252.8H277.178V295.2H284.458C289.205 295.2 291.578 293.067 291.578 288.8ZM317.569 300H311.969V248H317.569V300ZM358.331 300H355.931L353.851 294.88C352.731 296.8 351.265 298.347 349.451 299.52C347.638 300.64 345.638 301.2 343.451 301.2C335.771 301.2 331.931 297.467 331.931 290V282C331.931 274.533 335.771 270.8 343.451 270.8H352.731V257.68C352.731 255.76 352.118 254.267 350.891 253.2C349.665 252.133 347.851 251.6 345.451 251.6C340.705 251.6 338.331 253.627 338.331 257.68V262.4H332.731V258C332.731 254.427 333.771 251.68 335.851 249.76C337.985 247.787 341.185 246.8 345.451 246.8C349.718 246.8 352.918 247.787 355.051 249.76C357.238 251.68 358.331 254.427 358.331 258V300ZM352.731 275.6H343.451C341.211 275.6 339.665 276.16 338.811 277.28C337.958 278.4 337.531 279.973 337.531 282V290C337.531 292.027 337.958 293.6 338.811 294.72C339.665 295.84 341.211 296.4 343.451 296.4C345.691 296.4 347.771 295.547 349.691 293.84C351.611 292.08 352.625 290.347 352.731 288.64V275.6ZM379.131 300H373.531V248H375.931L377.931 253.2C380.491 248.933 384.038 246.8 388.571 246.8C396.411 246.8 400.331 250.533 400.331 258V300H394.731V258C394.731 255.973 394.278 254.4 393.371 253.28C392.518 252.16 390.918 251.6 388.571 251.6C386.225 251.6 384.065 252.507 382.091 254.32C380.118 256.133 379.131 257.893 379.131 259.6V300Z'
          fill='#000000'
        />
      </svg>
    </div>
  );
};

export default ObsidianLogo;
