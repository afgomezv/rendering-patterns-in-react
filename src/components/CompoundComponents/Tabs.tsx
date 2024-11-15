import {
  Children,
  isValidElement,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import classes from "./CompoundComponents.module.css";

interface TabsProps {
  children: ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const tabElements = Children.toArray(children).filter(
    (child): child is ReactElement => isValidElement(child)
  );

  return (
    <div className={classes.Tabs}>
      <ul>
        {tabElements.map((child, index) => (
          <li
            key={index}
            className={`${index === activeIndex ? classes.TabActive : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </li>
        ))}
      </ul>
      <p className={classes.TanContent}>{tabElements[activeIndex]}</p>
    </div>
  );
};

export default Tabs;
