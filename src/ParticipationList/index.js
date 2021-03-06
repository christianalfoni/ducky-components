import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';
import ChallengeMeta13 from '../ChallengeMeta13';
import styles from './styles.css';

function ParticipationList(props) {
  const {expectedParticipantCounts, participantCounts, sections, sectionKey} = props;

  const sortedList = Object.keys(expectedParticipantCounts)
        .map((key) => {
          return {
            expectedParticipants: expectedParticipantCounts[key],
            isUserSection: sectionKey === key,
            participantCount: participantCounts[key],
            sectionName: sections[key].name,
            percentage: ((participantCounts[key] / expectedParticipantCounts[key]) * 100).toFixed(0)
          };
        }).sort((sectionA, sectionB) => {
          return sectionB.percentage - sectionA.percentage;
        });

  return (
    <Wrapper
      className={styles.wrapper}
      type={'standard'}
      >
      {
        sortedList.map((section) => {
          return (
            <ChallengeMeta13
              className={styles.item}
              expectedParticipants={section.expectedParticipants}
              isUserSection={section.isUserSection}
              key={section.sectionName}
              participantCount={section.participantCount}
              sectionName={section.sectionName}
              />
          );
        })
      }

    </Wrapper>
  );
}

ParticipationList.propTypes = {
  expectedParticipantCounts: PropTypes.object,
  participantCounts: PropTypes.object,
  sectionKey: PropTypes.string,
  sections: PropTypes.object
};

export default ParticipationList;
