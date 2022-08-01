import { makeAutoObservable } from "mobx";
import { IPizzaStore } from "../interfaces";
import IPizza from "../interfaces/IPizza";

export default class PizzaStore implements IPizzaStore {
  _pizzas: IPizza[];

  constructor() {
    this._pizzas = [
      {
        id: "0",
        type: "Мясная",
        name: "Четыре сезона",
        variants: [
          {
            id: "0",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/b5cbd760222540e2b7ee879d3638f4f5_366x366.jpeg",
            dough: "традиционное",
            size: 25,
            weight: 440,
            price: 17.5,
          },
          {
            id: "1",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/711b5f74b1ad419f9c4e61784474fa1d_233x233.jpeg",
            dough: "традиционное",
            size: 30,
            weight: 660,
            price: 20.5,
          },
          {
            id: "2",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/dfede3db03484c829e2e0015c55065dc_366x366.jpeg",
            dough: "традиционное",
            size: 35,
            weight: 900,
            price: 25.5,
          },
          {
            id: "3",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/c884ee2e604944118538cbeae314b6ff_366x366.jpeg",
            dough: "тонкое",
            size: 30,
            weight: 550,
            price: 20.5,
          },
          {
            id: "4",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/84cfa3e070da4689aef99a5c17fd6c38_292x292.jpeg",
            dough: "тонкое",
            size: 35,
            weight: 780,
            price: 25.5,
          },
        ],
        ingredients: [
          {
            id: "1",
            name: "итальянские травы",
            required: false,
          },
          {
            id: "2",
            name: "томатный соус",
            required: true,
          },
          {
            id: "3",
            name: "томаты",
            required: false,
          },
          {
            id: "4",
            name: "пикантная пепперони",
            required: false,
          },
          {
            id: "5",
            name: " кубики брынзы",
            required: false,
          },
          {
            id: "6",
            name: "моцарелла",
            required: true,
          },
          {
            id: "7",
            name: "ветчина",
            required: false,
          },
          {
            id: "8",
            name: "шампиньоны",
            required: false,
          },
        ],
        addons: [
          {
            id: "1",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAD52EEF6AB",
            name: "Острая чоризо",
            price: 2.4,
          },
          {
            id: "2",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/80ec81ec3d034f8dbae515baf85acb4f.png",
            name: "Митболы",
            price: 2.4,
          },
          {
            id: "3",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD1DBB21AA",
            name: "Острая халапеньо",
            price: 1.8,
          },
          {
            id: "4",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD8A35FD03",
            name: "Чеддер и пармезан",
            price: 2.4,
          },
          {
            id: "5",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD72ED2820",
            name: "Ананасы",
            price: 1.8,
          },
          {
            id: "6",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD64FE3988",
            name: "Томаты",
            price: 1.8,
          },
          {
            id: "7",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAD273248DA",
            name: "Маслины",
            price: 1.8,
          },
        ],
      },

      {
        id: "1",
        type: "Мясная",
        name: "Пепперони",
        variants: [
          {
            id: "0",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/c648f91c0256497f86754e3419571f7c_183x183.jpeg",
            dough: "традиционное",
            size: 25,
            weight: 390,
            price: 13.9,
          },
          {
            id: "1",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/1b7bccc8aa744d7daf8da8b799c5fbec_366x366.jpeg",
            dough: "традиционное",
            size: 30,
            weight: 580,
            price: 21.9,
          },
          {
            id: "2",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/9f5a83207a0e46c3b2e9fc98508bdffd_183x183.jpeg",
            dough: "традиционное",
            size: 35,
            weight: 780,
            price: 26.4,
          },
          {
            id: "3",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/678fd23924ca4a948feef8936bca6d4e_292x292.jpeg",
            dough: "тонкое",
            size: 30,
            weight: 480,
            price: 21.9,
          },
          {
            id: "4",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/2f4780b5b24149cebca03fc68785c083_233x233.jpeg",
            dough: "тонкое",
            size: 35,
            weight: 660,
            price: 26.4,
          },
        ],
        ingredients: [
          {
            id: "1",
            name: "томатный соус",
            required: true,
          },
          {
            id: "2",
            name: "пикантная пепперони",
            required: false,
          },
          {
            id: "3",
            name: "моцарелла",
            required: true,
          },
        ],
        addons: [
          {
            id: "1",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAD52EEF6AB",
            name: "Острая чоризо",
            price: 2.4,
          },
          {
            id: "2",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/80ec81ec3d034f8dbae515baf85acb4f.png",
            name: "Митболы",
            price: 2.4,
          },
          {
            id: "3",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD1DBB21AA",
            name: "Острая халапеньо",
            price: 1.8,
          },
          {
            id: "4",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD8A35FD03",
            name: "Чеддер и пармезан",
            price: 2.4,
          },
          {
            id: "5",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD72ED2820",
            name: "Ананасы",
            price: 1.8,
          },
          {
            id: "6",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD64FE3988",
            name: "Томаты",
            price: 1.8,
          },
          {
            id: "7",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAD273248DA",
            name: "Маслины",
            price: 1.8,
          },
        ],
      },
      {
        id: "2",
        type: "Мясная",
        name: "Ветчина и сыр",
        variants: [
          {
            id: "0",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/292508bb611c45cfa1ce5ca3c8936c6d_233x233.jpeg",
            dough: "традиционное",
            size: 25,
            weight: 330,
            price: 10.9,
          },
          {
            id: "1",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/736df54c94c44518a90a3ccffe7febdd_292x292.jpeg",
            dough: "традиционное",
            size: 30,
            weight: 500,
            price: 17.9,
          },
          {
            id: "2",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/92790a7151de475bb2e1b29e86c531fb_366x366.jpeg",
            dough: "традиционное",
            size: 35,
            weight: 670,
            price: 23.4,
          },
          {
            id: "3",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/f08c2147ffd64dc594a25da0372f8621_366x366.jpeg",
            dough: "тонкое",
            size: 30,
            weight: 400,
            price: 17.9,
          },
          {
            id: "4",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/f059bb5535bc4f578a0caa3fbe417d3e_366x366.jpeg",
            dough: "тонкое",
            size: 35,
            weight: 560,
            price: 23.4,
          },
        ],
        ingredients: [
          {
            id: "1",
            name: "моцарелла",
            required: true,
          },

          {
            id: "2",
            name: "ветчина",
            required: false,
          },
          {
            id: "3",
            name: "соус альфредо",
            required: true,
          },
        ],
        addons: [
          {
            id: "1",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAD52EEF6AB",
            name: "Острая чоризо",
            price: 2.4,
          },
          {
            id: "2",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/80ec81ec3d034f8dbae515baf85acb4f.png",
            name: "Митболы",
            price: 2.4,
          },
          {
            id: "3",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD1DBB21AA",
            name: "Острая халапеньо",
            price: 1.8,
          },
          {
            id: "4",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD8A35FD03",
            name: "Чеддер и пармезан",
            price: 2.4,
          },
          {
            id: "5",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD72ED2820",
            name: "Ананасы",
            price: 1.8,
          },
          {
            id: "6",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD64FE3988",
            name: "Томаты",
            price: 1.8,
          },
          {
            id: "7",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAD273248DA",
            name: "Маслины",
            price: 1.8,
          },
        ],
      },

      {
        id: "3",
        type: "Мясная",
        name: "Гавайская",
        variants: [
          {
            id: "0",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/aa2f3b5b54e94dbb93603268803679fb_233x233.jpeg",
            dough: "традиционное",
            size: 25,
            weight: 430,
            price: 17.9,
          },
          {
            id: "1",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/4aec6cc08719404e94262698eb014cba_292x292.jpeg",
            dough: "традиционное",
            size: 30,
            weight: 650,
            price: 24.9,
          },
          {
            id: "2",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/593808919f0041a78bc7de08fe002fa5_292x292.jpeg",
            dough: "традиционное",
            size: 35,
            weight: 870,
            price: 28.4,
          },
          {
            id: "3",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/94bb84a3bd1a4652aa37cdf355c6a227_146x146.jpeg",
            dough: "тонкое",
            size: 30,
            weight: 540,
            price: 24.9,
          },
          {
            id: "4",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Products/2c7344fe6b264676a35e4b368bf2e6e8_292x292.jpeg",
            dough: "тонкое",
            size: 35,
            weight: 750,
            price: 28.4,
          },
        ],
        ingredients: [
          {
            id: "1",
            name: "ветчина",
            required: false,
          },
          {
            id: "2",
            name: "ананасы",
            required: false,
          },
          {
            id: "3",
            name: "моцарелла",
            required: true,
          },
          {
            id: "4",
            name: "томатный соус",
            required: true,
          },
        ],
        addons: [
          {
            id: "1",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAD52EEF6AB",
            name: "Острая чоризо",
            price: 2.4,
          },
          {
            id: "2",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/80ec81ec3d034f8dbae515baf85acb4f.png",
            name: "Митболы",
            price: 2.4,
          },
          {
            id: "3",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD1DBB21AA",
            name: "Острая халапеньо",
            price: 1.8,
          },
          {
            id: "4",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD8A35FD03",
            name: "Чеддер и пармезан",
            price: 2.4,
          },
          {
            id: "5",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD72ED2820",
            name: "Ананасы",
            price: 1.8,
          },
          {
            id: "6",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAD64FE3988",
            name: "Томаты",
            price: 1.8,
          },
          {
            id: "7",
            image:
              "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAD273248DA",
            name: "Маслины",
            price: 1.8,
          },
        ],
      },
    ];
    makeAutoObservable(this);
  }

  get pizzas() {
    return this._pizzas;
  }

  set pizzas(currentValue: IPizza[]) {
    this._pizzas = currentValue;
  }

  getFilteredBySearchPizzas(searchValue: string) {
    const lcSearchValue = searchValue.toLowerCase();

    const filteredPizzas = this._pizzas.filter((pizza) => {
      const lcName = pizza.name.toLowerCase();
      return lcName.includes(lcSearchValue);
    });

    return filteredPizzas;
  }

  getPizzaByID(currentId: string | undefined) {
    if (!currentId) {
      return this._pizzas[0];
    }

    const pizza = this._pizzas.find((pizza) => pizza.id === currentId);
    if (!pizza) {
      return this._pizzas[0];
    }

    return pizza;
  }
}
