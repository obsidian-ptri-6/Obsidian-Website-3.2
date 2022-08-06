// deno-lint-ignore-file no-explicit-any
import SideBar from './SideBar.tsx';
import { React } from '../../deps.ts';
import { SMTPClient } from "https://deno.land/x/denomailer@1.2.0/mod.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      form: any,
      textarea: any,
      input: any,
    }
  }
}

//create Contact functional component
const Contact = (props: any) => {

  //set state
  const [name, setName] = (React as any).useState('')
  const [email, setEmail] = (React as any).useState('')
  const [text, setText] = (React as any).useState('')

  //
  const onSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('submitted')

    //establish connection
    try {

    
      const client = new SMTPClient({
        connection: {
          hostname: "smtp.gmail.com",
          port: 465,
          tls: true,
          auth: {
            username: 'robedenbaughjr@gmail.com',
            password: 'myrd', // FIXME: Put this in a .env
          },
        },
      });

      //send email
      await client.send({
        to: 'robertbedenbaughjr@gmail.com',
        from: 'robertbedenbaughjr@gmail.com',
        subject: "Obsidian 6.0 input",
        content: "yata yata yata",
        // html: "<p>...</p>",
      });

      //close connection
      await client.close();
    } catch (err) {
      console.log(err);
    }
  }

  //alert acknowledging user input
  function myFunc() {
    alert("Thanks for your input!!!");
  }

  //rendered component features
  return (
    <>
      <form >
        <input id="name" 
        name="name" type="text" className="feedback-input" 
        placeholder="Name" value={name} 
        onChange={(e: { target: { value: string; }; }) => setName(e.target.value)}
        />
        <input id="email" name="email" type="text" className="feedback-input" 
        placeholder="Email" value={email} 
        onChange={(e: { target: { value: string; }; }) => setEmail(e.target.value)}
        />
        <textarea id="message" name="text" className="feedback-input" 
        placeholder="Comment" value={text} 
        onChange={(e: { target: { value: string; }; }) => setText(e.target.value)}
        />
        {/* Removed on click */}
        <input type="submit" value="SUBMIT" onSubmit={(e: any) => {
          e.preventDefault();
          console.log('clicked submit');
        }} /> 
      </form>
      <SideBar page={props.page} />
    </>
  );
}

export default Contact;