import React from 'react'
import styles from './style.module.scss'
import Modal from 'react-modal'
import {FiX} from 'react-icons/fi'
import {OrderItemProps} from '../../pages/dashboard/index'

interface ModalOrderProps{
  isOpen: boolean;
  onRequestClose: () => void;
  order: OrderItemProps[];
  handleFinishModalItem: (id: string) => void
}

export function ModalOrder({isOpen, onRequestClose, order, handleFinishModalItem}:ModalOrderProps) {

  const customStyles = {
    content: {
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',
      padding: '30px',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#1d1d2e',
    },
  };
  console.log(order, 'order');
  

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={customStyles}
    >
      <button
      type='button'
      onClick={onRequestClose}
      className='react-modal-close'
      style={{background: 'transparent', border: 0}}
      >
        <FiX size={45} color='#f34748' />
      </button>
      <div className={styles.container}>
        <h2>Detalhes do pedido</h2>
        <span className={styles.table}>
          Mesa: <strong>{order[0]?.order?.table}</strong>
        </span>
        {order.map((item) => (
          <section key={item.id} className={styles.containerItem}>
            <span>{item.amount} - <strong>{item.product.name}</strong></span>
            <span className={styles.description}>{item.product.description}</span>
          </section>
        ))}
        <button className={styles.buttonOrder} onClick={() => handleFinishModalItem(order[0].order_id)}>Concluir pedido</button>
      </div>

    </Modal>
  )
}
