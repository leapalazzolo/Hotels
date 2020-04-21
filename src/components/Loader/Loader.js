import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #fff;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  opacity: 1;
  z-index: 1;
`;

const Loader = styled.div`
  height: 80px;
  width: 80px;
  position: relative;
`;

const StyledLoader = ({ isActive }) => {
  return (
    <div className="columns is-mobile">
      <div className="column is-half is-offset-one-quarter">
          <div className="fa-4x" style={{'text-align': 'center'}}>
            <i className="fas fa-sync fa-spin has-text-primary"></i>
          </div>
      </div>
    </div>
  );
};

export default StyledLoader;
