useEffect(() => {
    fetch(`http://localhost:3000/users/${nameId}`)
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

  //console.log(handlesubmit())
  return (
    <>
      {/* <div class="menu-bar">
        <ul className="uu">
          <li>
            Select Name<i class="fas fa-caret-down"></i>
            <div class="dropdown-menu">
              <ul className="uu">
                {empdata &&
                  empdata.map((item) => (
                    <li>
                      {item.name}
                      <i class="fas fa-caret-right"></i>

                      <div class="dropdown-menu-1">
                        <ul>
                          <li>
                            {item.email}
                            <i class="fas fa-caret-right"></i>

                            <div class="dropdown-menu-2">
                              <ul>
                                <li>{item.phone}</li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </li>
        </ul>
      </div> */}