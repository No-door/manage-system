import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Detail() {

  const [candidate, setCandidate] = useState([]);
  const urlParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    const ids = urlParams.get('ids');
    const fetchData = async (params) => {
      try {
        const response = await axios.get(`http://localhost:3000/candidates?ids=${params}`);
        setCandidate(response.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData(ids);
  }, [urlParams]);

  return (
    <div className="container-fluid">
      <h3 className="text-dark mb-4">{candidate.name}</h3>
      <div className="row mb-3">
        <div className="col-lg-4">
          <div className="card mb-3">
            <div className="card-body text-center shadow">
              <img
                className="rounded-circle mb-3 mt-4"
                src="/assets/img/dogs/image2.jpeg"
                width={160}
                height={160}
              />
            </div>
          </div>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="text-primary fw-bold m-0">Summary infomation</h6>
            </div>
            <div className="card-body">
            <h4 className="small fw-bold">
                Level<span className="float-end">{candidate.level}</span>
              </h4>
              <h4 className="small fw-bold">
                Skill<span className="float-end">{candidate.skill.join(', ')}</span>
              </h4>
              <h4 className="small fw-bold">
                Location<span className="float-end">{candidate.location}</span>
              </h4>
              <h4 className="small fw-bold">
                English<span className="float-end">{candidate.english}</span>
              </h4>
              <h4 className="small fw-bold">
                FTE<span className="float-end">{candidate.FTE}</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row mb-3 d-none">
            <div className="col">
              <div className="card text-white bg-primary shadow">
                <div className="card-body">
                  <div className="row mb-2">
                    <div className="col">
                      <p className="m-0">Peformance</p>
                      <p className="m-0">
                        <strong>65.2%</strong>
                      </p>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-rocket fa-2x" />
                    </div>
                  </div>
                  <p className="text-white-50 small m-0">
                    <i className="fas fa-arrow-up" />
                    &nbsp;5% since last month
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-white bg-success shadow">
                <div className="card-body">
                  <div className="row mb-2">
                    <div className="col">
                      <p className="m-0">Peformance</p>
                      <p className="m-0">
                        <strong>65.2%</strong>
                      </p>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-rocket fa-2x" />
                    </div>
                  </div>
                  <p className="text-white-50 small m-0">
                    <i className="fas fa-arrow-up" />
                    &nbsp;5% since last month
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row" />
        </div>
      </div>
    </div>
  );
}
