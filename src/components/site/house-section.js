/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  gryffindorColors,
  hufflepuffColors,
  slytherinColors,
  ravenclawColors,
} from "./../../helpers/helpers";
import styled from "@emotion/styled";

const House = styled.a`
  color: #fff;

  &:hover {
    background-image: ${(props) => props.house};
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }
`;

const HouseSection = ({ getHouse }) => {
  return (
    <section
      sx={{
        gridArea: "house",
        borderRight: "solid 2px",
        borderColor: "white",
        display: "flex",
        alignItems: "start",
        justifyContent: "space-evenly",
      }}
    >
      <ul
        sx={{
          listStyle: "none",
          cursor: "crosshair",
          fontFamily: "heading",
          fontSize: "2em",
        }}
      >
        <li>
          <House
            onClick={() => getHouse("gryffindor")}
            house={gryffindorColors}
          >
            Gryffindor
          </House>
        </li>
        <li>
          <House
            onClick={() => getHouse("hufflepuff")}
            house={hufflepuffColors}
          >
            Hufflepuff
          </House>
        </li>
        <li>
          <House onClick={() => getHouse("slytherin")} house={slytherinColors}>
            Slytherin
          </House>
        </li>
        <li>
          <House onClick={() => getHouse("ravenclaw")} house={ravenclawColors}>
            Ravenclaw
          </House>
        </li>
      </ul>
    </section>
  );
};

export default HouseSection;