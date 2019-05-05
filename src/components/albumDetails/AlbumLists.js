import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { connect } from "react-redux";
import { getAlbumDetails } from "../../actions/AlbumAction";
import AlbumCard from "./AlbumCard";

let prev = 0;
let next = 0;
let last = 0;
let first = 0;
class AlbumLists extends Component {
  state = {
    currentPage: 1,
    albumPhotosPerPage: 10
  };

  componentDidMount() {
    this.props.getAlbumDetails();
  }

  handleClick = event => {
    window.scroll({
      top: 100,
      left: 100,
      behavior: "smooth"
    });
    event.preventDefault();
    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  handleLastClick = event => {
    window.scroll({
      top: 100,
      left: 100,
      behavior: "smooth"
    });
    event.preventDefault();
    this.setState({
      currentPage: last
    });
  };
  handleFirstClick = event => {
    window.scroll({
      top: 100,
      left: 100,
      behavior: "smooth"
    });
    event.preventDefault();
    this.setState({
      currentPage: 1
    });
  };
  render() {
    console.log(this.props.albumDetails);
    const { currentPage, albumPhotosPerPage } = this.state;
    const { albumDetails } = this.props;

    // Logic for displaying current todos
    const indexOfLastAlbum = currentPage * albumPhotosPerPage;
    const indexOfFirstAlbum = indexOfLastAlbum - albumPhotosPerPage;
    const currentAlbum = albumDetails.slice(
      indexOfFirstAlbum,
      indexOfLastAlbum
    );
    prev = currentPage > 0 ? currentPage - 1 : 0;
    last = Math.ceil(albumDetails.length / albumPhotosPerPage);
    next = last === currentPage ? currentPage : currentPage + 1;

    // Logic for displaying page numbers
    let pageNumbers = [];
    for (let i = 1; i <= last; i++) {
      pageNumbers.push(i);
    }

    return (
      <div>
        <h1 className="display-4 mb-2 ">
          <span className="text-danger">Album</span> Photos
        </h1>
        {currentAlbum.map(albumCard => {
          return <AlbumCard key={albumCard.id} albumCard={albumCard} />;
        })}

        <div
          style={{
            marginLeft: "28%"
          }}
        >
          <ul id="page-numbers">
            <nav>
              <Pagination>
                <PaginationItem>
                  {prev === 0 ? (
                    <PaginationLink disabled>First</PaginationLink>
                  ) : (
                    <PaginationLink
                      onClick={this.handleFirstClick}
                      id={prev}
                      href={prev}
                    >
                      First
                    </PaginationLink>
                  )}
                </PaginationItem>
                <PaginationItem>
                  {prev === 0 ? (
                    <PaginationLink disabled>Prev</PaginationLink>
                  ) : (
                    <PaginationLink
                      onClick={this.handleClick}
                      id={prev}
                      href={prev}
                    >
                      Prev
                    </PaginationLink>
                  )}
                </PaginationItem>
                {pageNumbers.map((number, i) => (
                  <Pagination key={i}>
                    <PaginationItem
                      active={
                        pageNumbers[currentPage - 1] === number ? true : false
                      }
                    >
                      <PaginationLink
                        style={{
                          background: "grey"
                        }}
                        onClick={this.handleClick}
                        href={number}
                        key={number}
                        id={number}
                      >
                        {number}
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                ))}

                <PaginationItem>
                  {currentPage === last ? (
                    <PaginationLink disabled>Next</PaginationLink>
                  ) : (
                    <PaginationLink
                      onClick={this.handleClick}
                      id={pageNumbers[currentPage]}
                      href={pageNumbers[currentPage]}
                    >
                      Next
                    </PaginationLink>
                  )}
                </PaginationItem>

                <PaginationItem>
                  {currentPage === last ? (
                    <PaginationLink disabled>Last</PaginationLink>
                  ) : (
                    <PaginationLink
                      onClick={this.handleLastClick}
                      id={pageNumbers[currentPage]}
                      href={pageNumbers[currentPage]}
                    >
                      Last
                    </PaginationLink>
                  )}
                </PaginationItem>
              </Pagination>
            </nav>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  albumDetails: state.albumReducer.albumDetails
});

export default connect(
  mapStateToProps,
  { getAlbumDetails }
)(AlbumLists);
