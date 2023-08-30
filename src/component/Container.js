import React, { Component } from 'react'
import Details from './Details'
import Question from './Question'
import { v4 as uuidv4 } from 'uuid'
import { getDatabase, ref, set } from "firebase/database";
import firebase from 'firebase/compat/app';

// import 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyDrqL7dTqIBXd7GpAuXxB0Q-0N7x3mH4xI",
  authDomain: "shashank-survey-form.firebaseapp.com",
  databaseURL: "https://shashank-survey-form-default-rtdb.firebaseio.com",
  projectId: "shashank-survey-form",
  storageBucket: "shashank-survey-form.appspot.com",
  messagingSenderId: "680048620473",
  appId: "1:680048620473:web:68d1625265a0fdeb233c68"
};
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export class Container extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        id:uuidv4(),
         name:null,
         email:null,
         isSubmitted:null,
         question :{

         },
      }
    }
    detailsHandler = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        this.setState({name,email});
       
    }
    questionHandler = (e) =>{
      e.preventDefault();
      const question = {};
      question.q1 = e.target.Prof.value;
      question.q2 = e.target.rate.value;
      question.q3 = e.target.query.value;
      const isSubmitted = true;
      this.setState({question,isSubmitted},() =>{
        console.log(this.state)
      });
      const db = getDatabase();
      set(ref(db, 'Survey/' + this.state.id), {
        name: this.state.name,
        email: this.state.email,
        question : this.state.question
      });
    
    }
  render() {
    return (
      <div>
        <div className="conatainer text-center">
            <div className="container card">
            <h1 className= "text-primary">Tech survey</h1>
            </div>
            
        </div>
        {
            this.state.name === null && this.state.email === null ? <Details submit = {this.detailsHandler}></Details>: <Question submit = {this.questionHandler}></Question>
        }
        
        
      </div>
    )
  }
}

export default Container
