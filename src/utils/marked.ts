import { Marked } from "marked";

const marked = new Marked();

marked.use({
  hooks: {
    preprocess(markdown) {
      return markdown.replace(/^import\s+.*$/gm, "");
    },
  },
});

export { marked };
