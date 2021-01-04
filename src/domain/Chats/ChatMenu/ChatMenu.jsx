import React from 'react';
import {
  PageMenu,
  PageHeader,
} from '../../../components/components';
import {
  Container, Row, Col,
} from 'reactstrap'
import {
  IconButton,
} from '../../../components/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSlidersH, faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

const ChatMenu = props => {
  return (
    <PageMenu visible={ props.visible }>
      <PageHeader>
        <Container fluid={ true } className='d-flex justify-content-between' style={{ height: '52px' }}>
          <IconButton
            renderIcon={ <FontAwesomeIcon icon={ faChevronLeft } /> }
            onClick={ e => props.setShowMenu(!props.visible) }
          />

          <IconButton
            renderIcon={ <FontAwesomeIcon icon={ faSlidersH } /> }
            onClick={ e => console.log('test') }
          />
        </Container>
      </PageHeader>

    </PageMenu>
  );
}

export default ChatMenu;