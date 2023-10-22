function gethtml({ name, email, phone, message }) {
  return `
    <div
      style="
      padding: 2rem;
      font-family: Arial;
      display: flex;
      flex-direction: column;
      "
    >
      <span> <b>Name: </b>${name} </span>
      <span> <b>Email: </b>${email} <br /> </span>
      <span> <b>Phone: </b>${phone} </span>
      <span> <b>Message: </b>${message} </span>
    </div>`;
}

module.exports = { gethtml };
