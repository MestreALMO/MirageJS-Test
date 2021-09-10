import { createServer, Model } from "miragejs";
import { FormEvent, useEffect, useState } from "react";
import { api } from "./services/axios";

//MirageJS
createServer({
  models: {
    brand: Model,
  },

  //Server's data
  seeds(server) {
    server.db.loadData({
      brands: [
        {
          name: "Volkswagen",
          origin: "Alemanha",
        },
        {
          name: "Nintendo",
          origin: "Japão",
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    //API gets
    this.get("/brands", () => {
      return this.schema.all("brand");
    });

    //API posts
    this.post("/brands", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("brand", data);
    });
  },
});

//TS types
interface Brands {
  name: string;
  origin: string;
}

function App() {
  //Calling API
  let [brands, setBrands] = useState<Brands[]>([]);

  useEffect(() => {
    api.get("brands").then((response) => setBrands(response.data.brands));
  }, []);

  //Adding to API
  const [brandName, setBrandName] = useState("");
  const [brandOrigin, setBrandOrigin] = useState("");

  async function handleCreateNewBrand(event: FormEvent) {
    event.preventDefault();

    const data = { name: brandName, origin: brandOrigin };

    const response = await api.post("/brands", data);
    const { brand } = response.data;

    setBrands([...brands, brand]);
    console.log(brands);
  }

  return (
    <>
      <h1>Marcas</h1>
      <ul>
        <li>
          <h2>Lista integral</h2>
          <ul>
            {brands.map((brand, index) => (
              <li key={index}>
                <h3>Name: {brand.name}</h3>
                <ul>
                  <li>Origin: {brand.origin}</li>
                </ul>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <h2>Cadastro</h2>
          <form onSubmit={handleCreateNewBrand}>
            <ul>
              <li>
                Name:&nbsp;
                <input
                  type="text"
                  value={brandName}
                  onChange={(event) => setBrandName(event.target.value)}
                />
              </li>
              <li>
                Origin:&nbsp;
                <input
                  type="text"
                  value={brandOrigin}
                  onChange={(event) => setBrandOrigin(event.target.value)}
                />
              </li>
            </ul>
            <button type="submit">Cadastrar</button>
          </form>
        </li>
      </ul>
    </>
  );
}

export default App;
