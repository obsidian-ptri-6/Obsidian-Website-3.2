import { React } from '../../deps.ts';
import TeamMember from './TeamMember.jsx';

const users = [
  {
    firstName: 'Sigele',
    lastName: 'Nickerson-Adams',
    image:
    'https://res.cloudinary.com/rhbedenbaugh/image/upload/v1656176543/1583992554671_oz2lpz.jpg',
    info: 'Sigele is a software engineer focused on building modular, flexible tools for developers, and making the web more open and accessible for all users. They enjoy horror films, lifting weights, and complaining about the lack of good dim sum in Texas.',
    linkedin: 'https://www.linkedin.com/in/sigelenickersonadams/',
    github: '',
  },
  {
    firstName: 'David',
    lastName: 'Palmer',
    image:
    'https://res.cloudinary.com/rhbedenbaugh/image/upload/v1659488057/123456709876543_luymhn.jpg',
    info: 'David is a software engineer interested in full stack development and backend architecture. He loves skiing, podcasts, and checking out new coffee shops near his apartment in New York City.',
    linkedin: 'https://www.linkedin.com/in/dwp78/',
    github: 'https://github.com/dwppalmer95',
  },
  {
    firstName: 'Yuki',
    lastName: 'Naka',
    image:
    'https://res.cloudinary.com/rhbedenbaugh/image/upload/c_thumb,w_200,g_face/v1656176613/1656085073699_gkjsrh.jpg',
  
    info: 'Yuki is a software engineer with an emphasis on full stack engineering and interest in application architecture. He currently choreographs/dances for music videos and performances when opportunity comes on his free time.',
    linkedin: 'https://www.linkedin.com/in/yukinaka/',
    github: '',
  },
  {
    firstName: 'Nathan',
    lastName: 'Crawford',
    image:
    'https://res.cloudinary.com/rhbedenbaugh/image/upload/v1656176587/1617305254527_u0euyd.jpg',
    info: 'Nathan is a full stack software engineer based in New York City. He enjoys anything outdoors but especially fly fishing and spending time with family.',
    linkedin: 'https://www.linkedin.com/in/nathan-crawford-6894761ab/',
    github: 'https://github.com/crawfish39',
  },
  {
    firstName: 'Robert',
    lastName: 'Bedenbaugh',
    image:
    'https://res.cloudinary.com/rhbedenbaugh/image/upload/v1659487876/1659294892967_uvrk8x.jpg',
    info: 'Robert is a software engineer passionate about UX/UI, the joyful art of CSS, & its frameworks & libraries. When not coding, you may find him gardening, eating sushi, or rocking to RHCP.',
    linkedin: 'https://www.linkedin.com/in/robertbedenbaugh/',
    github: 'https://github.com/rhbedenbaugh',
  },
  {
    firstName: 'Michael',
    lastName: 'Melville',
    image:
    'https://res.cloudinary.com/obsidian44/image/upload/v1629338933/obsidian44/IMG_6933_nzsbug.jpg',
    info: 'Michael is an engineer with a lifelong passion for creative problem-solving.  When not working behind a keyboard, he can often be found playing at the cutting board or jumping off diving boards around the world.',
    linkedin: 'https://www.linkedin.com/in/michael-j-melville/',
    github: 'https://github.com/meekle',
  },
  {
    firstName: 'John',
    lastName: 'Wong',
    image:
      'https://res.cloudinary.com/obsidian44/image/upload/v1629328976/obsidian44/John_s_Portrait_resized_lvehyb.jpg',
    info: 'John is a software engineer passionate in building web applications and making an impact. Other than coding, he spends his spare time on food tours and fitness.',
    linkedin: 'https://www.linkedin.com/in/john-wong-fongching/',
    github: 'https://github.com/johnwongfc',
  },
  {
    firstName: 'Christopher',
    lastName: 'Berry',
    image:
      'https://res.cloudinary.com/obsidian44/image/upload/v1629340890/obsidian44/20191006-DSC07716-2_1_izg7b5.jpg',
    info: 'Chris is a full-stack software engineer passionate about developing realistic solutions and optimization for complex problems. He loves sports, travel and exploring the great outdoors.',
    linkedin: 'https://www.linkedin.com/in/christopher-j-berry/',
    github: 'https://github.com/cjamesb',
  },
  {
    firstName: 'Olivia',
    lastName: 'Yeghiazarian',
    image:
      'https://res.cloudinary.com/obsidian44/image/upload/v1629327185/obsidian44/olivia_su5ymm.jpg',
    info: 'Olivia is a full-stack software engineer  passionate about building scalable and responsive applications. The times when she is not in front of the computer you can find her doing a yoga class, which has been a lifetime hobby.',
    linkedin: 'https://www.linkedin.com/in/olivia-yegazarian/',
    github: 'https://github.com/Olivia-code',
  },

  {
    firstName: 'Raymond',
    lastName: 'Ahn',
    image:
      'https://res.cloudinary.com/os-labs/image/upload/v1625079464/Profile_Pic_tcytta.jpg',
    info: 'Raymond is a full-stack software engineer whose focus is on developing scalable and responsive programs through algorithmic optimization. During his spare time, he enjoys exploring new cuisines, game nights, fitness, traveling, and anything music-related.',
    linkedin: 'https://www.linkedin.com/in/raymondahn/',
    github: 'https://github.com/raymondcodes',
  },
  {
    firstName: 'Kyung',
    lastName: 'Lee',
    image:
      'https://res.cloudinary.com/os-labs/image/upload/v1625091906/IMG_1195_ptmaex.jpg',
    info: 'Kyung is a software engineer who loves diving deep into technologies and building robust and efficient web applications. Apart from coding, his hobbies include watching MMA and eating tacos or anything spicy.',
    linkedin: 'https://www.linkedin.com/in/kyung-lee-9414a6215/',
    github: 'https://github.com/kyunglee1',
  },
  {
    firstName: 'Justin',
    lastName: 'McKay',
    image:
      'https://res.cloudinary.com/os-labs/image/upload/v1625079448/Screen_Shot_2021-06-28_at_11.24.08_AM_kyfviq.png',
    info: 'Justin is a software engineer with a passion for solving complex problems and full stack system design. When not coding he enjoys music theory, fitness, and cold water.',
    linkedin: 'https://www.linkedin.com/in/justinwmckay/',
    github: 'https://github.com/justinwmckay',
  },
  {
    firstName: 'Cameron',
    lastName: 'Simmons',
    image:
      'https://res.cloudinary.com/os-labs/image/upload/v1625002810/3C1B71E4-CD2A-4D11-BBF0-B054E80BC132_1_201_a_afrjry.jpg',
    info: 'Cameron is a full-stack software engineer who gets excited about fast, full-featured applications and staying up-to-date on the latest tech trends. In his spare time he enjoys producing music and being outdoors.',
    linkedin: 'https://www.linkedin.com/in/camsimmons/',
    github: 'https://github.com/cssim22',
  },
  {
    firstName: 'Patrick',
    lastName: 'Sullivan',
    image:
      'https://res.cloudinary.com/os-labs/image/upload/v1625079443/PJS-Passport_hv6kvx.jpg',
    info: 'Patrick is a full-stack software engineer passionate about back-end tech.  He loves backpacking in the Pacific Northwest and the Rockies, growing vegetables, and living fully.',
    linkedin: 'https://www.linkedin.com/in/patrick-j-m-sullivan/',
    github: 'https://github.com/pjmsullivan',
  },
  {
    firstName: 'Nhan',
    lastName: 'Ly',
    image:
      'https://res.cloudinary.com/dyigtncwy/image/upload/v1618454676/Nhan_hlhra2.jpg',
    info: 'Nhan is a software engineer that enjoys working on the entire stack and particularly enjoys playing with algorithms and learning about new technologies. When not coding Nhan usually listening to podcasts, reading, and taking (too long) breaks at the gym between sets.',
    linkedin: 'https://www.linkedin.com/in/nhanly/',
    github: 'https://github.com/NhanTLy',
  },
  {
    firstName: 'Damon',
    lastName: 'Alfaro',
    image:
      'https://res.cloudinary.com/dyigtncwy/image/upload/v1618454676/Damon_j1ehdh.jpg',
    info: 'As a software engineer, Damon enjoys databases and experimenting with emerging back-end technologies. He spends his free time backpacking, running, and traveling in his converted school bus RV.',
    linkedin: 'https://www.linkedin.com/in/damon-alfaro-28530a74/',
    github: 'https://github.com/djdalfaro',
  },
  {
    firstName: 'Adam',
    lastName: 'Wilson',
    image:
      'https://res.cloudinary.com/dyigtncwy/image/upload/v1618454676/Adam_ddx07d.jpg',
    info: 'Adam is a full-stack software engineer originally from Cleveland, OH. He enjoys developing efficient and responsive web applications in addition to performant APIs, using React and Node.js. His favorite things include tacos and Irish wolfhounds.',
    linkedin: 'https://www.linkedin.com/in/adam-wilson-houston/',
    github: 'https://github.com/aswilson87',
  },
  {
    firstName: 'Christy',
    lastName: 'Gomez',
    image:
      'https://res.cloudinary.com/dyigtncwy/image/upload/v1618456773/IMG_1522_h9j9vi.jpg',
    info: 'Christy is a software engineer focused on developing full stack applications with responsive design. She enjoys salsa dancing, trying new restaurants, unplanned traveling, and being eco-friendly.',
    linkedin: 'https://www.linkedin.com/in/christy-gomez/',
    github: 'https://github.com/christygomez',
  },
  {
    firstName: 'Geovanni',
    lastName: 'Alarcon',
    image:
      'https://res.cloudinary.com/dyigtncwy/image/upload/v1618459654/geo2_jxodpa.jpg',
    info: 'Geo is a software engineer who loves building scalable and responsive software tools for the developer community. For fun, he enjoys traveling, and picnics.',
    linkedin: 'https://www.linkedin.com/in/geo-alarcon/',
    github: 'https://github.com/gealarcon',
  },
  {
    firstName: 'Esma',
    lastName: 'Sahraoui',
    image:
      'https://res.cloudinary.com/dsmiftdyz/image/upload/v1609992320/IMG_2063_htwead.jpg',
    info: 'Esma is a full-stack software engineer with a passion for building servers as well as building responsive user interfaces for web applications. In her free time, she is driven by traveling to discover new cultures and kayaking across rivers.',
    linkedin: 'https://www.linkedin.com/in/esma-sahraoui/',
    github: 'https://github.com/EsmaShr',
  },
  {
    firstName: 'Derek',
    lastName: 'Miller',
    image:
      'https://res.cloudinary.com/dsmiftdyz/image/upload/v1609990785/Derek-headshot_ofzix3.jpg',
    info: 'Derek is a full-stack software engineer with a focus on the MERN tech stack. Outside of coding he loves boardgames and rock climbing.',
    linkedin: 'https://www.linkedin.com/in/dsymiller',
    github: 'https://github.com/dsymiller',
  },
  {
    firstName: 'Eric',
    lastName: 'Marcatoma',
    image:
      'https://res.cloudinary.com/dsmiftdyz/image/upload/v1609989762/AE476873-B676-4D4D-AF9A-548B386F7AD7_1_201_a_mxvsgu.jpg',
    info: 'Eric is a software engineer from NYC who focuses on front-end development. During his spare time he loves to go to the gym, play basketball and trying new restaurants in his city.',
    linkedin: 'https://www.linkedin.com/in/ericmarc159',
    github: 'https://github.com/ericmarc159',
  },
  {
    firstName: 'Lourent',
    lastName: 'Flores',
    image:
      'https://res.cloudinary.com/dsmiftdyz/image/upload/v1609990832/headshot_e4ijvy.png',
    info: 'Lourent is a full-stack software engineer specializing in React and Node.js, with a passion for learning new technologies and optimizing frontend web design.',
    linkedin: 'https://www.linkedin.com/in/lourent-flores/',
    github: 'https://github.com/lourentflores',
  },
  {
    firstName: 'Spencer',
    lastName: 'Stockton',
    image:
      'https://res.cloudinary.com/dsmiftdyz/image/upload/v1609994346/obsidianpic_gzxcqe.jpg',
    info: 'Spencer is a software engineer that enjoys working on solving complex problems across the entire tech stack.  When he is not programming, you can find him running on the East River or attending a concert around NYC.',
    linkedin: 'https://www.linkedin.com/in/spencer-stockton-643823a4/',
    github: 'https://github.com/tonstock',
  },
  {
    firstName: 'Alonso',
    lastName: 'Garza',
    image:
      'https://res.cloudinary.com/dkxftbzuu/image/upload/v1600479739/Obsidian/WhatsApp_Image_2020-09-18_at_8.38.09_PM_pgshgj.jpg',

    info: 'Alonso is a full-stack software engineer from Austin, Texas. Alonso specializes in React, Node.js, Express, and is passionate about solving complex problems and working in teams. Outside of coding, he loves to travel around Latin America and scuba dive!',
    linkedin: 'https://www.linkedin.com/in/e-alonso-garza/',
    github: 'https://github.com/Alonsog66',
  },
  {
    firstName: 'Travis',
    lastName: 'Frank',
    image:
      'https://res.cloudinary.com/dkxftbzuu/image/upload/v1600462593/Obsidian/image_1_c7sggv.jpg',
    info: 'Travis is a software engineer at Place Exchange focused on building scalable backend solutions. When he isn’t coding he enjoys playing board games, eating copious amounts of sushi, and conducting pit orchestras.',
    linkedin: 'https://linkedin.com/in/travis-m-frank',
    github: 'https://github.com/TravisFrankMTG',
  },
  {
    firstName: 'Matt',
    lastName: 'Meigs',
    image:
      'https://res.cloudinary.com/dkxftbzuu/image/upload/v1600811069/Obsidian/IMG_2543_vrhknw.jpg',
    info: 'Matt is a software engineer interested in clear and responsive frontend web design and algorithmic optimization through the full stack. He’s an expat from the Deep South, a lover of far-flung travel, and a former Broadway actor.',
    linkedin: 'https://www.linkedin.com/in/matt-meigs/',
    github: 'https://github.com/mmeigs',
  },
  {
    firstName: 'Burak',
    lastName: 'Caliskan',
    image:
      'https://res.cloudinary.com/dkxftbzuu/image/upload/v1600462610/Obsidian/92C676E9-C9C4-4CFB-80A9-876B30C94732_copy_vfsnjl.jpg',
    info: 'Burak is a software engineer focused on developing full stack applications. Curious and constantly finding ways to use new ideas to solve problems and provide delight. For fun, he enjoys outdoor activities, traveling, and exploring new cuisines.',
    linkedin: 'https://www.linkedin.com/in/burakcaliskan/',
    github: 'https://github.com/CaliskanBurak',
  },
];

const teamMembers = users.map((user, i) => (
  <TeamMember key={`TeamMember-${i}`} user={user} />
));
function Team() {
  return (
    <section className='team-section text-center'>
      <h1>Contributors</h1>
      <div className='row'>{teamMembers}</div>
    </section>
  );
}

export default Team;
