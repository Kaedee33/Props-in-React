import React from 'react';
import './UseProps.css';

// Define the interface for employee data with required data types
interface EmployeeProps {
  sex: string;               // char (M or F)
  fullName: string;          // varchar (name)
  yearsWorked: number;       // integer
  salary: number;            // float
  isActive: boolean;         // boolean
  department: string;        // varchar (department)
}

// Child component that displays employee details
const EmployeeCard: React.FC<EmployeeProps> = ({
  sex,
  fullName,
  yearsWorked,
  salary,
  isActive,
  department,
}) => {
  // Conditional styling based on active status
  const statusStyle: React.CSSProperties = {
    color: isActive ? '#27ae60' : '#e74c3c',
    fontWeight: 'bold',
  };

  return (
    <div className="employee-card">
      <div className="card-header">
        <h3>{fullName}</h3>
        <span className="employee-id">Sex: {sex}</span>
      </div>

      <div className="card-content">
        <div className="info-row">
          <span className="label">Department:</span>
          <span className="value">{department}</span>
        </div>

        <div className="info-row">
          <span className="label">Years Worked:</span>
          <span className="value">{yearsWorked} years</span>
        </div>

        <div className="info-row">
          <span className="label">Salary:</span>
          <span className="value">₱{salary.toFixed(2)}</span>
        </div>

        <div className="info-row">
          <span className="label">Status:</span>
          <span className="value" style={statusStyle}>
            {isActive ? '✓ Active' : '✗ Inactive'}
          </span>
        </div>
      </div>
    </div>
  );
};

// Parent component that manages employee data
const EmployeeDirectory: React.FC = () => {
  // Array of multiple employees with real data
  const employees: EmployeeProps[] = [
    {
      sex: 'M',
      fullName: 'Juan Dela Cruz',
      yearsWorked: 5,
      salary: 20000.50,
      isActive: true,
      department: 'Software Engineering',
    },
    {
      sex: 'F',
      fullName: 'Maria Santos',
      yearsWorked: 8,
      salary: 25000.75,
      isActive: true,
      department: 'Project Management',
    },
    {
      sex: 'M',
      fullName: 'Jose Ramirez',
      yearsWorked: 3,
      salary: 16000.00,
      isActive: true,
      department: 'UI/UX Design',
    },
    {
      sex: 'F',
      fullName: 'Catherine Reyes',
      yearsWorked: 10,
      salary: 30000.25,
      isActive: false,
      department: 'Senior Management',
    },
    {
      sex: 'M',
      fullName: 'Antonio Mendoza',
      yearsWorked: 2,
      salary: 14000.00,
      isActive: true,
      department: 'Quality Assurance',
    },
    {
      sex: 'F',
      fullName: 'Kristine Bautista',
      yearsWorked: 6,
      salary: 22000.99,
      isActive: true,
      department: 'Data Analytics',
    },
  ];

  return (
    <div className="parent-container">
      <div className="header">
        <h1>Employee Directory</h1>
        <p className="subtitle">Company Staff Records</p>
      </div>

      <div className="employees-grid">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.fullName}
            sex={employee.sex}
            fullName={employee.fullName}
            yearsWorked={employee.yearsWorked}
            salary={employee.salary}
            isActive={employee.isActive}
            department={employee.department}
          />
        ))}
      </div>

      <div className="summary">
        <h2>Legend</h2>
        <p><span style={{ color: '#27ae60', fontWeight: 'bold' }}>● Green checkmark (✓)</span> = Employee is currently active</p>
        <p><span style={{ color: '#e74c3c', fontWeight: 'bold' }}>● Red X mark (✗)</span> = Employee is inactive</p>
      </div>
    </div>
  );
};

export default EmployeeDirectory;

