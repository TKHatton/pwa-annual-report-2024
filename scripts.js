// Initialize tooltips for abbreviations
document.addEventListener('DOMContentLoaded', function() {
  // Initialize tooltips
  tippy('.abbreviation', {
    arrow: true,
    animation: 'fade',
    theme: 'light',
    placement: 'top'
  });

  // Initialize charts
  initCharts();
  
  // Setup contact form
  setupContactForm();
  
  // Setup scroll to top button
  setupScrollToTop();
});

// Initialize all charts
function initCharts() {
  // HOPWA Funding Chart
  const hopwaCtx = document.getElementById('hopwaChart').getContext('2d');
  const hopwaChart = new Chart(hopwaCtx, {
    type: 'pie',
    data: {
      labels: ['TBRA', 'STRMU', 'PHP', 'Supportive Services'],
      datasets: [{
        data: [200000, 150000, 50000, 94785.64],
        backgroundColor: [
          '#B30000',
          '#D60000',
          '#8A0000',
          '#FF5252'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: {
              size: 14
            },
            padding: 20
          }
        },
        title: {
          display: true,
          text: 'HOPWA Funding Distribution',
          font: {
            size: 18
          },
          padding: {
            bottom: 20
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed !== null) {
                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed);
              }
              return label;
            }
          }
        }
      }
    }
  });

  // Ryan White Chart
  const ryanWhiteCtx = document.getElementById('ryanWhiteChart').getContext('2d');
  const ryanWhiteChart = new Chart(ryanWhiteCtx, {
    type: 'doughnut',
    data: {
      labels: ['Medical Case Management', 'Emergency Financial Assistance', 'Housing Services', 'Administrative'],
      datasets: [{
        data: [106905.17, 47000, 30000, 76839.14],
        backgroundColor: [
          '#0056B3',
          '#0077CC',
          '#0099E6',
          '#66CCFF'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: {
              size: 14
            },
            padding: 20
          }
        },
        title: {
          display: true,
          text: 'Ryan White Funding Distribution',
          font: {
            size: 18
          },
          padding: {
            bottom: 20
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed !== null) {
                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed);
              }
              return label;
            }
          }
        }
      }
    }
  });

  // Comparison Chart
  const comparisonCtx = document.getElementById('comparisonChart').getContext('2d');
  const comparisonChart = new Chart(comparisonCtx, {
    type: 'bar',
    data: {
      labels: ['Client Services', 'Administrative'],
      datasets: [
        {
          label: 'HOPWA',
          data: [70, 30],
          backgroundColor: '#B30000',
        },
        {
          label: 'Ryan White',
          data: [41, 59],
          backgroundColor: '#0056B3',
        },
        {
          label: '2025 Goal (HOPWA)',
          data: [80, 20],
          backgroundColor: 'rgba(179, 0, 0, 0.5)',
          borderColor: '#B30000',
          borderWidth: 2,
          type: 'line',
        },
        {
          label: '2025 Goal (Ryan White)',
          data: [60, 40],
          backgroundColor: 'rgba(0, 86, 179, 0.5)',
          borderColor: '#0056B3',
          borderWidth: 2,
          type: 'line',
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: {
              size: 14
            },
            padding: 20,
            boxWidth: 15,
            boxHeight: 15
          }
        },
        title: {
          display: true,
          text: 'Funding Allocation Comparison (%)',
          font: {
            size: 18
          },
          padding: {
            bottom: 20
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: function(value) {
              return value + '%';
            },
            font: {
              size: 12
            }
          }
        },
        x: {
          ticks: {
            font: {
              size: 12
            }
          }
        }
      }
    }
  });

  // Achievements Chart
  const achievementsCtx = document.getElementById('achievementsChart').getContext('2d');
  const achievementsChart = new Chart(achievementsCtx, {
    type: 'radar',
    data: {
      labels: [
        'Client Satisfaction',
        'Service Delivery',
        'Community Engagement',
        'Financial Management',
        'Staff Development',
        'Program Effectiveness'
      ],
      datasets: [{
        label: '2023',
        data: [65, 70, 60, 75, 60, 65],
        fill: true,
        backgroundColor: 'rgba(0, 86, 179, 0.2)',
        borderColor: '#0056B3',
        pointBackgroundColor: '#0056B3',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#0056B3'
      }, {
        label: '2024',
        data: [75, 80, 70, 85, 75, 80],
        fill: true,
        backgroundColor: 'rgba(179, 0, 0, 0.2)',
        borderColor: '#B30000',
        pointBackgroundColor: '#B30000',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#B30000'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        line: {
          borderWidth: 3
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: {
              size: 14
            },
            padding: 20
          }
        },
        title: {
          display: true,
          text: 'Performance Metrics',
          font: {
            size: 18
          },
          padding: {
            bottom: 20
          }
        }
      }
    }
  });
}

// Setup contact form
function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // In a real implementation, you would send this data to a server
      // For this simplified version, we'll just show an alert
      alert(`Thank you for your message, ${name}! We will get back to you soon.`);
      
      // Reset the form
      contactForm.reset();
    });
  }
}

// Setup scroll to top button
function setupScrollToTop() {
  const scrollToTopButton = document.querySelector('.scroll-to-top');
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopButton.classList.add('visible');
    } else {
      scrollToTopButton.classList.remove('visible');
    }
  });
  
  // Smooth scroll to top when clicked
  scrollToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
