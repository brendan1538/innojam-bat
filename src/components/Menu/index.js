import React, { Component } from "react";
import { Icon, Menu, Modal } from "semantic-ui-react";

import CreateBundleModal from "../CreateBundleModal";

export default class MenuLabeledIcons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    this.handleModal = this.handleModal.bind(this);
  }

  handleModal = event => {
    this.setState(prevState => ({ modalOpen: !prevState.modalOpen }));
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu icon="labeled">
        <Menu.Item>
          <img style={{ width: "100px" }} src="logo.png" />
        </Menu.Item>
        <Modal
          closeIcon
          open={this.state.modalOpen}
          onClose={this.handleModal}
          trigger={
            <Menu.Item name="plus" onClick={this.handleModal}>
              <Icon name="plus" color="green" />
              Create New Bundle
            </Menu.Item>
          }
        >
          <CreateBundleModal handleModal={this.handleModal} />
        </Modal>
      </Menu>
    );
  }
}
