import React, {useState} from 'react'
import Form2 from "./Form2";
import Form1 from "./Form1";
import Form3 from "./Form3";
import useInput from "./useInput";





function App() {
  const [formNumber, setFormNumber] = useState(0);
  const {fields,handleChangeFields,setFormFields} = useInput({
    browser:'',
    firstName:'',
    lastName:'',
    gender:'',
    category:'',
  });
  const nextForm = (e) => {
    e.preventDefault();
    if(formNumber< formArr.length -1  ) {
      setFormNumber(formNumber+1)
    } else return false
  };
  const previousForm = (e) => {
    e.preventDefault();
    if(formNumber>0  ) {
      setFormNumber(formNumber-1)
    } else return false
  };
const sendForm = e => {
  e.preventDefault();
  console.log(fields);
  setFormFields('');
  setFormNumber(0)
};
  const formArr = [<Form1 fields = {fields} handleChangeFields={handleChangeFields} nextForm={nextForm} key={1}/>, <Form2 fields = {fields} handleChangeFields={handleChangeFields} nextForm={nextForm} previousForm={previousForm}  key={2}/>, <Form3 fields = {fields} handleChangeFields={handleChangeFields} sendForm={sendForm} previousForm={previousForm} key={3}/>];

  return (
    <div className='container'>

      {formArr[formNumber]}

    </div>
  );
}

export default App;
