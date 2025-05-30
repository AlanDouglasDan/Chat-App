import Svg, { Mask, Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgComponent = ({ height, width, color }: SvgProps) => (
  <Svg width={width} height={height} fill='none' viewBox='0 0 24 24'>
    <Mask
      id='prefix__a'
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill='#D9D9D9' d='M0 0h24v24H0z' />
    </Mask>
    <G mask='url(#prefix__a)'>
      <Path
        fill={color}
        d='m12 13.054 3.073 3.073q.208.208.522.213a.7.7 0 0 0 .532-.213.72.72 0 0 0 .217-.527.72.72 0 0 0-.217-.527L13.054 12l3.073-3.073a.73.73 0 0 0 .213-.522.7.7 0 0 0-.213-.532.72.72 0 0 0-.527-.217.72.72 0 0 0-.527.217L12 10.946 8.927 7.873a.73.73 0 0 0-.522-.213.7.7 0 0 0-.532.213.72.72 0 0 0-.217.527q0 .31.217.527L10.946 12l-3.073 3.073a.73.73 0 0 0-.213.522.7.7 0 0 0 .213.532q.217.217.527.217a.72.72 0 0 0 .527-.217zm.002 8.446a9.3 9.3 0 0 1-3.706-.748 9.6 9.6 0 0 1-3.016-2.03 9.6 9.6 0 0 1-2.032-3.016 9.25 9.25 0 0 1-.748-3.704q0-1.972.748-3.706a9.6 9.6 0 0 1 2.03-3.016 9.6 9.6 0 0 1 3.016-2.032 9.25 9.25 0 0 1 3.704-.748q1.972 0 3.706.748a9.6 9.6 0 0 1 3.017 2.03 9.6 9.6 0 0 1 2.03 3.016 9.25 9.25 0 0 1 .749 3.704q0 1.972-.748 3.706a9.6 9.6 0 0 1-2.03 3.017 9.6 9.6 0 0 1-3.016 2.03 9.25 9.25 0 0 1-3.704.749'
      />
    </G>
  </Svg>
);
export default SvgComponent;
