import { makeAutoObservable } from "mobx";
import { ISelectionStore } from "../interfaces";
import { FiltrationType, SortType } from "../utils/consts/consts";

export default class SelectionStore implements ISelectionStore {
  _searchValue: string;
  _filtrationType: FiltrationType;
  _sortType: SortType;

  constructor() {
    this._searchValue = "";
    this._filtrationType = FiltrationType.ALL;
    this._sortType = SortType.POPULARITY;
    makeAutoObservable(this);
  }

  set searchValue(currentValue: string) {
    this._searchValue = currentValue;
  }

  set filtrationType(currentType: FiltrationType) {
    this._filtrationType = currentType;
  }

  set sortType(currentType: SortType) {
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
