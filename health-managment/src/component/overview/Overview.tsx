import React, { useEffect, useState } from 'react'
import "./overview.css";
import { DatePicker, Select, } from 'antd';
import axios from 'axios';
import { ActionEditIcon, ActionsViewIcon, CalendarIcon, DriverIcon, ExportIcon, NearIcon, ResourceIcon, SearchIcon, VechileIcon } from '../../common/svg';
import { FaCircle } from "react-icons/fa";

const Overview = () => {
  const [showInput, setShowInput] = useState(false);
  const [open, setOpen] = useState(true);
  const { RangePicker } = DatePicker;

  const handleSearch = () => {
    setShowInput(true);
  }
  const options = [
    {
      label: 'Happy',
      value: 'happy',
      emoji: '😄',
      desc: 'Feeling Good',
    },
    {
      label: 'Sad',
      value: 'sad',
      emoji: '😢',
      desc: 'Feeling Blue',
    },
    {
      label: 'Angry',
      value: 'angry',
      emoji: '😡',
      desc: 'Furious',
    },
    {
      label: 'Cool',
      value: 'cool',
      emoji: '😎',
      desc: 'Chilling',
    },
    {
      label: 'Sleepy',
      value: 'sleepy',
      emoji: '😴',
      desc: 'Need Sleep',
    },
  ];
  const data = [
    {
      date: "10/06/25 - 12:30",
      location: "Greenway Logistics Hub",
      loggedBy: "Mark Henry",
      driver: "Mark Henry",
      vehReg: "YTR",
      involvedProfile: "James Oliver",
      incidentType: "Vehicle",
    },
    {
      date: "11/06/25 - 12:30",
      location: "Greenway Logistics Hub",
      loggedBy: "Mark Henry",
      driver: "Mark Henry",
      vehReg: "YTR",
      involvedProfile: "James Oliver",
      incidentType: "Vehicle",
    },
    {
      date: "13/06/25 - 12:30",
      location: "Greenway Logistics Hub",
      loggedBy: "Mark Henry",
      driver: "Mark Henry",
      vehReg: "YTR",
      involvedProfile: "James Oliver",
      incidentType: "Vehicle",
    },
    {
      date: "13/06/25 - 12:30",
      location: "Greenway Logistics Hub",
      loggedBy: "Mark Henry",
      driver: "Mark Henry",
      vehReg: "YTR",
      involvedProfile: "James Oliver",
      incidentType: "Vehicle",
    },
    {
      date: "13/06/25 - 12:30",
      location: "Greenway Logistics Hub",
      loggedBy: "Mark Henry",
      driver: "Mark Henry",
      vehReg: "YTR",
      involvedProfile: "James Oliver",
      incidentType: "Vehicle",
    },
    {
      date: "13/06/25 - 12:30",
      location: "Greenway Logistics Hub",
      loggedBy: "Mark Henry",
      driver: "Mark Henry",
      vehReg: "YTR",
      involvedProfile: "James Oliver",
      incidentType: "Vehicle",
    },
  ]
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  const getFullView = async () => {
    const data = await axios.get('https://staging.tms.api.bjshomedelivery.com/v1/tms_app/health_and_safety/?page=1&per_page=10')
    console.log(data)
  }

  useEffect(() => {
    getFullView();
  }, [])

  return (
    <div className='overview'>
      <div className='container'>
        <div className='overview_cover'>
          <h2>overview</h2>
          <div className='overview_details'>
            <ul>
              <li className='search' onClick={handleSearch}>
                {showInput ? (
                  <input type="search" placeholder="Search..." />
                ) : (
                  <SearchIcon />
                )}
              </li>
              <li className="calendar" onClick={() => setOpen(open)}>
                {open && (
                  <div className="calendar-dropdown" onClick={(e) => e.stopPropagation()}>
                    <RangePicker prefix={<CalendarIcon />} />
                  </div>
                )}
              </li>
              <li className="vechile">
                <Select
                  showSearch={{ optionFilterProp: 'label', onSearch }}
                  placeholder="Vechile"
                  onChange={onChange}
                  options={[
                    {
                      value: 'jack',
                      label: 'Jack',
                    },
                    {
                      value: 'lucy',
                      label: 'Lucy',
                    },
                    {
                      value: 'tom',
                      label: 'Tom',
                    },
                  ]}
                  prefix={<VechileIcon />}
                />
              </li>
              <li className='driver'>
                <Select
                  showSearch={{ optionFilterProp: 'label', onSearch }}
                  placeholder="Driver"
                  onChange={onChange}
                  options={[
                    {
                      value: 'jack',
                      label: 'Jack',
                    },
                    {
                      value: 'lucy',
                      label: 'Lucy',
                    },
                    {
                      value: 'tom',
                      label: 'Tom',
                    },
                  ]}
                  prefix={<DriverIcon />}
                />
              </li>
              <li className='near'>
                <Select
                  showSearch={{ optionFilterProp: 'label', onSearch }}
                  placeholder="Near Miss Type"
                  onChange={onChange}
                  options={[
                    {
                      value: 'jack',
                      label: 'Jack',
                    },
                    {
                      value: 'lucy',
                      label: 'Lucy',
                    },
                    {
                      value: 'tom',
                      label: 'Tom',
                    },
                  ]}
                  prefix={<NearIcon />}
                />
              </li>
              <li className='export'>
                <ExportIcon />
                <span>Export </span>
              </li>
              {/* <li className='options'>
                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="14" viewBox="0 0 4 14" fill="none">
                  <path d="M2 5C1.60444 5 1.21776 5.1173 0.888861 5.33706C0.559962 5.55682 0.303617 5.86918 0.152242 6.23463C0.000866562 6.60009 -0.0387401 7.00222 0.0384303 7.39018C0.115601 7.77814 0.306082 8.13451 0.585787 8.41421C0.865492 8.69392 1.22186 8.8844 1.60982 8.96157C1.99778 9.03874 2.39992 8.99913 2.76537 8.84776C3.13082 8.69638 3.44318 8.44004 3.66294 8.11114C3.8827 7.78224 4 7.39556 4 7C4 6.46957 3.78929 5.96086 3.41421 5.58579C3.03914 5.21071 2.53043 5 2 5ZM2 8C1.80222 8 1.60888 7.94135 1.44443 7.83147C1.27998 7.72159 1.15181 7.56541 1.07612 7.38268C1.00043 7.19996 0.98063 6.99889 1.01922 6.80491C1.0578 6.61093 1.15304 6.43275 1.29289 6.29289C1.43275 6.15304 1.61093 6.0578 1.80491 6.01921C1.99889 5.98063 2.19996 6.00043 2.38268 6.07612C2.56541 6.15181 2.72159 6.27998 2.83147 6.44443C2.94135 6.60888 3 6.80222 3 7C3 7.26522 2.89464 7.51957 2.70711 7.70711C2.51957 7.89464 2.26522 8 2 8ZM2 4C2.39556 4 2.78224 3.8827 3.11114 3.66294C3.44004 3.44318 3.69638 3.13082 3.84776 2.76537C3.99914 2.39992 4.03874 1.99778 3.96157 1.60982C3.8844 1.22186 3.69392 0.865492 3.41421 0.585787C3.13451 0.306082 2.77814 0.115601 2.39018 0.0384303C2.00222 -0.0387401 1.60009 0.000866562 1.23463 0.152242C0.869182 0.303617 0.556825 0.559962 0.337062 0.88886C0.117299 1.21776 1.07779e-06 1.60444 1.07779e-06 2C1.07779e-06 2.53043 0.210715 3.03914 0.585787 3.41421C0.96086 3.78929 1.46957 4 2 4ZM2 1C2.19778 1 2.39112 1.05865 2.55557 1.16853C2.72002 1.27841 2.84819 1.43459 2.92388 1.61732C2.99957 1.80004 3.01937 2.00111 2.98079 2.19509C2.9422 2.38907 2.84696 2.56726 2.70711 2.70711C2.56726 2.84696 2.38907 2.9422 2.19509 2.98079C2.00111 3.01937 1.80004 2.99957 1.61732 2.92388C1.43459 2.84819 1.27841 2.72002 1.16853 2.55557C1.05865 2.39112 1 2.19778 1 2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1ZM2 10C1.60444 10 1.21776 10.1173 0.888861 10.3371C0.559962 10.5568 0.303617 10.8692 0.152242 11.2346C0.000866562 11.6001 -0.0387401 12.0022 0.0384303 12.3902C0.115601 12.7781 0.306082 13.1345 0.585787 13.4142C0.865492 13.6939 1.22186 13.8844 1.60982 13.9616C1.99778 14.0387 2.39992 13.9991 2.76537 13.8478C3.13082 13.6964 3.44318 13.44 3.66294 13.1111C3.8827 12.7822 4 12.3956 4 12C4 11.4696 3.78929 10.9609 3.41421 10.5858C3.03914 10.2107 2.53043 10 2 10ZM2 13C1.80222 13 1.60888 12.9413 1.44443 12.8315C1.27998 12.7216 1.15181 12.5654 1.07612 12.3827C1.00043 12.2 0.98063 11.9989 1.01922 11.8049C1.0578 11.6109 1.15304 11.4327 1.29289 11.2929C1.43275 11.153 1.61093 11.0578 1.80491 11.0192C1.99889 10.9806 2.19996 11.0004 2.38268 11.0761C2.56541 11.1518 2.72159 11.28 2.83147 11.4444C2.94135 11.6089 3 11.8022 3 12C3 12.2652 2.89464 12.5196 2.70711 12.7071C2.51957 12.8946 2.26522 13 2 13Z" fill="#717196" />
                </svg>
              </li> */}
            </ul>
          </div>
        </div>
        {/*================= table start here ====================*/}
        <table>
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Location</th>
              <th>Logged By</th>
              <th>Driver</th>
              <th>Veh Reg</th>
              <th>Involved People</th>
              <th>Incident Type</th>
              <th>Resources</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td className="location">{item.location}</td>
                <td>{item.loggedBy}</td>
                <td>{item.driver}</td>
                <td>{item.vehReg}</td>
                <td>{item.involvedProfile}</td>
                <td>{item.incidentType}</td>

                <td className="resources">
                  <ResourceIcon />
                </td>

                <td className="progress">
                  <Select
                    size="small"
                    defaultValue="In Progress"
                    style={{ width: 120 }}
                    onChange={handleChange}
                    // options={[ 
                    //   { value: "in-progress", label: "In Progress" },
                    //   { value: "completed", label: "Outstanding" },
                    //   { value: "pending", label: "Resolved" },
                    // ]}
                    
                    options={[
                      {
                        value: "in-progress",
                        label: (
                          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <FaCircle color="#facc15" size={10} />
                            In Progress
                          </span>
                        ),
                      },
                      {
                        value: "completed",
                        label: (
                          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <FaCircle color="#ef4444" size={10} />
                            Outstanding
                          </span>
                        ),
                      },
                      {
                        value: "pending",
                        label: (
                          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <FaCircle color="#22c55e" size={10} />
                            Resolved
                          </span>
                        ),
                      },
                    ]}
                  />
                </td>
                <td className="actions">
                  <ActionsViewIcon />
                  <ActionEditIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Overview