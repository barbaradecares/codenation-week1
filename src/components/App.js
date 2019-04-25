import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
import { slugify } from "../helpers";
import recipes from "../sample_data/recipes.json";
import { withRouter } from "react-router";

class App extends Component {
  filteredRecipes(searchString) {
    return recipes.results.filter(
      recipe =>
        recipe.title.toLowerCase().includes(searchString.toLowerCase()) ||
        recipe.ingredients.toLowerCase().includes(searchString.toLowerCase())
    );
  }

  getRecipeFromSlug(slug) {
    const found = recipes.results.find(
      recipe => slugify(recipe.title) === slug
    );
    return found;
  }

  render() {
    return (
      <div className="App">
        <Navbar
          searchString={this.props.location.pathname.slice(1)}
          history={this.props.history}
        />
        )}/>
        <div className="container mt-10">
          <Route
            exact
            path="/"
            render={() => (
              <Home recipes={recipes.results} history={this.props.history} />
            )}
          />
          <Route
            exact
            path="/:searchString"
            render={() => (
              <Home
                history={this.props.history}
                recipes={this.filteredRecipes(
                  this.props.location.pathname.slice(1)
                )}
              />
            )}
          />
          <Route
            exact
            path="/recipe/:slug"
            render={() => (
              <RecipePage
                recipe={this.getRecipeFromSlug(
                  this.props.location.pathname.split("recipe/")[1]
                )}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
