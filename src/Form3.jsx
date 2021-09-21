import React  from 'react'


function Form3(props) {
  // const [value, setValue] = useState(null);
  //
  // const takeValue = (e) => {
  //   setValue(e.target.value);
  //  e.target.classList.add('color')
  // };

  return (
    <>
      <h2>Basic information about you</h2>
      <form className="type2">

        <h3>Categories you work with</h3>
        <label htmlFor='Economy' ><input type="checkbox" name='category' onClick={props.handleChangeFields}  id="Economy" value="Economy"/>Economy</label>
        <label htmlFor='Business' ><input type="checkbox" name='category' onClick={props.handleChangeFields} id="Business" value="Business"/>Business</label>
        <label htmlFor='Trading' ><input type="checkbox" name='category' onClick={props.handleChangeFields} id="Trading" value="Trading"/>Trading</label>
        <label htmlFor='Сommunications' ><input type="checkbox" name='category' id="Сommunications" value="Сommunications"/>Сommunications</label>
        <input type='text' name="email" value={props.fields.email} onChange={props.handleChangeFields} placeholder='Email'/>
        <input type='password' name="password" value={props.fields.password} onChange={props.handleChangeFields} placeholder='Password'/>

        <div className='btns'>
          <button className="btn " onClick={props.previousForm}>Previous</button>
          <button className="btn" onClick={props.sendForm}>Submit</button>
        </div>
      </form>

    </>
  );
};

export default Form3;
