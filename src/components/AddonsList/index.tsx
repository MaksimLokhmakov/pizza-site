import { FC, memo } from "react";
import IPizzaAddon from "../../interfaces/IPizzaAddon";
import AddonItem from "../AddonItem";
import "./style.scss";

interface AddonsListProps {
  addons: IPizzaAddon[];
  onClickAddon?: () => void;
}

const AddonsList: FC<AddonsListProps> = ({
  addons,
  onClickAddon = () => {},
}) => {
  return (
    <>
      <h2 className="title">Добавить в пиццу</h2>
      <section className="addons-list">
        {addons.map((addon) => (
          <AddonItem key={addon.id} addon={addon} onClick={onClickAddon} />
        ))}
      </section>
    </>
  );
};

export default memo(AddonsList);
