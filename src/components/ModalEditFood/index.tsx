import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { food } from '../../types/states';

interface IModalEditFood {
  setIsOpen: () => void,
  isOpen: boolean,
  handleUpdateFood: (value: food) => void,
  editingFood: food
}

function ModalEditFood({ handleUpdateFood, setIsOpen, isOpen, editingFood }: IModalEditFood) {
  const formRef = createRef<any>()

  const handleSubmit = async (data: food) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" icon='' />

        <Input name="name" placeholder="Ex: Moda Italiana" icon='' />
        <Input name="price" placeholder="Ex: 19.90" icon='' />

        <Input name="description" placeholder="Descrição" icon='' />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
