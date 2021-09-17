import React from 'react';
import './App.css';

function App() {
  return (
      <>
    <div className='container'>
      <form>
        <fieldset>
          <legend>Gegevens</legend>
          <label htmlFor='name'>
        Naam:
          <input
            type='text'
            name='name'
            placeholder='typ hier jouw naam'
            id='name'
          />
          </label>

         <label htmlFor='age'>
           Leeftijd:
           <input
            type='number'
            name='age'
            placeholder='0'
            id='age'
         />
         </label>
        </fieldset>

        <fieldset>
          <legend>Jouw Review</legend>
          <label htmlFor='opmerkingen'>
            Opmerkingen:
            <input
              type='textarea'
              name='opmerkingen'
              placeholder='Wat vond je van het recept?'
              id='opmerkingen'

              />
          </label>



        </fieldset>
      </form>

    </div>

    </>
  );
}

export default App;
