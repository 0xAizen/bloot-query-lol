import React from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    margin: '1rem',
    flexBasis: '45%',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
    width: '400px',
  },

};

Modal.setAppElement('#__next')

function FormModal({ blootObject, blootId, checkBloot }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [id, setId] = React.useState(blootId);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleChange(e) {
    e.preventDefault();
    setId(e.target.value);
  }

  return (
    <>
      <p onClick={openModal} className="card-special">
        <h3>Check $BLOOT &rarr;</h3>
        <p>Click and provide a $BLOOT id to see what's available.</p>
      </p>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="$BLOOT Tracker"
      >
        <h3 ref={(_subtitle) => (subtitle = _subtitle)}>Enter $BLOOT id</h3>
        <p>Currently querying {id}</p>
        <form>
          <input onChange={handleChange} value={id} className="input" />
          <p>{!blootObject?.bgldMinted ? "Based gold available ✅" : "Based gold not available ❌"}</p>
          <div className="button" onClick={() => checkBloot(id)}>Search</div>
        </form>
      </Modal>
      <style jsx>{`
        .card-special {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card-special:hover,
        .card-special:focus,
        .card-special:active {
          color: #01ff01;
          border-color: #01ff01;
          cursor: pointer;
        }

        .card-special h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card-special p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .input {
          background: #fff;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          color: #222;
          font-size: 16px;
          height: 56px;
          padding: 0px 16px;
          width: 100%;
        }

        .modalTitle {
          font-size: 1.5rem;
        }

        .button {
          align-items: center;
          background: #01ff01;
          border-radius: 10px;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          font-size: 16px;
          font-weight: 500;
          height: 56px;
          justify-content: center;
          margin-top: 20px;
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default FormModal