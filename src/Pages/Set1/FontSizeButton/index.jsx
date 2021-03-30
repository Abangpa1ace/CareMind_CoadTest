import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../../Shared/StyledTags';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { flexCenter } from '../../../Styles/theme';

// 문제의 "아래 페이지" 링크가 없기에,
// Max, Min 사이의 폰트 사이즈를 조절하는 버튼(조건부 렌더링), 폰트 사이즈 범위에 따른 메세지(Dynamic) 를 임의 구현했습니다.

const MAX_FONTSIZE = 30;
const MIN_FONTSIZE = 5;

const FontSizeButton = () => {
  const [fontSize, setFontSize] = useState(16);
  const isFontUnder = fontSize <= MIN_FONTSIZE;
  const isFontOver = fontSize >= MAX_FONTSIZE;

  return (
    <FontSizeBtnPage>
      <SizeBtnCon>
        {!isFontUnder &&
          <Button
            onClick={() => setFontSize(fontSize - 1)}
            disabled={isFontUnder}
          >
            <FaMinusCircle />
          </Button>
        }

        <SizedText fontSize={fontSize} >
          {isFontUnder
            ? `폰트 크기는 최소 ${MIN_FONTSIZE}px 까지입니다.`
            : isFontOver
            ? `폰트 크기는 최대 ${MAX_FONTSIZE}px 까지입니다.`
            : "+, - 버튼을 누르면 폰트가 바뀝니다!"
          }
        </SizedText>

        {!isFontOver &&
          <Button
            onClick={() => setFontSize(fontSize + 1)}
            disabled={isFontOver}
          >
            <FaPlusCircle />
          </Button>
        }
      </SizeBtnCon>
    </FontSizeBtnPage>
  )
}

const FontSizeBtnPage = styled.main`
  ${flexCenter};
  height: 100vh;
`;

const SizeBtnCon = styled.div`
  ${flexCenter};
  position: relative;
  width: 600px;
  height: 250px;
  background: ${({ theme }) => theme.gray0};
  border-radius: 5px;

  button {
    position: absolute;
    bottom: 30px;

    &:first-child {
      left: 30px;
    }

    &:last-child {
      right: 30px;
    }

    svg {
      font-size: 30px;
    }
  }
`;

const SizedText = styled.p`
  font-size: ${({ fontSize }) => `${fontSize}px` || "initial"};
`;

export default FontSizeButton
