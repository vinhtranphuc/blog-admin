import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { addCategory } from '../../actions/categories';

import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  InputGroup,
  InputGroupAddon,
  FormCheckbox,
  FormInput
} from "shards-react";

const SidebarCategories = (props) => {
  
  debugger;
  console.log(props);

  return (
    <Card small className="mb-3">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{props.title}</h6>
      </CardHeader>
      <CardBody className="p-0">
        <ListGroup flush>
          <ListGroupItem className="px-3 pb-2">
            {props.data.categories.map(category => {
              return (
                <FormCheckbox key={category.categoryId} className="mb-1" value="uncategorized" defaultChecked>
                  {category.category}
                </FormCheckbox>
              );
            })}
          </ListGroupItem>

          <ListGroupItem className="d-flex px-3">
            <InputGroup className="ml-auto">
              <FormInput placeholder="New category" />
              <InputGroupAddon type="append" value = {props.data.category?props.data.category:''}>
                <Button theme="white" className="px-2" onClick={(category)=> {
                    props.dispatch(addCategory(category));
                    props.history.push('/');
                }}>
                  <i className="material-icons">add</i>
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
}

SidebarCategories.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarCategories.defaultProps = {
  title: "Categories"
};

const mapStateToProps = (state) => {
  console.log('components/add-new-post > mapStateToProps');
  return {
    data: state
  };
}

export default connect(mapStateToProps)(SidebarCategories);
