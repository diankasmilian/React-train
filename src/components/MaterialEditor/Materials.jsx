import { MaterialCard } from "./MaterialCard";

export const Materials = ({ items, ...otherProps }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <MaterialCard item={item} {...otherProps}/>
        </li>
      ))}
    </ul>
  );
};
