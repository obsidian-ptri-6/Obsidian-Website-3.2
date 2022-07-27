// deno-lint-ignore-file no-explicit-any
import SideBar from './SideBar.tsx';
import { React } from '../../deps.ts';
// import formik from 'https://cdn.jsdelivr.net/npm/formik@2.2.9/dist/index.min.js'
// import 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3.6.2/cjs/index.min.js';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      form: any;
      textarea: any;
      input: any,
    }
  }
}

const Contact = (props: any) => {

  const form = (React as any).useRef()

  const [name, setName] = (React as any).useState('')
  const [email, setEmail] = (React as any).useState('')
  const [text, setText] = (React as any).useState('')

  const templateParams = {
    name: 'James',
    notes: 'Check this out!'
  }

  // function myFunc() {
  //   alert("Thanks for your input!!!");
  // }

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // email.sendForm('service_4u6pk6b', 'template_ejhd7wi', templateParams, 'R3KV6PbqOD5UNWKbf')
    //   .then((result: { text: any; }) => {
    //       console.log(result.text);
    //   }, (error: { text: any; }) => {
    //       console.log(error.text);
    //   });
  };

  return (
    <>
      <form>
        <input name="name" type="text" className="feedback-input" placeholder="Name"
          value={name}
          onChange={(e: { target: { value: string; }; }) => setName(e.target.value)}
        />
        <input name="email" type="text" className="feedback-input" placeholder="Email"
          value={email}
          onChange={(e: { target: { value: string; }; }) => setEmail(e.target.value)}
        />
        <textarea name="text" className="feedback-input" placeholder="Comment"
          value={text}
          onChange={(e: { target: { value: string; }; }) => setText(e.target.value)}
        />
        <input type="submit" value="SUBMIT" onSubmit={(e: { target: { value: any; }; }) => sendEmail(e.target.value)}/>
      </form>
      <SideBar page={props.page} />
    </>
  );
};

export default Contact;