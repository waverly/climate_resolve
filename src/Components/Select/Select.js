import React from "react";
import Select from "react-select";
import styled from "styled-components";

const SelectWrapper = styled.div``;

const options = [
  { value: "Food", label: "Food" },
  { value: "Being Fabulous", label: "Being Fabulous" },
  { value: "Ken Wheeler", label: "Ken Wheeler" },
  { value: "ReasonML", label: "ReasonML" },
  { value: "Unicorns", label: "Unicorns" },
  { value: "Kittens", label: "Kittens" }
];

class MySelect extends React.Component {
  // handleChange = value => {
  //   console.log("handling change on the select level");
  //   // this is going to call setFieldValue and manually update values.topcis
  //   this.props.onChange("topics", value);
  // };

  handleChange = selectedOption => {
    const value = selectedOption.value;
    this.props.onChange("state", value);
    console.log(`Option selected:`, value);
  };

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur("topics", true);
  };

  render() {
    return (
      <SelectWrapper>
        <label htmlFor="color">Topics (select at least 3) </label>
        <Select
          id="color"
          options={options}
          multi={true}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
        />
        {!!this.props.error && this.props.touched && (
          <div style={{ color: "red", marginTop: ".5rem" }}>
            {this.props.error}
          </div>
        )}
      </SelectWrapper>
    );
  }
}

export default MySelect;
