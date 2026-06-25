hexo.extend.injector.register(
  "head_end",
  `
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      // Wait for the window to finish loading completely (including Mermaid JS)
      window.addEventListener("load", () => {
        if (window.location.hash) {
          const targetId = decodeURIComponent(window.location.hash.substring(1));
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            // Delay the scroll to ensure all Mermaid diagrams have expanded
            setTimeout(() => {
              targetElement.scrollIntoView();
            }, 300); // 300ms delay usually covers Mermaid rendering time
          }
        }
      });
    });
  </script>
`,
  "default",
);
