import { Component } from 'react';
import { MaterialModal } from './MaterialModal';

export class MaterialCard extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };
  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { item, onDelete, onUpdate } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div>
        <a href={item.link}>{item.title}</a>
        <button type="button" onClick={() => onDelete(item.id)}>
          &times;
        </button>
        <button type="button" onClick={this.openModal}>
          Edit
        </button>
        {isModalOpen && (
          <MaterialModal
            onClose={this.closeModal}
            onEdit={() => onUpdate({ id: item.id, title: Date.now() })}
          />
        )}
      </div>
    );
  }
}
