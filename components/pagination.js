function Pagination({ page, maxPage, setPage }) {
  return (
    <div className="flex-initial sm:w-2/4 w-8/12 btn-group justify-center">
      <button
        className="btn bg-neutral-800 hover:bg-neutral-900 text-neutral-300 border-neutral-300"
        onClick={() => {
          setPage(page => page - 1);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}>
        «
      </button>
      <button className="btn bg-neutral-800 hover:bg-neutral-900 text-neutral-300 border-neutral-300">
        {page} of {maxPage}
      </button>
      <button
        className="btn bg-neutral-800 hover:bg-neutral-900 text-neutral-300 border-neutral-300"
        onClick={() => {
          setPage(page => page + 1);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}>
        »
      </button>
    </div>
  );
}

export default Pagination;
