import React, { Component } from "react";
import { Accordion, AccordionItem } from "react-sanfona";
import { Form } from "redux-form"

class AccordionPage extends Component {
  render() {
    return (
      <div className="accordian">
        <Accordion>
          <AccordionItem title="bench press stats">
            <div>
              <form>
                <label>reps: </label>
                <input type="text"/>
                <label>sets: </label>
                <input type="text"/>
                <label>max: </label>
                <input type="text"/>
                <textarea placeholder="notes"/>
                <button>Submit</button>
              </form>
            </div>
          </AccordionItem>
          <AccordionItem title="Squat Stats">
            <div>
              <form>
                <label>reps: </label>
                <input type="text" name="reps"/>
                <label>sets: </label>
                <input type="text" name="sets"/>
                <label>max: </label>
                <input type="text" name="max"/>
                <textarea placeholder="notes"/>
                <button>Submit</button>
              </form>
            </div>
          </AccordionItem>
          <AccordionItem title="Deadlist Stats">
            <div>
              <form>
                <label>reps: </label>
                <input type="text" name="reps"/>
                <label>sets: </label>
                <input type="text" name="sets"/>
                <label>max: </label>
                <input type="text" name="max"/>
                <textarea placeholder="notes"/>
                <button>Submit</button>
              </form>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
};

export default AccordionPage;
