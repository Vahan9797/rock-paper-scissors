import React, { useMemo } from 'react';
import { Modal } from 'antd';
import Card from '../Cards/Card';

const ThrowLoader = () => (
  <div className="throw-loader">
    <div />
    <div />
    <div />
  </div>
)

const ThrowModal = ({ chosenVariant, loading, data, visible, handleCancel }) => {
  const result = useMemo(() => {
    if (!data) return null;

    let outcome = `You ${data.outcome}!`;
    let text;

    switch(data.outcome) {
      case 'win':
        text = `Curb with ${data.generated_throw} lost`;
        break;
      case 'lost':
        text = `Curb with ${data.generated_throw} won`;
        break;
      case 'draw':
        text = `Curb with ${data.generated_throw} drew`;
        break;
      default:
        outcome = 'Well, that was unexpected :/';
        text = `We could not compare ${chosenVariant} with Curb's ${data.generated_throw}. Result is ${data.outcome}`;
    }

    return { outcome, text }
  }, [data.outcome, data.generated_throw])

  return (
    <Modal
      visible={visible}
      title={null}
      footer={null}
      onCancel={handleCancel}
      className={`throw-modal${loading && data ? '' : ' loaded'}`}
    >
      {loading ? (
        <>
          <div className="modal-message">Waiting Curb's Choice</div>
          <div className="throw-wrapper">
            <Card variant={chosenVariant} customTitle={'Your bet'} disabled={true} />
            <div className="curb-throw">
              <ThrowLoader />
              <img src='curb.png' />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="modal-message">{result.outcome}</div>
          <div className="throw-result">{result.text}</div>
          <Card variant={data.generated_throw} customTitle={' '} disabled={true} />
          <button className="result-button" onClick={handleCancel}>Ok</button>
        </>
      )}
    </Modal>
  )
}

export default ThrowModal;