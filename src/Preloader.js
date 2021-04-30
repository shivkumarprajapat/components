
// npm package Install
// npm i react-spinners


import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Preloader() {
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, []);

    return (
        <div className='container'>

            {
                loading ?

                    <ClipLoader
                        loading={loading}
                        color={"#D0021B"}
                        size={150}
                        css={override}
                    />

                    :

                    <div className="row">
                        {[...Array(9)].map((x, i) =>
                            <div className='col-lg-4' key={i} >
                                <div className="card shadow-lg p-3 mb-4">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis officia suscipit quisquam, quod molestias minima, quas assumenda, magni accusantium ex minus eius at ab iste qui totam nulla ea? Expedita.</p>
                                </div>
                            </div>
                        )}
                    </div>

            }
        </div>

    );
}

export default Preloader;