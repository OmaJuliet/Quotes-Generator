import React, { useState } from 'react'
import pic from "./images/image1.jpg";
import pics from "./images/image2.jpg";

function App() {
  const [name, setName] = useState("Don't ever give up");
  const [imgToggler, setImgToggler] = useState(false)
  const handleNameChange = () => {
    const names = [
      "Consistency is key", 
      "Procastination delays progress", 
      "Don't ever compare yourself with anyone", 
      "Give it your all",
      "Learn as if you will live forever, live like you will die tomorrow",
      "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out",
      "When you change your thoughts, remember to also change your world", 
      "Success is not final; failure is not fatal: It is the courage to continue that counts",
      "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success",
      "Don’t let yesterday take up too much of today", 
      "Goal setting is the secret to a compelling future",
      "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus",
      "Setting goals is the first step in turning the invisible into the visible",
      "He who conquers himself is the mightiest warrior",
      "Talent wins games, but teamwork and intelligence win championships",
    ];
    const int = Math.floor(Math.random() * 15);
    setName(names[int]);

    setImgToggler(!imgToggler)
  }

  return (
    <>
      <div className="App">
        <header>
          <h4>Daily Dose of Motivation</h4>
        </header>
        <main>
          <div className="container">
            {imgToggler ? <img src={pics} alt='house' /> : <img src={pic} alt='houses' />}
            <p>{name}!</p>
          </div>
          <button onClick={handleNameChange}>Generate Quote</button>
        </main>

      </div>
    </>
  );
}

export default App;
