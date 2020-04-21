import React from "react";

import Hotel from "../Hotel";

export default function Hotels(props) {
  const { data } = props;
  console.log(data);
  return (
    <section className="section" style={{ marginTop: "1em" }}>
      <div className="container">
        <div className="columns is-multiline">
          {data.length ? (
            data.map((hotel) => {
              return (
                <div key={hotel.slug} className="column is-one-third">
                  <Hotel {...hotel} />
                </div>
              );
            })
          ) : (
            <article className="message is-warning">
              <div className="message-body">
                No se han encontrado hoteles que coincidan con los parámetros de
                búsqueda.
              </div>
            </article>  
          )}
        </div>
      </div>
    </section>
  );
}
