import React, {  useState } from 'react';
import { ISlide } from './slide';
import Card from '../card/card.component';
import Icon from '../icon/icon.component';
import "./slide.css";

export default function Slide(props: ISlide) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const maxLength = props.data.length;
  const id = Math.floor(Math.random() % 100);

  if(props.initialIndex)
    setCurrentPosition(props.initialIndex);

  const renderComponent = () => {
    return (
      <div className={`andrewkit-slide-${id}`}>
        {props.data[currentPosition]}
      </div>
    );
  };

  React.useEffect(() => {
    let opacity = 0;

    (
      document.querySelector(`.andrewkit-slide-${id}`) as HTMLDivElement
    ).style.opacity = opacity.toString();

    const animation = setInterval(() => {
      opacity += 0.1;

      (
        document.querySelector(`.andrewkit-slide-${id}`) as HTMLDivElement
      ).style.opacity = opacity.toString();

      if (opacity > 1.0) clearInterval(animation);
    }, 100);
  }, [currentPosition]);

  return (
    <Card
      customCSS={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ...props.customCSS
      }}
      hideBoxShadow={props.hideBoxShadow}
    >
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          justifyContent: 'center',
        }}
      >
        {currentPosition > 0 && (
          <button
            className="andrewkit-slide-arrow"
            onClick={() => setCurrentPosition(currentPosition - 1)}
          >
            <Icon icon={'arrow-left-square'} size={'1.5rem'}></Icon>
          </button>
        )}
        {renderComponent()}
        {currentPosition < maxLength - 1 && (
          <button
            className="andrewkit-slide-arrow"
            onClick={() => setCurrentPosition(currentPosition + 1)}
          >
            <Icon icon={'arrow-right-square'} size={'1.5rem'}></Icon>
          </button>
        )}
      </div>
      <meter
        className="andrewkit-slide-meter"
        min={0}
        max={maxLength}
        value={currentPosition + 1}
      />
    </Card>
  );
}
