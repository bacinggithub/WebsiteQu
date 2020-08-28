/* import fetch from "isomorphic-unfetch";
const projects = [
  "facebook/flipper",
  "vuejs/vuepress",
  "rust-lang/rust",
  "zeit/next.js",
];
export default (req, res) => {
  if (req.query.id) {
    // a slow endpoint for getting repo data
    fetch(`https://api.github.com/repos/${req.query.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setTimeout(() => {
          res.json(data);
        }, 1000);
      });
    return;
  }
  setTimeout(() => {
    res.json(projects);
  }, 1000);
}; */
// an simple endpoint for getting current list
let list = [];
export default (req, res) => {
  if (req.query.add) {
    list.push(req.query.add);
  } else if (req.query.clear) {
    list = [];
  }
  res.json(list);
};
