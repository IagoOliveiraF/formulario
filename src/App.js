import './App.css';


function App() {
  return (
    <div className="App">
      <div className="Wrapper">

        <form className="Form">

          <h1>Contact Us</h1>
          <header className="FormHeader">
            <div className="FirstName">
              <label id="LabelFirstName">First Name *</label>
              <input id="InputFirstName"></input>
              <p className="NameError"></p>
            </div>
            <div className="SecondName">
              <label id="LabelSecondName">Second Name *</label>
              <input id="InputSecondName"></input>
              <p className="NameError"></p>
            </div>
          </header>

          <section className='Email'>
            <label id="LabelEmailAddress">Email Address *</label>
            <input id="InputEmailAddress" placeholder='email@example.com'></input>
            <p className="NameError"></p>
          </section>

          <aside className='Querytype'>
            <label id='QueryTypeLabel'>Query type*</label>
            <section>
              <div className="General">
                <input id="InputGeneralRadio" type="radio" name="Query" value="General"></input>
                <label id="LabelGeneralRadio" htmlFor='InputGeneralRadio'>General Enquiry</label>
                <p className="NameError"></p>
              </div>
              <div className="Support">
                <input id="InputSupportRadio" type="radio" name="Query" value="Support"></input>
                <label id="LabelSupportRadio" htmlFor='InputSupportRadio'>Support Request</label>
                <p className="NameError"></p>
              </div>
            </section>
          </aside>

          <footer className="FormFooter">
            <div class="FormFooterMessage">
              <label id="LabelTextMessage">Message *</label>
              <textarea name="message" id="InputTextMessage" rows="5" cols="30" maxlength="302" required ></textarea>
              <p className="NameError"></p>
            </div>
            <div class="FormCheckBox">
              <input name="CheckBox" id="InputCheckBox" type='checkbox'></input>
              <label id="LabelCheckBox" htmlFor='InputCheckBox'>I consent to being contacted by the team*</label>
              <p className="NameError"></p>
            </div>
          </footer>

          <button type='submit'> Submit </button>

        </form>
      </div>
    </div>
  );
}


export default App;
