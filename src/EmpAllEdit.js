import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EmpAllEdit() {
  const { empid } = useParams();
  const [empdata, empdatachange] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/users/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);
        namechange(resp.name);
        emailchange(resp.email);
        phonechange(resp.phone);
        activechange(resp.isactive);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { id, name, email, phone, active };

    fetch("http://localhost:3000/users/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/users/")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 className="head1">Employee Edit Through Drop Down </h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label className="head3">Name</label>
                      <br></br>
                      <select
                        className="drop"
                        type="text"
                        name="text"
                        showMask={true}
                        value={name}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => namechange(e.target.value)}
                      >
                        {empdata &&
                          empdata.map((item) => (
                            <option key={item.id}>{item.name}</option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <label></label>
                  <br></br>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label className="head3">Email</label>
                      <br></br>
                      <select
                        className="drop"
                        type="email"
                        name="email"
                        showMask={true}
                        value={email}
                        onChange={(e) => emailchange(e.target.value)}
                      >
                        {empdata &&
                          empdata.map((item) => (
                            <option key={item.id}>
                              {item.email}
                              <br></br>
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <label></label>
                  <br></br>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label className="head3">Phone</label>
                      <br></br>
                      <select
                        className="drop"
                        type="phone"
                        name="phone"
                        showMask={true}
                        value={phone}
                        onChange={(e) => phonechange(e.target.value)}
                      >
                        {empdata &&
                          empdata.map((item) => (
                            <option key={item.id}>{item.phone}</option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <label></label>
                  <br></br>
                  <br></br>
                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={active}
                        onChange={(e) => activechange(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                      ></input>
                      <label className="form-check-label">Is Active</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EmpAllEdit;
