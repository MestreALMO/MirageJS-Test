import { createServer, Model, hasMany, belongsTo } from "miragejs";

createServer({
  models: {
    movie: Model.extend({
      castMembers: hasMany(),
    }),
    castMember: Model.extend({
      movie: belongsTo(),
    }),
  },

  seeds(server) {
    //cast-member
    const matt = server.create("cast-member", { name: "Matthew McConaughey" });
    const anne = server.create("cast-member", { name: "Anne Hathaway" });
    const jess = server.create("cast-member", { name: "Jessica Chastain" });
    const leo = server.create("cast-member", { name: "Leonardo DiCaprio" });
    const tom = server.create("cast-member", { name: "Tom Hardy" });
    const cillian = server.create("cast-member", { name: "Cillian Murphy" });

    //movies
    server.create("movie", {
      name: "Inception",
      year: 2010,
      castMembers: [leo],
    });
    server.create("movie", {
      name: "Interstellar",
      year: 2014,
      castMembers: [matt, anne, jess],
    });
    server.create("movie", {
      name: "Dunkirk",
      year: 2017,
      castMembers: [tom, cillian],
    });
  },

  routes() {
    this.namespace = "api";

    this.post("/movies", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.movies.create(attrs);
    });

    this.patch("/movies/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let movie = schema.movies.find(id);

      return movie.update(newAttrs);
    });

    this.get("/movies");
    this.get("/movies/:id");
    this.del("/movies/:id");

    this.get("/movies/:id/castMembers", (schema, request) => {
      let movie = schema.movies.find(request.params.id);

      return movie.castMembers;
    });
  },
});
