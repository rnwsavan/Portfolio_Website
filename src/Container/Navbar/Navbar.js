import React from "react";

  const Navbar = ({ filterItem,  uniqueList }) => {
    return (
      <>
        <nav className="navbar11">
          <div className="btn-group">


       <div className="row">
                        <div className="col-md-12">
                            <div className="product-filters"> <ul>
                                    {uniqueList.map((valcat, index) => {
                                        return (
                                            <li key={index} data-filter=".strawberry"  onClick={() => filterItem(valcat)}>{valcat}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
         
          </div>
        </nav>
      </>
    );
  };
  
  export default Navbar;
  