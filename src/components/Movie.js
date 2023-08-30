import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteMovie } from "../actions/movieActions";
const Movie = (props) => {
  const { id } = useParams();
  const { push } = useHistory();
  //- [6 ] Son olarak `Movie` componentindeki `movies` datası yine redux store içerisinden çekilmelidir.
  const movies = useSelector((store) => store.movies);
  const movie = movies.find((movie) => movie.id === Number(id));
  //- [7 ] `movieReducers` dosyası içerisinde `deleteMovie` için yazılmış bir kod bloğu olduğunu ve `movieActions` dosyası içerisinde ilgili **action generator**'ın zaten mevcut olduğunu unutmayın.- **Silme Action'ı: Movie componentinde**- Silme işleminin tetiklemesi gereken HTML öğesini bulun ve `event handler` oluşturup ve bu DOM öğesine bağlayın.- Bu handler içerisinde Filmin `id` değeri ile `deleteMovie` action'ını tetiklemek için `dispatch` edin.- Sonra kullanıcıyı `push('/movies')` komutunu kullanarak filmler sayfasına yönlendirin.- **(Bu kısımda, `useParams` ile aldığınız `id` değerinin `string` olduğunu ve `movieReducer` içerisindeki silme eyleminde buna dikkat etmeniz gerektiğini unutmayın!)**
  const dispatch = useDispatch();
  const deleteReduxMovie = () => {
    dispatch(deleteMovie(movie.id));
    push("/movies");
  };

  return (
    <div className="bg-white rounded-md shadow flex-1">
      <div className="p-5 pb-3 border-b border-zinc-200">
        <h4 className="text-xl font-bold">{movie.title} Detayları</h4>
      </div>
      <div className="px-5 py-3">
        <div className="py-1 flex">
          <div className="view-label">İsim</div>
          <div className="flex-1">{movie.title}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Yönetmen</div>
          <div className="flex-1">{movie.director}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Tür</div>
          <div className="flex-1">{movie.genre}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Metascore</div>
          <div className="flex-1">{movie.metascore}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Açıklama</div>
          <p className="flex-1">{movie.description}</p>
        </div>
      </div>
      <div className="px-5 py-3 border-t border-zinc-200 flex justify-end gap-2">
        <button
          onClick={deleteReduxMovie}
          type="button"
          className="myButton bg-red-600 hover:bg-red-500"
        >
          Sil
        </button>
        <button className="myButton bg-blue-600 hover:bg-blue-500 ">
          Favorilere ekle
        </button>
      </div>
    </div>
  );
};

export default Movie;
