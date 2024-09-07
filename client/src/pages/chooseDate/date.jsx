import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Calendar2 from "./testCalendarWithDatePickerDefault";

const Date = () => {

  const [final, setFinal] = useState(null)

  const location = useLocation();
  const { teacherDate } = location.state || {};
  const { level } = location.state || {};
  const { allTeachers } = location.state || {};
  const { lang } = location.state || {};
  const { teacherId } = location.state || {};


  const HandleFinish = () => {
    if (allTeachers) {
      return '/teacher';
    } else if (teacherDate) {
      return '/final';
    }

  };

  useEffect(() => {
    if (teacherDate) {
      setFinal(teacherDate[0].lang)
    }
    else if (allTeachers) {
      setFinal(lang[0])
    }

  }, [])
  return (
    <div>
      <h1>Виберіть дату</h1>
      <Link to={HandleFinish()} state={{ lingua: final, level: level, teacherId: teacherId }}><button>Далі</button></Link>
      <Calendar2 />

    </div>
  );
};

export default Date;
