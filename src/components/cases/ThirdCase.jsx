import React, { useMemo } from 'react';
import styled from 'styled-components';

// Components
import Button from 'components/common/Button';

// Styles
const SecondWrap = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const WrapBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 200px;
`;

const ThirdCase = () => {
  const positionOrder = useMemo(() => ['right', 'bottom','top'], []);

  return (
    <SecondWrap>
      <WrapBtn>
        <Button positionOrder={positionOrder} />
        <Button width="250px" positionOrder={positionOrder} />
      </WrapBtn>
    </SecondWrap>
  ) 
};

export default ThirdCase;
