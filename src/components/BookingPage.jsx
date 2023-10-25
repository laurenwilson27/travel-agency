import React from "react";

const BookingPage = () => {
  return (
    <main id="content">
      <section>
        <div>
          {/* Form layout is currently placeholder and does not match our planned layout. */}
          <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <br />
            <label htmlFor="addr">Address</label>
            <input type="text" id="addr" />
            <br />
            {/* Consider validating these fields later */}
            <label htmlFor="cardNum">Credit Card #</label>
            <input type="number" id="cardNum" />
            <br />
            <label htmlFor="expiry">Expiry Date</label>
            <input type="date" />
            <label htmlFor="secCode">CSV</label>
            <input type="number" min="100" max="999" />
          </form>
        </div>
      </section>
    </main>
  );
};

export default BookingPage;
