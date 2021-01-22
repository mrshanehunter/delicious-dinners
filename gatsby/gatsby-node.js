require('dotenv').config();
const { resolve } = require('path');
const path = require('path');

async function turnMealsIntoPages({ graphql, actions }) {
  // get a template for this page
  const mealTemplate = path.resolve('./src/templates/Meal.js');
  // query all meals
  const { data } = await graphql(`
    query {
      meals: allSanityMeals {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // Loop over each meal and create a page for the meal
  data.meals.nodes.forEach((meal) => {
    actions.createPage({
      // what is the url for the new page?
      path: `meal/${meal.slug.current}`,
      component: mealTemplate,
      context: {
        slug: meal.slug.current,
      },
    });
  });
}
async function turnWinesIntoPages({ graphql, actions }) {
  // get a template for this page
  const wineTemplate = path.resolve('./src/templates/Wine.js');
  // query all meals
  const { data } = await graphql(`
    query {
      wines: allSanityWines {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // Loop over each meal and create a page for the meal
  data.wines.nodes.forEach((wine) => {
    actions.createPage({
      // what is the url for the new page?
      path: `wine/${wine.slug.current}`,
      component: wineTemplate,
      context: {
        slug: wine.slug.current,
      },
    });
  });
}

async function turnDietarysIntoPages({ graphql, actions }) {
  // get the template
  const dietaryTemplate = path.resolve('./src/pages/meals.js');
  // query all the dietarys
  const { data } = await graphql(`
    query {
      dietarys: allSanityDietarys {
        nodes {
          name
          id
        }
      }
    }
  `);
  // create a page for the dietary
  data.dietarys.nodes.forEach((dietary) => {
    actions.createPage({
      path: `dietary/${dietary.name}`,
      component: dietaryTemplate,
      context: {
        dietary: dietary.name,
      },
    });
  });
}

async function turnTagsIntoPages({ graphql, actions }) {
  // get the template
  const tagTemplate = path.resolve('./src/pages/wines.js');
  // query all the tags
  const { data } = await graphql(`
    query {
      tags: allSanityTags {
        nodes {
          name
          id
        }
      }
    }
  `);
  // create a page for the tag
  data.tags.nodes.forEach((tag) => {
    actions.createPage({
      path: `tag/${tag.name}`,
      component: tagTemplate,
      context: {
        tag: tag.name,
      },
    });
  });
}

async function turnChefsIntoPages({ graphql, actions }) {
  // query all the chefs
  const { data } = await graphql(`
    query {
      chefs: allSanityChefs {
        totalCount
        nodes {
          name
          description
          id
          slug {
            current
          }
        }
      }
    }
  `);
  console.log(data);
  // Turn each chef into their own page
  data.chefs.nodes.forEach((chef) => {
    actions.createPage({
      component: resolve('./src/templates/Chef.js'),
      path: `/chef/${chef.slug.current}`,
      context: {
        name: chef.name,
        slug: chef.slug.current,
      },
    });
  });
  // Figure out how many pages there are based on the number of chefs, and how many per page
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.chefs.totalCount / pageSize);
  // Loop from 1 to n and create a page for them
  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/chefs/${i + 1}`,
      component: path.resolve('./src/pages/chefs.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

exports.createPages = async (params) => {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing the function
  await Promise.all([
    turnMealsIntoPages(params),
    turnDietarysIntoPages(params),
    turnWinesIntoPages(params),
    turnTagsIntoPages(params),
    turnChefsIntoPages(params),
  ]);
};
