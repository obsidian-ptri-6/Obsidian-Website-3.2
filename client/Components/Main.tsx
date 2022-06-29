import { React } from '../../deps.ts';
import ObsidianLogo from './ObsidianLogo.tsx';
import SideBar from './SideBar.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      img: any;
    }
  }
}

const Main = (props: any) => {
  return (
    <>
      <div className='mainContainerLogo'>
        <div className='homePage'>
          <ObsidianLogo />
        </div>
      </div>
      <SideBar page={props.page} />
    </>
  );
};

export default Main;
