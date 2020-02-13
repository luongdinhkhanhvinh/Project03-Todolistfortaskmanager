import React from 'react';
class Sort extends React.Component {
  render(){
    return (
                        <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Sort <span className="fa fa-caret-square-o-down ml-5"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li>
                                    <a href="github.com" role="button">
                                                <span className="fa fa-sort-alpha-asc pr-5">
                                                    Name A-Z
                                                </span>
                                            </a>
                                </li>
                                <li>
                                    <a href="github.com" role="button">
                                                <span className="fa fa-sort-alpha-desc pr-5">
                                                    Name Z-A
                                                </span>
                                            </a>
                                </li>
                                <li role="separator" className="divider"></li>
                                <li><a href="github.com" role="button">Status Enable</a></li>
                                <li><a href="github.com" role="button">Status Hide</a></li>
                            </ul>
                        </div>
  );
  }
}

export default Sort;