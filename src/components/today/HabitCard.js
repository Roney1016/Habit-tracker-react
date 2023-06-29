import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../../action";
import styles from "../../styles/home.module.css";
import ActionButton from "./ActionButton";
import Button from 'react-bootstrap/Button';
import { IoTrashBin } from "react-icons/io5";

const HabitCard = (props) => {
  const { habit } = props;
  var target = 6;
  var progress = 0;

  for (let i = 0; i < 6; i++) {
    if (habit.weekdays[i].doneStatus === "done") {
      progress++;
    }
  }
  const dispatch = useDispatch();

  const handleDeleteHabit = () => {
    dispatch(deleteHabit(habit.id));
  };

  return (
    <div className={styles.habitCardContainer}>
      <div className={styles.habitCard}>
        <div className={styles.habitCardTitle}>
          <div className={styles.habitActionName}>
            <span>
              <ActionButton habit={habit} />
            </span>
            <span className={styles.cardName}>
              {`:   ${habit.name}`}
            </span>
          </div>
          <div>
            <div className='float-end shadow-sm me-2'>
              <Button variant='me-3' > <IoTrashBin className='icon' onClick={() => { if (window.confirm(`Are you want to sure Habit Delete => ${habit.name}`)) { handleDeleteHabit(habit.name) } }} />  </Button>
            </div>
          </div>
        </div>

        <div className={styles.weeklyProgress}>
          <span className='id  h5 text-red'>Target : {target} days / week</span>
          <span className='id  h5 text-red'>Progress :{progress}  / {target} </span>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
