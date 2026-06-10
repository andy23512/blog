hexo.extend.filter.register("theme_inject", function (injects) {
  // Get all posts and sort by updated date descending
  const posts = hexo.locals.get("posts").data;
  const latestPost = posts.sort((a, b) => b.updated - a.updated)[0];

  if (latestPost) {
    // Format the updated date using Hexo's date format configuration
    const updatedDate = latestPost.updated.format(
      hexo.config.date_format || "YYYY-MM-DD",
    );
    console.log(`Latest post updated date: ${updatedDate}`);

    // Create a standard NexT menu item structure
    const htmlContent = `
      <li class="menu-item menu-item-latest-update">
        <a href="${hexo.config.root}${latestPost.path}" rel="section">
          <i class="fa fa-fw fa-history"></i> Last Updated: ${updatedDate}
        </a>
      </li>
    `;

    // Inject directly into the NexT main menu layout
    injects.sidebar.raw("latest-post-update", htmlContent);
  }
});
