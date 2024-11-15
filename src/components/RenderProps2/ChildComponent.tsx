interface ChildComponentProps {
  data: string[];
}

const ChildComponent = ({ data }: ChildComponentProps) => {
  return data.map((item, index) => <li key={index}>{item}</li>);
};

export default ChildComponent;
