exports.getProjects = (req, res) => {
  res.json([
    {
      id: 1,
      title: "API Development",
      desc: "Built scalable REST APIs with Node.js",
    },
    {
      id: 2,
      title: "E-commerce Backend",
      desc: "Handled authentication, payments, orders",
    },
    {
      id: 3,
      title: "Microservices Architecture",
      desc: "Designed distributed backend systems",
    },
  ]);
};