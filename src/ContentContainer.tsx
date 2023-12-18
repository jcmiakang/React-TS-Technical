import { Name } from "./App";
import DisplayContainer from "./DisplayContainer";
import FormContainer from "./FormContainer";
import primeFactorize from "./utils";


const ContentContainer = ({name, handleNameUpdate}: { name: Name, handleNameUpdate:(field: "first" | "last", newName: string) => void }) => {

  const numOfFactors =() => {
    // This takes a long time to run
    return primeFactorize(100000000000000000).length
  }
  

  return (
    <div className="container">
      <h5>{`Important Number: ${numOfFactors()}`}</h5>
      <FormContainer handleNameUpdate={handleNameUpdate} name={name} />
      <DisplayContainer name={name} />
    </div>
  );
};

export default ContentContainer
