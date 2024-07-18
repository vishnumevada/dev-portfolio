import React from "react";

const Iframe = ({ source }) => {
    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;
    return (
        // basic bootstrap classes. you can change with yours.
        <div className="col-md-12 px-0">
            <div className="emdeb-responsive">
                <iframe src={src} className="iFrame"></iframe>
            </div>
        </div>
    );
};

export default Iframe;
