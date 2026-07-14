"use client";

import { useEffect, useState } from "react";
import { useCardStore } from "@/app/store/CardStore";
import styles from "@/app/style/paymentMethods.module.css";
import {
  IoCard,
  IoAdd,
  IoTrash,
  IoStar,
  IoStarOutline,
  IoShieldCheckmark,
  IoSparkles,
} from "react-icons/io5";
import { toast } from "sonner";

const formatCardType = (cardType) => {
  if (!cardType) return "Card";
  return cardType
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function PaymentMethods() {
  const {
    cards,
    cardsLoading,
    addingCard,
    updatingCardId,
    deletingCardId,
    getCards,
    initializeCardVerification,
    setDefaultCard,
    deleteCard,
  } = useCardStore();

  const [confirmingDeleteId, setConfirmingDeleteId] = useState(null);

  useEffect(() => {
    getCards();
  }, [getCards]);

  const handleAddCard = async () => {
    const result = await initializeCardVerification();
    if (result.success) {
      toast.success("Redirecting to secure card verification...");
      window.location.href = result.data.authorizationUrl;
    } else {
      toast.error(result.message || "Failed to start card verification");
    }
  };

  const handleSetDefault = async (cardId) => {
    const result = await setDefaultCard(cardId);
    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message || "Failed to update default card");
    }
  };

  const handleDelete = async (cardId) => {
    if (confirmingDeleteId !== cardId) {
      setConfirmingDeleteId(cardId);
      return;
    }

    setConfirmingDeleteId(null);
    const result = await deleteCard(cardId);
    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message || "Failed to remove card");
    }
  };

  if (cardsLoading && !cards.length) {
    return (
      <div className={styles.loadingContainer}>
        <IoSparkles className={styles.loaderIcon} />
        <p>Loading your cards...</p>
      </div>
    );
  }

  return (
    <div className={styles.paymentMethods}>
      <div className={styles.verificationNote}>
        <IoShieldCheckmark />
        <div>
          <strong>How card verification works</strong>
          <p>
            To save a card securely, Paystack charges a small verification fee
            of KSh 5 which is refunded automatically once your card is
            verified. Your card is only saved after the verification succeeds.
          </p>
        </div>
      </div>

      <div className={styles.cardsList}>
        {cards.length === 0 ? (
          <div className={styles.emptyState}>
            <IoCard className={styles.emptyIcon} />
            <h3>No Saved Cards</h3>
            <p>
              Add a card to make upgrading your plan faster. You can choose a
              saved card at checkout or pay with another method anytime.
            </p>
          </div>
        ) : (
          cards.map((card) => (
            <div
              key={card._id}
              className={`${styles.cardItem} ${
                card.isDefault ? styles.cardItemDefault : ""
              }`}
            >
              <div className={styles.cardIcon}>
                <IoCard />
              </div>

              <div className={styles.cardInfo}>
                <div className={styles.cardTitle}>
                  <h3>
                    {formatCardType(card.cardType)} •••• {card.last4}
                  </h3>
                  {card.isDefault && (
                    <span className={styles.defaultBadge}>
                      <IoStar />
                      Default
                    </span>
                  )}
                </div>
                <div className={styles.cardMeta}>
                  {card.bank && <span>{card.bank}</span>}
                  <span>
                    Expires {card.expMonth}/{card.expYear}
                  </span>
                </div>
              </div>

              <div className={styles.cardActions}>
                {!card.isDefault && (
                  <button
                    className={styles.defaultButton}
                    onClick={() => handleSetDefault(card._id)}
                    disabled={updatingCardId === card._id}
                  >
                    <IoStarOutline />
                    <span>
                      {updatingCardId === card._id
                        ? "Updating..."
                        : "Set Default"}
                    </span>
                  </button>
                )}
                <button
                  className={`${styles.deleteButton} ${
                    confirmingDeleteId === card._id
                      ? styles.deleteButtonConfirm
                      : ""
                  }`}
                  onClick={() => handleDelete(card._id)}
                  onBlur={() => setConfirmingDeleteId(null)}
                  disabled={deletingCardId === card._id}
                >
                  <IoTrash />
                  <span>
                    {deletingCardId === card._id
                      ? "Removing..."
                      : confirmingDeleteId === card._id
                      ? "Confirm Remove?"
                      : "Remove"}
                  </span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <button
        className={styles.addCardButton}
        onClick={handleAddCard}
        disabled={addingCard}
      >
        <IoAdd />
        <span>{addingCard ? "Preparing verification..." : "Add a Card"}</span>
      </button>
    </div>
  );
}
