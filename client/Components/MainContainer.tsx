// deno-lint-ignore-file no-explicit-any
import { React } from '../../deps.ts';
import Main from './Main.tsx';
import Docs from './Docs.tsx';
import Demo from './Demo.tsx';
import DevTool from './DevTool.tsx';
import About from './About.tsx';
import Contact from './Contact.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}

const MainContainer = (props: any) => {
  const { page } = props;

  let curPage;
  if (page === 'home') curPage = <Main page={props.page} />;
  if (page === 'docs') curPage = <Docs page={props.page} />;
  if (page === 'demo') curPage = <Demo page={props.page} />;
  if (page === 'devtool') curPage = <DevTool page={props.page} />;
  if (page === 'about') curPage = <About page={props.page} />;
  if (page === 'contact') curPage = <Contact page={props.page} />;
  return <>{curPage}</>;
};

export default MainContainer;
