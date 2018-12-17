import React, {useState} from 'react';

const Slider = props => {
  const [value, setValue] = useState(props.defaultValue);
  const onChange = (event) => {
    setValue(event.target.value);
    props.onChange(+event.target.value);
  };
  return (
    <div>
      <input
        {...props}
        onChange={onChange}
        type={'range'}
        value={value} />
    </div>
  );
};

export default Slider;
