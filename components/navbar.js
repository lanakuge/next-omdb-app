const Navbar = ({ clickHandler }) => {
  return (
    <>
      <div className="navbar bg-neutral-800 flex flex-wrap md:flex-row flex-col items-center justify-center md:justify-between px-4 py-3 text-neutral-300">
        <div className="flex items-center">
          <a className="btn btn-ghost normal-case text-xl hover:bg-neutral-900">
            Movie<span className="text-white">DB</span>
          </a>
        </div>
        <div className="flex items-center mt-3 md:mt-0">
          <div className="form-control mr-2">
            <input
              id="input"
              type="text"
              placeholder="Game of Thrones"
              className="input input-bordered bg-neutral-900 border-neutral-700"
              onKeyUp={e => {
                if (e.keyCode === 13) clickHandler();
              }}
            />
          </div>
          <button
            className="btn bg-neutral-900 hover:bg-neutral-800 border-neutral-700"
            onClick={() => clickHandler()}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
