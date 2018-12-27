import React, { Component, Fragment } from "react";
import styled from "styled-components";
import * as Yup from "yup";

import { InputFeedback, CenteredButtonWrapper, SectionTitle } from "./Utils";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  color: white;
  @media (max-width: 768px),
    @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: landscape) {
    grid-template-columns: 100%;
  }
`;

const CellLeft = styled.div`
  text-align: right;
  padding: 10px;
  @media (max-width: 768px),
    @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: landscape) {
    text-align: center;
  }
`;
const CellRight = styled.div`
  max-width: 500px;
  button {
    display: block;
    margin-bottom: 5rem;
  }

  p {
    padding-top: 10px;
  }

  @media (max-width: 768px),
    @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: landscape) {
    text-align: center;
    max-width: auto;

    li {
      list-style: none;
    }

    button {
      margin: 3rem auto;
      margin-bottom: 5rem;
    }
  }
`;

const Titles = styled.h2`
  text-align: center;
  margin-top: 3rem;
`;

const Results = props => (
  <Fragment>
    <SectionTitle>Thank you for participating in our survey!</SectionTitle>
    <br />
    <h3>
      Below are LAWDP services and rebate programs that may be useful to you
    </h3>
    <br />
    <br />
    <CenteredButtonWrapper>
      <button>Email me my results</button>
    </CenteredButtonWrapper>
    <br />
    <Titles>LADWP Services and Rebates For You</Titles>
    <br />
    <GridWrapper>
      <CellLeft>
        <h3>Low Income</h3>
      </CellLeft>
      <CellRight>
        <ul>
          <li>
            <a target="_blank" href="https://www.ladwpactuneup.com/">
              AC Optimization Program
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ladwp.com/ladwp/faces/ladwp/residential/r-savemoney/r-sm-rebatesandprograms/r-sm-howtoapplyconsumerrebateprogram?_adf.ctrl-state=14xdk3dzq7_72&_afrLoop=1335082542492325"
            >
              Consumer Rebate Program
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ladwp.com/ladwp/faces/ladwp/residential/r-savemoney/r-sm-rebatesandprograms/r-sm-rp-epm?_adf.ctrl-state=14xdk3dzq7_72&_afrLoop=1334967335156597"
            >
              Efficient Product Marketplace
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ladwp.com/ladwp/faces/ladwp/residential/r-savemoney/r-sm-rebatesandprograms/r-sm-rp-freeconservationitems?_adf.ctrl-state=14xdk3dzq7_72&_afrLoop=1336067425677835"
            >
              Free Water Conservation Items
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ladwp.com/ladwp/faces/ladwp/residential/r-savemoney/r-sm-rebatesandprograms/r-sm-rp-homeenergyimprovementprogram?_adf.ctrl-state=14xdk3dzq7_72&_afrLoop=1336184774653434"
            >
              Home Energy Improvement Program
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.arcaincutility.com/CA/LADWP-Exchange/index.cfm?/"
            >
              Refrigerator Exchange Program
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.arcaincutility.com/CA/Ladwp/account-lookup.cfm"
            >
              Refrigerator Recycling Program
            </a>
          </li>
        </ul>
      </CellRight>

      <CellLeft>
        <h3>Renter</h3>
      </CellLeft>
      <CellRight>
        <ul>
          <li>
            <a target="_blank" href="https://www.ladwpactuneup.com/">
              AC Optimization Program
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ladwp.com/ladwp/faces/ladwp/residential/r-savemoney/r-sm-rebatesandprograms/r-sm-howtoapplyconsumerrebateprogram?_adf.ctrl-state=14xdk3dzq7_72&_afrLoop=1335082542492325"
            >
              Consumer Rebate Program
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ladwp.com/ladwp/faces/ladwp/residential/r-savemoney/r-sm-rebatesandprograms/r-sm-rp-epm?_adf.ctrl-state=14xdk3dzq7_72&_afrLoop=1334967335156597"
            >
              Efficient Product Marketplace
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ladwp.com/ladwp/faces/ladwp/residential/r-savemoney/r-sm-rebatesandprograms/r-sm-rp-freeconservationitems?_adf.ctrl-state=14xdk3dzq7_72&_afrLoop=1336067425677835"
            >
              Free Water Conservation Items
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ladwp.com/ladwp/faces/ladwp/residential/r-savemoney/r-sm-rebatesandprograms/r-sm-rp-homeenergyimprovementprogram?_adf.ctrl-state=14xdk3dzq7_72&_afrLoop=1336184774653434"
            >
              Home Energy Improvement Program
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.arcaincutility.com/CA/LADWP-Exchange/index.cfm?/"
            >
              Refrigerator Exchange Program
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.arcaincutility.com/CA/Ladwp/account-lookup.cfm"
            >
              Refrigerator Recycling Program
            </a>
          </li>
        </ul>
      </CellRight>

      <CellLeft>
        <h3>Homeowner</h3>
      </CellLeft>
      <CellRight>
        <ul>
          <li>
            <a target="_blank" href="https://www.ladwpactuneup.com/">
              AC Optimization Program
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ladwp.com/ladwp/faces/ladwp/residential/r-savemoney/r-sm-rebatesandprograms/r-sm-howtoapplyconsumerrebateprogram?_adf.ctrl-state=14xdk3dzq7_72&_afrLoop=1335082542492325"
            >
              Consumer Rebate Program
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ladwp.com/ladwp/faces/ladwp/residential/r-savemoney/r-sm-rebatesandprograms/r-sm-rp-epm?_adf.ctrl-state=14xdk3dzq7_72&_afrLoop=1334967335156597"
            >
              Efficient Product Marketplace
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ladwp.com/ladwp/faces/ladwp/residential/r-savemoney/r-sm-rebatesandprograms/r-sm-rp-freeconservationitems?_adf.ctrl-state=14xdk3dzq7_72&_afrLoop=1336067425677835"
            >
              Free Water Conservation Items
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ladwp.com/ladwp/faces/ladwp/residential/r-savemoney/r-sm-rebatesandprograms/r-sm-rp-homeenergyimprovementprogram?_adf.ctrl-state=14xdk3dzq7_72&_afrLoop=1336184774653434"
            >
              Home Energy Improvement Program
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.arcaincutility.com/CA/LADWP-Exchange/index.cfm?/"
            >
              Refrigerator Exchange Program
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.arcaincutility.com/CA/Ladwp/account-lookup.cfm"
            >
              Refrigerator Recycling Program
            </a>
          </li>
        </ul>
      </CellRight>

      <CellLeft>
        <h3>Landlord</h3>
      </CellLeft>
      <CellRight>
        <ul>
          <li>
            <a target="_blank" href="https://www.ladwpactuneup.com/">
              AC Optimization Program
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ladwp.com/ladwp/faces/ladwp/residential/r-savemoney/r-sm-rebatesandprograms/r-sm-howtoapplyconsumerrebateprogram?_adf.ctrl-state=14xdk3dzq7_72&_afrLoop=1335082542492325"
            >
              Consumer Rebate Program
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ladwp.com/ladwp/faces/ladwp/residential/r-savemoney/r-sm-rebatesandprograms/r-sm-rp-epm?_adf.ctrl-state=14xdk3dzq7_72&_afrLoop=1334967335156597"
            >
              Efficient Product Marketplace
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ladwp.com/ladwp/faces/ladwp/residential/r-savemoney/r-sm-rebatesandprograms/r-sm-rp-freeconservationitems?_adf.ctrl-state=14xdk3dzq7_72&_afrLoop=1336067425677835"
            >
              Free Water Conservation Items
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ladwp.com/ladwp/faces/ladwp/residential/r-savemoney/r-sm-rebatesandprograms/r-sm-rp-homeenergyimprovementprogram?_adf.ctrl-state=14xdk3dzq7_72&_afrLoop=1336184774653434"
            >
              Home Energy Improvement Program
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.arcaincutility.com/CA/LADWP-Exchange/index.cfm?/"
            >
              Refrigerator Exchange Program
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.arcaincutility.com/CA/Ladwp/account-lookup.cfm"
            >
              Refrigerator Recycling Program
            </a>
          </li>
        </ul>
      </CellRight>

      <CellLeft>
        <h3>Small Business</h3>
      </CellLeft>
      <CellRight>
        <ul>
          <li>
            <a target="_blank" href="https://www.ladwpactuneup.com/">
              AC Optimization Program
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ladwp.com/ladwp/faces/ladwp/residential/r-savemoney/r-sm-rebatesandprograms/r-sm-rp-epm?_adf.ctrl-state=14xdk3dzq7_72&_afrLoop=1334967335156597"
            >
              Efficient Product Marketplace
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.arcaincutility.com/CA/Ladwp/account-lookup.cfm"
            >
              Refrigerator Recycling Program
            </a>
          </li>
        </ul>
      </CellRight>
      <CellLeft>
        <h3>Large Business</h3>
      </CellLeft>
      <CellRight>
        <ul>
          <li>
            <a target="_blank" href="https://www.ladwpactuneup.com/">
              AC Optimization Program
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ladwp.com/ladwp/faces/ladwp/residential/r-savemoney/r-sm-rebatesandprograms/r-sm-rp-epm?_adf.ctrl-state=14xdk3dzq7_72&_afrLoop=1334967335156597"
            >
              Efficient Product Marketplace
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.arcaincutility.com/CA/Ladwp/account-lookup.cfm"
            >
              Refrigerator Recycling Program
            </a>
          </li>
        </ul>
      </CellRight>
      <h1>
        More LADWP Energy-saving rebates: 
        <a href="http://ladwp.com/save">http://ladwp.com/save</a>
      </h1>
    </GridWrapper>

    <br />
    <br />
    <Titles>LADWP Rate Assistance Programs</Titles>
    <br />
    <GridWrapper>
      <CellLeft>
        <h3>Life-Support Equipment Discount</h3>
      </CellLeft>
      <CellRight>
        <p>
          Do you or a full-time member of your household regularly require the
          use of an essential life-support device? Eligible devices include, but
          are not limited to, motorized wheelchairs, respirators (all types),
          dialysis machines, suction machines, apnea monitors, iron lungs,
          electronic nerve stimulators, and others.
        </p>

        <a href="https://bit.ly/2yZxc34">
          <button>View More Information</button>
        </a>
      </CellRight>
      <CellLeft>
        <h3>Low Income Discount Program</h3>
      </CellLeft>
      <CellRight>
        <p>
          If your income and household size qualify for this rate, the LADWP
          will apply a discount to your electric and/or water bill. For your
          convenience, you may download, print, and mail in a paper application
          form.
        </p>

        <a href="https://bit.ly/2yZxc34">
          <button>View More Information</button>
        </a>
      </CellRight>
      <CellLeft>
        <h3>Physician Certified Allowance Discount</h3>
      </CellLeft>
      <CellRight>
        <p>
          Discounts on electric bills are available to customers who provide
          verification by a state-licensed physician that a full-time member of
          the household is a paraplegic, hemiplegic, quadriplegic, multiple
          sclerosis patient, neuromuscular patient, or scleroderma patient being
          treated for a life-threatening illness. An allowance is also available
          if a member of the household has a compromised immune system and has a
          state-licensed physician’s certification that an additional heating
          and/or cooling allowance is medically necessary.
        </p>
        <a href=" https://bit.ly/2yZxc34">
          <button>View More Information</button>
        </a>
      </CellRight>
      <CellLeft>
        <h3>Free Water Conservation Items</h3>
      </CellLeft>
      <CellRight>
        <p>
          Free Water Conservation Items: If you own or rent a home within the
          LADWP’s service area, you can receive showerheads and aerators for
          free through the Residential Free Showerhead and Faucet Aerator
          Program!
        </p>
        <a href="https://bit.ly/2Pk0Fir">
          <button>View More Information</button>
        </a>
      </CellRight>
      <CellLeft>
        <h3>Senior Citizen/ Disability Lifeline Rate</h3>
      </CellLeft>
      <CellRight>
        <p>
          Customers who are 62 years of age or older or permanently disabled may
          qualify, based solely on their income, to have a discount applied to
          their electric and/or water bills. The discount is available under
          provisions of the Los Angeles Municipal Code or the Revenue and
          Taxation Code of the State of California.
        </p>

        <a href="https://bit.ly/2yZxc34">
          <button>View More Information</button>
        </a>
      </CellRight>
      <p>
        Some Rate Assistance Programs may require additional paperwork and
        information.
      </p>
    </GridWrapper>
    <CenteredButtonWrapper>
      <button>Email me my results</button>
    </CenteredButtonWrapper>
  </Fragment>
);

export default Results;
