import React from "react";
import PropTypes from "prop-types";

const RecipePage = ({ recipe }) => {
  if (recipe) {
    return (
      <div>
        <img className="card-img-top img-fluid" src={recipe.thumbnail} alt="" />
        <div className="card-body">
          <h5 className="card-title">{recipe.title}</h5>
          <p className="card-text">
            <strong>Ingredients: </strong>
            {recipe.ingredients}
          </p>
        </div>
      </div>
    );
  } else {
    return <h1>Recipe not found</h1>;
  }
};

RecipePage.propTypes = {
  recipe: PropTypes.object
};

export default RecipePage;
