import React from "react";
import products from "../datasource/product";
function HomeScreen() {
  return (
    <div className="product">
      <div className="firstrow">
        <div className="card">
          <h2>Quality iphones</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumn: "1fr 1fr 1fr 1fr",
              maxwidth: "90%",
              margin: "20x auto",
            }}
          >
            {products.map((product) => (
              <div
                style={{
                  diplay: "flex",
                  justifyContent: "center",
                  FlexDirection: "column",
                  border: "1px sold #dedede",
                  margin: "10px",
                  pardding: "10px",
                }}
              >
                <img src={product.image} height="230px" />
                <h5>{product.name}</h5>
                <h5>GH¢{product.Price.toFixed(2)}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
