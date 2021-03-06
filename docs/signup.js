/**
 * Web application
 */
const apiUrl = 'https://04ff9d6e.eu-gb.apigw.appdomain.cloud/phoenix4ngoapp';

/*const bidDetails = {
  // retrieve the existing Admin Bid details entries
  get() {
    return $.ajax({
      type: 'GET',
      url: `${apiUrl}/adminbiddetailsread`,
      dataType: 'json'
    });
  },
  const signup={};
  console.log("signup");*/
  // add a single bid detail entry
  /*add(bidName,bidId,bidRegion,bidAmount) {
    
    return $.ajax({
      type: 'PUT',
      url: `${apiUrl}/adminbidentry`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        bidName,
		bidId,
		bidRegion,
		bidAmount,
      }),
      dataType: 'json',
    });
  }*/
  const signup={
  add(name,password,email) {
    
    return $.ajax({
      type: 'PUT',
      url: `${apiUrl}/ngosignup`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        name,
		password,
		email,		
      }),
      dataType: 'json',
    });
  }
};

(function() {
  
  /*Alok
  let entriesTemplate;

  function prepareTemplates() {
    entriesTemplate = Handlebars.compile($('#entries-template').html());
  }

  // retrieve entries and update the UI
  function loadEntries() {
    console.log('Loading entries...');
    $('#entries').html('Loading entries...');
    bidDetails.get().done(function(result) {
      if (!result.entries) {
        return;
      }

      const context = {
        entries: result.entries
      }
      $('#entries').html(entriesTemplate(context));
    }).error(function(error) {
      $('#entries').html('No entries');
      console.log(error);
    });
  }
 *///Alok

  // intercept the click on the submit button, add the bidDetails entry and
  // reload entries on success
 
  //Sign Up
  $(document).on('submit', '#signUp', function(e) {
    e.preventDefault();

    signup.add(
      $('#name').val().trim(),      
      $('#password').val().trim(),	 
	  $('#email').val().trim()
    ).done(function(result) {
      // reload entries
      //loadEntries();
    }).error(function(error) {
      console.log(error);
    });
  });
  
  //ALok ..TO Do
  //Sign In..Do Nothing
  $(document).on('submit', '#signIn', function(e) {
    e.preventDefault();
	//Do Nothing    
  }); 
  //ALok ..TO Do End
  
  
  /*Alok
  $(document).ready(function() { 
    prepareTemplates();
    loadEntries();
  }); *///Alok
})();
