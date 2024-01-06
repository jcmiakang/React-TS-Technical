import { useMemo } from 'react';
import { Name } from '../App';
import DisplayContainer from './DisplayContainer';
import FormContainer from './FormContainer';
import primeFactorize from '../Utils/utils';

const ContentContainer = ({
  name,
  handleNameUpdate,
}: {
  name: Name;
  handleNameUpdate: (field: string, newName: string) => void;
}) => {
  const numOfFactors = useMemo(() => {
    return primeFactorize(100000000000000000).length;
  }, []);

  return (
    <div className='container'>
      <h5>{`Important Number: ${numOfFactors}`}</h5>
      <FormContainer handleNameUpdate={handleNameUpdate} name={name} />
      <DisplayContainer name={name} />
    </div>
  );
};

export default ContentContainer;
