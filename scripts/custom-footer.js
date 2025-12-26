hexo.extend.filter.register("theme_inject", function (injects) {
  injects.footer.file("custom-footer", "source/_data/custom-footer.njk");
});
