import { FC, useRef } from "react";
import { useScroll } from "../../../hooks";
import { Title } from "../../common";
import ExtraInfoCart from "../../ExtraInfoCart";
import Slider from "../../Slider";
import { CSSTransition } from "react-transition-group";
import ShoppingCartHeader from "../ShoppingCartHeader";
import ShoppingCartItemsList from "../list/ShoppingCartList";
import ShoppingCartFooter from "../footer/ShoppingCartFooter";
import "./style.scss";

// TODO: 1. БЕСКОНЕЧНЫЙ СКРОЛЛ ПИЦЦ / СДЕЛАНО

// TODO: 2 ПОДКЛЮЧИТЬ REACT SKELETON ДЛЯ СПИСКА ТОВАРОВ / СДЕЛАНО

// TODO: 3 ИСПРАВИТЬ ВЫБОВ ВАРИАНТА ПИЦЦЫ В МОДАЛЬНОМ ОКНЕ  / СДЕЛАНО

//  TODO: 4 ПРОСМОТРЕТЬ КОД // ПЕРЕПИСАТЬ БОЛЕЕ ЧИТАБЕЛЬНО

// ? temp
import image from "../../../assets/images/711b5f74b1ad419f9c4e61784474fa1d_760x760.jpeg";

const SideBarModal: FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const childScrollRef = useRef<HTMLElement | null>(null);
  const { isIntersecting } = useScroll(
    scrollRef.current as HTMLElement,
    childScrollRef
  );

  return (
    <div className="shopping-cart">
      <div ref={scrollRef} className="scroll">
        <main className="content">
          <ShoppingCartHeader />

          <ShoppingCartItemsList />

          <Title className="slider-title">Добавить к заказу?</Title>
          <Slider>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
              return (
                <ExtraInfoCart
                  image={image}
                  className="slider-element"
                  title="Слоеные палочки с брусникой"
                  secondaryText="8,90 руб."
                />
              );
            })}
          </Slider>
        </main>

        <ShoppingCartFooter ref={childScrollRef} full />

        {/* //?  footer version that will be mounted when main version is not on screen */}
        <CSSTransition
          in={!isIntersecting}
          timeout={200}
          classNames="sticky"
          unmountOnExit
        >
          <ShoppingCartFooter sticky />
        </CSSTransition>
      </div>
    </div>
  );
};

export default SideBarModal;
