function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <div className="items">
          <h2 className="mb-30 d-flex justify-between ">
            Корзина
            <img
              className="cartRemoveButton"
              src="/img/btn-remove.svg"
              alt="Button-remove"
            ></img>
          </h2>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кросовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="cartRemoveButton"
              src="/img/btn-remove.svg"
              alt="Button-remove"
            ></img>
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/9.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Puma X Aka Boku Future Rider</p>
              <b>15 499 руб.</b>
            </div>
            <img
              className="cartRemoveButton"
              src="/img/btn-remove.svg"
              alt="Button-remove"
            ></img>
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>28 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1 424.90 руб.</b>
            </li>
            <button className="orderButton">
              Оформить заказ
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7H14.7143"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.71436 1L14.7144 7L8.71436 13"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
