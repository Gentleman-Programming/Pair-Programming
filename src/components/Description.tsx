interface Props {
  descriptionLabel: string;
  descriptionValue: number;
}

function Description({ descriptionLabel, descriptionValue }: Props) {
  return (
    <p>
      {descriptionLabel}:
      <span className="text-red-500 pl-1">{descriptionValue}</span>
    </p>
  );
}

export default Description;
