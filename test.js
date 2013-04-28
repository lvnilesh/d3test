if (Meteor.isClient) {
  Template.svg.rendered = function () {
    d3.select("body")
      .append("p")
      .text("Hello d3");
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}