function Modal({ modalData }) {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <label htmlFor="my-modal" className="modal cursor-pointer">
        <label
          className="modal-box relative w-10/12 h-5/6 sm:h-auto max-w-5xl p-0"
          htmlFor="">
          <div className="flex flex-wrap">
            <div className="flex-initial w-full sm:w-1/3 flex justify-center sm:justify-start">
              <img src={modalData.Poster} alt={modalData.imdbID} />
            </div>
            <div className="flex-initial w-full sm:w-2/3 py-6 px-6">
              <h3 className="font-bold text-lg text-center">
                {modalData.Title}
              </h3>
              <p className="pt-1 text-center text-neutral-400">
                {modalData.Released} | {modalData.Runtime} | {modalData.Rated}
              </p>
              <ul className="pt-4">
                <li className="pt-1">Genre : {modalData.Genre}</li>
                <li className="pt-1">Director : {modalData.Director}</li>
                <li className="pt-1">Actors : {modalData.Actors}</li>
                <li className="pt-1">Country : {modalData.Country}</li>
                <li className="pt-1 pb-2">Rating : {modalData.imdbRating}</li>
                <hr />
                <li className="pt-2 text-center">{modalData.Plot}</li>
              </ul>
            </div>
          </div>
        </label>
      </label>
    </>
  );
}

export default Modal;
