import React, { FunctionComponent } from 'react';
import { square } from '@bloodworks/mathfuncs';

interface BgBoxProps {
  imageUrl?: string;
  bgColor?: string;
  number: number;
}

const BgBox: FunctionComponent<BgBoxProps> = ({ imageUrl, bgColor = 'purple', number }) => (
  <div style={{backgroundColor: bgColor, backgroundImage: `url(${imageUrl})`}}>
    { square(number) }
  </div>
);

export default BgBox;
