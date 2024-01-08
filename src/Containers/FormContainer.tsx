import TextInput from '../Components/TextInput';
import { Name } from '../App';

interface FormContainerProps {
  handleNameUpdate: (field: string, newName: string) => void;
  name: Name;
}

const FormContainer = ({ handleNameUpdate, name }: FormContainerProps) => {
  return (
    <div className='container'>
      <h5>FormContainer</h5>
      <TextInput
        value='first'
        handleNameUpdate={handleNameUpdate}
        name={name.first}
      />
      <TextInput
        value='last'
        handleNameUpdate={handleNameUpdate}
        name={name.last}
      />
    </div>
  );
};

export default FormContainer;
