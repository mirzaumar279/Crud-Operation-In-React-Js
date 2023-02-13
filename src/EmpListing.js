import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/users/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/users/edit/" + id);
  };
  const allEdit = (id) => {
    navigate("/users/alledit/" + id);
  };

  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:3000/users/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  //search
  const [query, setSearchQuery] = useState("");
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
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2 className="h1">Employee Data</h2>
        </div>
        <div className="card-body">
          <div className="divbtn"></div>
          <form>
            <input
              className="search"
              placeholder="Search Bar"
              type="search"
              maxLength={10}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <table className="table table-bordered">
            <thead className="head2">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata
                  .filter(
                    (users) =>
                      users.name.toLowerCase().includes(query) ||
                      users.email.toLowerCase().includes(query)
                  )
                  .map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name || item.service}</td>
                      <td>{item.email || item.service1}</td>
                      <td>{item.phone || item.service2}</td>
                      <td>
                        <a
                          onClick={() => {
                            LoadEdit(item.id);
                          }}
                          className="btn btn-outline-success"
                        >
                          <i className="fa fa-pencil" aria-hidden="true"></i>
                        </a>
                        <a
                          onClick={() => {
                            allEdit(item.id);
                          }}
                          className="btn btn-outline-warning"
                        >
                          <i className="fa-solid fa-user-pen"></i>
                        </a>

                        <a
                          onClick={() => {
                            Removefunction(item.id);
                          }}
                          className="btn btn-outline-danger"
                        >
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </a>
                        <a
                          onClick={() => {
                            LoadDetail(item.id);
                          }}
                          className="btn btn-outline-info"
                        >
                          <i className="fa fa-eye" aria-hidden="true"></i>
                        </a>
                      </td>
                    </tr>
                  ))}
              <tr>
                <td colSpan={5}>
                  <Link
                    to="users/create"
                    className="btn btn1  btn-lg btn-block"
                    style={{
                      backgroundColor: "rgb(0, 15, 114)",
                      color: "white",
                    }}
                  >
                    Add Row
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;
