import React from 'react'
import './index.css';

function Form1(props) {


  return (
    <>
      <h2>Which describes you best ?</h2>
      <form className="type1">
       <label htmlFor='hom' ><input type="radio"  name="browser" id="hom" value='Homeowner' onClick={props.handleChangeFields}/>Homeowner</label>
        <label htmlFor='prof' ><input type="radio"  name="browser" id="prof" value='Professional' onClick={props.handleChangeFields}/> Professional </label>
        <div className='btns'>
          <button className="btn" onClick={props.nextForm} >Next</button>
        </div>

      </form>
     </>
  );
};

export default Form1;
