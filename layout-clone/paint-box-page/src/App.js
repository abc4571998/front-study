import "./scss/styles.scss";

function App() {
  return (
    <>
      <header>
        <div>
          <nav>nail studio</nav>
          <nav>shop product</nav>
        </div>
        <div>
          <span>paint box</span>
        </div>
        <div>
          <nav>journal</nav>
        </div>
      </header>
      <main>
        <div className="content">
          <div className="image-box"></div>
          <div className="background-box"></div>
          <div className="content-text">
            <div>THE LOOKBOOK</div>
            <p>
              Discover our newest nail art designs and the most popular looks at
              our Upper East Side Studio.
            </p>
            <button>BOOK A MANI</button>
          </div>
        </div>
        <div className="content-half">
          <img
            src="//cdn.shopify.com/s/files/1/0086/4865/4895/files/Screen_Shot_2023-01-25_at_7.50.42_PM_960x960_crop_center.png?v=1674694268"
            alt=""
            class=""
          />
          <div className="content-text">
            <p>
              Keep your nails hydrated all winter long with our luxuriously
              lightweight Cuticle Oil — apply daily for best results.
            </p>
            <button>BOOK A MANI</button>
          </div>
        </div>
        <div className="content-half">
          <img
            alt=""
            src="//cdn.shopify.com/s/files/1/0086/4865/4895/files/FallWinter_Editorial_03_036_0.5x_copy_6ded8da8-5f56-4b0d-ab9e-c6c50ebfa4eb_960x960_crop_center.jpg?v=1676562415"
          />
          <div className="content-text">
            <div>GIFT CARDS</div>
            <p>
              Give the gift of the Paintbox experience for a manicure that tells
              a story.
            </p>
            <button>BUY A GIFT CARD</button>
          </div>
        </div>
        <section className="three-column">
          <div className="title">
            <span>THE SHOP</span>
            <span>Our Newest Polish Colors</span>
          </div>
          <div className="three-column-grid">
            <div className="three-grid-column">
              <img
                src="//cdn.shopify.com/s/files/1/0086/4865/4895/products/LikeSatinPDP-2_320x400_crop_center.jpg?v=1670464827"
                alt=""
              />
              <div className="item-category">
                <span>NAIL LACQUER</span>
                <span>NEW!</span>
              </div>
              <div className="item-name">Like Satin</div>
              <div className="item-price">$22.00</div>
              <button>ADD TO CART</button>
            </div>
            <div className="three-grid-column">
              <img
                src="//cdn.shopify.com/s/files/1/0086/4865/4895/products/PowerCouple-Cocoa_SageBlobs-white_320x400_crop_center.jpg?v=1667781872"
                alt=""
              />
              <div className="item-category">
                <span>power couple</span>
                <span>NEW!</span>
              </div>
              <div className="item-name">Like Cocoa + Like Sage</div>
              <div className="item-price">$40.00</div>
              <button>ADD TO CART</button>
            </div>
            <div className="three-grid-column">
              <img
                src="//cdn.shopify.com/s/files/1/0086/4865/4895/products/babecoral-blobs-white_320x400_crop_center.png?v=1655256206"
                alt=""
              />
              <div className="item-category">
                <span>power couple</span>
              </div>
              <div className="item-name">Like Babe + Like Coral</div>
              <div className="item-price">$40.00</div>
              <button>ADD TO CART</button>
            </div>
          </div>
        </section>
        <div className="content-half content-half-short">
          <img
            alt=""
            src="//cdn.shopify.com/s/files/1/0086/4865/4895/files/FallWinter_Editorial_03_036_0.5x_copy_6ded8da8-5f56-4b0d-ab9e-c6c50ebfa4eb_960x960_crop_center.jpg?v=1676562415"
          />
          <div className="content-text">
            <div>GIFT CARDS</div>
            <p>
              Give the gift of the Paintbox experience for a manicure that tells
              a story.
            </p>
            <button>BUY A GIFT CARD</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
