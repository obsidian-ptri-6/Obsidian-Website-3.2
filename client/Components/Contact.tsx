import { React } from '../../deps.ts';
import SideBar from './SideBar.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}

const Contact = (props: any) => {
  return (
    <>
      <div className='mainContainer'>
        <div className='docContainer'>
          <div className="row">
            <h1>contact us</h1>
          </div>
          <div className="row">
            <h4 style="text-align:center">We'd love to hear from you!</h4>
          </div>
          <div className="row input-container">
            <div className="col-xs-12">
              <div className="styled-input wide">
                <input type="text" required />
                <label>Name</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input">
                <input type="text" required />
                <label>Email</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input" style="float:right;">
                <input type="text" required />
                <label>Phone Number</label>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="styled-input wide">
                <textarea required></textarea>
                <label>Message</label>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="btn-lrg submit-btn">Send Message</div>
            </div>
          </div>
        </div>
      </div>
      <SideBar page={props.page} />
    </>
  );
};

export default Contact;