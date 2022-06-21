import { makeAutoObservable } from "mobx";
import { FiltrationType, SortType } from "../utils/consts/consts";

export default class SelectionStore {
  _searchValue: string;
  _filtrationType: FiltrationType;
  _sortType: SortType;

  constructor() {
    this._searchValue = "";
    this._filtrationType = FiltrationType.ALL;
    this._sortType = SortType.DEFAULT;
    makeAutoObservable(this);
  }

  setSearchValue(currentValue: string) {
    this._searchValue = currentValue;
  }

  setFiltrationType(currentType: FiltrationType) {
    this._filtrationType = currentType;
  }

  setSortType(currentType: SortType) {
    this._sortType = currentType;
  }

  get searchValue() {
    return this._searchValue;
  }

  get filtrationType() {
    return this._filtrationType;
  }

  get sortType() {
    return this._sortType;
  }
}
