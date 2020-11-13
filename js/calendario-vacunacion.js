$(document).ready(function() {

    $('#calendar').fullCalendar({
     // defaultDate: '2020-01-01', // Muestra el calendario a partir de ese día
	  defaultDate: moment().format("YYYY-MM-DD"), //Arranca a partir del día actual
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Vacunacion Ebola',
            url:'enfermedades.html',
          start: '2020-11-13'
          
        },
		{
          title: 'Vacunacion Influenza',
		  url:'enfermedades.html',
          start: '2020-11-16',
          
          
        },
		{
          title: 'Vacunacion Sarampion',
		  url:'enfermedades.html',
          start: '2020-11-20',
          
        },
		{
          title: 'Vacunacion Coronavirus',
		  url:'enfermedades.html',
          start: '2020-11-25'
          
        }
      ]
    });

  });