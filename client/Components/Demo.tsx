// deno-lint-ignore-file no-explicit-any
import { React } from '../../deps.ts';
import SideBar from './SideBar.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}

const Demo = (props: any) => {
  const [demoPage, setDemoPage] = (React as any).useState("Demo")
  return (
    <>
      <div className='demoContainer'>
        <iframe
          src='http://demo.obsidian.land/'
          height='100%'
          width='100%'
        ></iframe>
      </div>
      <SideBar page={props.page}
      demoPage={demoPage}
      setDemoPage={setDemoPage}
      />
    </>
  );
};

export default Demo;
