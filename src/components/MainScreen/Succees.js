import React from "react";
import { useSelector } from "react-redux";
import { Message, Table } from "semantic-ui-react";
import useVisible from "../../hooks/useVisible.js";
import { Transition } from "semantic-ui-react";
import Moment from "react-moment";
import { Loader } from "semantic-ui-react";
import { UserTable } from "../../services/tableValues.service";

const Success = () => {
  const visible = useVisible();
  const { profile, error, errors, loading } = useSelector(
    (state) => state.user
  );
  return (
    <Transition visible={visible} animation="scale" duration={600}>
      <div className="success-container">
        <h2>SUCCESS!</h2>
        <h4>thank you for submitting</h4>
        {!loading ? (
          <Table color="red" fixed>
            <Table.Header>
              <Table.Row>
                {UserTable.map((col) => {
                  return (
                    <Table.HeaderCell key={col.key} textAlign="center">
                      {col.label}
                    </Table.HeaderCell>
                  );
                })}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {profile.map((item) => (
                <Table.Row key={item._id}>
                  {UserTable.map((col) => {
                    if (col.key === "createdAt") {
                      return (
                        <Table.Cell textAlign="center">
                          <Moment format="DD/MM/YYYY mm:ss">
                            {new Date(item[col.key])}
                          </Moment>
                        </Table.Cell>
                      );
                    }
                    return (
                      <Table.Cell textAlign="center">
                        {item[col.key]}
                      </Table.Cell>
                    );
                  })}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        ) : (
          <Loader active inline="centered" />
        )}
        {errors && (
          <Message negative>
            <Message.Header>{error}</Message.Header>
          </Message>
        )}
      </div>
    </Transition>
  );
};
export default Success;
