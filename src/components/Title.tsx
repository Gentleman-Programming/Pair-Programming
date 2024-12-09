interface TitleProps {
  children: string;
}

function Title({ children }: TitleProps) {
  return <h1>{children}</h1>;
}

export default Title;
