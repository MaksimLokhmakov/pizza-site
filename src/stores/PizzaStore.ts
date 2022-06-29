import { makeAutoObservable } from "mobx";
import IPizza from "../interfaces/IPizza";

// * temp
import pizzaImg from "../assets/images/711b5f74b1ad419f9c4e61784474fa1d_760x760.jpeg";

interface IPizzaStore {
  _pizzas: IPizza[] | null;

  setPizzas: (currentValue: IPizza[]) => void;
  getPizzaByID: (currentId: string) => IPizza | undefined;
}

export default class PizzaStore implements IPizzaStore {
  _pizzas: IPizza[] | null;

  constructor() {
    this._pizzas = [
      {
        id: "0bc9a360-77b7-4675-a03e-506e3e3445a1",
        type: "Мясная",
        ingredients: [
          {
            name: "итальянские травы",
            required: true,
          },
          {
            name: "томатный соус",
            required: true,
          },
          {
            name: "томаты",
            required: false,
          },
          {
            name: "пикантная пепперони",
            required: true,
          },
          {
            name: "кубики брынзы",
            required: false,
          },
          {
            name: "моцарелла",
            required: true,
          },
          {
            name: "ветчина",
            required: true,
          },
          {
            name: "шампиньоны",
            required: true,
          },
        ],
        img: pizzaImg,
        name: "Маргарита",
        dough: "традиционное",
        minWeight: 420,
        size: 25,
        price: 21.5,
      },
      {
        id: "0bc9a360-77b7-4675-a03e-506e3e3445a2",
        type: "Мясная",
        ingredients: [
          {
            name: "итальянские травы",
            required: true,
          },
          {
            name: "томатный соус",
            required: true,
          },
          {
            name: "томаты",
            required: true,
          },
          {
            name: "пикантная пепперони",
            required: true,
          },
          {
            name: "кубики брынзы",
            required: true,
          },
          {
            name: "моцарелла",
            required: true,
          },
          {
            name: "ветчина",
            required: true,
          },
          {
            name: "шампиньоны",
            required: true,
          },
        ],
        img: pizzaImg,
        name: "Пепперони",
        dough: "традиционное",
        minWeight: 430,
        size: 25,
        price: 29.5,
      },
      {
        id: "0bc9a360-77b7-4675-a03e-506e3e3445a3",
        type: "Мясная",
        ingredients: [
          {
            name: "итальянские травы",
            required: true,
          },
          {
            name: "томатный соус",
            required: true,
          },
          {
            name: "томаты",
            required: true,
          },
          {
            name: "пикантная пепперони",
            required: true,
          },
          {
            name: "кубики брынзы",
            required: true,
          },
          {
            name: "моцарелла",
            required: true,
          },
          {
            name: "ветчина",
            required: true,
          },
          {
            name: "шампиньоны",
            required: true,
          },
        ],
        img: pizzaImg,
        name: "Кавказская",
        dough: "традиционное",
        minWeight: 450,
        size: 25,
        price: 47.5,
      },
      {
        id: "0bc9a360-77b7-4675-a03e-506e3e3445a4",
        type: "Мясная",
        ingredients: [
          {
            name: "итальянские травы",
            required: true,
          },
          {
            name: "томатный соус",
            required: true,
          },
          {
            name: "томаты",
            required: true,
          },
          {
            name: "пикантная пепперони",
            required: true,
          },
          {
            name: "кубики брынзы",
            required: true,
          },
          {
            name: "моцарелла",
            required: true,
          },
          {
            name: "ветчина",
            required: true,
          },
          {
            name: "шампиньоны",
            required: true,
          },
        ],
        img: pizzaImg,
        name: "Пепперонита",
        dough: "традиционное",
        minWeight: 390,
        size: 25,
        price: 13.5,
      },
      {
        id: "0bc9a360-77b7-4675-a03e-506e3e3445a5",
        type: "Мясная",
        ingredients: [
          {
            name: "итальянские травы",
            required: true,
          },
          {
            name: "томатный соус",
            required: true,
          },
          {
            name: "томаты",
            required: true,
          },
          {
            name: "пикантная пепперони",
            required: true,
          },
          {
            name: "кубики брынзы",
            required: true,
          },
          {
            name: "моцарелла",
            required: true,
          },
          {
            name: "ветчина",
            required: true,
          },
          {
            name: "шампиньоны",
            required: true,
          },
        ],
        img: pizzaImg,
        name: "Сеньорита",
        dough: "традиционное",
        minWeight: 400,
        size: 25,
        price: 16.5,
      },
    ];
    makeAutoObservable(this);
  }

  setPizzas(currentValue: IPizza[]) {
    this._pizzas = currentValue;
  }

  getPizzaByID(currentId: string) {
    return this._pizzas?.find((pizza) => pizza.id === currentId);
  }

  get pizzas() {
    return this._pizzas;
  }
}
