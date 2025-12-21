hexo.extend.filter.register("theme_inject", function (injects) {
  injects.postMeta.file(
    "custom-post-meta",
    "source/_data/custom-post-meta.njk"
  );
});
