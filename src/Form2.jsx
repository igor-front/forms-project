import React from 'react'


function Form2(props) {

  return (
    <>
      <h2>Basic information about you</h2>
      <form className="type2">
      <input type='text' name="firstName" value={props.fields.firstName} onChange={props.handleChangeFields} placeholder='First Name'/>
        <input type='text' name="lastName" value={props.fields.lastName} onChange={props.handleChangeFields} placeholder='Last Name'/>

        <h3>Gender</h3>
        <label htmlFor='male' ><input type="radio" name='gender' onClick={props.handleChangeFields}  id="male" value="Male"/>Male</label>
        <label htmlFor='female' ><input type="radio" name='gender' onClick={props.handleChangeFields} id="female" value="Female"/>Female</label>
        <label htmlFor='notSay' ><input type="radio" name='gender' onClick={props.handleChangeFields} id="notSay" value="I prefer not to say"/>I prefer not to say</label>
        <label htmlFor='othr' ><input type="radio" name='gender' onClick={props.handleChangeFields} id="othr" value="other"/>Other <input type='text' onChange={props.handleChangeFields} value={props.fields.gender} name='gender'/></label>

        <div className='btns'>
          <button className="btn " onClick={props.previousForm}>Previous</button>
          <button className="btn" onClick={props.nextForm}>Continue</button>
        </div>

      </form>

    </>
  );
};

export default Form2;
