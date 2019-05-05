import React from "react";

export default () => {
  return (
    <div className="text-center" style={{ height: "85vh" }}>
      <h1 className="display-4">About Album Details</h1>
      <p className="lead" style={{ color: "white" }}>
        Its a implementation of React, Redux, Bootstrap, ReactStrap, and Thunk
        Middleware. <br />
        One can click on image to see the preview.
        <br />
        One can add own Image by clicking on "Add" and providing details like
        URL, ID and TITLE.
        <br />
        Delete the image clicking "Cross". It will call API but cannot
        parmanently delete and add as its coming from fake API.
        <br />
      </p>
      <p className="text-secondary">Version 1.1.1</p>
    </div>
  );
};
