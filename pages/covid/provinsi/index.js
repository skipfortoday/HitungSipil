import React, { useEffect } from "react";
import Admin from "../../../src/layouts/admin";
import TablefixHeader from "../../../src/components/tablefixHeader";
import { getCovidProvinsi } from "../../../src/actions/covidAction";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getCovidProvinsi: state.covid.getCovidProvinsi,
  };
};

const columns = [
  {
    name: "IDBA",
    options: {
      filter: false,
    },
  },
  {
    name: "NamaBA",
    options: {
      filter: false,
    },
  },
  {
    name: "Status",
    options: {
      filter: false,
    },
  },
  {
    name: "WaktuSyc",
    options: {
      filter: false,
    },
  },
];

const provinsi = (props) => {
  useEffect(() => {
    if (!props.getCovidProvinsi) {
      props.dispatch(getCovidProvinsi());
    }
  });
  return (
    <>
      {/* <TablefixHeader
        data={props.getCovidProvinsi}
        title="Data Covid Provinsi"
        columns={columns}
      /> */}
    </>
  );
};

provinsi.layout = Admin;
export default connect(mapStateToProps, null)(provinsi);
