import { FC, memo } from "react";
import IPizzaAddon from "../../../../interfaces/IPizzaAddon";
import { Title } from "../../../common";
import AddonItem from "../AddonItem";
import "./style.scss";

interface AddonsListProps {
  addons: IPizzaAddon[];
  formedAddons: IPizzaAddon[];
  onClickAddon?: (addon: IPizzaAddon) => void;
}

const AddonsList: FC<AddonsListProps> = ({
  addons,
  formedAddons,
  onClickAddon,
}) => {
  return (
    <>
      <Title className="title">Добавить в пиццу</Title>
      <section className="addons-list">
        {addons.map((addon) => {
          const dataSelected = formedAddons.includes(addon);

          return (
            <AddonItem
              key={addon.id}
              addon={addon}
              onClick={onClickAddon}
              dataSelected={dataSelected}
            />
          );
        })}
      </section>
    </>
  );
};

export default memo(AddonsList);
