import React from "react";

const Map = () => {
  return (
    <>
      <div className="col-12 mt-3">
        <div className="row">
          <div className="col-12">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height="450px"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Hit haldia&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
