import Display from '../Components/Display';
import { Name } from '../App';

interface DisplayContainerProps {
  name: Name;
}

const DisplayContainer = ({ name }: DisplayContainerProps) => {
  return (
    <div className='container'>
      <h5>DisplayContainer</h5>
      <Display value='first name' name={`${name.first}`} />
      <Display value='last name' name={`${name.last}`} />
    </div>
  );
};

export default DisplayContainer;
