function Courses($scope) {

  $scope.courses = [
    {
      title: 'Dialogue Systems',
      code: 'CIS4930',
      tech: 'Miscellaneous',
      grade: 'Currently Enrolled'
    },
    {
      title: 'Artificial Intelligence',
      code: 'CAP4621',
      tech: 'Python',
      grade: 'Currently Enrolled'
    },
    {
      title: 'Digital Design',
      code: 'EEL4712',
      tech: 'VHDL, FPGA\'s',
      grade: 'A'
    },
    {
      title: 'Information and Database Systems',
      code: 'CIS4301',
      tech: 'MySQL',
      grade: 'A-'
    },
    {
      title: 'Introduction to Software Engineering',
      code: 'CEN3031',
      tech: 'Java',
      grade: 'A'
    },
    {
      title: 'Design Patterns',
      code: 'CIS4930',
      tech: 'Java',
      grade: 'A-'
    },
    {
      title: 'Operating Systems',
      code: 'COP4600',
      tech: 'Minix, C',
      grade: 'B+'
    },
    {
      title: 'Data Structures and Algorithms',
      code: 'COP3530',
      tech: 'C++',
      grade: 'A'
    },
    {
      title: 'Microprocessor Applications',
      TA: true,
      code: 'EEL3744C',
      tech: 'AVR, C',
      grade: 'A'
    },
    {
      title: 'Applications of Discrete Structures',
      code: 'COT3100',
      tech: '',
      grade: 'A'
    },
    {
      title: 'Circuits 1',
      code: 'EEL3111',
      tech: '',
      grade: 'A'
    },
    {
      title: 'Signals and Systems',
      TA: true,
      code: 'EEL3135',
      tech: 'MATLAB',
      grade: 'A'
    },
    {
      title: 'Introduction to Computer Organization',
      code: 'CDA3101',
      tech: 'MIPS',
      grade: 'A'
    },
    {
      title: 'Digital Logic',
      TA: true,
      code: 'EEL3701',
      tech: 'VHDL',
      grade: 'A'
    }
  ]

  console.log($scope.courses);
}
