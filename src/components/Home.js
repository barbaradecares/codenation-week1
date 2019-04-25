import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

const Home = ({ searchString = "", recipes = [], history }) => {
  return (
    <div className="row">
      {recipes.map(recipe => {
        return <RecipeItem history={history} recipe={recipe} />;
      })}
      ;
    </div>
  );
};

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
};

export default Home;
