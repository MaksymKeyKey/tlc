import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './teachers.css'

const Teachers = ({ schoolId }) => {
  const [schoolData, setSchoolData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allTeachers, setAllTeachers] = useState([]);
  const [lang, setLang] = useState();

  const location = useLocation();
  const { level } = location.state || {};
  const { language } = location.state || {};
  const { lingua } = location.state || {};

  const HandleFinish = () => {
    if (language) {
      return '/date';
    } else {
      return '/final';
    }
  };

  const fetchSchoolData = async () => {
    try {
      const response = await axios.get(`http://13.53.147.216/api/schools`);
      let teachers = response.data[0].ESL.teacher;

      if (level) {
        teachers = teachers.filter(teacher =>
          teacher.data &&
          teacher.data.lang.some(langObj =>
            langObj.level && langObj.level.some(l => l.levelName === level && langObj.lang === language || langObj.lang === lingua)
          )
        );
      }

      const allTeacherDates = teachers.flatMap(teacher =>
        teacher.data.lang.flatMap(langObj =>
          langObj.level
            .filter(lv => lv.levelName === level).flatMap(lv => lv.date)
        )
      );

      const languages = teachers.flatMap(teacher =>
        teacher.data.lang.flatMap(langObj =>
          langObj.lang
        )
      );

      if (language) {
        setLang(languages);
      } else if (lingua) {
        setLang(lingua);
      }

      setAllTeachers(allTeacherDates);
      setSchoolData(teachers);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchoolData();
  }, [schoolId]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="teachers-container">
      <h1 className="teachers-title">Оберіть мову</h1>
      {schoolData && (
        <div className="school-data">

          <div>
            <Link to={'/date'} state={{ allTeachers: allTeachers, level: level, lang: lang }} className="select-date-link"><button>Select Date</button></Link>
          </div>
          {schoolData.map((teacher, index) => (
            <Link to={HandleFinish()} state={{ teacherDate: teacher.data.lang.filter(lang => lang.lang === language), level: level, lingua: lang, teacherId: teacher.data.teacherId }} className="teacher-link">
              <div key={index} className="teacher-item">

                <div>
                  <p>{teacher.data.teacherName}</p>
                </div>

              </div>
            </Link>
          ))}
        </div>
      )
      }
    </div >
  );
};

export default Teachers;
