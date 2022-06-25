import { React } from '../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      a: any;
      h5: any;
      button: any;
      svg: any;
      path: any;
      h3: any;
    }
  }
}

const NavBar = (props: any) => {
  const { setPage } = props;

  // (React as any).useEffect(() => {
  //   let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

  //   window.addEventListener(touchEvent, (e:any) => {
  //     console.log(e.target)
  //     console.log('the id???',e.target.id)
  //     if (e.target.id === 'ontouchie') {
  //       console.log('found ya!')
  //       setPage('about');
  //     }
  //   })
  // }, []);

  return (
    <div className='navBar'>
      {/* <a href="jsx:setPage('docs');">DOCS LETS GO jsx</a> */}
      {/* <a href={() => setPage('docs')}>normal react</a> */}
      {/* <div id="ontouchie" style={{width: '60px', height: '60px', backgroundColor: 'white', cursor: 'pointer'}}>Touch me</div> */}
      {/* <a href="javascript:setPage('docs');">string func</a>
      <a href="#" onClick={(e:any) => {e.preventDefault(); setPage('about');}}>onclick</a>
      <a href="#" onTouchEnd={(e:any) => {e.preventDefault(); setPage('about');}}>touchend</a> */}
      <button
        className='navBtn'
        onClick={() => {
          setPage('home');
        }}
        onTouchEnd={() => {
          setPage('home');
        }}
      >
        <svg
          width='80%'
          height='70%'
          viewBox='0 0 16 16'
          className='bi bi-house-fill'
          fill='#EBEBEC'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z'
          />
          <path
            fillRule='evenodd'
            d='M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z'
          />
        </svg>
        <h3 className='navBtnText'>Home</h3>
      </button>
      <button
        className='navBtn'
        onTouchEnd={() => {
          setPage('about');
        }}
        onClick={() => {
          setPage('about');
        }}
      >
        <svg
          width='80%'
          height='70%'
          viewBox='0 0 16 16'
          className='bi bi-person-lines-fill'
          fill='#EBEBEC'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z'
          />
        </svg>
        <h3 className='navBtnText'>Team</h3>
      </button>
      <button
        className='navBtn'
        onClick={() => {
          setPage('demo');
        }}
      >
        <svg
          width='80%'
          height='70%'
          viewBox='0 0 16 16'
          className='bi bi-laptop'
          fill='#EBEBEC'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z'
          />
          <path d='M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z' />
        </svg>
        <h3 className='navBtnText'>Demo</h3>
      </button>
      <button
        className='navBtn'
        onChange={() => {
          setPage('docs');
        }}
        onClick={() => {
          setPage('docs');
        }}
      >
        <svg
          width='80%'
          height='70%'
          viewBox='0 0 16 16'
          className='bi bi-file-earmark-text'
          fill='#EBEBEC'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z' />
          <path d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z' />
          <path
            fillRule='evenodd'
            d='M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z'
          />
        </svg>
        <h3 className='navBtnText'>Docs</h3>
      </button>
      <button
        className='navBtn'
        onChange={() => {
          setPage('docs');
        }}
        onClick={() => {
          setPage('docs');
        }}
      >
        <svg
          width='80%'
          height='70%'
          transform='rotate(180)'
          viewBox='0 0 9000 9000'
          className='bi bi-devtool'
          fill='#EBEBEC'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d="M7020 8295 c-8 -2 -49 -9 -90 -15 -236 -39 -479 -167 -660 -350 -305 -306 -424 -742 -319 -1159 l21 -84 -558 -558 -559 -559 260 -260 259 -260 111 110 c114 112 142 130 200 130 51 0 81 -15 141 -72 l55 -52 403 403 403 403 84 -21 c274 -70 563 -42 816 79 256 122 454 314 580 564 94 186 128 336 127 556 0 150 -5 184 -45 334 l-11 39 -386 -386 c-417 -415 -408 -408 -497 -394 -74 12 -112 42 -346 276 -206 206 -238 242 -253 285 -19 57 -20 103 -5 143 5 15 182 200 391 410 l381 381 -44 13 c-113 31 -174 40 -304 44 -77 2 -147 2 -155 0z"/>
          <path
            fillRule='evenodd'
            d="M2042 7877 l-163 -163 301 -400 c166 -219 309 -406 318 -415 9 -9
          100 -37 202 -63 l185 -47 1098 -1097 c603 -603 1097 -1102 1097 -1107 0 -6
          -57 -66 -126 -135 -69 -69 -132 -137 -140 -152 -35 -67 -10 -131 87 -222 112
          -106 174 -109 274 -15 l51 48 63 -63 63 -64 -22 -58 c-16 -43 -22 -80 -22
          -139 0 -93 19 -156 68 -230 18 -27 421 -438 896 -911 941 -939 900 -902 1040
          -926 48 -8 83 -7 129 1 124 21 152 42 432 320 234 232 262 263 295 331 36 71
          37 78 37 180 0 98 -2 109 -34 175 -32 66 -81 118 -880 919 -465 466 -872 868
          -904 891 -80 61 -142 80 -252 79 -66 0 -104 -6 -142 -21 l-51 -20 -63 63 -62
          63 51 56 c54 59 69 99 58 158 -5 25 -29 56 -95 120 l-88 87 -58 0 -58 0 -144
          -142 -143 -143 -1103 1103 -1102 1102 -29 113 c-15 61 -37 147 -49 190 l-21
          79 -403 304 c-222 168 -409 307 -416 309 -6 3 -85 -68 -175 -158z"/>
          <path
            fillRule='evenodd'
            d="M3814 4529 l-541 -541 -109 29 c-102 26 -122 28 -294 27 -167 0 -195
          -3 -283 -27 -545 -146 -910 -638 -883 -1192 7 -140 32 -264 79 -379 205 -512
          726 -813 1267 -732 131 20 246 58 372 123 296 153 509 421 594 750 49 187 44
          447 -14 631 l-16 53 387 387 386 387 -53 56 c-65 67 -83 116 -65 182 9 33 34
          65 122 155 l111 113 -259 259 -260 260 -541 -541z m-504 -1205 l187 -185 7
          -250 c3 -138 3 -256 -1 -263 -5 -8 -87 -95 -184 -195 l-177 -181 -259 0 -260
          0 -186 181 -187 181 0 260 0 260 176 182 176 181 172 5 c94 3 211 7 260 8 l90
          2 186 -186z"/>
        </svg>
        <h3 className='navBtnText'>DevTool</h3>
      </button>
      <div className='navBarGitLink'>
        <a href='https://github.com/open-source-labs/obsidian'>
          <img
            id='githubLogoTop'
            src='../static/github-icon.svg'
            alt='GitHub Logo'
          />
        </a>
      </div>
      <div className='navBarDenoLink'>
        <a href='https://deno.land/x/obsidian'>
          <img src='../static/Deno-Logo.svg' alt='Deno Logo' />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
