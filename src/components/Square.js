import styled from "styled-components";
import PropTypes from "prop-types";

export const Square = styled.div`
  background-color: ${({ red, green, blue }) => `rgb(${red},${green},${blue})`};
  font-size: 12px;
  height: 100px;
  width: 100px;
  margin: 4px;
`;

/*
Equivalent à ceci, où ici c'est du CSS in JS maison, inline:
*/
export const Square2 = ({ red, green, blue }) => (
  <div
    style={{
      backgroundColor: `rgb(${red},${green},${blue})`,
      fontSize: "12px",
      height: "100px",
      width: "100px",
    }}
  ></div>
);

/*
Mise en place du typage de props avec PropTypes:
1- Affecter à un champ propTypes nouvellement créé un objet
2- Pour chaque propriété que je veux typer, je crée un champ dans cet objet, auquel
je donne comme valeur quelque chose de la forme: PropTypes.leTypeQueJeVeux
3- Si je veux marquer la propriété comme requise, j'ajoute à la fin: .isRequired

Pour retrouver les types possibles:
https://www.npmjs.com/package/prop-types

Remarque: on peut s'amuser (de façon utile), à spécifier des structures de type
un peu plus complexe comme dans:
Post.propTypes = {
  comment: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      start: PropTypes.number,
      content: PropTypes.string,
      email: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

*/

Square.propTypes = {
  red: PropTypes.number.isRequired,
  blue: PropTypes.number.isRequired,
  green: PropTypes.number.isRequired,
};
