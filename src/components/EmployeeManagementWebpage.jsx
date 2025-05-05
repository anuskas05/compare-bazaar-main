import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import {
  Calendar,
  ChevronDown,
  Users,
  Clock,
  TrendingUp,
  Filter,
  RefreshCcw,
  Award,
  AlertTriangle,
  Activity,
  DollarSign,
  BookOpen,
  Target,
  BarChart2,
  Map,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const EmployeeManagementWebpage = () => {
  // States for filters
  const [timeRange, setTimeRange] = useState('Month');
  const [department, setDepartment] = useState('All');
  const [viewMode, setViewMode] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // States for graph visibility and data
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [employeePerformanceData, setEmployeePerformanceData] = useState([]);
  const [departmentDistribution, setDepartmentDistribution] = useState([]);
  const [employeeGrowthData, setEmployeeGrowthData] = useState([]);
  const [trainingData, setTrainingData] = useState([]);
  const [topPerformers, setTopPerformers] = useState([]);
  const [riskEmployees, setRiskEmployees] = useState([]);
  const [skillRadarData, setSkillRadarData] = useState([]);
  const [salaryData, setSalaryData] = useState([]);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [showAlert, setShowAlert] = useState(true);
  const [screenSize, setScreenSize] = useState('lg');
  const [hasAnimated, setHasAnimated] = useState(false);

  // Update screen size state based on window width
  const updateScreenSize = () => {
    const width = window.innerWidth;
    if (width < 640) setScreenSize('sm');
    else if (width < 768) setScreenSize('md');
    else if (width < 1024) setScreenSize('lg');
    else setScreenSize('xl');
  };

  // Mock API calls to fetch data
  const fetchData = () => {
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      // Performance data with dynamic generation based on time range and department
      const performanceData = [
        { month: 'Jan', productivity: 85, attendance: 92, satisfaction: 76 },
        { month: 'Feb', productivity: 88, attendance: 95, satisfaction: 78 },
        { month: 'Mar', productivity: 82, attendance: 91, satisfaction: 82 },
        { month: 'Apr', productivity: 86, attendance: 93, satisfaction: 85 },
        { month: 'May', productivity: 90, attendance: 96, satisfaction: 87 },
        { month: 'Jun', productivity: 94, attendance: 90, satisfaction: 89 },
        { month: 'July', productivity: 70, attendance: 70, satisfaction: 89 },
        { month: 'August', productivity: 80, attendance: 80, satisfaction: 89 },
        { month: 'September', productivity: 60, attendance: 90, satisfaction: 89 },
        { month: 'October', productivity: 75, attendance: 70, satisfaction: 89 },
        { month: 'November', productivity: 50, attendance: 95, satisfaction: 89 },
        { month: 'December', productivity: 100, attendance: 90, satisfaction: 89 },
      ];

      // Add some randomness for dynamic feel when changing filters
      const modifiedPerformanceData = performanceData.map(item => ({
        ...item,
        productivity: item.productivity + (Math.random() * 10 - 5),
        attendance: item.attendance + (Math.random() * 6 - 3),
        satisfaction: item.satisfaction + (Math.random() * 8 - 4)
      }));

      const deptData = [
        { name: 'Engineering', value: 35, color: '#000e54' },
        { name: 'Marketing', value: 20, color: '#00C49F' },
        { name: 'Sales', value: 25, color: '#ff8633' },
        { name: 'HR', value: 10, color: '#ee82ee' },
        { name: 'Operations', value: 15, color: '#8884d8' },
      ];

      // Modify department data based on filter
      const modifiedDeptData = department !== 'All'
        ? deptData.map(item => ({
          ...item,
          value: item.name === department ? item.value * 1.5 : item.value * 0.8
        }))
        : deptData;

      const growthData = [
        { month: 'Jan', hires: 8, terminations: 3 },
        { month: 'Feb', hires: 10, terminations: 4 },
        { month: 'Mar', hires: 12, terminations: 2 },
        { month: 'Apr', hires: 15, terminations: 5 },
        { month: 'May', hires: 9, terminations: 6 },
        { month: 'Jun', hires: 14, terminations: 4 },
      ];

      // Training completion data
      const trainingCompletionData = [
        { name: 'Compliance', completed: 92, pending: 8 },
        { name: 'Technical', completed: 78, pending: 22 },
        { name: 'Leadership', completed: 65, pending: 35 },
        { name: 'Safety', completed: 88, pending: 12 },
        { name: 'Soft Skills', completed: 71, pending: 29 },
      ];

      // Top performers data
      const performers = [
        { name: 'John Doe', department: 'Engineering', performance: 95 },
        { name: 'Jane Smith', department: 'Marketing', performance: 92 },
        { name: 'Alice Johnson', department: 'Sales', performance: 89 },
        { name: 'Bob Brown', department: 'HR', performance: 87 },
        { name: 'Charlie Davis', department: 'Operations', performance: 85 },
      ];

      // Risk employees data
      const riskEmployees = [
        { name: 'Eve White', department: 'Engineering', riskLevel: 'High' },
        { name: 'Frank Wilson', department: 'Marketing', riskLevel: 'Medium' },
        { name: 'Grace Lee', department: 'Sales', riskLevel: 'Low' },
        { name: 'Hank Green', department: 'HR', riskLevel: 'Medium' },
        { name: 'Ivy Hall', department: 'Operations', riskLevel: 'High' },
      ];

      // Skill radar data
      const skillData = [
        { skill: 'Technical', value: 80 },
        { skill: 'Leadership', value: 70 },
        { skill: 'Communication', value: 75 },
        { skill: 'Problem Solving', value: 85 },
        { skill: 'Teamwork', value: 90 },
        { skill: 'Innovation', value: 65 },
      ];

      // Salary data
      const salaryData = [
        { name: 'Engineering', avgSalary: 85000 },
        { name: 'Marketing', avgSalary: 70000 },
        { name: 'Sales', avgSalary: 75000 },
        { name: 'HR', avgSalary: 65000 },
        { name: 'Operations', avgSalary: 72000 },
      ];

      setEmployeePerformanceData(modifiedPerformanceData);
      setDepartmentDistribution(modifiedDeptData);
      setEmployeeGrowthData(growthData);
      setTrainingData(trainingCompletionData);
      setTopPerformers(performers);
      setRiskEmployees(riskEmployees);
      setSkillRadarData(skillData);
      setSalaryData(salaryData);
      setLoading(false);
    }, 800);
  };

  // Initial data load and set up resize listener
  useEffect(() => {
    fetchData();
    updateScreenSize();

    // Check if animations should play (only on page load)
    if (!sessionStorage.getItem('hasAnimated')) {
      setHasAnimated(true);
      sessionStorage.setItem('hasAnimated', 'true');
    }

    // Add window resize listener
    window.addEventListener('resize', updateScreenSize);

    // Set up intersection observer for visibility transitions
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const dashboard = document.getElementById('employee-dashboard');
    if (dashboard) {
      observer.observe(dashboard);
    }

    return () => {
      if (dashboard) {
        observer.unobserve(dashboard);
      }
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  // Fetch new data when filters change
  useEffect(() => {
    fetchData();
  }, [timeRange, department]);

  // Animation progress effect
  useEffect(() => {
    if (isVisible && hasAnimated) {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 5;
        setAnimationProgress(Math.min(progress, 100));
        if (progress >= 100) {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    } else {
      // If animations shouldn't play, set progress to 100% immediately
      setAnimationProgress(100);
    }
  }, [isVisible, loading, hasAnimated]);

  // Helper function to get chart height based on screen size
  const getChartHeight = () => {
    switch (screenSize) {
      case 'sm': return 200;
      case 'md': return 220;
      case 'lg': return 250;
      case 'xl': return 300;
      default: return 250;
    }
  };

  // Helper function to get animation styles
  const getAnimationStyles = (delay = 0) => {
    if (!hasAnimated) {
      return {
        transform: 'translateY(0) scale(1)',
        opacity: 1
      };
    }
    
    return {
      transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
      opacity: isVisible ? 1 : 0,
      transition: `transform 700ms ease-out ${delay}ms, opacity 700ms ease-out ${delay}ms`
    };
  };

  return (
    <div id="employee-dashboard" className="bg-gray-50 p-2  max-w-6xl lg:p-0 w-full min-h-screen font-sans" style={{ opacity: 1 }}>
      {/* Top Navigation Bar */}
      <div className="bg-white shadow-md rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
        <div className="flex justify-between items-center">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 text-gray-700"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-4">
            <button className={`px-4 py-2 rounded-lg transition-colors duration-200 ${viewMode === 'overview' ? 'bg-[#000e54] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} onClick={() => setViewMode('overview')}>
              Overview
            </button>
            <button className={`px-4 py-2 rounded-lg transition-colors duration-200 ${viewMode === 'performance' ? 'bg-[#000e54] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} onClick={() => setViewMode('performance')}>
              Performance
            </button>
            <button className={`px-4 py-2 rounded-lg transition-colors duration-200 ${viewMode === 'development' ? 'bg-[#000e54] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} onClick={() => setViewMode('development')}>
              Development
            </button>
          </div>
        </div>

        {/* Mobile navigation menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-2">
            <button
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${viewMode === 'overview' ? 'bg-[#000e54] text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => {
                setViewMode('overview');
                setMobileMenuOpen(false);
              }}
            >
              Overview
            </button>
            <button
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${viewMode === 'performance' ? 'bg-[#000e54] text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => {
                setViewMode('performance');
                setMobileMenuOpen(false);
              }}
            >
              Performance
            </button>
            <button
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${viewMode === 'development' ? 'bg-[#000e54] text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => {
                setViewMode('development');
                setMobileMenuOpen(false);
              }}
            >
              Development
            </button>
          </div>
        )}
      </div>

      {/* Filters */}
      <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm mb-4 sm:mb-8">
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <div className="flex items-center bg-white rounded-lg transition-all duration-300 hover:shadow-sm">
            <Calendar className="mr-2 text-[#000e54] flex-shrink-0" size={screenSize === 'sm' ? 16 : 18} />
            <span className="mr-2 text-xs sm:text-sm text-gray-700 whitespace-nowrap">Time Range:</span>
            <div className="relative flex-1">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="w-full bg-gray-100 text-gray-800 py-1 px-2 sm:px-3 pr-8 rounded-md text-xs sm:text-sm appearance-none cursor-pointer transition-colors duration-300 hover:bg-gray-200"
              >
                <option>Week</option>
                <option>Month</option>
                <option>Quarter</option>
                <option>Year</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
            </div>
          </div>

          <div className="flex items-center bg-white rounded-lg transition-all duration-300 hover:shadow-sm">
            <Users className="mr-2 text-[#000e54] flex-shrink-0" size={screenSize === 'sm' ? 16 : 18} />
            <span className="mr-2 text-xs sm:text-sm text-gray-700 whitespace-nowrap">Department:</span>
            <div className="relative flex-1">
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full bg-gray-100 text-gray-800 py-1 px-2 sm:px-3 pr-8 rounded-md text-xs sm:text-sm appearance-none cursor-pointer transition-colors duration-300 hover:bg-gray-200"
              >
                <option>All</option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Sales</option>
                <option>HR</option>
                <option>Operations</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
            </div>
          </div>

          <button
            onClick={fetchData}
            className="flex items-center justify-center bg-[#000e54] text-white py-1 sm:py-2 px-3 sm:px-4 rounded-lg shadow-sm transition-all duration-300 hover:bg-[#000e54] hover:shadow-md sm:ml-auto"
          >
            <RefreshCcw className="mr-1 sm:mr-2" size={screenSize === 'sm' ? 16 : 18} />
            <span className="text-xs sm:text-sm">Refresh Data</span>
          </button>
        </div>
      </div>

      {/* Loading indicator */}
      {loading && (
        <div className="flex justify-center items-center p-6 sm:p-12">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-b-2 border-[#000e54]"></div>
          <p className="ml-3 text-[#000e54] font-medium text-sm sm:text-base">Loading dashboard data...</p>
        </div>
      )}

      {/* Quick Stats */}
      {!loading && (
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
          {[
            { title: 'Total Employees', value: '247', change: '↑ 12%', icon: <Users size={screenSize === 'sm' ? 18 : 24} />, color: '#000e54' },
            { title: 'Avg. Retention', value: '92%', change: '↑ 3%', icon: <Activity size={screenSize === 'sm' ? 18 : 24} />, color: '#000e54' },
            { title: 'Avg. Satisfaction', value: '82%', change: '↑ 5%', icon: <Award size={screenSize === 'sm' ? 18 : 24} />, color: '#000e54' },
            { title: 'Open Positions', value: '18', change: '↓ 2', icon: <Target size={screenSize === 'sm' ? 18 : 24} />, color: '#000e54' }
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-white border-l-4 border-${stat.color}-500 p-3 sm:p-4 rounded-lg shadow-md`}
              style={hasAnimated ? {
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: `transform 500ms ease-out ${200 + index * 100}ms, opacity 500ms ease-out ${200 + index * 100}ms`
              } : {
                transform: 'translateY(0)',
                opacity: 1
              }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium">{stat.title}</p>
                  <p className="text-xl sm:text-3xl font-bold mt-1 text-gray-800">{stat.value}</p>
                  <p className={`text-xs sm:text-sm mt-1 font-medium text-${stat.color}-500`}>
                    {stat.change} from last period
                  </p>
                </div>
                <div className={`bg-${stat.color}-100 p-2 sm:p-3 rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center text-${stat.color}-500 flex-shrink-0`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Metrics Grid */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-8">
          {/* Card 1: Employee Performance */}
          <div
            className="bg-white p-3 sm:p-6 rounded-lg shadow-md hover:shadow-lg"
            style={getAnimationStyles()}
          >
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h2 className="text-base sm:text-base font-semibold text-gray-800">Employee Performance</h2>
              <TrendingUp className="text-[#ff8633]" size={screenSize === 'sm' ? 16 : 20} />
            </div>
            <ResponsiveContainer width="100%" height={getChartHeight()}>
              <LineChart data={employeePerformanceData.slice(0, Math.ceil(employeePerformanceData.length * animationProgress / 100))}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fill: '#ff8633', fontSize: screenSize === 'sm' ? 10 : 12 }} />
                <YAxis tick={{ fill: '#ff8633', fontSize: screenSize === 'sm' ? 10 : 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', border: 'none', fontSize: screenSize === 'sm' ? 10 : 12 }}
                  labelStyle={{ fontWeight: 'bold', color: '#2D3748' }}
                />
                <Legend wrapperStyle={{ paddingTop: '10px', fontSize: screenSize === 'sm' ? 10 : 12 }} />
                <Line type="monotone" dataKey="productivity" stroke="#ff8633" name="Productivity" strokeWidth={2} dot={{ r: screenSize === 'sm' ? 3 : 4 }} activeDot={{ r: screenSize === 'sm' ? 5 : 6 }} />
                <Line type="monotone" dataKey="attendance" stroke="#000e54" name="Attendance" strokeWidth={2} dot={{ r: screenSize === 'sm' ? 3 : 4 }} activeDot={{ r: screenSize === 'sm' ? 5 : 6 }} />
                <Line type="monotone" dataKey="satisfaction" stroke="#00C49F" name="Satisfaction" strokeWidth={2} dot={{ r: screenSize === 'sm' ? 3 : 4 }} activeDot={{ r: screenSize === 'sm' ? 5 : 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Card 2: Department Distribution */}
          <div
            className="bg-white p-3 sm:p-6 rounded-lg shadow-md hover:shadow-lg"
            style={getAnimationStyles(200)}
          >
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h2 className="text-base sm:text-base font-semibold text-gray-800">Department Distribution</h2>
              <Filter className="text-[#ff8633]" size={screenSize === 'sm' ? 8 : 10} />
            </div>
            <ResponsiveContainer width="100%" height={getChartHeight()}>
              <PieChart>
                <Pie
                  data={departmentDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={(screenSize === 'sm' ? 60 : 80) * (animationProgress / 100)}
                  fill="#ff8633"
                  dataKey="value"
                  animationDuration={1500}
                  animationBegin={300}
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    percent,
                    name,
                    index
                  }) => {
                    const radius = innerRadius + (outerRadius - innerRadius) * (screenSize === 'sm' ? 1.5 : 1.4);
                    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

                    return (
                      <text
                        x={x}
                        y={y}
                        textAnchor="middle"
                        fill={departmentDistribution[index].color}
                        fontSize={screenSize === 'sm' ? 8 : screenSize === 'md' ? 10 : 7}
                        dominantBaseline="central"
                      >
                        {screenSize === 'sm' 
                          ?` ${name} (${(percent * 100).toFixed(0)}%)`
                          : `${name} ${(percent * 100).toFixed(0)}%`}
                      </text>
                    );
                  }}
                >
                  {departmentDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', border: 'none', fontSize: screenSize === 'sm' ? 10 : 12 }}
                  labelStyle={{ fontWeight: 'bold', color: '#ff8633' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Card 3: Employee Growth */}
          <div
            className="bg-white p-3 sm:p-6 rounded-lg shadow-md hover:shadow-lg"
            style={getAnimationStyles(400)}
          >
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h2 className="text-base sm:text-base font-semibold text-gray-800">Employee Growth</h2>
              <Clock className="text-[#ff8633]" size={screenSize === 'sm' ? 16 : 20} />
            </div>
            <ResponsiveContainer width="100%" height={getChartHeight()}>
              <BarChart data={employeeGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fill: 'black', fontSize: screenSize === 'sm' ? 10 : 12 }} />
                <YAxis tick={{ fill: 'black', fontSize: screenSize === 'sm' ? 10 : 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', border: 'none', fontSize: screenSize === 'sm' ? 10 : 12 }}
                  labelStyle={{ fontWeight: 'bold', color: '#2D3748' }}
                />
                <Legend wrapperStyle={{ paddingTop: '10px', fontSize: screenSize === 'sm' ? 10 : 12 }} />
                <Bar
                  dataKey="hires"
                  fill="#ff8633"
                  name="New Hires"
                  animationDuration={1500}
                  animationBegin={500}
                  radius={[screenSize === 'sm' ? 2 : 4, screenSize === 'sm' ? 2 : 4, 0, 0]}
                />
                <Bar
                  dataKey="terminations"
                  fill="#000e54"
                  name="Terminations"
                  animationDuration={1500}
                  animationBegin={800}
                  radius={[screenSize === 'sm' ? 2 : 4, screenSize === 'sm' ? 2 : 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Second Row - New Charts */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-8">
          {/* Training Completion - Vertical Bar Chart */}
          <div
            className="bg-white p-3 sm:p-6 rounded-lg shadow-md hover:shadow-lg"
            style={getAnimationStyles(600)}
          >
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h2 className="text-base sm:text-base font-semibold text-gray-800">Training Completion</h2>
              <BookOpen className="text-[#ff8633]" size={screenSize === 'sm' ? 16 : 20} />
            </div>
            <ResponsiveContainer width="100%" height={getChartHeight()}>
              <BarChart
                data={trainingData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fill: 'black', fontSize: screenSize === 'sm' ? 10 : 12 }} />
                <YAxis tick={{ fill: 'black', fontSize: screenSize === 'sm' ? 10 : 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', border: 'none', fontSize: screenSize === 'sm' ? 10 : 12 }}
                  labelStyle={{ fontWeight: 'bold', color: '#ff8633' }}
                />
                <Legend wrapperStyle={{ paddingTop: '10px', fontSize: screenSize === 'sm' ? 10 : 12 }} />
                <Bar
                  dataKey="completed"
                  fill="#ff8633"
                  name="Completed"
                  animationDuration={1500}
                  animationBegin={600}
                  radius={[screenSize === 'sm' ? 2 : 4, screenSize === 'sm' ? 2 : 4, 0, 0]}
                />
                <Bar
                  dataKey="pending"
                  fill="#000e54"
                  name="Pending"
                  animationDuration={1500}
                  animationBegin={900}
                  radius={[screenSize === 'sm' ? 2 : 4, screenSize === 'sm' ? 2 : 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Skill Radar Chart */}
          <div
            className="bg-white p-3 sm:p-6 rounded-lg shadow-md hover:shadow-lg"
            style={getAnimationStyles(800)}
          >
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h2 className="text-base sm:text-base font-semibold text-gray-800">Skill Assessment</h2>
              <Target className="text-[#ff8633]" size={screenSize === 'sm' ? 16 : 20} />
            </div>
            <ResponsiveContainer width="100%" height={getChartHeight()}>
              <RadarChart outerRadius={screenSize === 'sm' ? 60 : 80} data={skillRadarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" tick={{ fill: '#ff8633', fontSize: screenSize === 'sm' ? 10 : 12 }} />
                <PolarRadiusAxis angle={30} tick={{ fill: '#ff8633', fontSize: screenSize === 'sm' ? 10 : 12 }} />
                <Radar
                  name="Skill Level"
                  dataKey="value"
                  stroke="orange-900"
                  fill="#ff8633"
                  fillOpacity={0.6}
                  animationDuration={1500}
                  animationBegin={1000}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', border: 'none', fontSize: screenSize === 'sm' ? 10 : 12 }}
                  labelStyle={{ fontWeight: 'bold', color: '#2D3748' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Third Row - Additional Metrics */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-8">
          {/* Add more cards here if needed */}
        </div>
      )}
    </div>
  );
};

export default EmployeeManagementWebpage;