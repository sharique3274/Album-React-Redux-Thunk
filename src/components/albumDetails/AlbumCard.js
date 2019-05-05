import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { deleteContact, getFavAlbum } from "../../actions/contactActions";

class AlbumCard extends Component {
  state = {
    showContactInfo: false,
    heartColor: true
  };

  onImageClick = () => {
    window.open(this.props.albumCard.url, "_blank");
  };

  onFavClick = id => {
    console.log(id, "this is the perticular ID");
    this.setState({
      heartColor: !this.state.heartColor
    });
  };

  render() {
    const { id, title, albumId, thumbnailUrl } = this.props.albumCard;
    const { showContactInfo, heartColor } = this.state;

    return (
      <div className="container" style={{ maxWidth: "40vw" }}>
        <div
          className="card card-body mb-3"
          style={{
            backgroundImage: "linear-gradient(-90deg, grey, white)",
            border: "1px solid black",
            boxShadow: "9px 3px 9px black"
          }}
        >
          <h1
            className="card card-body mb-3"
            style={{
              backgroundImage: "linear-gradient(-90deg, red, white)",
              border: "1px solid black",
              boxShadow: "9px 3px 9px black"
            }}
          >
            ALBUM ID : {albumId}
          </h1>
          <h4>
            <img
              onClick={this.onImageClick}
              src={thumbnailUrl}
              alt="AVATAR"
              className="img-fluid"
              style={{
                boxShadow: "9px 3px 9px black",
                cursor: "pointer"
              }}
            />{" "}
            <i
              onClick={() =>
                this.setState({
                  showContactInfo: !this.state.showContactInfo
                })
              }
              className="fas fa-sort-down"
              style={{ cursor: "pointer", marginLeft: "20px" }}
            />
            <i
              className="fas fa-times"
              style={{ cursor: "pointer", float: "right", color: "red" }}
              //onClick={this.onDeleteClick.bind(this, id)}
            />
            <Link to={`contact/edit/${id}`}>
              <i
                className="fas fa-pencil-alt"
                style={{
                  cursor: "pointer",
                  float: "right",
                  color: "black",
                  marginRight: "1rem"
                }}
              />
            </Link>
            {heartColor ? (
              <i
                class="far fa-heart"
                style={{
                  cursor: "pointer",
                  float: "right",
                  color: "black",
                  marginRight: "1rem"
                }}
                onClick={this.onFavClick.bind(this, id)}
              />
            ) : (
              <i
                class="fas fa-heart"
                style={{
                  cursor: "pointer",
                  float: "right",
                  color: "black",
                  marginRight: "1rem"
                }}
                onClick={this.onFavClick.bind(this, id)}
              />
            )}
          </h4>
          {showContactInfo ? (
            <ul className="list-group">
              <li className="list-group-item">ID : {id}</li>
              <li className="list-group-item">TITLE : {title}</li>
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}

AlbumCard.propTypes = {
  AlbumCard: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
};

export default connect(
  null,
  {}
)(AlbumCard);
