const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <h1 className="text-3xl p-4 m-4">Contact Us</h1>
        <h4 className="desc">This is the React Learning Phase</h4>
        <form action="" method="post">
          <div className="contact-form">
            <input
              type="text"
              className="border border-black p-2 m-2 rounded-2xl"
            />
            <button
              type="submit"
              className="border border-black p-2 m-2 bg-gray-100 rounded-2xl cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
