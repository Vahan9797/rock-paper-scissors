import React, { useCallback, useState } from "react";
import axios from "axios";
import ThrowModal from "../partials/ThrowModal";
import Card from './Card';

const cards = ['rock', 'paper', 'scissors']

const Cards = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedBet, setSelectedBet] = useState('');

  const handleCancel = useCallback(() => setModalVisible(false), [setModalVisible]);

  const handleBet = useCallback(async (chosenVariant) => {
    setSelectedBet(chosenVariant);
    setModalVisible(true);
    setLoading(true);
    try {
      const response = await axios.get(`/api/throws?throw=${chosenVariant}`)

      console.log(response);
      if (response && response.status === 200) {
        setData(response.data.body);
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
    } catch (e) {
      setModalVisible(false);
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="cards-content">
      <div className="cards-title">Select A Bet</div>
      <div className="cards-wrapper">
        {cards.map((card, idx) => <Card key={idx} variant={card} onClick={handleBet} />)}
      </div>
      <ThrowModal
        visible={modalVisible}
        chosenVariant={selectedBet}
        handleCancel={handleCancel}
        data={data}
        loading={loading}
      />
    </div>
  );
}

export default Cards;