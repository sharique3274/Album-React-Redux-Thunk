import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addImage } from "../../actions/AlbumAction";

class AddImage extends Component {
  state = {
    albumId: "",
    thumbnailUrl: "",
    title: "",
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();

    const { albumId, thumbnailUrl, title } = this.state;

    if (albumId === "") {
      this.setState({ errors: { name: "Album ID is required" } });
      return;
    }

    if (thumbnailUrl === "") {
      this.setState({ errors: { email: "ThumbnailURL/URL is required" } });
      return;
    }

    if (title === "") {
      this.setState({ errors: { phone: "Title is required" } });
      return;
    }

    const newContact = {
      albumId,
      thumbnailUrl,
      title
    };

    this.props.addImage(newContact);

    this.setState({
      albumId: "",
      thumbnailUrl: "",
      title: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { albumId, thumbnailUrl, title, errors } = this.state;

    return (
      <div className="card mb-3" style={{ height: "85vh" }}>
        <div className="card-header text-center">Add Image To Album</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="ALBUM ID"
              name="albumId"
              placeholder="Enter Album ID"
              value={albumId}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="ENTER URL OF IMAGE"
              name="thumbnailUrl"
              type="text"
              placeholder="Enter URL/Thumbnail of Image "
              value={thumbnailUrl}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="TITLE"
              name="title"
              placeholder="Enter Title"
              value={title}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Add Image"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

AddImage.propTypes = {
  addImage: PropTypes.func.isRequired
};

export default connect(
  null,
  { addImage }
)(AddImage);
