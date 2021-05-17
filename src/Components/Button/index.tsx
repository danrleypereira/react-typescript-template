
import React, { ButtonHTMLAttributes, Children, ReactNode } from "react";

// import { Container } from './styles';

// interface IProps {
//   children: ReactNode;
//   // any other props that come into the component
// }

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({children, ...rest}: ButtonProps) => {
  return (
    <button type="button" {...rest}>
      {children}
    </button>
  );
};

// const Button: React.FC<ButtonProps> = ({children, ...rest }) => {
//   return (
//     <button type="button" {...rest}>
//       {children}
//     </button>
//   );
// };

export default Button;
