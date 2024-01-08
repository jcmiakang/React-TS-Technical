interface TextInputProps {
  value: string;
  name: string;
  handleNameUpdate: (field: string, newName: string) => void;
}

const TextInput = ({ value, name, handleNameUpdate }: TextInputProps) => {
  return (
    <div className='field'>
      {`${value}: `}
      <input
        value={name}
        onChange={(e) => handleNameUpdate(value, e.target.value)}
      />
    </div>
  );
};

export default TextInput;
