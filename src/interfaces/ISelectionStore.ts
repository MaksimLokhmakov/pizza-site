import { FiltrationType, SortType } from "../utils/consts/consts";

export default interface ISelectionStore {
  searchValue: string;
  filtrationType: FiltrationType;
  sortType: SortType;
}
