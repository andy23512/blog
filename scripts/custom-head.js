hexo.extend.filter.register("theme_inject", function (injects) {
  injects.head.file("custom-head", "source/_data/custom-head.njk");
});
