// deno-lint-ignore-file no-explicit-any
import SideBar from './SideBar.tsx';
import { React } from '../../deps.ts';
import { SMTPClient } from "https://deno.land/x/denomailer@1.2.0/mod.ts";
// import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import { InboxControllerApi } from 'https://raw.githubusercontent.com/mailslurp/mailslurp-client-deno/11.7.9/index.ts'
// import "https://cdn.jsdelivr.net/npm/mailslurp-client@15.13.1/dist/index.min.js"
// import { MailSlurp } from "https://cdn.jsdelivr.net/npm/mailslurp-client@15.13.1/dist/index.min.js";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      form: any,
      textarea: any,
      input: any,
    }
  }
}


const Contact = (props: any) => {

  const [name, setName] = (React as any).useState('')
  const [email, setEmail] = (React as any).useState('')
  const [text, setText] = (React as any).useState('')

  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // const mailslurp = new MailSlurp({ apiKey: 'f3ae89899940d574a7ebce8432282408a52ab1ec939f302ee187e2cf06423f82' });

    // const inbox = await mailslurp.inboxController.createInbox({});
    // expect(inbox.emailAddress).toContain('@mailslurp');


    // const { SEND_EMAIL, PWD, RECV_EMAIL } = Deno.env.toObject();

    // const client = new SMTPClient({
    //   connection: {
    //     hostname: "mx.mailslurp.com",
    //     port: 2525,
    //     tls: true,
    //     auth: {
    //       username: 'W6apJU4plJ5CJf8VMTMuuszNUJ7E7qpS',//SEND_EMAIL,
    //       password: 'n84BCcxew6IGx0OqaaKUjQAkHp7rSYxV',//PWD,
    //     },
    //   },
    // });

    // await client.send({
    //   from: SEND_EMAIL,//'robertbedenbaughjr@gmail.com',
    //   to: RECV_EMAIL,//'robertbedenbaughjr@gmail.com',
    //   subject: "Obsidian 6.0 input",
    //   content: "yata yata yata",
    //   // html: "<p>...</p>",
    // });

    // await client.close();
  }

  function myFunc() {
    alert("Thanks for your input!!!");
  }

  return (
    <>
      <form >
        <input id="name" name="name" type="text" className="feedback-input" placeholder="Name"
          value={name}
          onChange={(e: { target: { value: string; }; }) => setName(e.target.value)}
        />
        <input id="email" name="email" type="text" className="feedback-input" placeholder="Email"
          value={email}
          onChange={(e: { target: { value: string; }; }) => setEmail(e.target.value)}
        />
        <textarea id="message" name="text" className="feedback-input" placeholder="Comment"
          value={text}
          onChange={(e: { target: { value: string; }; }) => setText(e.target.value)}
        />
        <input onClick={myFunc} type="submit" value="SUBMIT" onSubmit={onSubmit}
        />
      </form>
      <SideBar page={props.page} />
    </>
  );
}


export default Contact;