import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import HabitCard from "./HabitCard";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/home.module.css";
import { addHabit } from "../../action";


function AddAlbum() {
  const [inputData, setInputData] = useState('');

  const habits = useSelector((state) => state.habitsReducer);
  console.log(habits);
  const dispatch = useDispatch();

  const handleAddHabit = () => {
    dispatch(addHabit(inputData));
    setInputData('');
  }


  return (
    <div
      className="modal show" style={{ display: 'block', position: 'initial' }}
    >
         <div className={styles.todaysDate}>
              {}
         </div>
      <Modal.Dialog className="border border-danger rounded">
        <Modal.Header >
          <Modal.Title className='text-danger'>Habit Add </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="form-group">
            <label className='text-danger fw-bold'>Habit Name</label>
            <input type="text" className="form-control mt-2 mb-3 border border-danger fw-bold " value={inputData} onChange={(event) => setInputData(event.target.value)} autoFocus />
           
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleAddHabit} >
            Add Habit
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
      <div className={styles.listHabit}>
        {habits.list.map((habit) => (
          <HabitCard habit={habit} key={habit.id} />
        ))
        }
      </div>
    </div>


  );
}

export default AddAlbum;