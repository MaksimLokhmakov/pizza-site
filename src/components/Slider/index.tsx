import { FC, ReactNode, useState, useRef, useEffect, useMemo } from "react";
import { Button, Image } from "../common";
import { useHover } from "../../hooks";
import classes from "../../utils/classes";
import arrow from "../../assets/icons/up-arrow-fill.svg";
import "./style.scss";

interface SliderProps {
  children: ReactNode;
  hoverOffsetValue?: number;
}

const Slider: FC<SliderProps> = ({ children, hoverOffsetValue = 20 }) => {
  const [offset, setOffset] = useState(0);
  const [currentElementIndex, setCurrentElementIndex] = useState(0);
  const [elements, setElements] = useState<NodeListOf<ChildNode> | null>(null);
  const [hoverOffset, setHoverOffset] = useState(0);

  const backButtonRef = useRef(null);
  const forwardButtonRef = useRef(null);
  const allCardsConteinerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const elements = allCardsConteinerRef.current?.childNodes;

    if (elements) setElements(elements);
  }, []);

  const getElementOffset = (element: HTMLDivElement) => {
    const elementMarginRight = Number(
      getComputedStyle(element).marginRight.replace(/px/, "")
    );
    const elementMarginLeft = Number(
      getComputedStyle(element).marginLeft.replace(/px/, "")
    );
    const elementWidth = element.offsetWidth;

    const offset = elementWidth + elementMarginLeft + elementMarginRight;
    return offset;
  };

  const totalOffset = useMemo(() => {
    if (elements === null) return 0;

    let sliderElementsWidth = 0;
    (elements as NodeListOf<HTMLDivElement>).forEach((child) => {
      sliderElementsWidth += getElementOffset(child);
    });

    return -sliderElementsWidth;
  }, [elements]);

  const elementsWindowWidth = useMemo(() => {
    let width = 0;

    if (allCardsConteinerRef?.current) {
      width = (allCardsConteinerRef?.current as HTMLDivElement).offsetWidth;
    }

    return width;
  }, [elements]);

  const isNotEndOfSlider = offset > totalOffset + elementsWindowWidth;

  const handleClickBackButton = () => {
    if (offset !== 0) setCurrentElementIndex((prev) => prev - 1);
  };
  const handleClickForwardButton = () => {
    if (isNotEndOfSlider) setCurrentElementIndex((prev) => prev + 1);
  };

  const isHoverBackButton = useHover(backButtonRef);
  const isHoverForwardButton = useHover(forwardButtonRef);

  useEffect(() => {
    let currentOffset = 0;

    elements &&
      (elements as NodeListOf<HTMLDivElement>).forEach((child, index) => {
        if (currentElementIndex > index) {
          currentOffset -= getElementOffset(child);
        }
      });

    if (currentOffset <= totalOffset + elementsWindowWidth) {
      return setOffset(totalOffset + elementsWindowWidth);
    }

    setOffset(currentOffset);
  }, [currentElementIndex]);

  useEffect(() => {
    if (isHoverBackButton && offset !== 0) {
      return setHoverOffset(hoverOffsetValue);
    }

    setHoverOffset(0);
  }, [isHoverBackButton]);

  useEffect(() => {
    if (isHoverForwardButton && isNotEndOfSlider) {
      return setHoverOffset(-hoverOffsetValue);
    }

    setHoverOffset(0);
  }, [isHoverForwardButton]);

  const forwardButtonImageClasses = classes([
    "slider-arrow",
    "slider-arrow-forward",
    isHoverForwardButton && isNotEndOfSlider ? "visible" : "",
  ]);

  const backButtonImageClasses = classes([
    "slider-arrow",
    "slider-arrow-back",
    isHoverBackButton && offset < 0 ? "visible" : "",
  ]);

  return (
    <section className="slider">
      <div className="slider-window">
        <div
          ref={allCardsConteinerRef}
          className="all-cards-conteiner"
          style={{ transform: `translateX(${offset + hoverOffset + "px"})` }}
        >
          {children}
        </div>
      </div>

      <Button
        onClick={handleClickForwardButton}
        ref={forwardButtonRef}
        className="slider-button-forward slider-button"
      >
        <Image src={arrow} alt="arrow" className={forwardButtonImageClasses} />
      </Button>

      <Button
        onClick={handleClickBackButton}
        ref={backButtonRef}
        className="slider-button-back slider-button"
      >
        <Image src={arrow} alt="arrow" className={backButtonImageClasses} />
      </Button>
    </section>
  );
};

export default Slider;
