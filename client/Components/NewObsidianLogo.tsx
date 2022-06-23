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

const NewObsidianLogo = (props: any) => {
  return (
    <div id='logo' fill='#242424'>
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 12000 12000'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path fill="#000000" d="M5962 6093c-360,116 -893,94 -1258,-10 -185,-53 -461,-234 -555,-411 -213,-325 67,-765 216,-948 136,-168 366,-348 555,-451 934,-504 2238,-350 2789,633 244,435 292,1145 339,1635 41,422 94,1263 110,1688 0,0 -196,75 -406,181 -197,99 -485,176 -702,223 -158,33 -887,100 -1017,56 -10,-177 17,-724 20,-909 8,-445 6,-697 -33,-1149 -39,-450 -44,-510 -58,-538z" />
        <path fill="#ffffff" d="M5319 4809c-40,-196 219,-213 248,-68 34,176 -216,226 -248,68zm-603 -96c-31,-162 205,-202 232,-60 33,175 -207,188 -232,60zm1438 1325c38,223 61,252 85,525 39,452 27,758 19,1203 -3,185 -34,415 -25,592 130,45 682,-23 840,-56 501,-108 753,194 840,153 60,-28 17,-311 16,-658 -15,-425 -45,-861 -86,-1284 -47,-489 -90,-1071 -335,-1506 -240,-428 -547,-704 -1030,-819 -525,-125 -1025,-2 -1489,250 -190,102 -378,242 -515,409 -149,183 -251,480 -133,701 93,177 383,304 568,357 365,104 845,28 1206,-89 61,-19 306,-121 338,-123 120,-10 213,140 35,218 -118,51 -208,93 -334,127z" />
        <path fill="#000000" d="M5319 4809c32,158 282,108 248,-68 -29,-145 -288,-128 -248,68z" />
        <path fill="#000000" d="M4716 4713c25,128 265,115 232,-60 -27,-142 -263,-102 -232,60z" />
        <path fill="#000000" d="M22747 5244l41 2c14,20 24,211 21,244l-36 -10 -26 -236zm2400 56l-4 -857 28 1c6,40 7,826 4,839l-28 17zm-2696 -478c55,-10 38,59 43,107 5,46 8,94 13,139 7,61 29,226 22,279l-35 -20 -43 -505zm3285 -60c-11,-94 0,-236 -1,-335 -1,-55 0,-111 0,-166 0,-62 -4,-87 54,-114 8,73 -2,390 -2,506 -1,74 -20,58 -51,109zm-2735 -201c10,60 40,385 33,433l-37 1 -36 -437 40 3zm-1063 -429c32,12 25,45 29,82 14,139 74,585 68,653l-28 -28 -33 -359c-8,-60 -54,-312 -36,-348zm1302 480c-34,-2 -21,-22 -24,-58l-19 -234c-7,-67 -29,-258 -23,-317l27 0c7,16 44,576 39,609zm-602 -619l47 9c8,35 23,187 16,224l-46 -3c-6,-25 -22,-207 -17,-230zm-228 41c-19,13 -16,13 -39,14 -4,-21 -6,-51 -9,-73 -1,-11 -2,-26 -3,-36 -3,-38 -5,-13 7,-33l37 18 7 110zm-246 -45l-39 10 -32 -309c53,49 50,54 57,126 5,45 17,130 14,173zm3873 -1113c19,-2 33,4 50,13 13,83 2,280 2,375l-6 738c1,122 6,194 -64,301l18 -1427zm-2437 1052c96,-26 165,-58 254,-97 136,-59 65,-174 -26,-166 -25,2 -211,79 -258,94 -275,89 -640,147 -918,68 -141,-41 -362,-137 -433,-272 -90,-169 -12,-395 101,-534 105,-128 248,-234 393,-312 353,-191 734,-285 1133,-190 369,88 603,298 786,624 185,331 219,774 255,1147 30,322 53,654 65,977 7,180 42,134 -117,215 -151,76 -370,135 -535,170 -121,26 -540,77 -639,43 -8,-135 16,-310 18,-451 6,-339 16,-572 -14,-916 -18,-208 -36,-230 -65,-400zm-1875 182c-16,-109 -102,-659 -96,-692l28 -5c16,90 125,895 112,924 -27,-23 -37,-182 -44,-227zm341 -1125c10,75 24,140 -31,201l-16 -168 47 -33zm3067 -619c86,-4 61,60 61,134 0,131 10,497 0,578 -34,4 -36,-2 -59,-26l-2 -686zm608 142c26,2 48,9 69,27l-6 633c-28,6 -36,5 -64,-6l1 -654zm-904 170c-5,-115 -9,-1088 6,-1126l36 9c17,14 9,733 11,852 1,55 7,245 -4,287l-49 -22zm-3343 -166c-8,-55 -26,-153 23,-190l107 835c-13,12 -16,17 -34,18l-96 -663zm2417 -203l59 8 0 76 -60 -16 1 -68zm612 -63c-25,-27 -14,-54 -15,-92l-3 -322c29,-2 45,3 65,23 4,47 8,359 -2,390 -27,9 -16,7 -45,1zm-2628 1614c-16,-67 -23,-173 -33,-246l-95 -735c-19,-164 -42,-327 -63,-491 -10,-82 -21,-165 -32,-247 -14,-115 -26,-106 11,-169l24 -33c1,-2 2,-2 5,-3l212 1912 -29 12zm261 -1972c17,-19 35,-40 58,-43l86 981 -47 43 -97 -981zm-285 -186c15,-21 41,-55 61,-67l66 672c-16,13 -37,26 -59,26l-68 -631zm3257 -417c23,2 35,8 57,25l3 453c-28,-1 -35,-9 -60,-22l0 -456zm-2150 304c21,-12 38,-15 62,-19 9,46 33,367 24,400 -21,15 -33,17 -58,4l-28 -385zm1520 -424c25,-2 46,4 69,20l1 416c-22,1 -51,-12 -69,-25l-1 -411zm934 231c20,2 50,39 51,61 3,37 0,86 1,126 3,145 6,1713 -4,1751l-38 -19 -10 -1919zm-1234 398c-8,-31 -17,-422 -17,-484 -1,-88 -15,-449 -3,-505 24,-2 47,3 73,11l7 982 -60 -4zm-244 -118c0,95 11,198 5,292l-65 -10 -25 -585c23,0 57,-4 73,8 16,15 12,257 12,295zm-717 -490c22,-12 49,-18 75,-14 7,109 11,216 15,325 3,90 22,240 12,325 -23,11 -35,14 -61,10l-41 -646zm-578 -132c15,-11 33,-21 50,-21 12,26 105,1121 105,1220 -13,13 -31,24 -52,26l-103 -1225zm953 -272c8,35 2,159 2,203 0,59 9,124 10,186 3,131 52,1127 45,1158 -21,6 -44,3 -63,-5 -14,-54 -72,-1505 -65,-1539l71 -3zm2882 2582c67,-1488 -1090,-2755 -2577,-2822 -1489,-67 -2759,1086 -2826,2577 -67,1490 1085,2760 2577,2827 1495,67 2760,-1088 2826,-2582z" />
        <path fill="#ffffff" d="M22964 2992c-31,-150 167,-163 189,-52 26,134 -164,172 -189,52zm-459 -74c-24,-123 156,-153 176,-45 25,134 -157,143 -176,45zm1095 1010c29,170 47,192 65,400 30,344 20,577 14,916 -2,141 -26,316 -18,451 99,34 518,-17 639,-43 165,-35 384,-94 535,-170 159,-81 124,-35 117,-215 -12,-323 -35,-655 -65,-977 -36,-373 -70,-816 -255,-1147 -183,-326 -417,-536 -786,-624 -399,-95 -780,-1 -1133,190 -145,78 -288,184 -393,312 -113,139 -191,365 -101,534 71,135 292,231 433,272 278,79 643,21 918,-68 47,-15 233,-92 258,-94 91,-8 162,107 26,166 -89,39 -158,71 -254,97z" />
        <path fill="#ffffff" d="M23541 785c-7,34 51,1485 65,1539 19,8 42,11 63,5 7,-31 -42,-1027 -45,-1158 -1,-62 -10,-127 -10,-186 0,-44 6,-168 -2,-203l-71 3z" />
        <path fill="#ffffff" d="M25442 3315l38 19c10,-38 7,-1606 4,-1751 -1,-40 2,-89 -1,-126 -1,-22 -31,-59 -51,-61l10 1919z" />
        <path fill="#ffffff" d="M21895 3860l29 -12 -212 -1912c-3,1 -4,1 -5,3l-24 33c-37,63 -25,54 -11,169 11,82 22,165 32,247 21,164 44,327 63,491l95 735c10,73 17,179 33,246z" />
        <path fill="#ffffff" d="M26019 4303c70,-107 65,-179 64,-301l6 -738c0,-95 11,-292 -2,-375 -17,-9 -31,-15 -50,-13l-18 1427z" />
        <path fill="#ffffff" d="M24198 1794l60 4 -7 -982c-26,-8 -49,-13 -73,-11 -12,56 2,417 3,505 0,62 9,453 17,484z" />
        <path fill="#ffffff" d="M22659 1054l103 1225c21,-2 39,-13 52,-26 0,-99 -93,-1194 -105,-1220 -17,0 -35,10 -50,21z" />
        <path fill="#ffffff" d="M24837 2678l49 22c11,-42 5,-232 4,-287 -2,-119 6,-838 -11,-852l-36 -9c-15,38 -11,1011 -6,1126z" />
        <path fill="#ffffff" d="M22156 1888l97 981 47 -43 -86 -981c-23,3 -41,24 -58,43z" />
        <path fill="#ffffff" d="M23237 1186l41 646c26,4 38,1 61,-10 10,-85 -9,-235 -12,-325 -4,-109 -8,-216 -15,-325 -26,-4 -53,2 -75,14z" />
        <path fill="#ffffff" d="M25135 3052c23,24 25,30 59,26 10,-81 0,-447 0,-578 0,-74 25,-138 -61,-134l2 686z" />
        <path fill="#ffffff" d="M25740 3162c28,11 36,12 64,6l6 -633c-21,-18 -43,-25 -69,-27l-1 654z" />
        <path fill="#ffffff" d="M23894 1958l65 10c6,-94 -5,-197 -5,-292 0,-38 4,-280 -12,-295 -16,-12 -50,-8 -73,-8l25 585z" />
        <path fill="#ffffff" d="M21871 1702l68 631c22,0 43,-13 59,-26l-66 -672c-20,12 -46,46 -61,67z" />
        <path fill="#ffffff" d="M21590 3175c18,-1 21,-6 34,-18l-107 -835c-49,37 -31,135 -23,190l96 663z" />
        <path fill="#ffffff" d="M25736 4762c31,-51 50,-35 51,-109 0,-116 10,-433 2,-506 -58,27 -54,52 -54,114 0,55 -1,111 0,166 1,99 -10,241 1,335z" />
        <path fill="#000000" d="M22964 2992c25,120 215,82 189,-52 -22,-111 -220,-98 -189,52z" />
        <path fill="#ffffff" d="M24499 1576c18,13 47,26 69,25l-1 -416c-23,-16 -44,-22 -69,-20l1 411z" />
        <path fill="#ffffff" d="M24523 2246c29,6 18,8 45,-1 10,-31 6,-343 2,-390 -20,-20 -36,-25 -65,-23l3 322c1,38 -10,65 15,92z" />
        <path fill="#ffffff" d="M25128 1741c25,13 32,21 60,22l-3 -453c-22,-17 -34,-23 -57,-25l0 456z" />
        <path fill="#ffffff" d="M21629 3418c-6,33 80,583 96,692 7,45 17,204 44,227 13,-29 -96,-834 -112,-924l-28 5z" />
        <path fill="#ffffff" d="M22978 1589l28 385c25,13 37,11 58,-4 9,-33 -15,-354 -24,-400 -24,4 -41,7 -62,19z" />
        <path fill="#ffffff" d="M25175 5283c3,-13 2,-799 -4,-839l-28 -1 4 857 28 -17z" />
        <path fill="#000000" d="M22505 2918c19,98 201,89 176,-45 -20,-108 -200,-78 -176,45z" />
        <path fill="#ffffff" d="M22007 4839l28 28c6,-68 -54,-514 -68,-653 -4,-37 3,-70 -29,-82 -18,36 28,288 36,348l33 359z" />
        <path fill="#ffffff" d="M22494 5327l35 20c7,-53 -15,-218 -22,-279 -5,-45 -8,-93 -13,-139 -5,-48 12,-117 -43,-107l43 505z" />
        <path fill="#ffffff" d="M22997 4995l37 -1c7,-48 -23,-373 -33,-433l-40 -3 36 437z" />
        <path fill="#ffffff" d="M23240 4612c5,-33 -32,-593 -39,-609l-27 0c-6,59 16,250 23,317l19 234c3,36 -10,56 24,58z" />
        <path fill="#ffffff" d="M22125 3999l39 -10c3,-43 -9,-128 -14,-173 -7,-72 -4,-77 -57,-126l32 309z" />
        <path fill="#ffffff" d="M22655 4223l46 3c7,-37 -8,-189 -16,-224l-47 -9c-5,23 11,205 17,230z" />
        <path fill="#ffffff" d="M22773 5480l36 10c3,-33 -7,-224 -21,-244l-41 -2 26 236z" />
        <path fill="#ffffff" d="M22019 3018l16 168c55,-61 41,-126 31,-201l-47 33z" />
        <path fill="#ffffff" d="M22371 4048c23,-1 20,-1 39,-14l-7 -110 -37 -18c-12,20 -10,-5 -7,33 1,10 2,25 3,36 3,22 5,52 9,73z" />
        <path fill="#000000" d="M27732 10792c96,-26 164,-58 254,-97 136,-59 65,-174 -26,-166 -25,2 -211,79 -258,94 -275,89 -640,147 -918,68 -141,-41 -362,-137 -433,-272 -90,-169 -12,-395 101,-534 105,-128 248,-234 392,-312 711,-384 1499,-315 1919,434 186,331 220,774 255,1147 31,322 54,654 66,978 7,179 42,134 -117,214 -151,76 -370,135 -535,170 -121,26 -541,77 -640,43 -7,-135 17,-310 19,-451 6,-339 15,-572 -14,-916 -18,-208 -36,-230 -65,-400zm2894 -564c67,-1488 -1090,-2755 -2577,-2822 -1489,-67 -2759,1086 -2826,2577 -67,1490 1085,2760 2577,2827 1494,67 2759,-1088 2826,-2582z" />
        <path fill="#000000" d="M30306 -1804c-360,117 -893,94 -1258,-10 -184,-52 -461,-234 -555,-411 -213,-324 67,-764 216,-947 137,-168 366,-348 556,-451 933,-504 2237,-351 2788,633 245,435 292,1145 339,1634 41,423 94,1264 110,1689 0,0 -90,34 -213,89 1,-121 -15,-309 -15,-521 -16,-425 -46,-862 -87,-1284 -47,-490 -90,-1071 -334,-1506 -240,-428 -547,-704 -1031,-819 -525,-125 -1024,-2 -1489,249 -190,103 -378,242 -515,410 -149,183 -251,479 -133,701 94,177 384,304 569,357 364,104 844,27 1205,-89 61,-20 306,-121 339,-124 119,-10 212,141 34,218 -118,51 -208,93 -334,128 38,223 61,252 85,524 39,452 27,759 19,1204 -3,185 -34,415 -24,592 130,44 681,-23 839,-57 327,-70 549,35 687,104l-8 4c-197,100 -485,177 -702,223 -158,34 -887,101 -1017,57 -10,-177 17,-724 20,-909 8,-445 7,-697 -33,-1149 -39,-450 -44,-510 -58,-539z" />
        <path fill="#e434aa" d="M5238 10185c-42,-7 -265,-144 -318,-175 -614,-359 -1249,-712 -1857,-1072l-303 -182 14 -34 6452 0 19 74c-40,15 -119,65 -160,89 -52,31 -102,60 -152,88l-919 531c-78,43 -1183,693 -1231,704 -59,-80 -198,-184 -317,-240 -293,-137 -610,-143 -907,-12 -109,49 -272,156 -321,229zm-2762 -2490c8,-39 351,-617 402,-706 135,-237 268,-460 403,-698 526,-928 1085,-1869 1614,-2797 268,-470 539,-930 806,-1395 260,51 336,54 598,0l3225 5588c-61,104 -179,131 -298,525l-6454 -1c-75,-246 -159,-378 -296,-516zm794 -4749c508,-290 1009,-589 1519,-877l383 -221c23,-14 45,-35 67,-25 27,11 16,33 3,55 -102,167 -193,339 -293,506 -291,489 -587,1020 -877,1519 -287,494 -599,1025 -877,1518l-584 1013c-100,168 -196,336 -293,506 -35,62 -268,478 -292,497l-36 -10 0 -2853c126,-36 222,-75 319,-139 285,-187 489,-503 489,-888 0,-144 -32,-208 -37,-311l509 -290zm5930 593c0,491 326,906 809,1035l-1 2854 -36 8c-22,-20 -783,-1347 -816,-1406 -134,-235 -268,-469 -406,-702 -138,-235 -268,-471 -406,-703 -276,-467 -536,-937 -811,-1406l-712 -1233c-73,-127 -94,-127 -61,-168 47,10 259,144 316,176 105,59 206,117 310,178 205,122 406,237 614,355l929 536c53,31 101,59 152,88 48,28 106,66 155,87 1,44 -37,150 -36,301zm-4228 -2162l-2464 1421c-63,-39 -125,-152 -383,-257 -494,-200 -1049,3 -1318,453 -180,301 -198,690 -35,1017 105,213 269,375 474,479 82,41 221,83 234,90l0 2727c0,147 25,106 -97,147 -803,274 -966,1344 -315,1851 376,293 907,314 1302,20 55,-41 91,-81 137,-118l1230 707c203,121 409,236 614,355 118,69 531,314 620,357 -10,87 -36,116 -40,270 -20,609 473,1115 1088,1104 678,-12 1151,-633 1030,-1273 -8,-42 -28,-94 -30,-133l303 -177c659,-383 1329,-762 1985,-1147 33,-20 130,-80 161,-88 177,180 375,304 650,343 878,123 1537,-839 1064,-1614 -116,-190 -298,-357 -549,-451 -141,-52 -114,55 -114,-378l0 -2502c23,-13 81,-27 114,-39 255,-91 466,-277 592,-524 316,-624 -55,-1423 -789,-1537 -190,-30 -395,-6 -557,59 -265,107 -314,211 -387,258l-2466 -1420c13,-92 37,-157 41,-264 4,-96 -5,-196 -26,-285 -168,-700 -940,-1025 -1539,-704 -273,146 -467,388 -543,697 -61,249 -17,353 13,556z" />
        <path fill="fil0 str0" d="M29251 -3228l40 16c0,63 -51,114 -114,114 -63,0 -114,-51 -114,-114 0,-31 13,-60 33,-81l40 17c-21,13 -35,37 -35,64 0,42 34,76 76,76 42,0 76,-34 76,-76 0,-6 -1,-11 -2,-16z" />
        <path fill="fil0 str0" d="M29853 -3139l40 17c0,63 -51,114 -114,114 -63,0 -114,-51 -114,-114 0,-32 13,-60 33,-81l40 16c-21,14 -35,38 -35,65 0,42 34,76 76,76 42,0 76,-34 76,-76 0,-6 -1,-12 -2,-17z" />
      </svg>
    </div>
  );
};

export default NewObsidianLogo;