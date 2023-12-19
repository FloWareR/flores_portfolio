import { TypeAnimation } from 'react-type-animation';


const TypeAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        1500,
        "Game Developer",
        2000,
        "Web Developer",
        2000,
      ]}
      wrapper="span"
      speed={25}
      className='text-anim'
      repeat={Infinity}
    />
  );
};

export default TypeAnim