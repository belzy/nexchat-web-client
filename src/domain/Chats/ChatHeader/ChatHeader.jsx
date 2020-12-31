import React from 'react';
import {
  IconButton,
  Avatar,
} from '../../../components/components';
import {
  PageHeader,
} from '../../../components/components';
import {
  Container, Row, Col,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEllipsisV, faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

const ChatHeader = props => {
  return (
    <PageHeader>
      <Container fluid={ true }>
        <Row>

          <Col xs='3' className='d-xl-none d-flex align-items-center'>
            <IconButton 
              renderIcon={ <FontAwesomeIcon icon={ faChevronLeft } /> } 
              onClick={ e => props.setShowPage(!props.showPage) }
            />
          </Col>

          <Col xs='6' className='d-flex align-items-center'>
            <Avatar size='md' src='#' className='mr-3 d-none d-xl-block' />

            <div className='text-center text-xl-left w-100'>
              <h6 className='h6 m-0 p-0 text-dark'>{ props.heading }</h6>
              <small className='ChatHeader__sub-heading m-0 p-0'>{ props.subHeading }</small>
            </div>
          </Col>

          <Col xs='3' xl='6' className='d-flex align-items-center justify-content-end'>
            <IconButton
              renderIcon={ <FontAwesomeIcon icon={ faEllipsisV } /> }
              onClick={ e => props.setShowMenu(!props.showMenu) }
            />
          </Col>

        </Row>
      </Container>
    </PageHeader>
  );
};

export default ChatHeader;