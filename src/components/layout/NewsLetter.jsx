import React, { useState } from "react";

const NewsLetter = () => {
  const [newsletterData, setNewsLetterData] = useState({
    email: "",
  });

  let name, value;

  const postNewsletterData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setNewsLetterData({ ...newsletterData, [name]: value });
  };

  // connection with firebase
  const submitEmail = async (event) => {
    event.preventDefault();
    const { name, email, phone, message } = newsletterData;

    if (email) {
      const res = fetch(
        "https://thekeymind2023-f4c36-default-rtdb.firebaseio.com/NewsletterEmailRecords.json",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      if (res) {
        setNewsLetterData({
          email: "",
        });
        alert("Email Id Submitted");
      } else {
        alert("Plz fill the Email Id");
      }
    } else {
      alert("Plz fill the Email Id");
    }
  };

  return (
    <div>
      <h1>NEWSLETTER</h1>
      <form action="#" method="POST">
        <input
          name="email"
          placeholder="Your e-mail"
          id="email"
          type="text"
          value={newsletterData.email}
          onChange={postNewsletterData}
        />
        <input
          type="submit"
          value="Send"
          id="submit_newsletter"
          onClick={submitEmail}
        />
      </form>
    </div>
  );
};

export default NewsLetter;
