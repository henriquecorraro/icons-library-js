import icons from './icons/iconsSVG';
import styled from 'styled-components';
import Colors from './colors';
import React from 'react';
import propTypes from 'prop-types';

const colorDefault = Colors.greyDark;

const Icon = props => {
  const name = icons[props.name] ? props.name : "opaDeuRuim";
  const regex = /^((left|right|center)|\s+)$/;
  const position = regex.test(props.position) ? props.position : "left";
  const color = Colors[props.color] ? props.color : colorDefault;
  if(name === "opaDeuRuim"){
    console.error("Ops! Icone informado ("+props.name+") não existe!");
  }

  const Svg = styled.svg.attrs({
    className: "icon-" + position
  })`
    fill: none;
    stroke: #000;
    stroke-width: 0px;
    width:auto;
    height:100%;
    transition: 0.2s all linear;
    vertical-align: middle;
    & g {
        fill:${Colors[color]};
    }
    &.icon-right {
      float:right;
    }
    &.icon-left {
      float:left
    }
    &.icon-center {
      margin-bottom:12px;
    }
  `;

  return (
    <Svg viewBox="0 0 24 24">
        <g id={icons[name].id}>
          <path d= {icons[name].svg}/>
        </g>
    </Svg>
  )
}

Icon.propTypes = {
  name: propTypes.string,
  color: propTypes.string,
  position: propTypes.string
}

export default Icon;
