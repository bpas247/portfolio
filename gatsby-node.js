require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

exports.createPages = ({ actions }) => {
  const { createRedirect, createPage } = actions;

  createPage({
    path: `/blog/`,
    component: require.resolve(`./src/pages/index.js`)
  });
  createRedirect({
    fromPath: `/blog/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/`
  });
  createRedirect({
    fromPath: `/blog`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/`
  });
};
