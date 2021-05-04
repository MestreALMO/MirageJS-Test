import { useEffect } from "react";
import { api } from "../../../../services/api";

import { Container } from "./styles";

export const Table = () => {
  useEffect(() => {
    api
      .get("http://localhost:3000/api/transactions")
      .then((response) => console.log(response.data));
  }, []);

  return (
    <>
      <Container>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
        </tbody>
      </Container>
    </>
  );
};
