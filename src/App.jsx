import { useEffect, useState } from "react";

export default function App() {
  const [movies, setMovies] = useState(null);
  const [movieId, setMovieId] = useState(null);
  const [updating, setUpdating] = useState(false);

  const [name, setName] = useState("");
  const [year, setYear] = useState("");

  const [castMembers, setCastMembers] = useState(null);

  //API get
  useEffect(() => {
    fetch("/api/movies")
      .then((response) => response.json())
      .then((json) => setMovies(json.movies))
      .catch((err) => console.log(err));
  }, []);

  //API post
  const createMovie = async () => {
    try {
      const res = await fetch("/api/movies", {
        method: "POST",
        body: JSON.stringify({ name, year }),
      });
      const json = await res.json();

      setMovies([...movies, json.movie]);
      setName("");
      setYear("");
    } catch (err) {
      console.log(err);
    }
  };

  //API patch
  const updateMovie = async () => {
    try {
      const res = await fetch(`/api/movies/${movieId}`, {
        method: "PATCH",
        body: JSON.stringify({ name, year }),
      });
      const json = await res.json();

      const moviesCopy = [...movies];
      const index = movies.findIndex((m) => m.id === movieId);
      moviesCopy[index] = json.movie;

      setMovies(moviesCopy);
      setName("");
      setYear("");
      setUpdating(false);
      setMovieId(null);
    } catch (err) {
      console.log(err);
    }
  };

  //API post & patch
  const submitForm = async (event) => {
    event.preventDefault();

    if (updating) {
      updateMovie();
    } else {
      createMovie();
    }
  };

  //API delete
  const deleteMovie = async (id) => {
    try {
      await fetch(`/api/movies/${id}`, { method: "DELETE" });

      setMovies(movies.filter((m) => m.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  //API patch
  const setMovieToUpdate = (id) => {
    const movie = movies.find((m) => m.id === id);
    if (!movie) return;
    setUpdating(true);
    setMovieId(movie.id);
    setName(movie.name);
    setYear(movie.year);
  };

  //API get, cast-members
  const fetchCastMembers = async (id) => {
    try {
      const res = await fetch(`/api/movies/${id}/castMembers`);
      const json = await res.json();

      setCastMembers(json.castMembers);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <h1 className="fw-normal text-center my-3">Movies</h1>
            <div className="my-4">
              <form onSubmit={submitForm}>
                <div className="row">
                  <div className="col-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-5">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Year"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </div>
                  <div className="col-2">
                    <button type="submit" className="btn btn-success">
                      {updating ? "Update" : "Create"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {movies?.length > 0 ? (
              <table className="table">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>year</th>
                    <th>actions</th>
                  </tr>
                </thead>
                <tbody>
                  {movies.map(({ id, name, year }) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{year}</td>
                      <td>
                        <button
                          className="btn btn-warning me-3"
                          onClick={() => setMovieToUpdate(id)}
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          className="btn btn-info me-3"
                          data-bs-toggle="modal"
                          data-bs-target="#castMembersModal"
                          onClick={() => fetchCastMembers(id)}
                        >
                          Cast-members
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteMovie(id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : movies ? (
              <p>No movies</p>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>

        <div className="modal fade" tabIndex="-1" id="castMembersModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Cast members</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {castMembers?.map((actor) => (
                  <p key={actor.id}>{actor.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
