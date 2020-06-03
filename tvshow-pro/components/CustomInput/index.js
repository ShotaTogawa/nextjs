const CustomInput = ({
  name,
  placeholder = '',
  value,
  type = 'text',
  onChange = () => {},
}) => {
  return (
    <div className="custom-input">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
