import icons from './icons/iconsSVG';
import styled from 'styled-components';
import React from 'react';

const Svg = styled.svg`
  fill: none;
  stroke: rgba(0,0,0,1);
  stroke-width: 0px;
  width:100%;
  height:100%;
  transition: 0.2s all linear;
  margin: auto;
  vertical-align: middle;
  & g {
      fill:rgba(0,0,0,0.5);
  }
`;

const Icon = props => {
  const name = icons[props.name] ? props.name : "oi"; 
  console.log(name);
  return (
    <Svg viewBox="0 0 24 24">
        <g id={icons[name].id}>
          <path d= {icons[name].svg}/>
        </g>
    </Svg>
  )
}

export default Icon;
