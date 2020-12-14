import React, { FunctionComponent } from 'react';
import { square } from '@bloodworks/mathfuncs';

interface BgBoxProps {
  imageUrl?: string;
  bgColor?: string;
  number: number;
}

const BgBox: FunctionComponent<BgBoxProps> = ({ imageUrl, bgColor = 'purple', number }) => (
  <div className="bgbox">
    <style>{`
      background-color: ${bgColor};
      background-image: 'url(${imageUrl})';
    `}</style>
    { square(number) }
  </div>
);

export default BgBox;
