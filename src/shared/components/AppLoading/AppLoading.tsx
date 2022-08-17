import { useLoading } from '@shared/hooks/useLoading';
import Modal from 'antd/lib/modal/Modal';
import './AppLoading.css';

export const AppLoading = () => {
  const { state } = useLoading();
  return (
    <Modal
      centered
      visible={state.isVisible}
      footer={null}
      closable={false}
      zIndex={2}
    >
      <div className="loading">
        <img src="../../../../assets/images/loader.gif" alt="Loading" />
      </div>
    </Modal>
  );
};
