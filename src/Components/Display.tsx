interface DisplayProps {
  value: string;
  name: string;
}

const Display = ({ value, name }: DisplayProps) => {
  return (
    <div className='value'>
      {value}: {name}
    </div>
  );
};

export default Display;
