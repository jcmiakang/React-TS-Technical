const TextInput = ({
  value,
  handleNameUpdate,
  name,
}: {
  name: string;
  value: string;
  handleNameUpdate: (field: string, newName: string) => void;
}) => {
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
