import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./modal";

function Data() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("Game of Thrones");
  const [modalData, setModalData] = useState({ Title: "MovieDB" });

  function clickHandler() {
    const input = document.getElementById("input").value;
    setKeyword(input);
  }

  useEffect(() => {
    request();
  }, [keyword]);

  function request() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://www.omdbapi.com/",
      headers: {},
      params: {
        apikey: "8b0ec394",
        s: keyword,
      },
    };

    axios
      .request(config)
      .then(response => {
        if (response.data.Response == "True") {
          setData(response.data.Search); // Menyimpan data dalam bentuk array
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
      <div className=""></div>
      <div className="btn-group">
        <button className="btn">«</button>
        <button className="btn">Page 22</button>
        <button className="btn">»</button>
      </div>
      <div className="flex flex-wrap mx-12 py-12 justify-evenly">
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
      <Modal modalData={modalData} />
    </>
  );
}

export default Data;
