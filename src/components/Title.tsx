interface TitleProps {
  children: string;
}

function Title({ children }: TitleProps) {
  return <h1 className="text-red-600">{children}</h1>;
}

export default Title;
