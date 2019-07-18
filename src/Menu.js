import React from 'react'
import { Container, Dropdown, Image, Menu, } from 'semantic-ui-react'

const FixedMenuLayout = (props) => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src={props.logoImg} style={{ marginRight: '1.5em' }} />
          Nasa Photo of the Day
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Previous Days'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  </div>
)


export default FixedMenuLayout;