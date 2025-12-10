module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByTag("project");
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    }
  };
};

