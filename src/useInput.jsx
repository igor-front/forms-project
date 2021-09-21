import {useState} from 'react';

export default function useInput (initial) {
const [fields,setFormFields] = useState(initial);

const handleChangeFields = (e) => {
  const {name, value} = e.target;
  setFormFields({...fields , [name]:value});
};

return {
  fields,
  handleChangeFields,
  setFormFields
}
}
