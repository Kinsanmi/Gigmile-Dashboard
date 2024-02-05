import React from "react";
import "./Newrequest.scss";
import AR from "../Sidebar/image/bnb.png";
import { Repayment } from "../Repayment/Repayment";

export const NewRequest = () => {
  return (
    <div className="active">
      <div className="act-feed">
        <div className="act-line">
          <div className="act-number">
            <h2>New service requests</h2>
            <p>7</p>
          </div>
        </div>

        <div className="list">
          <div className="list-type">
            <div className="total-val">
              <div className="val">
                <h3>Captain</h3>
                <div className="types">
                  <img src={AR} alt="" />
                  <h2>Alan Richard michaelson</h2>
                </div>
                <div className="types">
                  <img src={AR} alt="" />
                  <h2>Alan Richard michaelson</h2>
                </div>
                <div className="types">
                  <img src={AR} alt="" />
                  <h2>Alan Richard michaelson</h2>
                </div>
                <div className="types">
                  <img src={AR} alt="" />
                  <h2>Alan Richard michaelson</h2>
                </div>
                <div className="types">
                  <img src={AR} alt="" />
                  <h2>Alan Richard michaelson</h2>
                </div>
                <div className="types">
                  <img src={AR} alt="" />
                  <h2>Alan Richard michaelson</h2>
                </div>
                <div className="types">
                  <img src={AR} alt="" />
                  <h2>Alan Richard michaelson</h2>
                </div>
              </div>

              <div className="val">
                <h4>Service type</h4>
                <div className="services">
                  <h1>Motorcycle financing</h1>
                </div>
                <div className="services">
                  <h1>Smartphone financing</h1>
                </div>
                <div className="services">
                  <h1>Motorcycle financing</h1>
                </div>
                <div className="services">
                  <h1>Smartphone financing</h1>
                </div>
                <div className="services">
                  <h1>Motorcycle financing</h1>
                </div>
                <div className="services">
                  <h1>Smartphone financing</h1>
                </div>
                <div className="services">
                  <h1>Motorcycle financing</h1>
                </div>
              </div>

              <div className="val">
                <h5>Total request value</h5>
                <div className="amount">
                  <h1>N 120,000,000.0</h1>
                </div>
                <div className="amount">
                  <h1>N 120,000,000.0</h1>
                </div>
                <div className="amount">
                  <h1>N 120,000,000.0</h1>
                </div>
                <div className="amount">
                  <h1>N 120,000,000.0</h1>
                </div>
                <div className="amount">
                  <h1>N 120,000,000.0</h1>
                </div>
                <div className="amount">
                  <h1>N 120,000,000.0</h1>
                </div>
                <div className="amount">
                  <h1>N 120,000,000.0</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Repayment />
    </div>
  );
};
