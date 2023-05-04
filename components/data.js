import React, { useState, useEffect, Children } from "react";
import axios from "axios";
import Modal from "./modal";
import Navbar from "./navbar";
import Pagination from "./pagination";
import Filter from "./filter";
import Footer from "./footer";

function Data() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("Game of Thrones");
  const [modalData, setModalData] = useState({ Title: "MovieDB" });
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [type, setType] = useState("");

  if (page > maxPage) {
    setPage(maxPage);
  } else if (page < 1) {
    setPage(1);
  }

  function clickHandler() {
    const input = document.getElementById("input").value;
    setKeyword(input);
    setPage(1);
  }

  useEffect(() => {
    request();
  }, [keyword, page, type]);

  function request() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://www.omdbapi.com/",
      headers: {},
      params: {
        apikey: "8b0ec394",
        s: keyword,
        page: page,
        type: type,
      },
    };

    axios
      .request(config)
      .then(response => {
        if (response.data.Response == "True") {
          setData(response.data.Search); // Menyimpan data dalam bentuk array
          setMaxPage(Math.ceil(response.data.totalResults / 10));
        } else {
          setData([{ imdbID: "error", Title: response.data.Error }]);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  function modalHandler(imdbID) {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://www.omdbapi.com/",
      headers: {},
      params: {
        apikey: "8b0ec394",
        i: imdbID,
        plot: "full",
      },
    };

    axios
      .request(config)
      .then(response => {
        if (response.data.Response == "True") {
          setModalData(response.data);
        } else {
          setModalData({ imdbID: "error", Title: response.data.Error });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      <Navbar clickHandler={clickHandler} />
      <div className="flex flex-wrap justify-center mx-12 pt-12 pb-4">
        <div className="flex-initial sm:w-1/4 hidden sm:block"></div>
        <Pagination page={page} maxPage={maxPage} setPage={setPage} />
        <Filter setType={setType} />
      </div>

      <div className="flex flex-wrap justify-evenly">
        {data.map(item => {
          if (item.imdbID === "error") {
            return (
              <div className="flex-initial p-2" key={item.imdbID}>
                <h1 className="text-center text-4xl">{item.Title}</h1>
              </div>
            );
          }
          return (
            <div
              className="flex-initial lg:w-1/4 md:w-1/3 md:p-4 w-10/12 p-2"
              key={item.imdbID}>
              <div className="card bg-base-100 shadow-xl me-auto h-full">
                <figure>
                  <img src={item.Poster} alt="MovieDB" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.Title}</h2>
                  <p>{item.Year}</p>
                  <div className="card-actions justify-end">
                    <label
                      htmlFor="my-modal"
                      className="btn btn-sm btn-zinc-700 normal-case"
                      onClick={() => modalHandler(item.imdbID)}>
                      See details
                    </label>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center mx-12 pt-12 pb-4">
        <Pagination page={page} maxPage={maxPage} setPage={setPage} />
      </div>
      <Footer />
      <Modal modalData={modalData} />
    </>
  );
}

export default Data;
