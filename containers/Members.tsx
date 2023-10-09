import React from 'react';
import { member } from '../portfolio';
import { Container, Row } from 'reactstrap';
import MembersCard from '../components/MembersCard';

const Member = () => {
  return (
    member && (
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-briefcase-24 text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Members</h4>
            </div>
          </div>
          <Row className="row-grid align-items-start">
            {member.map((data, i) => {
              return <MembersCard key={i} {...data} />;
            })}
          </Row>
        </Container>
      </section>
    )
  );
};

export default Member;
