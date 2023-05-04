function Filter({ setType }) {
  return (
    <div className="flex-initial sm:w-1/4 w-8/12 flex sm:justify-end justify-center sm:mt-0 mt-2">
      <div className="form-control">
        <div className="input-group">
          <select
            className="select select-bordered"
            onChange={e => setType(e.target.value)}>
            <option value="">All</option>
            <option>Movie</option>
            <option>Series</option>
          </select>
          <p className="btn normal-case bg-neutral-800 hover:bg-neutral-900 disabled">
            Filter
          </p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
