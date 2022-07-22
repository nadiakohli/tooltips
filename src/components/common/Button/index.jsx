import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

// Styles
const TooltipText = styled.div`
  max-height: ${({ height }) => height}px;
  position: absolute;
  ${({ width }) => width ? 'width: 250px;' : 'width: 100%;'};
  opacity: 0;
  color: #990000;
  background-color: #fff;
  border: 1px solid #990000;
  font-size: 11px;
  border-radius: 3px;
  z-index: 1001;
  padding: 5px;
  justify-content: center;

  ${({ position }) => {
    switch (position) {
      case 'bottom': return css`top: 115%; left: ${({ left }) => left}px;`;
      case 'left': return css`right: 105%; top: -2px;`;
      case 'right': return css`left: 105%; top: -2px;`;
      case 'top':
      default: return css`bottom: 115%; left: ${({ left }) => left}px;`;
    }
  }};
  

  &::after {
    content: " ";
    position: absolute;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #990000 transparent transparent transparent;

    ${({ position }) => {
      switch (position) {
        case 'top': return css`bottom: -10px; left: 50%;`;
        case 'right': return css`left: -5px; top: 50%; transform: rotate(90deg) translateX(-50%);`;
        case 'left': return css`right: -10px; top: 50%; transform: rotate(-90deg) translateX(50%);`;
        case 'bottom':
        default: return css`top: -11px; left: 50%; transform: rotate(-180deg);`;
      }
    }};
  }
`;

const Btn = styled.button`
  position: relative;
  cursor: pointer;
  padding: 10px 45px;
  color: #990000;
  background-color: #ff9999;
  border: 1px solid #990000;
  font-size: 16px;
  border-radius: 5px;
  font-family: 'Arima-Variable', sans-serif;

  &:hover ${TooltipText} {
    opacity: 1;
  }
`;

const Button = ({ positionOrder, height, width }) => {
  const [buttonWidth, setButtonWidth] = useState('');
  const [tooltipWidth, setTooltipWidth] = useState('');
  const [positionTooltip, setPositionTooltip] = useState('');
  const btn = useRef();
  const tooltip = useRef();

  const handleChange = () => {
    const { current: { offsetLeft, offsetTop, offsetWidth: btnWidth, offsetHeight: btnHeight } } = btn;
    const { current: { offsetWidth, offsetHeight } } = tooltip;

    const positionBtn = { x: offsetLeft, y: offsetTop };
    const tooltipSize = { width: offsetWidth, height: offsetHeight };
    const screenSize = { width: window.innerWidth, height: window.innerHeight };
    const btnSize = { width: btnWidth, height: btnHeight };

    setButtonWidth(btn.current.offsetWidth);
    setTooltipWidth(tooltip.current.offsetWidth);
    
    for (const order of positionOrder) {
      if (order === 'right') {
        if (screenSize.width - positionBtn.x - btnSize.width - tooltipSize.width > 0) {
          setPositionTooltip(order);
          break;
        };
      };
      
      if (order === 'bottom') {
        if (screenSize.height - positionBtn.y - btnSize.height - tooltipSize.height > 0) {
          setPositionTooltip(order);
          break;
        };
      };
      
      if (order === 'top') {
        if (positionBtn.y - btnSize.height - tooltipSize.height > 0) {
          setPositionTooltip(order);
          break;
        };
      };
      
      if (order === 'left') {
        if (positionBtn.x - btnSize.width - tooltipSize.width > 0) {
          setPositionTooltip(order);
          break;
        };
      };
    };
  };

  useEffect(() => {
    handleChange();
    window.addEventListener('resize', handleChange);

    return () => {
      window.addEventListener('resize', handleChange);
    };
  }, []);
  
  useEffect(() => {
    handleChange();
  }, [btn.current, tooltip.current, positionOrder]);

  return (
    <Btn ref={btn}>
      button
      <TooltipText
        left={-(tooltipWidth - buttonWidth) / 2}
        width={width}
        height={height}
        ref={tooltip}
        position={positionTooltip}
      >
      "May you live all the days of your life." 
      </TooltipText>
    </Btn>
  );
};

export default Button;
