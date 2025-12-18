import React, { useEffect, useState } from "react";
import "./overview.css";
import { DatePicker, Select, Skeleton } from "antd";
import {
  ActionEditIcon,
  ActionsViewIcon,
  CalendarIcon,
  DriverIcon,
  ExportIcon,
  IbuttonIcon,
  NearIcon,
  ResourceIcon,
  SearchIcon,
  VechileIcon,
} from "../../common/svg";
import useGetApi from "../../common/hooks/useGetApi";
import useDriver from "../../common/hooks/useDriver";
import { FaCircle } from "react-icons/fa";
import useVehicle from "../../common/hooks/useVehicle";


const Overview = () => {
  const [showInput, setShowInput] = useState(false);
  const [open, setOpen] = useState(true);
  const { RangePicker } = DatePicker;
  const { getApi, tableData, loading } = useGetApi();
  const { getDriver, drivers } = useDriver()
  const { getVehicles, vehicleList } = useVehicle()

  useEffect(() => {
    getApi(); 
    getDriver();  //driver custom hook
    getVehicles();  // vechicle custom hook
  }, []);

 const formatDateTime = (dateStr?: string) => {
  if (!dateStr) return "NA";
  const d = new Date(dateStr);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = String(d.getFullYear()).slice(-2); 
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${day}/${month}/${year} - ${hours}:${minutes}`;
};



  return (
    <div className="overview">
      <div className="container">
        <div className="overview_cover">
          <h2>overview</h2>
          <div className="overview_details">
            <ul>
              {/* Search */}
              <li className="search" onClick={() => setShowInput(true)}>
                {showInput ? (
                  <input type="search" placeholder="Search..." />
                ) : (
                  <SearchIcon />
                )}
              </li>

              {/*  Calendar */}
              <li className="calendar">
                {open && (
                  <div
                    className="calendar-dropdown"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <RangePicker prefix={<CalendarIcon />} />
                  </div>
                )}
              </li>

              {/*  Vehicle */}
              <li className="vechile">
                <Select
                  placeholder="Vehicle"
                  // onOpenChange={() => {

                  // }}
                  options={vehicleList.map((item: any) => ({
                    label: item.name,
                  }))}
                  prefix={<VechileIcon />}
                />
              </li>

              {/*  DRIVER  */}
              <li className="driver">
                <Select
                  placeholder="Driver"
                  // onOpenChange={() => {
                  //   getDriver();
                  // }}
                  options={drivers.map((item: any) => ({
                    label: item.name,
                  }))}
                  prefix={<DriverIcon />}
                />
              </li>

              {/* Near Miss */}
              <li className="near">
                <Select
                  placeholder="Near Miss Type"
                  options={[
                    { value: "n1", label: "Type 1" },
                    { value: "n2", label: "Type 2" },
                  ]}
                  prefix={<NearIcon />}
                />
              </li>

              {/* Export */}
              <li className="export">
                <ExportIcon />
                <span>Export</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= TABLE ================= */}
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
            {loading && (
              <tr>
                <td colSpan={10}>
                  <Skeleton active />
                </td>
              </tr>
            )}
            {!loading &&
              tableData?.data?.map((item, index) => (
                <tr key={index}>
                  <td>{formatDateTime(item.created_at)}</td>
                  <td>{item.address ? item.address.slice(0, 15) : "NA"}</td>
                  <td>{item.logged_by || "NA"}</td>
                  <td>{item.driver_name || "NA"}</td>
                  <td>{item.registration_number || "NA"}</td>
                  <td>{item.other_involved_persons || "NA"}</td>
                  <td>
                    {item.incident_type || "NA"}
                    {/* <IbuttonIcon /> */}
                  </td>
                  <td className="">
                    <ResourceIcon />
                  </td>
                  <td>
                    <Select
                      size="small"
                      defaultValue="in-progress"
                      options={[
                        {
                          value: "in-progress",
                          label: (
                            <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
                              <FaCircle color="#facc15" size={10} />
                              In Progress
                            </span>
                          ),
                        },
                        {
                          value: "completed",
                          label: (
                            <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
                              <FaCircle color="#ef4444" size={10} />
                              Outstanding
                            </span>
                          ),
                        },
                        {
                          value: "resolved",
                          label: (
                            <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
                              <FaCircle color="#22c55e" size={10} />
                              Resolved
                            </span>
                          ),
                        },
                      ]}
                    />
                  </td>
                  <td className="">
                    <ActionsViewIcon />
                    <ActionEditIcon />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Overview;
