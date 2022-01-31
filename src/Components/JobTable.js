import React, {useState} from 'react';
import styles from './JobTable.module.css';

const JobTable = () => {

    const [data, setData] = useState([
            {
                JobName: 'Fullstack Developer',
                Company: 'Google',
                Months: '6 months',
                Time: 'Full Time'
            },
            {
                JobName: 'Frontend-Developer',
                Company: 'Tata Consultancy Service',
                Months: '6 months',
                Time: 'Full Time'
            },
            {
                JobName: 'HTML Developer',
                Company: 'Dentsu International',
                Months: '6 months',
                Time: 'Full Time'
            },
            {
                JobName: 'ReactJs Developer',
                Company: 'Infosys',
                Months: '6 months',
                Time: 'Full Time'
            },
            {
                JobName: 'Fullstack Developer',
                Company: 'Google',
                Months: '6 months',
                Time: 'Full Time'
            },
            {
                JobName: 'Fullstack Developer',
                Company: 'Google',
                Months: '6 months',
                Time: 'Full Time'
            },
            {
                JobName: 'Fullstack Developer',
                Company: 'Google',
                Months: '6 months',
                Time: 'Full Time'
            },
            {
                JobName: 'Fullstack Developer',
                Company: 'Google',
                Months: '6 months',
                Time: 'Full Time'
            },
            {
                JobName: 'Fullstack Developer',
                Company: 'Google',
                Months: '6 months',
                Time: 'Full Time'
            },
            {
                JobName: 'Frontend Developer',
                Company: 'ABC',
                Months: '3 months',
                Time: 'Part Time'
            },
            {
                JobName: 'Backend Developer',
                Company: 'DEF',
                Months: '9 months',
                Time: 'Full Time'
            }
        ])


        function onChangeHandle(e){ 
            console.log("e.target.value", e.target.value);
            if(e.target.value === '') {
              window.location.reload();
              const tempArr = data;
              setData(tempArr)
              return
            }
            const searchResult =  data.filter(item => item.JobName.toLowerCase().startsWith(e.target.value.toLowerCase()))
            setData(searchResult);
          }

          function onChangeCompany(e){ 
            console.log("e.target.value", e.target.value);
            if(e.target.value === '') {
              window.location.reload();
              const tempArr = data;
              setData(tempArr)
              return
            }
            const searchResult =  data.filter(item => item.Company.toLowerCase().startsWith(e.target.value.toLowerCase()))
            setData(searchResult);
          }

          function onChangeMonths(e){ 
            console.log("e.target.value", e.target.value);
            if(e.target.value === '') {
              window.location.reload();
              const tempArr = data;
              setData(tempArr)
              return
            }
            const searchResult =  data.filter(item => item.Months.toLowerCase().startsWith(e.target.value.toLowerCase()))
            setData(searchResult);
          }

          function onChangeTime(e) { 
            console.log("e.target.value", e.target.value);
            if(e.target.value === '') {
              window.location.reload();
              const tempArr = data;
              setData(tempArr)
              return
            }
            const searchResult =  data.filter(item => item.Time.toLowerCase().startsWith(e.target.value.toLowerCase()))
            setData(searchResult);
          }
        
          return (
            <div className="App">
                <div className={styles.form}>
                    <input type="text" placeholder="Search By Job Name" onChange={onChangeHandle}/>
                    <input type="text" placeholder="Enter Company" onChange={onChangeCompany}/>
                    <input type="text" placeholder="Enter Months" onChange={onChangeMonths}/>
                    <input type="text" placeholder="Full Time/ Part Time" onChange={onChangeTime}/>
                </div>
                <div>
                  <table className={styles.table}>
                        <thead>
                            <td>
                                <th>Job Title</th>
                            </td>
                            <td>
                                <th>Companies</th>
                            </td>
                            <td>
                                <th>Duration</th>
                            </td>
                            <td>
                                <th>Full/Part Time Job</th>
                            </td>
                        </thead>
                        <tbody>
                        {
                        data.map(item => {
                          return(
                            <tr>
                              <td>{item.JobName}</td>
                              <td>{item.Company}</td>
                              <td>{item.Months}</td>
                              <td>{item.Time}</td>
                              <td><button>Apply</button></td>
                            </tr>
                          )
                        })
                      }
                        </tbody>
                   
                  </table>
                </div>
            </div>
          );
        }

export default JobTable;
