import { React } from '../../deps.ts';
import SideBar from './SideBar.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // div: any;
      form: any;
      textarea: any;
      input: any,
    }
  }
}

const Contact = (props: any) => {
  return (
    <>
      <form>
        <input name="name" type="text" className="feedback-input" placeholder="Name" />
        <input name="email" type="text" className="feedback-input" placeholder="Email" />
        <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
        <input type="submit" value="SUBMIT"/>
      </form>
      <SideBar page={props.page} />
    </>
  );
};

export default Contact;