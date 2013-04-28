draw = function() {
  Template.svg.rendered = function () {
    d3.select("body")
      .append("p")
      .text("Hello d3");
  };
};
