import { useMemo, useState } from 'react';
import { Name } from '../App';
import DisplayContainer from './DisplayContainer';
import FormContainer from './FormContainer';
import primeFactorize from '../Utils/utils';

const ContentContainer = () => {
  // I implemented a 'useMemo' hook to cache the result of 'primeFactorize'.
  // This solution is in place of the previous 'useEffect' hook I implemented.
  // Eliminates lagging from user input by only running the computation once.
  const numOfFactors = useMemo(() => {
    return primeFactorize(100000000000000000).length;
  }, []);

  // I changed the scope of this 'useState' hook to the 'ContentContainer' as 'name' is not used in 'App'.
  // This reduces unnecessary re-rendering of other components.
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
