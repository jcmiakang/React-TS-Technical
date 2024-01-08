import { useMemo, useState } from 'react';
import { Name } from '../App';
import DisplayContainer from './DisplayContainer';
import FormContainer from './FormContainer';
import primeFactorize from '../Utils/utils';

const ContentContainer = () => {
  const numOfFactors = useMemo(() => {
    return primeFactorize(100000000000000000).length;
  }, []);

  const [name, setName] = useState<Name>({
    first: '',
    last: '',
  });

  const handleNameUpdate = (field: string, newName: string) => {
    setName({
      ...name,
      [field]: newName,
    });
  };

  return (
    <section className='container'>
      <h5>{`Important Number: ${numOfFactors}`}</h5>
      <FormContainer handleNameUpdate={handleNameUpdate} name={name} />
      <DisplayContainer name={name} />
    </section>
  );
};

export default ContentContainer;
