import React, { useMemo } from 'react';
import styled from 'styled-components';

// Components
import Button from 'components/common/Button';

// Styles
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
`;

const WrapBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SecondCase = () => {
  const positionOrder = useMemo(() => ['bottom','top'], []);

  return (
    <Wrapper>
      <WrapBtn>
        <Button positionOrder={positionOrder} />
        <Button positionOrder={positionOrder} />
        <Button positionOrder={positionOrder} />
      </WrapBtn>
      <WrapBtn>
        <Button positionOrder={positionOrder} />
        <Button positionOrder={positionOrder} />
        <Button positionOrder={positionOrder} />
      </WrapBtn>
      <WrapBtn>
        <Button positionOrder={positionOrder} />
        <Button positionOrder={positionOrder} />
        <Button positionOrder={positionOrder} />
      </WrapBtn>
    </Wrapper>
  ) 
};

export default SecondCase;
