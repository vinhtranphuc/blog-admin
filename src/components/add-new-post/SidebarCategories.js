import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { addCategory, removeCategory } from '../../actions/categories';
import { Row, Col } from 'react-bootstrap';
import { FormRadio } from "shards-react";

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

class SidebarCategories extends React.Component {

  constructor(props) {
    super(props);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onCategoryAdd = this.onCategoryAdd.bind(this);
    this.onCategoryRemove = this.onCategoryRemove.bind(this);
  }

  onCategoryChange(e) {
    const category = e.target.value;
    this.setState(() => ({ category: category }));
  }

  onCategoryTypeChange(categoryTypePrm) {
    const categoryType = categoryTypePrm;
    this.setState(() => ({ categoryType: categoryType}));
  }

  onCategoryAdd() {
    var category = this.state.category;
    var categoryType = this.state.categoryType;
    console.log('categoryType : '+categoryType);

    var categoryObj = {
      category : category,
      categoryType : categoryType
    }
    this.props.dispatch(addCategory(categoryObj));
  }

  onCategoryRemove(e) {
    var categoryId = e.target.value;
    this.props.dispatch(removeCategory(categoryId));
  }

  render() {
    return (
      <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{this.props.title}</h6>
        </CardHeader>
        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="px-3 pb-2">
              {this.props.data.categories.map(category => {
                return (
                  <>
                    <Row>
                      <Col sm={9}>
                        <FormCheckbox key={category.categoryId} className="mb-1" value="uncategorized">
                          {category.category}
                        </FormCheckbox>
                      </Col>
                      <Col sm={3}>
                        <Button outline={true} value={category.categoryId} size="sm" theme="danger" className="mb-1" onClick={this.onCategoryRemove}>
                          remove
                        </Button>
                      </Col>
                    </Row>
                  </>
                );
              })}
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                  <Col sm="3">
                    <strong>Type :</strong>
                  </Col>
                  <Col sm="4">
                    <FormRadio name = "category-type" value="1" onChange={this.onCategoryTypeChange.bind(this,"1")} defaultChecked>Code</FormRadio>
                  </Col>
                  <Col sm="4">
                    <FormRadio name = "category-type" value="2" onChange={this.onCategoryTypeChange.bind(this,"2")}>Other</FormRadio>
                  </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem className="d-flex px-3">
              <InputGroup className="ml-auto">
                <FormInput onChange={this.onCategoryChange} placeholder="New category" />
                <InputGroupAddon type="append" >
                  <Button theme="white" className="px-2" onClick={this.onCategoryAdd}>
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
}

SidebarCategories.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarCategories.defaultProps = {
  title: "Categories",
  category: ""
};

const mapStateToProps = (state) => {
  console.log('components/add-new-post > mapStateToProps');

  return {
    data: state
  };
}

export default connect(mapStateToProps)(SidebarCategories);
