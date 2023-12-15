const Display = ({ value, name }: { value: string, name: string}) => {

  return (
    <div className="value">
      {value}: {name}
    </div>
  );
};

export default Display