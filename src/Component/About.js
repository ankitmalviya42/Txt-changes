import React from "react";
// import { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "rgb(17, 36, 64)" : "white",
  };

  return (
    <div style={myStyle}>
      <div className="container">
        <div className="container my-4">
          <h3>About us</h3>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                Analzyer
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body">
                <strong>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid magni saepe est porro magnam tempore officiis,
                  eligendi alias debitis commodi pariatur possimus illum
                </strong>{" "}
                consectetur tempora nisi maiores natus, harum, minima inventore
                placeat sapiente quae sequi omnis amet? Dolorum quam
                reprehenderit nihil, quia ea velit quibusdam magnam officia
                accusamus aspernatur placeat, dicta rerum adipisci? Officiis sed
                rem quibusdam maiores dolorem fugiat, quia expedita sequi, aut
                consequatur in minima Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Obcaecati, sapiente libero, repellat amet
                velit labore dolore consequuntur quod tenetur debitis modi
                facere, aliquam voluptatibus est dolor nisi odio rem quo.
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                Free to use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Ipsam minus nisi et
                commodi. Vero libero illum a quis placeat dolorem nihil expedita
                ipsa doloribus, pariatur, minus maiores necessitatibus velit
                iste! Eius cupiditate fugit perspiciatis illum amet modi fuga,
                quas necessitatibus eligendi nulla suscipit expedita id
                distinctio, aut voluptatum atque est. Esse labore ipsam at culpa
                laboriosam tenetur maiores, id ad excepturi itaque iusto
                cupiditate.
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                Browser
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Odio aperiam optio
                error laboriosam quod repellendus dicta, dolorum sint sapiente?
                Enim possimus, qui non earum ipsam iste impedit placeat
                perspiciatis ratione molestiae optio hic voluptatum nulla saepe
                architecto vel ad quod molestias harum? Optio a ea autem
                voluptate labore, asperiores dolorum ratione excepturi deleniti!
                Pariatur odio blanditiis minima eum iure animi soluta ut aliquid
                quos. Repudiandae architecto inventore non in hic molestiae quo
                error velit quas, consectetur id alias dolore iure assumenda cum
                officia ducimus maiores praesentium perferendis aspernatur enim
                cumque tempora necessitatibus rerum. Nihil odio, deleniti
                mollitia itaque suscipit amet?
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
