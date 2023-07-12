import { useState } from 'react';
import './App.css';
import { db } from './config/firebase';
import { addDoc, collection } from 'firebase/firestore';

function App() {
  const [data,setData] = useState({
    name:'',
    email:'',
    phone:'',
    description:''
  })

  const collectionRef = collection(db,'users')

  const inputHandler = (e) =>{
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }


  const submitHandler = (e) =>{
    console.log("Abhishek");
 
      addDoc(collectionRef,data).then(res =>{
        console.log(res);
      });
   
  }

  return (
    <div className="container">
      <div className='wrapper'>
        <div className='left'>
          <div>
            <h1>Hire Remote <br></br>Igaming Developer</h1>
          </div>
          <div>
            <a href="https://api.whatsapp.com/send/?phone=+441892710894&text&type=phone_number&app_absent=0"><i class="fa-brands fa-whatsapp"></i> whatsapp</a>
            <i className="fa-solid fa-bell"></i>
          </div>
        </div>
        <div className='right'>
          <div className='right_wrapper'>
            <h1>Get a Free Consultation</h1>
            <div className='desc'>
              <p>Have a project that we could work together on?</p>
              <p>We would love to talk</p>
            </div>
            <div className='input_fields'>
              <div className='inputs'>
                <input onChange={inputHandler} type='text' name='name' placeholder='Full Name' required/>
              </div>
              <div className='inputs'>
                <input onChange={inputHandler} type='email' name='email' placeholder='Email' required />
              </div>
              <div className='inputs'>
                <input onChange={inputHandler} type='number' name='phone' placeholder='Phone' required />
              </div>
              <div className='text_area'>
                <textarea placeholder='Enter a brief description of your project' onChange={inputHandler} name='description'>
                  
                </textarea>
              </div>
              <div className='btn'>
                <button onClick={submitHandler}>Submit</button>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
