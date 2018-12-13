import React, { Component, Fragment } from "react";
import styled from "styled-components";
import * as Yup from "yup";

import { InputFeedback, CenteredButtonWrapper, SectionTitle } from "./Utils";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  color: white;
`;

const CellLeft = styled.div``;
const CellRight = styled.div`
  button {
    display: block;
    margin-bottom: 5rem;
  }
`;

const Results = props => (
  <Fragment>
    <SectionTitle>Thank you! Here are your results</SectionTitle>
    <br />
    <br />
    <h3>LADWP Services and Rebates For You</h3>
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
    </GridWrapper>

    <br />
    <br />
    <h3>LADWP Services and Rebates for You</h3>
    <br />
    <GridWrapper>
      <CellLeft>AC Optimization Program</CellLeft>
      <CellRight>
        AC Optimization Program: The AC Optimization Program provides services
        by certified, professional heating, ventilation, and air conditioning
        (HVAC) technicians from approved, licensed contractors to analyze
        cooling systems and provide basic maintenance and efficiency services.
        These services are free for all eligible residential and commercial
        LADWP customers.
        <a href=" https://www.ladwpactuneup.com/">
          <button>View More Information</button>
        </a>
      </CellRight>
      <CellLeft>Consumer Rebate Program</CellLeft>
      <CellRight>
        AC Optimization Program: The AC Optimization Program provides services
        by certified, professional heating, ventilation, and air conditioning
        (HVAC) technicians from approved, licensed contractors to analyze
        cooling systems and provide basic maintenance and efficiency services.
        These services are free for all eligible residential and commercial
        LADWP customers.
        <a href="https://bit.ly/2ATH1kB">
          <button>View More Information</button>
        </a>
      </CellRight>
      <CellLeft>Efficient Product Marketplace</CellLeft>
      <CellRight>
        Efficient Product Marketplace: LADWP’s Efficient Product Marketplace
        (EPM) is a convenient online marketplace that allows customers to shop a
        selection of popular energy efficient brands available at numerous
        stores and online retailers with pricing and available rebate
        information.
        <a href=" https://bit.ly/2zA6oGc">
          <button>View More Information</button>
        </a>
      </CellRight>
      <CellLeft>Free Water Conservation Items</CellLeft>
      <CellRight>
        Free Water Conservation Items: If you own or rent a home within the
        LADWP’s service area, you can receive showerheads and aerators for free
        through the Residential Free Showerhead and Faucet Aerator Program!
        <a href="https://bit.ly/2Pk0Fir">
          <button>View More Information</button>
        </a>
      </CellRight>
      <CellLeft>Home Energy Improvement Program</CellLeft>
      <CellRight>
        Home Energy Improvement Program: LADWP is offering residential customers
        the opportunity to improve the energy and water performance in their
        homes, which can improve their comfort level and potentially reduce
        their energy and water cost through the Home Energy Improvement Program
        (HEIP). The program is free to eligible customers.
        <a href="https://bit.ly/2zyvIfC">
          <button>View More Information</button>
        </a>
      </CellRight>
      <CellLeft>Refrigerator Exchange Program</CellLeft>
      <CellRight>
        Refrigerator exchange program: The LADWP's Refrigerator Exchange Program
        provides new energy-saving, ENERGY STAR® rated refrigerators in exchange
        for qualified older model refrigerators, FREE of charge.
        <a href="https://bit.ly/2yZBxDl">
          <button>View More Information</button>
        </a>
      </CellRight>
      <CellLeft>Refrigerator Recycling Program</CellLeft>
      <CellRight>
        Refrigerator Recycling Program: LADWP offers the REfrigerator Turn-In
        and REcycle (RETIRE) Program to our residential customers to encourage
        safe and environmentally friendly recycling of old, energy inefficient
        refrigerators and freezers. Recycling an old refrigerator/freezer can
        help our customers reduce their energy bill by up to $192 per year.
        <a href="https://bit.ly/2SVyiFa">
          <button>View More Information</button>
        </a>
      </CellRight>
    </GridWrapper>
    <CenteredButtonWrapper>
      <button>Email me my results</button>
    </CenteredButtonWrapper>
  </Fragment>
);

export default Results;
