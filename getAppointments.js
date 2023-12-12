document.addEventListener('DOMContentLoaded', async function () {
  const appointmentsList = document.getElementById('appointmentsList');

  try {
    const response = await fetch('http://localhost:3000/get-appointments');
    const appointments = await response.json();

    appointments.forEach(appointment => {
      const listItem = document.createElement('li');
      listItem.textContent = `Name: ${appointment.fullName}, Email: ${appointment.email}, Doctor: ${appointment.doctor}, Date: ${appointment.appointmentDate}`;
      appointmentsList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error retrieving appointments:', error);
  }
});
