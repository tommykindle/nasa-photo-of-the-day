import React, { Component } from 'react'
import { Button, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

class SidebarLeft extends Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div style={{ marginTop: '50px' }}>
        <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            Show sidebar
          </Button>
          <Button disabled={!visible} onClick={this.handleHideClick}>
            Hide sidebar
          </Button>
        </Button.Group>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='facebook' />
              Facebook
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='instagram' />
              Instagram
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='twitter' />
              Twitter
            </Menu.Item>
          </Sidebar>
        </Sidebar.Pushable>
      </div>

    )

  }
}
export default SidebarLeft;